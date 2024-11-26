import { useEffect, useState } from "preact/hooks";
import TabViewComponent from "../../../../components/TabView";
import PermissionActionForm from "../PermissionActionForm";
import ApprovalTab from "../Approvals";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { getListOfUsersAccessMiddleWare } from "../store/templatesMiddleware";

const TemplateViewTabs = () => {

    // const dispatch = useDispatch<AppDispatch>();
    // const [templateId, setTemplateId] = useState<number | string | null | any>(null);

    const myTabs = [
        { title: "Template Permissions", content: <PermissionActionForm /> },
        { title: "Users List", content: <ApprovalTab /> },
    ];
    return (
        <div>
            <TabViewComponent tabs={myTabs} />
        </div>
    );
};

export default TemplateViewTabs;
