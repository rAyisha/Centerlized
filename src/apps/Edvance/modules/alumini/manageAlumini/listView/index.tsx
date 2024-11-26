import "./index.scss";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { logData } from "../mock.data";
// import SvgSortIcon from "../../../../assets/icons/SvgSortIcon";
// import SvgSvgdotsfade from "../../../../assets/icons/SvgSvgdotsfade";
import { useNavigate } from "react-router-dom";
// import PaginatorTemplate from "../../../../components/PaginatorTemplate";
// import EmptyTableIcon from "../../../../components/EmptyTableIcon";
// import SvgAdd from "../../../../assets/icons/SvgAdd";
// import SvgEye from "../../../../assets/icons/SvgEye";
// import SvgEdit from "../../../../assets/icons/SvgEdit";
// import SvgDeleteIcon from "../../../../assets/icons/SvgDeleteIcon";
import { useSelector } from "react-redux";
import SvgSortIcon from "../../../../../../assets/svgIcon/SvgSortIcon";
import SvgAddIcon from "../../../../../../assets/svgIcon/SvgAddIcon";
import SvgEditIcon from "../../../../../../assets/svgIcon/SvgEditIcon";
import SvgDeleteIcon from "../../../../../../assets/svgIcon/SvgDeleteIcon";
import SvgEye from "../../../../../../assets/svgIcon/SvgEye";
import { logtableData } from "../../../academics/attendance/singleStudentAttendance/singleStudentAttendanceCalendar/mock";
import PaginatorTemplate from "../../../../components/PaginatorTemplate";
import EmptyTableIcon from "../../../../components/EmptyTableIcon";




const tabledata=[
  {
    "admissionNumber": "A001",
    "studentName": "John Doe",
    "gender": "Male",
    "classSection": "10-A",
    "currentEmail": "john.doe@example.com",
    "currentPhone": "123-456-7890"
  },
  {
    "admissionNumber": "A002",
    "studentName": "Jane Smith",
    "gender": "Female",
    "classSection": "9-B",
    "currentEmail": "jane.smith@example.com",
    "currentPhone": "234-567-8901"
  },
  {
    "admissionNumber": "A003",
    "studentName": "Robert Johnson",
    "gender": "Male",
    "classSection": "8-C",
    "currentEmail": "robert.johnson@example.com",
    "currentPhone": "345-678-9012"
  },
  {
    "admissionNumber": "A004",
    "studentName": "Emily Brown",
    "gender": "Female",
    "classSection": "11-A",
    "currentEmail": "emily.brown@example.com",
    "currentPhone": "456-789-0123"
  },
  {
    "admissionNumber": "A005",
    "studentName": "Michael Davis",
    "gender": "Male",
    "classSection": "12-B",
    "currentEmail": "michael.davis@example.com",
    "currentPhone": "567-890-1234"
  }
]


const ListView = ({ handleAddAction, tableData }) => {
  const navigate = useNavigate();

  // const {manageAluminiData,admissionNodData} = useSelector((state) => {
  //   return {
     
  //     manageAluminiData:state.alumniReducers?.manageAluminiData?.data?.alumni,
  //     admissionNodData:state.alumniReducers?.admissionNodData?.data?.alumni
  //   };
  // });
  // console.log(admissionNodData,"admissionNodData")


  const HeaderTemplate = ({ field }) => (
    <div className="column__header">
      {field}
      <SvgSortIcon />
    </div>
  );

  const HeaderActionTemplate = ({ field }) => (
    <div className="column__header">{field}</div>
  );
  const handleNavigation = () => {
    navigate("/studentsinformation/studentmaster/studentdetailsview");
  };
  const renderAction = (rowData) => {
    // console.log(rowData.currentPhone,rowData.currentEmail,"check")
    // if (!rowData.currentPhone || !rowData.currentEmail) {
    //   return (
    //     <div className="render__action">
    //       <div
    //         className="render__action__edit cursor-pointer"
    //         onClick={() => handleAddAction(rowData,"add")}
    //       >
    //         <SvgAddIcon />
    //       </div>
    //     </div>
    //   );
    // } else {
      return (
        <div className="flex gap-2">
          
          <div className="cursor-pointer" onClick={() => handleAddAction(rowData,"edit")}>
            <SvgEditIcon />
          </div>
          <div className="cursor-pointer" onClick={() => handleAddAction(rowData,"delete")}>
            <SvgDeleteIcon color="#292D32" />
          </div>
          <div className="cursor-pointer" onClick={() => handleAddAction(rowData,"view")}>
            <SvgEye />
          </div>
        </div>
      );
    // }
  };
  return (
    <div className="list_view_alumni_manage_container">
      <DataTable
        value={tabledata}
        removableSort
        paginator
        rows={5}
        paginatorTemplate={PaginatorTemplate}
        scrollHeight="40vh"
        scrollable
        emptyMessage={<EmptyTableIcon />}
      >
        <Column
          field="admissionNumber"
          sortable
          header={<HeaderTemplate field="Admission No" />}
        />
        <Column
          field="studentName"
          sortable
          header={<HeaderTemplate field="Student Name" />}
        />
        <Column
          field="gender"
          sortable
          header={<HeaderTemplate field="Gender" />}
        />
         <Column
          field="classSection"
          sortable
          header={<HeaderTemplate field="Class" />}
        />
        <Column
          field="currentEmail"
          sortable
          header={<HeaderTemplate field="Current Email" />}
        />
        <Column
          field="currentPhone"
          sortable
          header={<HeaderTemplate field="Current Phone" />}
        />

        <Column
          field=""
          sortable
          header={<HeaderActionTemplate field="Action" />}
          body={renderAction}
        />
      </DataTable>
    </div>
  );
};

export default ListView;
