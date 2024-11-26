import { Column } from "primereact/column";
// import { DataTable } from "primereact/datatable";
import React from "react";
import { Image } from "primereact/image";
import EmptyTableIcon from "../../../../../components/EmptyTableIcon";
import DataTable from "../../../../../../../components/DataTable";
import SvgEye from "../../../../../../../assets/svgIcon/SvgEye";

interface StudentData {
  admissionNumber: string;
  firstName: string;
  lastName: string;
  rollNumber: string;
}

interface ViewUpcomingHomeWorkTableProps {
  homeworkdata: StudentData[];
}

const ViewUpcomingHomeWorkTable = ({
  homeworkdata,
}: any) => {
  const HeaderTemplate = ({ field }: { field: string }) => (
    <div className="column__header">{field}</div>
  );

  const renderName = (rowData: StudentData) => {
    return (
      <div className="name">
        <Image
          src="https://i.ibb.co/tBg7hjH/Mask-group-1.png"
          alt="Student Avatar"
          width="30"
          height="30"
        />
        {rowData?.firstName}&nbsp;{rowData?.lastName}&nbsp;
      </div>
    );
  };
  const DataValue = [
    {
      id: 1,
      Title: "Math Homework",
      HomeworkDate: "2024-10-10",
      SubmissionDate: "2024-10-17",
      CreatedBy: "John Doe",
      Role: "Teacher",
      subjectId: "math101",
    },
    {
      id: 2,
      Title: "Science Project",
      HomeworkDate: "2024-10-12",
      SubmissionDate: "2024-10-19",
      CreatedBy: "Jane Smith",
      Role: "Teacher",
      subjectId: "science202",
    },
    {
      id: 3,
      Title: "History Essay",
      HomeworkDate: "2024-10-15",
      SubmissionDate: "2024-10-22",
      CreatedBy: "Emily Johnson",
      Role: "Teacher",
      subjectId: "history303",
    },
    {
      id: 4,
      Title: "English Literature Review",
      HomeworkDate: "2024-10-16",
      SubmissionDate: "2024-10-23",
      CreatedBy: "Michael Brown",
      Role: "Teacher",
      subjectId: "english404",
    },
    {
      id: 5,
      Title: "Art Assignment",
      HomeworkDate: "2024-10-18",
      SubmissionDate: "2024-10-25",
      CreatedBy: "Sarah Wilson",
      Role: "Teacher",
      subjectId: "art505",
    },
  ];
  const handleClick = (rowData: any) => {};
  const actionTemplate = (rowData: any) => (
    <div className="flex justify-content-center">
      <span className="table__arrow__icon flex gap-2">
        <div onClick={() => handleClick(rowData)}>
          <SvgEye />
        </div>
      </span>
    </div>
  );
  const columns = [
    { field: "Title", header: "Admission No" },
    { field: "HomeworkDate", header: "Student Name" },
    { field: "SubmissionDate", header: "Roll No" },
    // { field: "CreatedBy", header: "Created By" },
    // { header: "Role" },
    // { header: "Action", body: actionTemplate },
  ];

  return (
    <DataTable
      value={DataValue}
      columns={columns}
      paginator
      rows={10}
      totalRecords={DataValue.length}
      lazy={false}
    />
    // <DataTable
    //   value={homeworkdata}
    //   removableSort
    //   emptyMessage={<EmptyTableIcon />}
    // >
    //   <Column
    //     field="admissionNumber"
    //     sortable
    //     header={<HeaderTemplate field="Admission No" />}
    //   />
    //   <Column
    //     body={renderName}
    //     sortable
    //     header={<HeaderTemplate field="Student Name" />}
    //   />
    //   <Column
    //     field="rollNumber"
    //     sortable
    //     header={<HeaderTemplate field="Roll No" />}
    //   />
    // </DataTable>
  );
};

export default ViewUpcomingHomeWorkTable;
