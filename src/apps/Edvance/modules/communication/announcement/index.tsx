import { useEffect, useState } from "preact/hooks";
import { Button } from "primereact/button";
import Listview from "./listView";
import "./index.scss";
import Sider from "../../../components/Sider";
import ExportButton from "../../../components/ExportButton";
import Message from "./messages";
import { useDispatch, useSelector } from "react-redux";
import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";
import TabHeader from "./tabHeader";

const Announcement = () => {
  const dispatch = useDispatch();
  const [addPopup, setAddPopup] = useState(false);

  return (
    <div className="overall__announcement_module">
      <TabHeader setAddPopup={setAddPopup} />

      <Listview />

      <Sider
        setVisible={setAddPopup}
        visible={addPopup}
        width="45vw"
        header="Compose New Message">
        <Message setPopup={setAddPopup} />
      </Sider>
    </div>
  );
};

export default Announcement;
