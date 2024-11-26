import Button from "../../../../components/Button";
import InputField from "../../../../components/InputField";
import LoginCard from "../../../../components/LoginCard";
import "./index.scss";
import { useFormik } from "formik";
import { useToast } from "../../../../components/Toast";
import LanguageContext from "../../../../config/LanguageContext";
import { useContext } from "preact/hooks";
import { SetStateAction, Dispatch } from "preact/compat";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import DropDownField from "../../../../components/DropDownField";
import { InputTextarea } from "primereact/inputtextarea";
import DatePicker from "../../../../components/DatePicker";
import {
  cityOptions,
  stateOptions,
  countryOptions,
  branchTypeOptions,
  parentCompanyOptions,
} from "../../../../utility/constant";
import { postBranchMiddleware } from "../store/authModuleMiddleWare";

interface FormikValues {
  parentCompany?: string;
  branchCode?: string;
  branchName?: string;
  branchHead?: string;
  contactEmail?: string;
  contactPhone?: string;
  branchType?: string;
  dateEstablished?: string | null;
  branchAddress?: string;
  city?: string;
  state?: string;
  country?: string;
  financialYearEnd?: string | null;
  faxNo?: string;
}

interface FormikErrors {
  parentCompany?: string;
  branchName?: string;
  contactEmail?: string;
  contactPhone?: string;
  branchAddress?: string;
  city?: string;
  state?: string;
  country?: string;
  financialYearEnd?: string;
}

const initialValues = {
  parentCompany: "",
  branchCode: "",
  branchName: "",
  branchHead: "",
  contactEmail: "",
  contactPhone: "",
  branchType: "",
  dateEstablished: "",
  branchAddress: "",
  city: "",
  state: "",
  country: "",
  financialYearEnd: "",
  faxNo: "",
};

interface branchProps {
  setFormType: Dispatch<SetStateAction<boolean>>;
  // form: string;
}

const BranchMasterForm = ({ setFormType }: branchProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { translations } = useContext(LanguageContext);
  const toast = useToast();

  const validate = (values: FormikValues) => {
    const errors: FormikErrors = {};
    if (!values.branchName) {
      errors.branchName = "Branch Name is Required";
    }
    if (!values.parentCompany) {
      errors.parentCompany = "Parent Company Name is Required";
    }
    if (!values.contactEmail) {
      errors.contactEmail = "Contact Email is Required";
    }
    if (!values.contactPhone) {
      errors.contactPhone = "Contact Phone Number is Required";
    }
    if (!values.branchAddress) {
      errors.branchAddress = "Branch Address is Required";
    }
    if (!values.city) {
      errors.city = "City is Required";
    }
    if (!values.state) {
      errors.state = "State is Required";
    }
    if (!values.country) {
      errors.country = "Country is Required";
    }
    if (!values.country) {
      errors.country = "Country is Required";
    }
    if (!values.financialYearEnd) {
      errors.financialYearEnd = "Financial Year End is Required";
    }
    return errors;
  };

  const handleBranchSubmit = async (values: FormikValues) => {
    const payload = {
      parentCompanyId: values?.parentCompany,
      branchCode: values?.branchCode,
      branchName: values?.branchName,
      branchHead: values?.branchHead,
      contactEmail: values?.contactEmail,
      contactPhone: values?.contactPhone,
      branchType: values?.branchType,
      dateEstablished: values?.dateEstablished,
      branchAddress: values?.branchAddress,
      city: values?.city,
      state: values?.state,
      country: values?.country,
      financialYearEnd: values?.financialYearEnd,
      faxNo: values?.faxNo,
    };

    try {
      const res = await dispatch(postBranchMiddleware({ payload }));

      if (res.meta.requestStatus === "fulfilled") {
        console.log(res, "Branch API success");
        toast.success("Branch successfully registered");
        // setForm("nextForm");
      } else {
        console.error("Branch API failed:", res?.payload?.response);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: async (values) => {
      console.log(values, "Branch formik values");
      handleBranchSubmit(values);
    },
  });

  return (
    <LoginCard>
      <div className="branch__master__form__container__auth">
        <div className="form__top">
          <div className="form__title">Branch Registration</div>
          <div className="grid">
            <div className="col-12">
              <DropDownField
                label="Parent Company"
                name="parentCompany"
                value={formik.values.parentCompany}
                onChange={formik.handleChange}
                options={parentCompanyOptions}
                placeholder="Select Parent Company"
                required={true}
                error={
                  formik.touched.parentCompany && formik.errors.parentCompany
                    ? formik.errors.parentCompany
                    : ""
                }
              />
            </div>
            <div className="col-12">
              <InputField
                label="Branch Code"
                name="branchCode"
                placeholder="Enter"
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-12">
              <InputField
                label="Branch Name"
                name="branchName"
                placeholder="Enter"
                onChange={formik.handleChange}
                error={
                  formik.touched.branchName && formik.errors.branchName
                    ? formik.errors.branchName
                    : ""
                }
                required={true}
              />
            </div>
            <div className="col-12">
              <InputField
                label="Branch Head/Manager"
                name="branchHead"
                placeholder="Enter"
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-12">
              <InputField
                label="Contact Email"
                name="contactEmail"
                placeholder="Enter"
                onChange={formik.handleChange}
                error={
                  formik.touched.contactEmail && formik.errors.contactEmail
                    ? formik.errors.contactEmail
                    : ""
                }
                required={true}
              />
            </div>
            <div className="col-12">
              <InputField
                label="Contact Phone Number"
                name="contactPhone"
                placeholder="Enter"
                onChange={formik.handleChange}
                error={
                  formik.touched.contactPhone && formik.errors.contactPhone
                    ? formik.errors.contactPhone
                    : ""
                }
                required={true}
              />
            </div>
            <div className="col-12">
              <DropDownField
                label="Branch Type"
                name="branchType"
                value={formik.values.branchType}
                onChange={formik.handleChange}
                options={branchTypeOptions}
                placeholder="Select Branch Type"
              />
            </div>
            <div className="col-12">
              <DatePicker
                label="Date Established"
                value={formik.values.dateEstablished}
                name="dateEstablished"
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-12">
              <InputTextarea
                placeholder="Branch Address"
                style={{ width: "100%" }}
                autoResize
                value={formik.values.branchAddress}
                onChange={formik.handleChange}
                rows={5}
                cols={30}
                // error={
                //   formik.touched.branchAddress && formik.errors.branchAddress
                //     ? formik.errors.branchAddress
                //     : ""
                // }
                required={true}
              />
            </div>
            <div className="col-12">
              <DropDownField
                label="City"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                options={cityOptions}
                placeholder="Select City"
                required={true}
                error={
                  formik.touched.city && formik.errors.city
                    ? formik.errors.city
                    : ""
                }
              />
            </div>
            <div className="col-12">
              <DropDownField
                label="State"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                options={stateOptions}
                placeholder="Select State"
                required={true}
                error={
                  formik.touched.state && formik.errors.state
                    ? formik.errors.state
                    : ""
                }
              />
            </div>
            <div className="col-12">
              <DropDownField
                label="Country"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                options={countryOptions}
                placeholder="Select Country"
                required={true}
                error={
                  formik.touched.country && formik.errors.country
                    ? formik.errors.country
                    : ""
                }
              />
            </div>
            <div className="col-12">
              <DatePicker
                label="Financial Year End"
                value={formik.values.financialYearEnd}
                name="financialYearEnd"
                onChange={formik.handleChange}
                // monthPickerOnly
                error={
                  formik.touched.financialYearEnd &&
                  formik.errors.financialYearEnd
                    ? formik.errors.branchName
                    : ""
                }
              />
            </div>
            <div className="col-12">
              <InputField
                label="Fax Number"
                name="faxNo"
                placeholder="Enter"
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="button__container">
          <Button label="Submit" onClick={formik.handleSubmit} />
          <div
            onClick={() => {
              setFormType(true);
            }}
            className="signup__caption cursor-pointer"
          >
            Company Master Form
          </div>
        </div>
      </div>
    </LoginCard>
  );
};

export default BranchMasterForm;
