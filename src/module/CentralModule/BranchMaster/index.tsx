import DataTable from "../../../components/DataTable";
import "./index.scss";
import TableSearchHeader from "../../../components/TableSearchHeader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { useEffect, useState } from "preact/hooks";
import { deleteBranchByIdMiddleWare, getAllBranchMiddleWare } from "./store/branchMiddleware";
import SvgEye from "../../../assets/svgIcon/SvgEye";
import SvgEditIcon from "../../../assets/svgIcon/SvgEditIcon";
import SvgDeleteIcon from "../../../assets/svgIcon/SvgDeleteIcon";
import { DataTableStateEvent } from "primereact/datatable";
import ConfirmDeleteComponent from "../../../components/DeleteDialog";
import { useToast } from "../../../components/Toast";

const BranchMaster = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const toast=useToast();
  const { branch } = useSelector((state: any) => ({
    branch: state.BranchReducers.Branch?.data,
  }));
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [page, setPage] = useState<number>(0);
  const [rows, setRows] = useState<number>(5);
  const onPage = (event: DataTableStateEvent) => {
    setPage(event.page as number);
    setRows(event.rows);
  };
  const handleView = (data: any) => {
    navigate(`/branchmasterform/view/${data.id}`)
  }
  const handleEdit = (data: any) => {
    navigate(`/branchmasterform/edit/${data.id}`)
  }

  const handleDelete = async (data: any) => {
    try {
      const res = await dispatch(deleteBranchByIdMiddleWare({ id: data }));
      if (res?.payload?.message === "Data Deleted Successfully") {
        toast.success("Successfully Deleted");
        dispatch(getAllBranchMiddleWare());
        setDeleteId(null);
      } else {
        toast.error("Failed to delete the data");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the data");
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
    navigate("/branchmasterform/add");
  };

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        await dispatch(getAllBranchMiddleWare());
      } catch (error) {
        toast.error("An error occurred while fetching branch data");
      }
    };
    fetchBranches(); 
  }, []);

  return (
    <div>
      <TableSearchHeader
        title="Branch List"
        onButtonClick={onButtonClick}
        addButton={true}
      />
      <DataTable
        value={branch || []}
        columns={columns} paginator
        first={page * rows}
        rows={rows}
        totalRecords={Array.isArray(branch) ? branch?.length : 0}
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

export default BranchMaster;
