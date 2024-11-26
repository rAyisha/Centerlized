import { TabView, TabPanel } from "primereact/tabview";
import "./index.scss";
import StudentProfileTab from "../studentProfileTab";
import StudentExamTab from "./StudentExamTab";
import StudentAttendance from "../studentAttendance";
import StudentDocumentTab from "../studentDocumentTab";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../redux/store";
import { StudentFormData } from "../../store/student.Types";
import { FunctionalComponent } from "preact";

interface Props {
  studentData: StudentFormData
}

const StudentTabs: FunctionalComponent<Props> = ({ studentData }) => {

  return (
    <div className="disable__student__tab__container">
      <TabView>
        <TabPanel className="tab__header" header="Profile">
          <StudentProfileTab studentData={studentData} />
        </TabPanel>
        {/* <TabPanel className="tab__header" header="Fees">
          <StudentFeesTab getDisablesingleData={getDisablesingleData} />
        </TabPanel> */}
        <TabPanel className="tab__header" header="Exam">
          <StudentExamTab />
        </TabPanel>
        <TabPanel className="tab__header" header="Attendance">
          <StudentAttendance />
        </TabPanel>
        <TabPanel className="tab__header" header="Document">
          <StudentDocumentTab />
        </TabPanel>
        <TabPanel className="tab__header" header="TransPort">
          {/* <StudentDocumentTab getDisablesingleData={getDisablesingleData} /> */}
        </TabPanel>
      </TabView>
    </div>
  );
};

export default StudentTabs;
