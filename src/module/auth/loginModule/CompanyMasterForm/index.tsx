import Button from "../../../../components/Button";
import InputField from "../../../../components/InputField";
import LoginCard from "../../../../components/LoginCard";
import "./index.scss";
import { useFormik } from "formik";
import { useToast } from "../../../../components/Toast";
import LanguageContext from "../../../../config/LanguageContext";
import {
  Dispatch,
  useContext,
  useEffect,
  useRef,
  useState,
} from "preact/hooks";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import { postSignUpMiddleware } from "../store/authModuleMiddleWare";
import axios from "axios";
import DropDownField from "../../../../components/DropDownField";
import { InputTextarea } from "primereact/inputtextarea";
import DatePicker from "../../../../components/DatePicker";
import {
  cityOptions,
  stateOptions,
  countryOptions,
  legalEntityOptions,
  industryOptions,
} from "../../../../utility/constant";
import CustomFileUpload from "../../../../components/FileUpload";
import { SetStateAction } from "preact/compat";
// import CustomFileUpload from "../FileUpload";

interface FormikValues {
  companyName?: string;
  companyCode?: string;
  registrationNumber?: string;
  taxIdentificationNumber?: string;
  GSTIN?: string;
  incorporationDate?: string | null;
  registeredAddress?: string;
  city?: string;
  state?: string;
  country?: string;
  email?: string;
  phoneNumber?: string;
  websiteURL?: string;
  legalEntityType?: string;
  industry?: string;
  parentCompany?: string;
  PAN?: string;
  faxNumber?: string;
  CIN?: string;
}

interface FormikErrors {
  companyName?: string;
  registrationNumber?: string;
  GSTIN?: string;
  incorporationDate?: string | null;
  registeredAddress?: string;
  city?: string;
  state?: string;
  country?: string;
  phoneNumber?: string;
  websiteURL?: string;
  PAN?: string;
  CIN?: string;
}

const initialValues: FormikValues = {
  companyCode: "",
  companyName: "",
  registrationNumber: "",
  taxIdentificationNumber: "",
  GSTIN: "",
  incorporationDate: "",
  registeredAddress: "",
  city: "",
  state: "",
  country: "",
  email: "",
  phoneNumber: "",
  websiteURL: "",
  legalEntityType: "",
  industry: "",
  parentCompany: "",
  PAN: "",
  faxNumber: "",
  CIN: "",
};

interface signupProps {
  setFormType: Dispatch<SetStateAction<boolean>>;
}

const CompanyMasterForm = ({ setFormType }: signupProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { translations } = useContext(LanguageContext);
  const toast = useToast();
  const fileUploadRef = useRef<any>(null);
  const [file, setFile] = useState<string>("");
  const [ip, setIp] = useState("");

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setIp(response.data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchIp();
  }, []);
  const handleUpload = (e: any) => {
    console.log("File uploaded successfully!", e);
  };

  const handleSelect = (e: any) => {
    console.log("File selected:", e.files);
    setFile(e?.files[0]?.objectURL);
  };
  const validate = (values: FormikValues) => {
    const errors: FormikErrors = {};
    if (!values.companyName) {
      errors.companyName = "Company Name is required";
    }
    if (!values.registrationNumber) {
      errors.registrationNumber = "Registration Number is required";
    }
    if (!values.incorporationDate) {
      errors.incorporationDate = "Incorporation Date is required";
    }
    if (!values.registeredAddress) {
      errors.registeredAddress = "Registered Address is required";
    }
    if (!values.city) {
      errors.city = "City is required";
    }
    if (!values.state) {
      errors.state = "State is required";
    }
    if (!values.country) {
      errors.country = "Country is required";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    }
    if (!values.websiteURL) {
      errors.websiteURL = "Website URL is required";
    }
    if (!values.PAN) {
      errors.PAN = "PAN is required";
    }
    if (!values.CIN) {
      errors.CIN = "CIN is required";
    }
    return errors;
  };

  const handleSignup = async (values: FormikValues) => {
    const payload = {
      companyId: 1,
      branchId: 111,
      year: 1,
      ipAddress: ip,
      companyName: values.companyName,
      phone: null,
      username: values.companyCode,
      incorporationDate: values.incorporationDate,
      createdBy: 1,
    };

    try {
      const res = await dispatch(postSignUpMiddleware({ payload }));

      if (res.meta.requestStatus === "fulfilled") {
        toast.success("Successfully registered");
        // setForm("form4");
      } else {
        console.error("API failed:", res.payload.response);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async (values) => {
      handleSignup(values);
    },
  });

  return (
    <LoginCard>
      <div className="company__master__form__container__auth">
        <div className="form__top">
          <div className="form__title">Company Registration</div>
          <div className="grid">
            <div className="col-12">
              <InputField
                label="Company Code"
                name="companyCode"
                placeholder="Enter"
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-12">
              <InputField
                label="Company Name"
                name="companyName"
                placeholder="Enter"
                onChange={formik.handleChange}
                error={
                  formik.touched.companyName && formik.errors.companyName
                    ? formik.errors.companyName
                    : ""
                }
                required
              />
            </div>
            <div className="col-12">
              <InputField
                label="Registration Number"
                name="registrationNumber"
                placeholder="Enter"
                onChange={formik.handleChange}
                error={
                  formik.touched.registrationNumber &&
                  formik.errors.registrationNumber
                    ? formik.errors.registrationNumber
                    : ""
                }
                required
              />
            </div>
            <div className="col-12">
              <InputField
                label="Tax Identification Number"
                name="taxIdentificationNumber"
                placeholder="Enter"
                onChange={formik.handleChange}
                error={
                  formik.touched.taxIdentificationNumber &&
                  formik.errors.taxIdentificationNumber
                    ? formik.errors.taxIdentificationNumber
                    : ""
                }
                required={true}
              />
            </div>
            <div className="col-12">
              <InputField
                label="GSTIN"
                name="GSTIN"
                placeholder="Enter"
                onChange={formik.handleChange}
                error={
                  formik.touched.GSTIN && formik.errors.GSTIN
                    ? formik.errors.GSTIN
                    : ""
                }
                required={true}
              />
            </div>
            <div className="col-12">
              <DatePicker
                label="Incorporation Date"
                value={formik.values.incorporationDate}
                name="incorporationDate"
                onChange={formik.handleChange}
                error={
                  formik.touched.incorporationDate &&
                  formik.errors.incorporationDate
                    ? formik.errors.incorporationDate
                    : ""
                }
                required={true}
              />
            </div>
            <div className="col-12">
              <InputTextarea
                placeholder="Registered Address"
                style={{ width: "100%" }}
                autoResize
                name="registeredAddress"
                value={formik.values.registeredAddress}
                onChange={formik.handleChange}
                rows={5}
                cols={30}
                required
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
                required
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
                required
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
                required
              />
            </div>
            <div className="col-12">
              <InputField
                label="Corporate Email Address"
                name="email"
                placeholder="Enter"
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-12">
              <InputField
                label="Phone Number"
                name="phoneNumber"
                placeholder="Enter"
                onChange={formik.handleChange}
                required={true}
                error={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? formik.errors.phoneNumber
                    : ""
                }
              />
            </div>
            <div className="col-12">
              <CustomFileUpload
                label="Website Logo"
                ref={fileUploadRef}
                url="/api/upload-endpoint"
                accept=".png,.jpg,.jpeg"
                onUpload={handleUpload}
                handleSelect={handleSelect}
                toastMessage={{
                  severity: "success",
                  summary: "Upload Complete",
                  detail: "Your file has been uploaded successfully!",
                }}
              />
            </div>
            <div className="col-12">
              <InputField
                label="Website URL"
                name="websiteURL"
                placeholder="Enter"
                onChange={formik.handleChange}
                required={true}
                error={
                  formik.touched.websiteURL && formik.errors.websiteURL
                    ? formik.errors.websiteURL
                    : ""
                }
              />
            </div>
            <div className="col-12">
              <DropDownField
                label="Legal Entity Type"
                name="legalEntityType"
                value={formik.values.legalEntityType}
                onChange={formik.handleChange}
                options={legalEntityOptions}
                placeholder="Select Legal Entity"
              />
            </div>
            <div className="col-12">
              <DropDownField
                label="Industry"
                name="industry"
                value={formik.values.industry}
                onChange={formik.handleChange}
                options={industryOptions}
                placeholder="Select Industry"
              />
            </div>
            <div className="col-12">
              <InputField
                label="Parent Company"
                name="parentCompany"
                placeholder="Enter"
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-12">
              <InputField
                label="PAN"
                name="PAN"
                placeholder="Enter"
                onChange={formik.handleChange}
                required={true}
                error={
                  formik.touched.PAN && formik.errors.PAN
                    ? formik.errors.PAN
                    : ""
                }
              />
            </div>
            <div className="col-12">
              <InputField
                label="Fax Number"
                name="faxNumber"
                placeholder="Enter"
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-12">
              <InputField
                label="CIN"
                name="CIN"
                placeholder="Enter"
                onChange={formik.handleChange}
                required={true}
                error={
                  formik.touched.CIN && formik.errors.CIN
                    ? formik.errors.CIN
                    : ""
                }
              />
            </div>
          </div>
        </div>
        <div className="button__container">
          <Button label="Submit" onClick={formik.handleSubmit} />
          <div
            onClick={() => {
              setFormType(false);
            }}
            className="signup__caption cursor-pointer"
          >
            Branch Master Form
          </div>
        </div>
      </div>
    </LoginCard>
  );
};

export default CompanyMasterForm;
