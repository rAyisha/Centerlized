import { FunctionalComponent, h } from "preact";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import SvgEye from "../../../../../../assets/svgIcon/SvgEye";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import DataTable from "../../../../../../components/DataTable";
import { DataTableStateEvent } from "primereact/datatable";
import { setLimit, setPage } from "../../store/staffReducer";

const ListView: FunctionalComponent = () => {

  const dispatch = useDispatch<AppDispatch>()

  const { staffs, page, rows, totalRecords } = useSelector((state: RootState) => {
    return {
      staffs: state.edvanceReducers.staffReducers.disabledStaffData.staffs,
      totalRecords: state.edvanceReducers.staffReducers.disabledStaffData.pagination.total,
      page: state.edvanceReducers.staffReducers.page,
      rows: state.edvanceReducers.staffReducers.limit,
    }
  })
  const onPage = (e: DataTableStateEvent) => {
    dispatch(setPage(e.page));
    dispatch(setLimit(e.page));
  };

  const handleViewStudent = async (rowData: any) => {
    //   const id = rowData?.id;
    //   try {
    //     const res = await dispatch(getSingleStudentMiddleware(id));

    //     if (res.meta.requestStatus === "fulfilled") {
    //       navigate( "/edvance/students/disablestudents/studentDetail");
    //     } else {
    //       console.error("find api failed:", res?.payload?.response);
    //     }
    //   } catch (error: any) {
    //     console?.error("find An error occurred:", error.message);
    //   }
  };

  const actionTemplate = (rowData: any) => (
    <div className="flex justify-content-center">
      <span className="table__arrow__icon flex gap-2">
        <div onClick={() => handleViewStudent(rowData)}>
          <SvgEye />
        </div>
      </span>
    </div>
  );

  const columns = [
    { field: "staffId", header: "Staff ID" },
    { field: "staffType", header: "Staff Type" },
    { field: "firstName", header: "Name" },
    {
      field: "MS_DepartmentTypeMaster.type",
      header: "Department",
      body: (rowData: any) => (
        <div>{rowData.MS_DepartmentTypeMaster?.type}</div>
      ),
    },
    {
      field: "MS_DesignationTypeMaster.type",
      header: "Designation",
      body: (rowData: any) => (
        <div>{rowData.MS_DesignationTypeMaster?.type}</div>
      ),
    },
    { field: "phoneNo", header: "Disable Reason" },
    { header: "Action", body: actionTemplate },
  ];

  return (
    <div className="list__view">
      <DataTable
        value={staffs}
        columns={columns}
        paginator
        first={page * rows}
        rows={rows}
        totalRecords={totalRecords}
        onPage={onPage}
      />
    </div>
  );
};

export default ListView;
