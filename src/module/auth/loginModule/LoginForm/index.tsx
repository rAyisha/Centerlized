import Button from "../../../../components/Button";
import InputField from "../../../../components/InputField";
import LoginCard from "../../../../components/LoginCard";
import "./index.scss";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useToast } from "../../../../components/Toast";
import LanguageContext from "../../../../config/LanguageContext";
import { useContext } from "preact/hooks";
import { Dispatch, SetStateAction } from "preact/compat";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import { postLoginMiddleware } from "../store/authModuleMiddleWare";
import { convertToTamil } from "../../../../utility/baaminiConverter";
import { convertToKannada } from "../../../../utility/nudiConverter";
import { USER_TYPE } from "../../../../utility/constant";
interface FormikValues {
  email: string;
  password: string;
}
interface FormikErrors {
  email?: string;
  password?: string;
}
const initialValues = {
  email: "",
  password: "",
};
interface loginProps {
  setForm: Dispatch<SetStateAction<boolean>>;
  form: boolean;
}
const LoginForm = ({ setForm, form }: loginProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { translations } = useContext(LanguageContext);
  const toast = useToast();
  const { language } = useContext(LanguageContext);
  const validate = (values: FormikValues) => {
    const errors: FormikErrors = {};
    if (!values.email) {
      errors.email = "Email is Required";
    }
    if (!values.password) {
      errors.password = "Password is Required";
    }
    return errors;
  };

  function languageChecker(text: string) {
    switch (language) {
      // case "en":
      //   return "Poppins"; // English
      case "ta":
        return convertToTamil(text);
      case "kn":
        return convertToKannada(text);
      // case "hi":
      //   return "Devanagari"; // Hindi
      default:
        return text;
    }
  }
  const handleLogin = async (values: FormikValues) => {
    const payload = {
      email: values?.email,
      password: values?.password,
    };
    console.log(payload, "find formik convertToTamil values");

    try {
      const res = await dispatch(postLoginMiddleware({ payload }));
      console.log("first==>",res)
      if (res.meta.requestStatus === "fulfilled") {
       
        toast.success("Successfully verified");
        const token = res?.payload?.data?.token;
        localStorage.setItem("companyDetails", JSON.stringify(res?.payload?.data?.companyDetails));
        localStorage.setItem("branchDetails", JSON.stringify(res?.payload?.data?.branchDetails))
        localStorage.setItem(USER_TYPE, JSON.stringify(res?.payload?.data?.userType))

        if (token) {
          Cookies.set("token", token);
          navigate("/");
          window.location.reload();
        }
      } else {
        console.error("find api failed:", res?.payload?.response);
        const message = res?.payload?.response?.data?.message || "Login Failed"
        toast.error(message);
      }
    } catch (error) {
      console.error("find An error occurred:", error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: async (values) => {
      // console.log(values, "find formik values");
      handleLogin(values);
    },
  });

  return (
    <LoginCard>
      <form className="login__form__container" onSubmit={formik.handleSubmit}>
        <div className="form__top">
          <div className="form__title">
            {translations.LOGIN_SCREEN.HEADER_TEXT.LOGINTITLE}
          </div>
          <InputField
            label={translations.LOGIN_SCREEN.FIELDS.USERNAME.LABEL}
            name="email"
            placeholder={translations.LOGIN_SCREEN.FIELDS.USERNAME.PLACEHOLDER}
            onChange={formik.handleChange}
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
            translate={false}
          />
          <InputField
            label={translations.LOGIN_SCREEN.FIELDS.PASSWORD.LABEL}
            name="password"
              inputMode="password"
            placeholder={translations.LOGIN_SCREEN.FIELDS.PASSWORD.PLACEHOLDER}
            onChange={formik.handleChange}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""
            }
            translate={false}
            
          />
          <div className="password__caption cursor-pointer">
            {translations.LOGIN_SCREEN.BUTTONS.FORGOT_PASSWORD}
          </div>
        </div>
        <div className="button__container">
          <Button
            label={translations.LOGIN_SCREEN.BUTTONS.LOGIN}
            type="submit"
          />
          <div
            onClick={() => setForm(!form)}
            className="signup__caption cursor-pointer"
          >
            {translations.LOGIN_SCREEN.BUTTONS.NEW_USER}
          </div>
        </div>
      </form>
    </LoginCard>
  );
};

export default LoginForm;
