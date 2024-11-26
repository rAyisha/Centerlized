import { TabView, TabPanel } from "primereact/tabview";
import "./index.scss";
import MessagesTab from "./MessagesTab";
import ClassTabScreen from "./ClassTabScreen";
import BirthDayWhish from "./BirthDayWhish";
import Individual from "./Individual";

const Tabs = ({ formik }: any) => {

  
  return (
    <div className="email__tab__container">
      <TabView>
        <TabPanel className="tab__header" header="Group">
          <MessagesTab formik={formik} />
        </TabPanel>
        <TabPanel className="tab__header" header="Individual">
          <Individual formik={formik} />
        </TabPanel>
        <TabPanel className="tab__header" header="Class">
          <ClassTabScreen formik={formik} />
        </TabPanel>
        <TabPanel className="tab__header" header="Today’s Birthday">
          <BirthDayWhish formik={formik} />
        </TabPanel>
      </TabView>
    </div>
  );
};

export default Tabs;
