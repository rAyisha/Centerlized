import { FunctionalComponent } from "preact";
import SvgEye from "../../../../../../assets/svgIcon/SvgEye";
import SvgSortIcon from "../../../../../../assets/svgIcon/SvgSortIcon";
import DataTable from "../../../../../../components/DataTable";
import EmptyTableIcon from "../../../../components/EmptyTableIcon";
import { useState } from "preact/hooks";
import Sider from "../../../../components/Sider";
import ViewUpcomingHomeWork from "./ViewUpcommingHomeWork";
import InputField from "../../../../../../components/InputField";
import ExportButton from "../../../../components/ExportButton";
import SvgAddIcon from "../../../../../../assets/svgIcon/SvgAddIcon";
import Button from "../../../../../../components/Button";

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

const UpcomingHomeWorkTable = ({ tablevisible, formik }: any) => {
  const [addvisible, setAddvisible] = useState(false);
  const [addposition, setAddPosition] = useState("top-right");

  const handleClick = async (id: string) => {
    setAddvisible(true);
  };

  const renderAction = (rowData: any) => (
    <div
      onClick={() => handleClick(rowData?.subjectId)}
      className="hover_cursor"
    >
      <SvgEye />
    </div>
  );

  const HeaderTemplate = ({ field }: { field: string }) => (
    <div className="column__header">
      {field}
      <SvgSortIcon />
    </div>
  );

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
    { field: "Title", header: "Title" },
    { field: "HomeworkDate", header: "Homework Date" },
    { field: "SubmissionDate", header: "Submission Date" },
    { field: "CreatedBy", header: "Created By" },
    { header: "Role" },
    { header: "Action", body: actionTemplate },
  ];

  return (
    <div className="upcoming__home__work__table grid" style={{ width: "100%" }}>
      <div className="tab__header col-6 ">
        <div className="tab__header__search">
          <div className="p-input-icon-left w-full">
            <i className="pi pi-search" />
            <InputField
              placeholder="Search"
              value={formik.values.search}
              onChange={formik.handleChange("search")}
            />
          </div>
        </div>
      </div>
      {/* apply leave/ */}
      <div className="col-12 md:col-6 lg:col-6 apply__leave__add__export__btn">
        <div className="btn__container">
          <ExportButton />
          {/* <div className="btn__add">
            <Button
              label="Apply Leave"
              icon={<SvgAddIcon color="var(--base-text-inactive-color)" />}
              // onClick={() => handleNewAdmission("add")}
              iconPos="left"
              className="export__butt__overall"
            />
          </div> */}
        </div>
      </div>
      <div className="col-12">
        <DataTable
          value={DataValue}
          columns={columns}
          paginator
          rows={10}
          totalRecords={DataValue.length}
          lazy={false}
        />
      </div>

      <Sider
        header="Student List"
        setVisible={setAddvisible}
        visible={addvisible}
        children={
          <ViewUpcomingHomeWork
            addvisible={addvisible}
            setAddvisible={setAddvisible}
          />
        }
      />
    </div>
  );
};

export default UpcomingHomeWorkTable;
