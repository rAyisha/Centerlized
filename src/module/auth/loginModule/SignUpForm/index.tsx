import Button from "../../../../components/Button";
import InputField from "../../../../components/InputField";
import LoginCard from "../../../../components/LoginCard";
import "./index.scss";
import { useFormik } from "formik";
import { useToast } from "../../../../components/Toast";
import LanguageContext from "../../../../config/LanguageContext";
import { Dispatch, useContext, useEffect, useState } from "preact/hooks";
import { SetStateAction } from "preact/compat";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import { postSignUpMiddleware } from "../store/authModuleMiddleWare";
import DropDownField from "../../../../components/DropDownField";
import {
  branchOptions,
  companyOptions,
  yearOptions,
} from "../../../../utility/constant";
import { fetchIp } from "../../../../utility/getIpAddress";
import { getAllCompanyMiddleWare } from "../../../CentralModule/CompanyMaster/store/companyMiddleware";
import { getCompanyIdBranchMiddleWare } from "../../../CentralModule/BranchMaster/store/branchMiddleware";
interface FormikValues {
  email?: string;
  userName?: string;
  password?: string;
}
interface FormikErrors {
  email?: string;
  userName?: string;
  password?: string;
}
const initialValues = {
  userName: "",
  email: "",
  password: "",
  branch: "",
  year: "",
  company: "",
};
interface signupProps {
  setForm: Dispatch<SetStateAction<boolean>>;
  form: boolean;
}
const SignupForm = ({ setForm, form }: signupProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { translations } = useContext(LanguageContext);
  const [ip, setIp] = useState("");
  const toast = useToast();

  const { isLoading,companyList,Branch,BranchListBasedonCompanyId } = useSelector((state: any) => {
    return {
      isLoading: state.CompanyReducers?.isLoading,
      companyList:state.CompanyReducers?.company?.data,
      BranchList:state.BranchReducers?.Branch?.data,
      BranchListBasedonCompanyId:state.BranchReducers?.IdBasedBranch?.data
    };
  });

  useEffect(() => {
    fetchDatas()
  }, []);
  const fetchDatas=async()=>{
    const response= await fetchIp();
    setIp(response)
    dispatch(getAllCompanyMiddleWare());

  }

  
  console.log(ip, "find ip address");
  const validate = (values: FormikValues) => {
    const errors: FormikErrors = {};
    if (!values.email) {
      errors.email = "Email is Required";
    }
    if (!values.userName) {
      errors.userName = "Username is Required";
    }
    if (!values.password) {
      errors.password = "Password is Required";
    }
    return errors;
  };
  const handleSignup = async (values: FormikValues) => {
    const payload = {
      companyId: 1,
      branchId: 111,
      year: 1,
      ipAddress: ip,
      email: values?.email,
      phone: null,
      username: values?.userName,
      password: values?.password,
      createdBy: 1,
    };

    try {
      const res = await dispatch(postSignUpMiddleware({ payload }));

      if (res.meta.requestStatus === "fulfilled") {
        console.log(res, "find api success");
        toast.success("Successfully registered");
        setForm(!form);
      } else {
        console.error("find api failed:", res?.payload?.response);
      }
    } catch (error) {
      console.error("find An error occurred:", error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: async (values) => {
      console.log(values, "find formik values");
      handleSignup(values);
    },
  });
  useEffect(() => {
    if(formik.values.company){
      dispatch(getCompanyIdBranchMiddleWare({ id: formik.values.company?.id }));

    }

  }, [formik.values.company])

  return (
    <LoginCard>
      <div className="signup__form__container">
        <div className="form__top">
          {/* <div className="top__area"> */}
          <div className="form__title">
            {translations.LOGIN_SCREEN.HEADER_TEXT.SIGNUPTITLE}
          </div>
          {/* <div className="dropdown__container">
             
            </div> */}
          {/* </div> */}

          <InputField
            label={translations.LOGIN_SCREEN.FIELDS.USERNAME.LABEL}
            name="userName"
            placeholder={translations.LOGIN_SCREEN.FIELDS.USERNAME.PLACEHOLDER}
            onChange={formik.handleChange}
            error={
              formik.touched.userName && formik.errors.userName
                ? formik.errors.userName
                : ""
            }
          />
          <InputField
            label={translations.LOGIN_SCREEN.FIELDS.EMAIL.LABEL}
            name="email"
            placeholder={translations.LOGIN_SCREEN.FIELDS.EMAIL.PLACEHOLDER}
            onChange={formik.handleChange}
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
          />
          <InputField
            label={translations.LOGIN_SCREEN.FIELDS.PASSWORD.LABEL}
            name="password"
            placeholder={translations.LOGIN_SCREEN.FIELDS.PASSWORD.PLACEHOLDER}
            onChange={formik.handleChange}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""
            }
          />
          <div className="">
            <DropDownField
              label="Company"
              name="company"
              value={formik.values.company}
              onChange={formik.handleChange}
              options={companyList}
              optionLabel="name"
              placeholder="Select company"
              eventBubbling={true}
            />
          </div>
          <div className="">
            <DropDownField
              label="Branch"
              name="branch"
              value={formik.values.branch}
              onChange={formik.handleChange}
              options={BranchListBasedonCompanyId}
              placeholder="Select branch"
              eventBubbling={true}
            />
          </div>
          <div className="">
            <DropDownField
              label="Year"
              name="year"
              value={formik.values.year}
              onChange={formik.handleChange}
              options={yearOptions}
              placeholder="Select year"
            />
          </div>
        </div>
        <div className="button__container">
          <Button
            label={translations.LOGIN_SCREEN.BUTTONS.SIGNUP}
            onClick={formik.handleSubmit}
          />
          <div
            onClick={() => setForm(!form)}
            className="signup__caption cursor-pointer"
          >
            {translations.LOGIN_SCREEN.BUTTONS.EXIT_USER}
          </div>
        </div>
      </div>
    </LoginCard>
  );
};

export default SignupForm;
