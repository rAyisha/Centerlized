import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedLayout from "./productedRoute";
import Home from "../module/home";
import Login from "../module/auth/loginModule";
import UserModule from "../module/usersModule";
import EdvanceRoute from "../apps/Edvance/route";
import CompanyMaster from "../module/CentralModule/CompanyMaster";
import CompanyMasterForm from "../module/CentralModule/CompanyMaster/CompanyMasterForm";
import BranchMaster from "../module/CentralModule/BranchMaster";
import BranchMasterForm from "../module/CentralModule/BranchMaster/BranchMasterForm";
import UserAccessControl from "../module/CentralModule/UserAccessControl";
import UserAccessActionForm from "../module/CentralModule/UserAccessControl/UserAccessActionForm";
import Templates from "../module/CentralModule/Templates";
import PermissonActionForm from "../module/CentralModule/Templates/PermissionActionForm";
import MainTabs from "../module/CentralModule/Templates/MainTabs";
import DynamicMaster from "../module/CentralModule/DynamicMaster";
import AddMaster from "../module/CentralModule/DynamicMaster/AddMaster";
import CompanyMasterFormView from "../module/CentralModule/CompanyMaster/CompanyMasterForm/View";
import CompanyMasterFormEdit from "../module/CentralModule/CompanyMaster/CompanyMasterForm/Edit";
import BranchMasterViewForm from "../module/CentralModule/BranchMaster/BranchMasterForm/view";
import BranchMasterEditForm from "../module/CentralModule/BranchMaster/BranchMasterForm/edit";
import YearMaster from "../module/CentralModule/YearMaster";
import YearMasterForm from "../module/CentralModule/YearMaster/YearMasterForm";
import NotFound from "../components/NotFound";
import TemplateViewTabs from "../module/CentralModule/Templates/TemplateTabs";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/users" element={<UserModule />} />
        <Route path="/edvance/*" element={<EdvanceRoute />} />

        {/* company */}
        <Route path="/companymasterform" element={<CompanyMaster />} />
        <Route
          path="/companymasterform/:action"
          element={<CompanyMasterForm />}
        />
        <Route
          path="/companymasterform/view/:id"
          element={<CompanyMasterFormView />}
        />
        <Route
          path="/companymasterform/edit/:id"
          element={<CompanyMasterFormEdit />}
        />

        {/* branch */}
        <Route path="/branchmasterform" element={<BranchMaster />} />
        <Route path="/branchmasterform/:action" element={<BranchMasterForm />} />
        <Route path="/branchmasterform/view/:id" element={<BranchMasterViewForm />} />
        <Route path="/branchmasterform/edit/:id" element={<BranchMasterEditForm />} />

        {/* users */}
        <Route path="/useraccesscontrol" element={<UserAccessControl />} />
        <Route path="/useraccesscontrol/add" element={<UserAccessActionForm />} />
        <Route path="/useraccesscontrol/:action/:id" element={<UserAccessActionForm />} />
        <Route path="/useraccesscontrol/permissions/:action/:id" element={<MainTabs />} />
        <Route
          path="/branchmasterform/:action"
          element={<BranchMasterForm />}
        />
        <Route
          path="/branchmasterform/view/:id"
          element={<BranchMasterViewForm />}
        />
        <Route
          path="/branchmasterform/edit/:id"
          element={<BranchMasterEditForm />}
        />
        <Route path="/useraccesscontrol" element={<UserAccessControl />} />
        <Route
          path="/useraccesscontrol/add"
          element={<UserAccessActionForm />}
        />
        <Route
          path="/useraccesscontrol/:action/:id"
          element={<UserAccessActionForm />}
        />
        <Route
          path="/useraccesscontrolview/:action/:id"
          element={<MainTabs />}
        />
        <Route path="/useraccesscontrol/:action/:id" element={<MainTabs />} />

        {/* templates */}
        <Route path="/templates" element={<Templates />} />
        <Route path="/templates/permissionsetup/:action/:id" element={<PermissonActionForm />} />
        <Route path="/templates/permissionsetupview/:action/:id" element={<TemplateViewTabs />} />
        <Route path="/template/:action" element={<MainTabs />} />

        {/* dynamic master */}
        <Route path="/dynamicmaster" element={<DynamicMaster />} />
        <Route path="/dynamicmaster/:action/:id" element={<AddMaster />} />

        {/* year master */}
        <Route path="/yearmasterform" element={<YearMaster />} />
        <Route path="/yearmasterform/add" element={<YearMasterForm />} />
        <Route path="/yearmasterform/edit/:id" element={<YearMasterForm />} />

        {/* not found */}
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route
          path="/yearmasterform/:action/:id"
          element={<YearMasterForm />}
        />
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
