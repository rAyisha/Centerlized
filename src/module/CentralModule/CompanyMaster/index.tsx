import DataTable from "../../../components/DataTable";
import "./index.scss";
import TableSearchHeader from "../../../components/TableSearchHeader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { useEffect, useState } from "preact/hooks";
import { deleteCompanyByIdMiddleWare, getAllCompanyMiddleWare } from "./store/companyMiddleware";
import SvgEye from "../../../assets/svgIcon/SvgEye";
import SvgEditIcon from "../../../assets/svgIcon/SvgEditIcon";
import SvgDeleteIcon from "../../../assets/svgIcon/SvgDeleteIcon";
import { DataTableStateEvent } from "primereact/datatable";
import ConfirmDeleteComponent from "../../../components/DeleteDialog";
import { useToast } from "../../../components/Toast";

const CompanyMaster = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const toast = useToast();
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [page, setPage] = useState<number>(0);
  const [rows, setRows] = useState<number>(5);
  const onPage = (event: DataTableStateEvent) => {
    setPage(event.page as number);
    setRows(event.rows);
  };
  const { company } = useSelector((state: any) => ({
    company: state.CompanyReducers.company?.data,
  }));


  const  handleView = (rowData: any) => {
    navigate(`/companymasterform/view/${rowData?.id}`)
  }

  const handleEdit = (rowData: any) => {
    navigate(`/companymasterform/edit/${rowData?.id}`)
  }


  const handleDelete = async (rowData: any) => {
    try {
      const res = await dispatch(deleteCompanyByIdMiddleWare({ id: rowData }));
      if (res.payload.message === "Data Deleted Successfully") {
        toast.success("Successfully Deleted");
        dispatch(getAllCompanyMiddleWare());
        setDeleteId(null);
      }
    } catch (error) {
      toast.error("Failed to delete. Please try again.");
      console.error("Error during deletion:", error);
    }
  };

  const accept = () => {
    handleDelete(deleteId)
  }

  const reject = () => {
    setDeleteId(null)
  }
  const actionTemplate = (rowData: any) => (
    <div className="flex justify-content-center">
      <span className="table__arrow__icon flex gap-2">
        <div onClick={() => handleView(rowData)}>
          <SvgEye />
        </div>
        <div onClick={() => handleEdit(rowData)}>
          <SvgEditIcon />
        </div>
        <div onClick={() => setDeleteId(rowData?.id)}>
          <SvgDeleteIcon />
        </div>
      </span>
    </div>
  );

  const columns = [
    {
      header: "S.No.",
      body: (_: any, column: any) => column.rowIndex + 1,
    },
    {
      field: "code",
      header: "Code",
    },
    {
      field: "name",
      header: "Name",
    },
    {
      field: "email",
      header: "Email",
    },
    {
      field: "phoneNumber",
      header: "Phone Number",
    },
    {
      header: "Action",
      body: actionTemplate,
    },
  ];
  const onButtonClick = () => {
    navigate("/companymasterform/add");
  };

  useEffect(() => {
    dispatch(getAllCompanyMiddleWare());
  }, []);

  return (
    <div>
      <TableSearchHeader
        title="Company List"
        onButtonClick={onButtonClick}
        addButton={true}
      />
      <DataTable value={company || []}
        columns={columns} paginator
        first={page * rows}
        rows={rows}
        totalRecords={Array.isArray(company) ? company?.length : 0}
        onPage={onPage}
        lazy={false} />
      <ConfirmDeleteComponent
        visible={deleteId ? true : false}
        onHide={() => setDeleteId(null)}
        message="Are you sure you want to delete?"
        accept={accept}
        reject={reject} />
    </div>
  );
};

export default CompanyMaster;
