
import { useState } from "preact/hooks";
import { useDispatch } from "react-redux";
import SvgEye from "../../../../../../../assets/svgIcon/SvgEye";
import DataTable from "../../../../../../../components/DataTable";
import EmptyTableIcon from "../../../../../components/EmptyTableIcon";

interface CloseHomeWorkTableProps {
  tablevisible: any[]; // Adjust type based on your data structure
}

const CloseHomeWorkTable: React.FC<CloseHomeWorkTableProps> = ({ tablevisible }) => {
  const [addvisible, setAddvisible] = useState(false);
  const [addposition, setAddPosition] = useState("top-right");
  const dispatch = useDispatch();

  const handleClick = async (id: string) => {
    // try {
    //   const bodyData = id;
    //   const res = await dispatch(getStudentHomeworkListMiddleware(bodyData));
    //   if (res.meta.requestStatus === "fulfilled") {
    //     console.log(res, "find api success");
    //     setAddvisible(true);
    //   } else {
    //     console.error("find api failed:", res?.payload?.response);
    //   }
    // } catch (error) {
    //   console.error("An error occurred:", error?.message);
    // }
  };

  const renderAction = (rowData: any) => (
    <div onClick={() => handleClick(rowData?.subjectId)}>
      <SvgEye />
    </div>
  );

  const columns = [
    {
      field: "Class",
      header: "Class",
      sortable: true,
    },
    {
      field: "Section",
      header: "Section",
      sortable: true,
    },
    {
      field: "SubjectGroup",
      header: "Subject Group",
      sortable: true,
    },
    {
      field: "Subject",
      header: "Subject",
      sortable: true,
    },
    {
      field: "Title",
      header: "Title",
      sortable: true,
    },
    {
      field: "HomeworkDate",
      header: "Homework Date",
      sortable: true,
    },
    {
      field: "SubmissionDate",
      header: "Submission Date",
      sortable: true,
    },
    {
      field: "CreatedBy",
      header: "Created By",
      sortable: true,
    },
    {
      header: "Action",
      body: renderAction,
    },
  ];

  return (
    <div className="upcoming__home__work__table">
      <DataTable
        value={Array.isArray(tablevisible) ? tablevisible : []}
        columns={columns}
        paginator
        rows={10}
        // paginatorTemplate={PaginatorTemplate}
        // emptyMessage={<EmptyTableIcon />}
      />
      {/* <ImportDatasDialog
        width="65vw"
        header="Student List"
        setVisible={setAddvisible}
        visible={addvisible}
        setPosition={setAddPosition}
        position={addposition}
      >
        <ViewUpcomingHomeWork />
      </ImportDatasDialog> */}
    </div>
  );
};

export default CloseHomeWorkTable;
