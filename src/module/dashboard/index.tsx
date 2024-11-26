import TimeSheet from "./charts/TimeSheet";
import { TabView, TabPanel } from "primereact/tabview";
import "./index.scss";
const Dashboard = () => {
  return (
    <div className="dashboard__layout">
      <div className="dashboard__layout__header">
        <div className="header__area">
          <div className="header__caption">Dashboard</div>
          <div className="user__caption">Hi John, welcome to your page</div>
        </div>
        <div>
          <TabView>
            <TabPanel header="Timesheet">
              <TimeSheet />
            </TabPanel>
            <TabPanel header="Ed Attendance">
              <TimeSheet />
            </TabPanel>
            <TabPanel header="Appointments">
              <TimeSheet />
            </TabPanel>
            <TabPanel header="Secure Park">
              <TimeSheet />
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
