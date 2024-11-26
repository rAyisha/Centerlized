import { useState } from "preact/hooks";
import TabViewComponent from "../../../../components/TabView";
import PermissionTab from "../../UserAccessControl/PermissionTab";
import UserAccessActionForm from "../../UserAccessControl/UserAccessActionForm";
import PermissionActionForm from "../PermissionActionForm";
// import ApprovalTab from "../Approvals";

const TemplateMainTabs = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [templateId, setTemplateId] = useState<number | null>(null);

  const onTabChange = (activeIndex: number) => {
    setActiveIndex(activeIndex)
  }
  const myTabs = [
    { title: "User Access Registration", content: <UserAccessActionForm onTabChange={onTabChange} setTemplateIddata={setTemplateId}/> },
    { title: "Permissions", content: <PermissionActionForm templateId={templateId}/> },
  ];

  return (
    <div>
      <TabViewComponent tabs={myTabs} activeIndex={activeIndex} />
    </div>
  );
};

export default TemplateMainTabs;
