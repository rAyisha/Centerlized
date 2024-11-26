import { FunctionalComponent } from "preact";
import { Dispatch, SetStateAction } from "preact/compat";
import DataTable, { DataTableStateEvent } from "../../../../../../components/DataTable";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import { setLimit, setPage } from "../../store/studentReducer";

interface Props {
  setDeleteId: Dispatch<SetStateAction<number>>
}

const ListView: FunctionalComponent<Props> = ({ setDeleteId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { moduleAccess, studentList, totalRecords, page, limit, showInactiveStudents } = useSelector((state: RootState) => {
    return {
      moduleAccess: state.sideBarReducers.moduleAccess,
      studentList: state.edvanceReducers.studentReducers.studentData.studentList,
      totalRecords: state.edvanceReducers.studentReducers.studentData.pagination.total,
      page: state.edvanceReducers.studentReducers.page,
      limit: state.edvanceReducers.studentReducers.limit,
      showInactiveStudents: state.edvanceReducers.studentReducers.showInactiveStudents
    };
  });

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
    showInactiveStudents ? {
      field: "disableReason",
      header: "Disable Reason"
    } : null,
    {
      field: "mobileNumber",
      header: "Mobile Number"
    },
  ]
  const handleEdit = async (rowData: any) => {
    const id = rowData?.id;
    if (id) {
      navigate(`/edvance/students/editstudent/${id}`);
    }
  };
  const handleView = async (rowData: any) => {
    const id = rowData?.id;
    if (id) {
      navigate(`/edvance/students/studentdetail/${id}`)
    }
  };

  const handleDelete = (rowData: any) => {
    setDeleteId(rowData.id)
  }

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
        scrollable
        onPage={onPage}
        totalRecords={totalRecords}
        lazy
        showActions
        viewAccess={moduleAccess.view}
        editAccess={moduleAccess.update}
        deleteAccess={moduleAccess.delete}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>
  );
};

export default ListView;
