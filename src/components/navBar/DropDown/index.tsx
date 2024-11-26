import { useFormik } from "formik";
import DropDownField from "../../DropDownField";
import "./index.scss";
import {
  USER_TYPE,
  yearOptions,
} from "../../../utility/constant";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "preact/hooks";
import { AppDispatch } from "../../../redux/store";
import { setBranchID, setCompanyID, setYearID } from "./Store/dropdownDataReducer";
import { getBaseBranchMiddleWare, getBaseCompanyMiddleWare } from "./Store/dropdownCommonMiddleware";
import { getAllCompanyMiddleWare } from "../../../module/CentralModule/CompanyMaster/store/companyMiddleware";
import { getCompanyIdBranchMiddleWare } from "../../../module/CentralModule/BranchMaster/store/branchMiddleware";

const Options = () => {

  const dispatch = useDispatch<AppDispatch>();
  const companyDetails = JSON.parse(localStorage.getItem("companyDetails"));
  const branchDetails = JSON.parse(localStorage.getItem("branchDetails"));
  const userType = JSON.parse(localStorage.getItem(USER_TYPE))

  const initialValues = {
    branch: "",
    year: "",
    company: "",
  };

  const { companyOptions, branchOptions } = useSelector((state: any) => {
    return {
      // isLoading: state.CompanyReducers?.isLoading,
      companyOptions: state.dropdownMainReducers?.companyOptions,
      branchOptions: state.dropdownMainReducers?.branchOptions
    };
  });

  const formik = useFormik({
    initialValues: initialValues,
    // validate,
    onSubmit: async (values) => {
    },
  });
  const handleGetBranchdropdownData = async (companyID: number) => {
    try {
      const res = await dispatch(getBaseBranchMiddleWare({ id: companyID }));
      if (res.meta.requestStatus === "fulfilled") {
        if (branchDetails?.id) {
          formik.setFieldValue("branch", branchDetails?.id)
          // dispatch(getCompanyIdBranchMiddleWare({ id: companyID }))
        }
      } else {
        console.error("find api failed:", res?.payload?.response);
      }
    } catch (error: any) {
      console?.error("find An error occurred:", error.message);
    }
  }
  const handleGetCompanydropdownData = async () => {
    try {
      const res = await dispatch(getBaseCompanyMiddleWare());
      if (res.meta.requestStatus === "fulfilled") {
        if (companyDetails?.id) {
          formik.setFieldValue("company", companyDetails?.id)
        }
      } else {
        console.error("find api failed:", res?.payload?.response);
      }
    } catch (error: any) {
      console?.error("find An error occurred:", error.message);
    }
  }
  useEffect(() => {
    handleGetCompanydropdownData()
    dispatch(getAllCompanyMiddleWare())
  }, [])
  useEffect(() => {
    if (formik.values.company) {
      const id = formik.values.company;
      handleGetBranchdropdownData(parseInt(id))
    }
  }, [formik.values.company])
  useEffect(() => {
    if (formik.values.company) {
      const companyID = formik.values.company;
      dispatch(setCompanyID(companyID))
      const companyDetails = companyOptions?.filter((item: any) => item?.id === companyID)
      localStorage.setItem("companyDetails", JSON.stringify(companyDetails[0] || {}));
    }
    if (formik.values.branch) {
      const branchID = formik.values.branch;
      dispatch(setBranchID(branchID))
      const branchDetails = branchOptions?.filter((item: any) => item?.id === branchID)
      localStorage.setItem("branchDetails", JSON.stringify(branchDetails[0] || {}))
    }
    if (formik.values.year) {
      const yearID = formik.values.year;
      dispatch(setYearID(yearID))
    }
  }, [formik.values.company, formik.values.branch, formik.values.year])

  return (
    <div className="dropdown__container">
      <div className="">
        <DropDownField
          label=""
          name="company"
          value={formik.values.company}
          onChange={formik.handleChange}
          options={Array.isArray(companyOptions) ? companyOptions : []}
          placeholder="Company"
          // eventBubbling={false}
          optionLabel="displayName"
          optionValue="id"
          readOnly = {userType!=="superadmin"}
        />

      </div>
      <div className="">
        <DropDownField
          // label="Select Branch"
          name="branch"
          value={formik.values.branch}
          onChange={formik.handleChange}
          options={Array.isArray(branchOptions) ? branchOptions : []}
          placeholder="Branch"
          eventBubbling={true}
          optionLabel="displayName"
          optionValue="id"
          readOnly={userType !== "superadmin"}
        />
      </div>
      <div className="">
        <DropDownField
          // label="Select Year"
          name="year"
          value={formik.values.year}
          onChange={formik.handleChange}
          options={yearOptions}
          placeholder="Year"
          optionLabel="value"
          optionValue="id"
          readOnly={userType !== "superadmin"}
        />
      </div>
    </div>
  );
};

export default Options;
