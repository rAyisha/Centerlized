import { edvanceReducers } from "../apps/Edvance/redux/edvanceReducers";
import { dropdownDataReducers, dropdownMainReducers } from "../components/navBar/DropDown/Store/dropdownDataReducer";
import { sideBarReducers } from "../components/sideBar/store/sideBarReducer";
import { authReducers, userReducers } from "../module/auth/loginModule/store/authModuleReducers";
import { BranchReducers } from "../module/CentralModule/BranchMaster/store/branchReducer";
import { CommonReducers } from "../module/CentralModule/CommonStore/commonReducer";
import { CompanyReducers } from "../module/CentralModule/CompanyMaster/store/companyReducer";
import { dynamicReducers } from "../module/CentralModule/DynamicMaster/store/dynamicMasterReducer";
import { TemplatesReducers } from "../module/CentralModule/Templates/store/templatesReducer";
import { userAccessReducers } from "../module/CentralModule/UserAccessControl/store/userAccessReducer";
import { yearMasterReducers } from "../module/CentralModule/YearMaster/store/yearMasterReducer";
import { userListModuleReducers } from "../module/usersModule/store/userListModuleReducers";

export const reducers = {
  userReducers,
  authReducers,
  dropdownDataReducers,
  dropdownMainReducers,
  userListModuleReducers,
  CompanyReducers,
  BranchReducers,
  sideBarReducers,
  TemplatesReducers,
  userAccessReducers,
  edvanceReducers,
  CommonReducers,
  dynamicReducers,
  yearMasterReducers
};
