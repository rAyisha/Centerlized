import InputField from "../../../../components/InputField";
import "./index.scss";
import { useFormik } from "formik";
import { useToast } from "../../../../components/Toast";
import LanguageContext from "../../../../config/LanguageContext";
import { useContext, useEffect, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import DropDownField from "../../../../components/DropDownField";
import DatePicker from "../../../../components/DatePicker";
import { maritalStatusOptions } from "../../../../utility/constant";
import Button from "../../../../components/Button";
import CustomAccordionTab from "../../../../components/AccordionTab";
import CheckBox from "../../../../components/CheckBox";
import { useNavigate, useParams } from "react-router-dom";
import { getBranchByCompanyIDMiddleWare } from "../../BranchMaster/store/branchMiddleware";
import { editUserAccessMiddleware, getBloodGroupsMiddleWare, getDepartmentsMiddleWare, getDesignationMiddleWare, getGenderOptionsMiddleware, getReportingToDMiddleWare, getUserAccessByIDMiddleware, postUserAccessMiddleware } from "../store/userAccessMiddleware";
import { fetchIp } from "../../../../utility/getIpAddress";
import ApiLoader from "../../../../components/ApiLoader";
import BackNavigation from "../../../../components/BackArrowNavigation";
import { getListAccessMiddleWare } from "../../Templates/store/templatesMiddleware";

interface FormikValues {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  personalEmail?: string;
  phoneNumber?: string;
  workEmail?: string;
  gender?: string;
  dateofBirth?: string | null;
  bloodGroup?: string;
  state?: string;
  maritalStatus?: string;
  financialYearEnd?: string | null;
  spouseName?: string;
  fatherName?: string;
  motherName?: string;
  loginAccess?: boolean;
  adminSystemBranchAccess?: boolean;
  baseBranch?: string;
  company: string;
  department?: string;
  desingnation?: string;
  reportTo?: string;
  template?: string;
}

interface FormikErrors {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  workEmail?: string;
  bloodGroup?: string;
  state?: string;
  maritalStatus?: string;
  financialYearEnd?: string;
  personalEmail?: string;
  fatherName?: string;
  motherName?: string;
  dateofBirth?: string;
  gender?: string;
  loginAccess?: boolean;
  adminSystemBranchAccess?: boolean;
  baseBranch?: string;
  company?: string;
  department?: string;
  desingnation?: string;
  reportTo?: string;
  template?: string;
}

const initialValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  personalEmail: "",
  phoneNumber: "",
  workEmail: "",
  gender: "",
  dateofBirth: "",
  bloodGroup: "",
  state: "",
  maritalStatus: "",
  financialYearEnd: "",
  spouseName: "",
  fatherName: "",
  motherName: "",
  loginAccess: false,
  adminSystemBranchAccess: false,
  baseBranch: "",
  company: "",
  department: "",
  desingnation: "",
  reportTo: "",
  template: ''
};

interface branchProps {
  onTabChange?: (activeIndex: number) => void,
  setTemplateIddata?: (id: number | null) => void;
}

const UserAccessActionForm = ({ setTemplateIddata }: branchProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { action, id } = useParams();
  console.log(action,"ff")
  const { translations } = useContext(LanguageContext);
  const toast = useToast();
  const [ip, setIp] = useState<string | null>(null);


  const validate = (values: FormikValues) => {
    const errors: FormikErrors = {};
    if (!values.lastName) {
      errors.lastName = "Last Name is Required";
    }
    if (!values.firstName) {
      errors.firstName = "First Name is Required";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone Number is Required";
    }
    if (!values.personalEmail) {
      errors.personalEmail = "Perosnal Email is Required";
    }
    if (!values.workEmail) {
      errors.workEmail = "Work Email is Required";
    }
    if (!values.maritalStatus) {
      errors.maritalStatus = "Marital Status is Required";
    }

    if (!values.motherName) {
      errors.motherName = "Mother Name is Required";
    }
    if (!values.fatherName) {
      errors.fatherName = "Father Name is Required";
    }
    if (!values.dateofBirth) {
      errors.dateofBirth = "DOB is Required";
    }
    if (!values.gender) {
      errors.gender = "Gender is Required";
    }
    if (!values.company) {
      errors.company = "Company is Required";
    }
    if (!values.baseBranch) {
      errors.baseBranch = "Base Branch is Required";
    }
    if (!values.department) {
      errors.department = "Department is Required";
    }
    if (!values.desingnation) {
      errors.desingnation = "Department is Required";
    }
    if (!values.reportTo) {
      errors.reportTo = "Report To is Required";
    }
    return errors;
  };
// console.log("userAccessReducers",userAccessReducers)
  const { isLoading, companyList, getBranchByCompanyId, companyID, branchID, yearID, departments, designations, reportData, userDetails, bloodGroupsData, genderOptions, getTemplateList } = useSelector((state: any) => {
    return {
      isLoading: state.userAccessReducers?.isLoading,
      bloodGroupsData: state.userAccessReducers?.bloodGroupsData,
      companyList: state.CompanyReducers?.company?.data,
      BranchList: state.BranchReducers?.Branch?.data,
      getBranchByCompanyId: state.BranchReducers?.getBranchByCompanyId,
      companyID: state.dropdownDataReducers.companyID,
      branchID: state.dropdownDataReducers.branchID,
      yearID: state.dropdownDataReducers.yearID,
      departments: state.userAccessReducers?.departments,
      designations: state.userAccessReducers?.designations,
      reportData: state.userAccessReducers?.reportData,
      userDetails: state.userAccessReducers?.userDetails,
      genderOptions: state.userAccessReducers?.genderOptions,
      getTemplateList: state.TemplatesReducers?.getTemplateList?.data,
    };
  });

  const handleFormSubmit = async (values: FormikValues) => {
    const payload = {
      email: values?.workEmail,
      phone: values?.phoneNumber,
      firstName: values?.firstName,
      middleName: values?.middleName ? values?.middleName : null,
      lastName: values?.lastName,
      personalEmail: values?.personalEmail,
      dateOfBirth: values?.dateofBirth,
      genderId: values?.gender,
      bloodgroupId: values?.bloodGroup ? values?.bloodGroup : null,
      fatherName: values?.fatherName,
      motherName: values?.motherName,
      maritalStatus: values?.maritalStatus,
      spouseName: values?.spouseName ? values?.spouseName : null,
      departmentId: values?.department,
      designationId: values?.desingnation,
      reportingId: values?.reportTo,
      isgenerateLoginCreds: values?.loginAccess,
      accessTemplateId: parseInt(values?.template)
    };

    const editPayload = {
      id: id,
      phone: values?.phoneNumber,
      firstName: values?.firstName,
      middleName: values?.middleName ? values?.middleName : null,
      lastName: values?.lastName,
      personalEmail: values?.personalEmail,
      dateOfBirth: values?.dateofBirth,
      genderId: values?.gender,
      bloodgroupId: values?.bloodGroup ? values?.bloodGroup : null,
      fatherName: values?.fatherName,
      motherName: values?.motherName,
      maritalStatus: values?.maritalStatus,
      spouseName: values?.spouseName ? values?.spouseName : null,
      departmentId: values?.department,
      designationId: values?.desingnation,
      reportingId: values?.reportTo,
      accessTemplateId: parseInt(values?.template)
    }

// console.log("editPayload",editPayload)
    const headers = {
      "ip": ip,
      "company-id": values?.company,
      "branch-id": values?.baseBranch,
      "year-id": yearID
    };
    try {
      const res = await dispatch(action === "edit" ? editUserAccessMiddleware({ id, payload: editPayload, headers }) : postUserAccessMiddleware({ payload, headers }));
      if (res.meta.requestStatus === "fulfilled") {
        if (action === "add") {
          toast.success("Successfully Added!");
        } else {
          toast.success("Successfully Updated!");
        }
        navigate("/useraccesscontrol")
      } else {
        if (typeof res?.payload?.response?.data?.error === "string") {
          toast.error(res?.payload?.response?.data?.error);
        } else {
          if (typeof res?.payload?.response?.data?.message === "string") {
            toast.error(res?.payload?.response?.data?.message);
          }
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: async (values) => {
      handleFormSubmit(values);
    },
  });

  const headers = {
    "company-id": formik.values.company,
     "branch-id": formik.values.baseBranch
  }
  console.log("actionaction",companyID,branchID)
  useEffect(() => {
    if (companyID && action !== "view" && action !== "edit") {
      formik.setFieldValue("company", companyID);
      if (branchID) {
        formik.setFieldValue("baseBranch", branchID);
        console.log("branchess",branchID)
      }
     
    }
  }, [companyID,branchID,action]);

  
  
  useEffect(() => {
    const fetchData = async () => {
      if (formik?.values?.company) {
        try {
          const branchRes = await dispatch(getBranchByCompanyIDMiddleWare({ id: formik.values.company }));
          if (branchRes.meta.requestStatus === "fulfilled") {
            if (action != "add")
              if (userDetails) {
                console.log(userDetails?.branchId, 'find branch id');
                //  formik.setFieldValue("baseBranch", parseInt(userDetails?.branchId) || "");
              }
          } else {
            const errorMessage = branchRes?.payload?.response?.data?.error || branchRes?.payload?.response?.data?.message;
            if (typeof errorMessage === "string") {
              toast.error(errorMessage);
            }
          }
        } catch (error) {
          console.error("An error occurred:", error);
          toast.error("An error occurred while fetching data.");
        }
      }
    };

    fetchData();
  }, [formik?.values?.company]);
  useEffect(() => {
    const fetchData = async () => {
      if (formik?.values?.baseBranch) {
        try {
          const headers = {
            "company-id": formik?.values?.company,
            "branch-id": formik?.values?.baseBranch,
          }
          const reportToRes = await dispatch(getReportingToDMiddleWare({ headers }));
          if (reportToRes.meta.requestStatus === "fulfilled") {
            if (action != "add")
              if (userDetails) {
                // formik.setFieldValue("reportTo", parseInt(userDetails?.reportingId) || "");
              }
          } else {
            const errorMessage = reportToRes?.payload?.response?.data?.error || reportToRes?.payload?.response?.data?.message;
            if (typeof errorMessage === "string") {
              toast.error(errorMessage);
            }
          }
        } catch (error) {
          console.error("An error occurred:", error);
          toast.error("An error occurred while fetching data.");
        }
      }
    };

    fetchData();
  }, [formik?.values?.baseBranch]);

  useEffect(() => {

    const fetchData = async () => {
      if (formik?.values?.department) {
        // const headers = {
        //   "company-id": companyID,
        //   "branch-id": branchID
        // }
        console.log("understabt2",headers)
        try {
         
          const designationRes = await dispatch(getDesignationMiddleWare({ id: formik.values.department , headers  })); 

          if (designationRes.meta.requestStatus === "fulfilled") {
            if (action != "add")
              if (userDetails) {
                formik.setFieldValue("desingnation", parseInt(userDetails?.designationId) || "");
              }
          } else {
            const errorMessage = designationRes?.payload?.response?.data?.error || designationRes?.payload?.response?.data?.message;
            if (typeof errorMessage === "string") {
              toast.error(errorMessage);
            }
          }

        } catch (error) {
          console.error("An error occurred:", error);
          toast.error("An error occurred while fetching data.");
        }
      }
    };

    fetchData();
  }, [formik?.values?.department])
  const nextFunction = () => {
    const fetchData = async () => {
      if (!id) {
        return;
      }
      try {
        const res = await dispatch(getUserAccessByIDMiddleware({ id }));
       
        //  setTemplateIddata(res?.payload?.data?.accessTemplateId)
        if (res.meta.requestStatus === "fulfilled") {
          const userData = res?.payload?.data;
          if (userData) {
            formik.setFieldValue("firstName", userData?.firstName || "");
            formik.setFieldValue("middleName", userData?.middleName || "");
            formik.setFieldValue("lastName", userData?.lastName || "");
            formik.setFieldValue("personalEmail", userData?.personalEmail || "");
            formik.setFieldValue("phoneNumber", userData?.phone || "");
            formik.setFieldValue("workEmail", userData?.email || "");
            formik.setFieldValue("gender", userData?.genderId || "");
            formik.setFieldValue("dateofBirth", userData?.dateOfBirth || "");
            formik.setFieldValue("bloodGroup", userData?.bloodgroupId || "");
            formik.setFieldValue("maritalStatus", userData?.maritalStatus || "");
            formik.setFieldValue("spouseName", userData?.spouseName || "");
            formik.setFieldValue("fatherName", userData?.fatherName || "");
            formik.setFieldValue("motherName", userData?.motherName || "");
            formik.setFieldValue("loginAccess", userData?.isgenerateLoginCreds || false);
              formik.setFieldValue("baseBranch", userData?.branchId || "");
            formik.setFieldValue("company", userData?.companyId || "");
            formik.setFieldValue("department", userData?.departmentId || "");
            formik.setFieldValue("template", userData?.accessTemplateId || "");
            // formik.setFieldValue("desingnation", userData?.designationId || "");
             formik.setFieldValue("reportTo", userData?.reportingId || "");
            setTemplateIddata(res?.payload?.data?.accessTemplateId)
          }
        } else {
          if (typeof res?.payload?.response?.data?.error === "string") {
            toast.error(res?.payload?.response?.data?.error);
          } else {
            if (typeof res?.payload?.response?.data?.message === "string") {
              toast.error(res?.payload?.response?.data?.message);
            }
          }
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }

    }
    fetchData()
  }
  
  const runAfterDispatches = async (headers) => {
    console.log("formikvaluescompany",headers)
    // const headers = {
    //   "company-id": formik.values.company,
    //    "branch-id": formik.values.baseBranch
    // }
   console.log(headers,"formalty")
    try {
      // Wait for all the dispatches to complete
      await Promise.all([
        dispatch(getDepartmentsMiddleWare({ headers })),
        dispatch(getGenderOptionsMiddleware({ headers })),
        dispatch(getBloodGroupsMiddleWare({ headers })),
        dispatch(getListAccessMiddleWare())
      ]);

      console.log('All four middleware actions completed successfully.');

      // Now run the next function
      nextFunction();  // Replace with your actual next function

    } catch (error) {
      console.error('An error occurred while completing the dispatches:', error);
    }
  };
  useEffect(() => {
    // const headers = {
    //   "company-id": formik.values.company,
    //    "branch-id": formik.values.baseBranch
    // }
   console.log(headers,"understabt")
    runAfterDispatches(headers)
 
    if (!ip)
      fetchIp()
        .then(ip => {
          setIp(ip)
        })
        .catch(error => {
          console.error(error.message);
        });

  }, [formik.values.company,formik.values.baseBranch])

  if (isLoading) {
    return <ApiLoader />;
  }
  // console.log(formik.values.company, 'find header data', companyID, "and", companyList, companyList?.length);
  return (
    <div className="user__access__action__form">
      <div className="form__top">
        <div className="form__header__area flex gap-2">
          <BackNavigation />
          <div className="form__title">{translations?.USER_REGISTRATION_ACCESS?.HEADER_TEXT?.MAIN || "User Access Registration"}</div>
        </div>
        <div className="grid">
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              disabled={action === "view" || action == "edit"}
              label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.COMPANY?.LABEL || "Company"}
              name="company"
              value={formik.values.company}
              onChange={formik.handleChange}
              options={companyList}
              optionLabel="displayName"
              optionValue="id"
              placeholder={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.COMPANY?.PLACEHOLDER || "Select Company"}
              eventBubbling={true}
              required
              error={
                formik.touched.company && formik.errors.company
                  ? formik.errors.company
                  : ""
              }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              type="master"
              disabled={action === "view" || action == "edit"}
              label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.BASE_BRANCH?.LABEL || "Base Branch"}
              name="baseBranch"
              value={formik.values.baseBranch}
              onChange={formik.handleChange}
              options={Array.isArray(getBranchByCompanyId) ? getBranchByCompanyId : []}
              placeholder={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.BASE_BRANCH?.PLACEHOLDER || "Select Base Branch"}
              optionLabel="displayName"
              optionValue="id"
              required={true}
              error={
                formik.touched.baseBranch && formik.errors.baseBranch
                  ? formik.errors.baseBranch
                  : ""
              }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              disabled={action === "view"}
              label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.DEPARTMENT?.LABEL || "Department"}
              name="department"
              value={formik.values.department}
              onChange={formik.handleChange}
              options={Array.isArray(departments) ? departments : []}
              optionLabel="name"
              optionValue="id"
              placeholder={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.DEPARTMENT?.PLACEHOLDER || "Select Department"}
              eventBubbling={true}
              required
              error={
                formik.touched.department && formik.errors.department
                  ? formik.errors.department
                  : ""
              }
            />
          </div>

          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              disabled={action === "view"}
              label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.FIRST_NAME?.LABEL || "First Name"}
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              placeholder={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.FIRST_NAME?.PLACEHOLDER || "Enter First Name"}
              required={true}
              error={
                formik.touched.firstName && formik.errors.firstName
                  ? formik.errors.firstName
                  : ""
              }
              translate={action != "view" ? true : false}
            />
          </div>

          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              disabled={action === "view"}
              label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.MIDDLE_NAME?.LABEL || "Middle Name"}
              name="middleName"
              value={formik.values.middleName}
              placeholder={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.MIDDLE_NAME?.PLACEHOLDER || "Enter Middle Name"}
              onChange={formik.handleChange}
              translate={action != "view" ? true : false}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              disabled={action === "view"}
              label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.LAST_NAME?.LABEL || "Last Name"}
              name="lastName"
              value={formik.values.lastName}
              placeholder={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.LAST_NAME?.PLACEHOLDER || "Enter Last Name"}
              onChange={formik.handleChange}
              error={
                formik.touched.lastName && formik.errors.lastName
                  ? formik.errors.lastName
                  : ""
              }
              required={true}
              translate={action != "view" ? true : false}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              disabled={action === "view"}
              label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.DESIGNATION?.LABEL || "Designation"}
              name="desingnation"
              value={formik.values.desingnation}
              onChange={formik.handleChange}
              options={Array.isArray(designations) ? designations : []}
              optionLabel="name"
              optionValue="id"
              placeholder={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.DESIGNATION?.PLACEHOLDER || "Select Designation"}
              eventBubbling={true}
              required
              error={
                formik.touched.desingnation && formik.errors.desingnation
                  ? formik.errors.desingnation
                  : ""
              }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              disabled={action === "view"}
              label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.REPORT_TO?.LABEL || "Report To"}
              name="reportTo"
              value={formik.values.reportTo}
              onChange={formik.handleChange}
              options={Array.isArray(reportData) ? reportData : []}
              optionLabel="Name"
              optionValue="id"
              placeholder={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.REPORT_TO?.PLACEHOLDER || "Select Report To"}
              eventBubbling={true}
              required
              error={
                formik.touched.reportTo && formik.errors.reportTo
                  ? formik.errors.reportTo
                  : ""
              }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              disabled={action === "view"}
              label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.PERSONAL_EMAIL?.LABEL || "Personal Email"}
              name="personalEmail"
              value={formik.values.personalEmail}
              placeholder={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.PERSONAL_EMAIL?.PLACEHOLDER || "Enter Personal Email"}
              onChange={formik.handleChange}
              error={
                formik.touched.personalEmail && formik.errors.personalEmail
                  ? formik.errors.personalEmail
                  : ""
              }
              required={true}
              translate={action != "view" ? true : false}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              disabled={action === "view"}
              label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.PHONE_NUMBER?.LABEL || "Phone Number"}
              name="phoneNumber"
              value={formik.values.phoneNumber}
              placeholder={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.PHONE_NUMBER?.PLACEHOLDER || "Enter Phone Number"}
              onChange={formik.handleChange}
              error={
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? formik.errors.phoneNumber
                  : ""
              }
              required={true}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DatePicker
              type="master"
              disabled={action === "view"}
              label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.DATE_OF_BIRTH?.LABEL || "Date of Birth"}
              value={formik.values.dateofBirth}
              name="dateofBirth"
              onChange={formik.handleChange}
              error={
                formik.touched.dateofBirth && formik.errors.dateofBirth
                  ? formik.errors.dateofBirth
                  : ""
              }
              required={true}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              disabled={action === "view" || action === "edit"}
              label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.WORK_EMAIL?.LABEL || "Work Email"}
              name="workEmail"
              value={formik.values.workEmail}
              placeholder={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.WORK_EMAIL?.PLACEHOLDER || "Enter Work Email"}
              onChange={formik.handleChange}
              error={
                formik.touched.workEmail && formik.errors.workEmail
                  ? formik.errors.workEmail
                  : ""
              }
              required={true}
              translate={action != "view" ? true : false}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              disabled={action === "view"}
              label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.GENDER?.LABEL || "Gender"}
              name="gender"
              optionValue="id"
              optionLabel="name"
              value={formik.values.gender}
              onChange={formik.handleChange}
              options={Array.isArray(genderOptions) ? genderOptions : []}
              placeholder={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.GENDER?.PLACEHOLDER || "Select Gender"}
              required={true}
              error={
                formik.touched.gender && formik.errors.gender
                  ? formik.errors.gender
                  : ""
              }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              disabled={action === "view"}
              label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.BLOOD_GROUP?.LABEL || "Blood Group"}
              name="bloodGroup"
              optionLabel="name"
              optionValue="id"
              value={formik.values.bloodGroup}
              onChange={formik.handleChange}
              options={Array.isArray(bloodGroupsData) ? bloodGroupsData : []}
              placeholder={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.BLOOD_GROUP?.PLACEHOLDER || "Select Blood Group"}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              disabled={action === "view"}
              label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.FATHER_NAME?.LABEL || "Father’s Name"}
              name="fatherName"
              value={formik.values.fatherName}
              placeholder={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.FATHER_NAME?.PLACEHOLDER || "Enter Father's Name"}
              onChange={formik.handleChange}
              error={
                formik.touched.fatherName && formik.errors.fatherName
                  ? formik.errors.fatherName
                  : ""
              }
              required={true}
              translate={action != "view" ? true : false}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              disabled={action === "view"}
              label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.MOTHER_NAME?.LABEL || "Mother’s Name"}
              name="motherName"
              value={formik.values.motherName}
              placeholder={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.MOTHER_NAME?.PLACEHOLDER || "Enter Mother's Name"}
              onChange={formik.handleChange}
              error={
                formik.touched.motherName && formik.errors.motherName
                  ? formik.errors.motherName
                  : ""
              }
              required={true}
              translate={action != "view" ? true : false}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              disabled={action === "view"}
              label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.MARITAL_STATUS?.LABEL || "Marital Status"}
              name="maritalStatus"
              value={formik.values.maritalStatus}
              onChange={formik.handleChange}
              options={maritalStatusOptions}
              placeholder={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.MARITAL_STATUS?.PLACEHOLDER || "Select Marital Status"}
              required={true}
              error={
                formik.touched.maritalStatus && formik.errors.maritalStatus
                  ? formik.errors.maritalStatus
                  : ""
              }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              disabled={action === "view" || formik.values.maritalStatus == "single" || formik.values.maritalStatus == ""}
              label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.SPOUSE_NAME?.LABEL || "Spouse’s Name"}
              name="spouseName"
              value={formik.values.spouseName}
              placeholder={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.SPOUSE_NAME?.PLACEHOLDER || "Enter Spouse Name"}
              onChange={formik.handleChange}
              translate={action != "view" ? true : false}
            />
          </div>

          <div className="col-12 lg:col-12">
            <CustomAccordionTab header={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.ACCESS_PARAMETERS?.HEADER || "Access Parameters"} checktrue={false} activeIndex={0}>
              <div className="grid">

                <div className="col-12 md:col-6 lg:col-4">
                  <DropDownField
                    disabled={action === "view"}
                    label={"Assign Template"}
                    name="template"
                    value={formik.values.template}
                    onChange={formik.handleChange}
                    options={Array.isArray(getTemplateList) ? getTemplateList : []}
                    placeholder={"Select Template"}
                    required={true}
                    optionLabel="name"
                    optionValue="id"
                    error={
                      formik.touched.template && formik.errors.template
                        ? formik.errors.template
                        : ""
                    }
                  />
                </div>
                <div className="col-12 md:col-6 lg:col-4">
                  <div className="flex h-full align-items-center">
                  <CheckBox
                    disabled={action === "view" || action === "edit"}
                    label={translations?.USER_REGISTRATION_ACCESS?.FIELDS?.GENERATE_LOGIN_CREDENTIALS?.LABEL || "Generate Login Credentials"}
                    value={formik.values.loginAccess}
                    onChange={(value) =>
                      formik.setFieldValue("loginAccess", value)
                    }
                  />
                  </div>
                </div>
              </div>
            </CustomAccordionTab>
          </div>
        </div>
      </div>
      {action != "view" && (
        <div className="button__container">
          <Button
            label={action === "edit" ? translations?.BUTTONS?.UPDATE || "Update" : translations?.BUTTONS?.SUBMIT || "Submit"} onClick={formik.handleSubmit} type="button" />
        </div>
      )}
    </div>

  );
};

export default UserAccessActionForm;
