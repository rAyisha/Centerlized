import { useEffect, useState } from "preact/hooks";
import DataTable from "../../../components/DataTable";
import { DataTableStateEvent } from "primereact/datatable";
import "./index.scss";
// import { userAccessData } from "./mock";
// import SvgAddIcon from "../../../assets/svgIcon/SvgAddIcon";
import SvgEditIcon from "../../../assets/svgIcon/SvgEditIcon";
import SvgDeleteIcon from "../../../assets/svgIcon/SvgDeleteIcon";
import SvgEye from "../../../assets/svgIcon/SvgEye";
import TableSearchHeader from "../../../components/TableSearchHeader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { deleteUsersMasterMiddleWare, getAllUserAccessMiddleware } from "./store/userAccessMiddleware";
import ApiLoader from "../../../components/ApiLoader";
import ConfirmDeleteComponent from "../../../components/DeleteDialog";
import { useToast } from "../../../components/Toast";
type StateType = {
  stateCode: string;
  stateName: string;
  stateDescription: string;
  countryId: string;
  stateStatus: string;
  stateId?: number;
  id?: number;
};
interface TableFileds {
  id?: number;
  name?: string;
  workEmail?: string;
  title?: string;
}
const UserAccessControl = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const toast = useToast();
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const { isLoading, companyID, userAccessData, branchID } = useSelector((state: any) => ({
    isLoading: state.userAccessReducers.isLoading,
    userAccessData: state.userAccessReducers.userAccess,
    companyID: state.dropdownDataReducers.companyID,
    branchID: state.dropdownDataReducers.branchID,
  }));
  const [page, setPage] = useState<number>(0);
  const [rows, setRows] = useState<number>(5);
  const onPage = (event: DataTableStateEvent) => {
    setPage(event.page as number);
    setRows(event.rows);
  };
  const actionTemplate = (rowData: StateType) => (
    <div className="flex justify-content-center">
      <span className="table__arrow__icon flex gap-2">
        <div onClick={() => navigate(`/useraccesscontrol/permissions/view/${rowData?.id}`)}>
          <SvgEye />
        </div>
        <div onClick={() => navigate(`/useraccesscontrol/edit/${rowData?.id}`)}>
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
      field: "Name",
      header: "Name",
    },
    {
      field: "workEmail",
      header: "Work Email",
    },
    {
      field: "departmentName",
      header: "Department",
    },
    {
      header: "Action",
      body: actionTemplate,
    },
  ];

  const fetchTableData = () => {
    const headers = {
      "company-id": companyID,
      "branch-id": branchID,
    }
    dispatch(getAllUserAccessMiddleware({ headers }))
  }
  const onButtonClick = () => {
    navigate(`/useraccesscontrol/add`);
  };
  const accept = () => {
    dispatch(deleteUsersMasterMiddleWare({
      id: deleteId,
    })).then((res) => {
      if (res?.meta?.requestStatus === "fulfilled") {
        toast.success("Successfully Deleted");
        fetchTableData();
        setDeleteId(null)
      } else if (res?.meta?.requestStatus === "rejected") {
        if (typeof (res?.payload?.response?.data?.errorDescription) === "string")
          toast.error(res?.payload?.response?.data?.errorDescription);
      }
    })
  }

  const reject = () => {
    setDeleteId(null)
  }
  useEffect(() => {
    if (branchID) {
      fetchTableData();
    }
  }, [branchID]);
  if (isLoading) {
    return <ApiLoader />;
  }
  return (
    <div>
      <TableSearchHeader
        title="Employee List"
        onButtonClick={onButtonClick}
        addButton={true}
      />
      <DataTable
        value={Array.isArray(userAccessData) ? userAccessData : []}
        columns={columns}
        paginator
        first={page * rows}
        rows={rows}
        totalRecords={Array.isArray(userAccessData) ? userAccessData?.length : 0}
        onPage={onPage}
        lazy={false}
      // dataKey="id"
      />
      <ConfirmDeleteComponent
        visible={deleteId ? true : false}
        onHide={() => setDeleteId(null)}
        message="Are you sure you want to delete?"
        accept={accept}
        reject={reject} />
    </div>
  );
};

export default UserAccessControl;
