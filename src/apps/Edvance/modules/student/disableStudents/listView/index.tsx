import { FunctionalComponent } from "preact";
import DataTable, { DataTableStateEvent } from "../../../../../../components/DataTable";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SvgEye from "../../../../../../assets/svgIcon/SvgEye";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import { setLimit, setPage } from "../../store/studentReducer";

const ListView: FunctionalComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { studentList, totalRecords, page, limit } = useSelector((state: RootState) => {
    return {
      studentList: state.edvanceReducers.studentReducers.studentData.studentList,
      totalRecords: state.edvanceReducers.studentReducers.studentData.pagination.total,
      page: state.edvanceReducers.studentReducers.page,
      limit: state.edvanceReducers.studentReducers.limit,
    };
  });

  const handleAction = (rowData: any) => {
    return (
      <div className="action_spliticon">
        <div onClick={() => handleViewStudent(rowData)}>
          <SvgEye />
        </div>
      </div>
    );
  };

  const columns = [
    {
      field: "admissionNumber",
      header: "Admission Number",
    },
    {
      field: "firstName",
      header: "Student Name",
    },
    {
      field: "rollNumber",
      header: "Roll Number",
    },
    {
      field: "className",
      header: "class"
    },
    {
      field: "sectionName",
      header: "section"
    },
    {
      field: "disableReason",
      header: "Disable Reason"
    },
    {
      field: "mobileNumber",
      header: "Mobile Number"
    },
    {
      header: "Action",
      sortable: false,
      body: handleAction
    },
  ]

  const handleViewStudent = async (rowData: any) => {
    const id = rowData?.id;
    if (id) {
      navigate(`/edvance/students/disabledstudentdetail/${id}`)
    }
  };

  const onPage = (e: DataTableStateEvent) => {
    dispatch(setLimit(e.rows));
    dispatch(setPage(e.page));
  };

  return (
    <div className="list__view__profile__details">
      <DataTable
        value={studentList}
        columns={columns}
        paginator
        first={page * limit}
        rows={limit}
        onPage={onPage}
        totalRecords={totalRecords}
        lazy
      />
    </div>
  );
};

export default ListView;
