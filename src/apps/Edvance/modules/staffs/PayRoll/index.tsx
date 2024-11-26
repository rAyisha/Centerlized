import React from "preact";
import { useState } from "preact/hooks";
import TabHeader from "./TabHeader";
import ListView from "./ListView";
import { data } from "../applyLeaveStaff/ListView/data";
import ProceedPay from "./ProcedPay";
import Sider from "../../../components/Sider";
import GeneratePayroll from "./GeneratePayRoll";
import ViewPayroll from "./ViewPayRoll";

// Define props for your components if necessary
// Example:
// interface ListViewProps {
//   onButtonClick: (status: string) => void;
//   handleEditAction: () => void;
// }

const Payroll = () => {
  const [visible, setVisible] = useState(false);
  const [action, setAction] = useState("add");
  const [viewType, setViewType] = useState<string>("card");
  const [openProceedPay, setOpenProceedPay] = useState<boolean>(false);
  const [openGeneratePayroll, setOpenGeneratePayroll] =
    useState<boolean>(false);
  const [openViewPayroll, setOpenViewPayroll] = useState<boolean>(false);
  const [actionName, setActionName] = useState<string | null>(null);

  const onButtonClick = (status: string) => {
    if (status === "paid") {
      setOpenProceedPay(true);
    } else if (status === "generate") {
      setOpenGeneratePayroll(true);
      setActionName("add");
    } else {
      setOpenViewPayroll(true);
    }
  };

  const handleEditAction = () => {
    setOpenGeneratePayroll(true);
    setActionName("edit");
  };

  return (
    <div className="student__details__directory">
      <TabHeader viewType={viewType} setViewType={setViewType} />
      <div className="mt-5">
        <ListView
          data={data}
          setAction={setAction}
          setVisible={setVisible}
          onButtonClick={onButtonClick}
          handleEditAction={handleEditAction}
        />
      </div>
      <Sider
        header="Proceed to Pay"
        setVisible={setOpenProceedPay}
        visible={openProceedPay}
        children={<ProceedPay setVisible={setOpenProceedPay} />}
      />
      <Sider
        header={actionName === "edit" ? "Edit Payroll" : "Generate Payroll"}
        setVisible={setOpenGeneratePayroll}
        visible={openGeneratePayroll}
        children={<GeneratePayroll actionName={actionName} />}
      />
      <Sider
        header="View Payroll"
        setVisible={setOpenViewPayroll}
        visible={openViewPayroll}
        children={<ViewPayroll />}
      />

      {/* <ImportDatasDialog
        visible={openGeneratePayroll}
        setVisible={setOpenGeneratePayroll}
        position="top-right"
        header={actionName === "edit" ? "Edit Payroll" : "Generate Payroll"}
      >
        <GeneratePayroll actionName={actionName} />
      </ImportDatasDialog>
      <ImportDatasDialog
        visible={openViewPayroll}
        setVisible={setOpenViewPayroll}
        position="top-right"
        header="View Payroll"
      >
        <ViewPayroll />
      </ImportDatasDialog> */}
    </div>
  );
};

export default Payroll;
