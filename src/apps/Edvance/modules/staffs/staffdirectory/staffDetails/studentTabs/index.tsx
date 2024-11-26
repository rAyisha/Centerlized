import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "./index.scss";
import StaffProfileTab from "../StaffProfileTab";
import StaffPayroll from "../StaffPayroll";
import StaffLeave from "../StaffLeave";
import StaffDocumentTab from "../StaffDocumentTab";
import PerformanceStaff from "../PerformanceStaff";
import StaffAttendance from "../StaffAttendance";


// Define the type for the getallteacherbyid prop
interface StaffDetails {
  id: string;
  staffPictureUrl: string;
  firstName: string;
  lastName: string;
  staffId: string;
  MS_Role: {
    name: string;
  };
  MS_DesignationTypeMaster: {
    type: string;
  };
  MS_DepartmentTypeMaster: {
    type: string;
  };
  status: boolean;
}

interface StudentTabsProps {
  getallteacherbyid: StaffDetails;
}

const StudentTabs: React.FC<StudentTabsProps> = ({ getallteacherbyid }) => {
  return (
    <div className="staff__tab__container">
      <TabView>
        <TabPanel className="tab__header" header="Profile">
          <StaffProfileTab getallteacherbyid={getallteacherbyid} />
        </TabPanel>
        <TabPanel className="tab__header" header="Payroll">
          <StaffPayroll />
        </TabPanel>
        <TabPanel className="tab__header" header="Leaves">
          <StaffLeave getallteacherbyid={getallteacherbyid} />
        </TabPanel>
        <TabPanel className="tab__header" header="Attendance">
          <StaffAttendance />
        </TabPanel>
        <TabPanel className="tab__header" header="Document">
          <StaffDocumentTab getallteacherbyid={getallteacherbyid} />
        </TabPanel>
        <TabPanel className="tab__header" header="Performance">
          <PerformanceStaff getallteacherbyid={getallteacherbyid} />
        </TabPanel>
      </TabView>
    </div>
  );
};

export default StudentTabs;
