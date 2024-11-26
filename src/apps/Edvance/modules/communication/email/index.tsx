import { useState } from "preact/hooks";
import "./index.scss";
import DataTable from "../../../../../components/DataTable";
import TabHeader from "./tabHeader";
import Sider from "../../../components/Sider";
import AddModal from "./addModal";
import { tableData } from "./mock";
import CheckBox from "../../../../../components/CheckBox";

const Email = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const columns = [
    {
      field: "title",
      header: "Title"
    },
    {
      field: "description",
      header: "Description"
    },
    {
      field: "date",
      header: "Date"
    },
    {
      field: "date",
      header: "Schedule Date"
    },
    {
      field: "group",
      header: "Group",
      body: () => <CheckBox />
    },
    {
      field: "individual",
      header: "Individual"
    },
    {
      field: "class",
      header: "Class"
    },
  ]

  return (
    <div className="overall_email_container">
      <TabHeader setModalVisible={setModalVisible}/>
      <DataTable value={tableData} columns={columns} paginator />
      <Sider
        header="Send Email"
        visible={modalVisible}
        setVisible={setModalVisible}
        position="top-right"
      >
        <AddModal />
      </Sider>
    </div>
  );
};

export default Email;
