import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getEditDataStaffDirectoryMiddleware } from "../store/staffDirectoryMiddleware";
import SvgEye from "../../../../../../assets/svgIcon/SvgEye";
import SvgEditIcon from "../../../../../../assets/svgIcon/SvgEditIcon";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import DataTable from "../../../../../../components/DataTable";
import { setLimit, setPage } from "../../store/staffReducer";
import { DataTableStateEvent } from "primereact/datatable";
import StaffDetails from "../staffDetails";

const ListView = () => {
  const { page, limit, totalRecords, staffsData } = useSelector(
    (state: RootState) => ({
      staffsData: state.edvanceReducers.staffReducers.staffData.staffs,
      totalRecords:
        state.edvanceReducers.staffReducers.staffData?.pagination?.total,
      page: state.edvanceReducers.staffReducers.page,
      limit: state.edvanceReducers.staffReducers.limit,
    })
  );

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleEdit = (rowData: any) => {
    dispatch(getEditDataStaffDirectoryMiddleware(rowData));
  };
  const handleViewStudent = (rowData: any, action: any) => {
    navigate(`/edvance/staffs/staffsdirectory/${action}/${rowData?.id}`, {
      state: { rowData },
    });
  };
  const handleEditStudent = (rowData: any, action: any) => {
    handleEdit(rowData);
    navigate(`/edvance/staffs/staffsdirectory/${action}/${rowData?.id}`, {
      state: { rowData },
    });
  };
  const onPage = (e: DataTableStateEvent) => {
    dispatch(setLimit(e.rows));
    dispatch(setPage(e.page));
  };
  const actionTemplate = (rowData: any) => (
    <div className="flex justify-content-center">
      <span className="table__arrow__icon flex gap-2">
        <div onClick={() => handleViewStudent(rowData, "view")}>
          <SvgEye />
        </div>
        <div onClick={() => handleEditStudent(rowData, "edit")}>
          <SvgEditIcon />
        </div>
      </span>
    </div>
  );

  const columns = [
    {
      field: "id",
      header: "Staff ID",
    },
    {
      field: "staffTypeName",
      header: "Staff Type",
    },
    {
      field: "firstName",
      header: "Name",
    },
    {
      field: "departmentName",
      header: "Department",
    },
    {
      field: "designationName",
      header: "Designation",
    },
    {
      field: "phoneNo",
      header: "Mobile Number",
    },
    {
      header: "Action",
      body: actionTemplate,
    },
  ];
  return (
    <div className="list__view">
      <DataTable
        value={staffsData}
        columns={columns}
        paginator
        first={page * limit}
        rows={limit}
        totalRecords={totalRecords}
        onPage={onPage}
      />
    </div>
  );
};

export default ListView;
