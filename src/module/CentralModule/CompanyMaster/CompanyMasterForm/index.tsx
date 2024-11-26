import Button from "../../../../components/Button";
import InputField from "../../../../components/InputField";
import "./index.scss";
import { useFormik } from "formik";
import { useToast } from "../../../../components/Toast";
import LanguageContext from "../../../../config/LanguageContext";
import { useContext, useEffect, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import axios from "axios";
import DropDownField from "../../../../components/DropDownField";
import DatePicker from "../../../../components/DatePicker";
import FileUploadTemplate from "../../../../components/FileUpload/FileUploadTemplate";
import {
  getAllIndustryMiddleWare,
  getAllLegalEntityMiddleWare,
  postCompanyMiddleWare,
} from "../store/companyMiddleware";
import { useNavigate } from "react-router-dom";
import { convertToTamil } from "../../../../utility/baaminiConverter";
import { convertToKannada } from "../../../../utility/nudiConverter";
import { getCityMiddleWare, getCountryMiddleWare, getStatesMiddleWare } from "../../CommonStore/commonMiddleware";
import BackNavigation from "../../../../components/BackArrowNavigation";

interface FormikValues {
  companyName?: string;
  displayName?: string;
  companyCode?: string;
  registrationNumber?: string;
  taxIdentificationNumber?: string;
  GSTIN?: string;
  incorporationDate?: string | null;
  registeredAddress?: string;
  city?: string | any;
  state?: string | any;
  country?: string | any;
  email?: string;
  phoneNumber?: string;
  websiteURL?: string;
  legalEntityType?: any;
  industry?: any;
  parentCompany?: string;
  PAN?: string;
  faxNumber?: string;
  CIN?: string;
  registredAddress?: string;
}

interface FormikErrors {
  companyName?: string;
  displayName?: string;
  registrationNumber?: string;
  GSTIN?: string;
  incorporationDate?: string | null;
  registeredAddress?: string;
  city?: string;
  state?: string;
  country?: string | any;
  phoneNumber?: string;
  websiteURL?: string;
  PAN?: string;
  CIN?: string;
  registredAddress?: string;
  taxIdentificationNumber?: string;
}

const initialValues: FormikValues = {
  companyCode: "",
  companyName: "",
  displayName: "",
  registrationNumber: "",
  taxIdentificationNumber: "",
  GSTIN: "",
  incorporationDate: "",
  city: "",
  state: "",
  country: "",
  email: "",
  phoneNumber: "",
  websiteURL: "",
  legalEntityType: 0,
  industry: "",
  parentCompany: "",
  PAN: "",
  faxNumber: "",
  CIN: "",
  registredAddress: "",
};

interface signupProps {

}

const CompanyMasterForm = ({ }: signupProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { translations, language } = useContext(LanguageContext);
  const navigate = useNavigate()
  const [file, setFile] = useState([]);
  const [ip, setIp] = useState("");
  const toast = useToast();
  console.log(ip,"findone")
  const { legalentity, industry, country, states, citys, } = useSelector((state: any) => {
    return {
      legalentity: state.CompanyReducers?.legalentity?.data,
      industry: state.CompanyReducers?.industry?.data,
      country: state.CommonReducers?.country?.data,
      states: state.CommonReducers?.states?.data,
      citys: state.CommonReducers?.citys?.data,
    };
  });
  console.log(country, states, citys, 'find world options');

  const fetchIp = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      setIp(response.data.ip);
    } catch (error) {
      console.error("Error fetching IP address:", error);
    }
  };

  const ApiCalling = () => {
    dispatch(getAllLegalEntityMiddleWare());
    dispatch(getAllIndustryMiddleWare());
    dispatch(getCountryMiddleWare())
  };

  useEffect(() => {
    ApiCalling();
    fetchIp();
  }, []);
  const validate = (values: FormikValues) => {
    const errors: FormikErrors = {};
    if (!values.companyName) {
      errors.companyName = "Company Name is required";
    }
    if (!values.displayName) {
      errors.displayName = "Display Name is required";
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
    if (!values.registredAddress) {
      errors.registredAddress = "Registred dAddress is required";
    }
    if (!values.taxIdentificationNumber) {
      errors.taxIdentificationNumber = "Tax Identification Number is required";
    }
    if (!values.GSTIN) {
      errors.GSTIN = "GSTIN is required";
    }
    return errors;
  };
  function languageChecker(text: string) {
    switch (language) {
      case "ta":
        return convertToTamil(text);
      case "kn":
        return convertToKannada(text);
      default:
        return text;
    }
  }

  const handleSubmit = async(values: FormikValues) => {
    const legalEntity = values?.legalEntityType?.id;
    const country = values?.country?.id
    const state = values?.state?.id
    const city = values?.city?.id
    const payload = {
      code: values.companyCode,
      name: languageChecker(values?.companyName ? values?.companyName : ""),
      displayName: languageChecker(values?.displayName ? values?.displayName : ""),
      tin: values.taxIdentificationNumber,
      gstin: values.GSTIN,
      registrationNumber: values.registrationNumber,
      incorporationDate: values.incorporationDate,
      registeredAddress: languageChecker(values?.registeredAddress ? values?.registeredAddress : ""),
      email: languageChecker(values?.email ? values?.email : ""),
      phoneNumber: values.phoneNumber,
      websiteURL: values.websiteURL,
      websiteLogo: file[0]?.objectURL,
      parentCompany: languageChecker(values?.parentCompany ? values?.parentCompany : ""),
      pan: values.PAN,
      faxNo: values.faxNumber,
      cin: values.CIN,
      legalEntityTypeId: legalEntity,
      industryTypeId: values?.industry?.id,
      countryId: country,
      stateId: state,
      cityId: city,
      ipAddress:ip
      // createdBy: 1,
    };
    try {
      const res = await dispatch(postCompanyMiddleWare({ payload }));
  
      if (res.meta.requestStatus === "rejected") {
        const error = res.payload?.response?.data?.error || "Something went wrong";
        toast.error(error);
      } else {
        toast.success("Company added successfully");
        navigate("/companymasterform");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handlechangeCountry = async (e: any) => {
    try {
      await dispatch(getStatesMiddleWare({ id: e?.value?.id }));
    } catch (error) {
      console.error("Error fetching states:", error);
      toast.error("Failed to fetch states. Please try again.");
    }
  };
  
  const handlechangeState = async (e: any) => {
    try {
      await dispatch(getCityMiddleWare({ id: e?.value?.id }));
    } catch (error) {
      console.error("Error fetching cities:", error);
      toast.error("Failed to fetch cities. Please try again.");
    }
  };
  

  const formik = useFormik({
    initialValues,
    // validate,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <div className="company__master__form__container">
      <div className="form__top">
        <div className="form__header__area flex gap-2">
          <BackNavigation />
          <div className="form__title">
            {translations?.COMPANY_REGISTRATION?.HEADER_TEXT?.MAIN || "Company Registration"}
          </div>
        </div>
        <div className="grid">
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label={translations?.COMPANY_REGISTRATION?.FIELDS?.COMPANY_CODE?.LABEL || "Company Code"}
              name="companyCode"
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.COMPANY_CODE?.PLACEHOLDER || "Enter"}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label={translations?.COMPANY_REGISTRATION?.FIELDS?.COMPANY_NAME?.LABEL || "Company Name"}
              name="companyName"
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.COMPANY_NAME?.PLACEHOLDER || "Enter"}
              onChange={formik.handleChange}
              error={
                formik.touched.companyName && formik.errors.companyName
                  ? formik.errors.companyName
                  : ""
              }
              required
              translate={false}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label={translations?.COMPANY_REGISTRATION?.FIELDS?.DISPLAY_NAME?.LABEL || "Display Name"}
              name="displayName"
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.DISPLAY_NAME?.PLACEHOLDER || "Enter"}
              onChange={formik.handleChange}
              error={
                formik.touched.displayName && formik.errors.displayName
                  ? formik.errors.displayName
                  : ""
              }
              required
              translate={true}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label={translations?.COMPANY_REGISTRATION?.FIELDS?.REGISTRATION_NUMBER?.LABEL || "Registration Number"}
              name="registrationNumber"
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.REGISTRATION_NUMBER?.PLACEHOLDER || "Enter"}
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
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label={translations?.COMPANY_REGISTRATION?.FIELDS?.TAX_IDENTIFICATION_NUMBER?.LABEL || "Tax Identification Number"}
              name="taxIdentificationNumber"
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.TAX_IDENTIFICATION_NUMBER?.PLACEHOLDER || "Enter"}
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
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label="GSTIN"
              name="GSTIN"
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.GSTIN?.PLACEHOLDER || "Enter"}
              onChange={formik.handleChange}
              error={
                formik.touched.GSTIN && formik.errors.GSTIN
                  ? formik.errors.GSTIN
                  : ""
              }
              required={true}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DatePicker
              type="master"
              label={translations?.COMPANY_REGISTRATION?.FIELDS?.INCORPORATION_DATE?.LABEL || "Incorporation Date"}
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

          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              type="master"
              label={translations?.COMPANY_REGISTRATION?.FIELDS?.COUNTRY?.LABEL || "Country"}
              name="country"
              value={formik.values.country}
              onChange={(e) => { formik.handleChange(e); handlechangeCountry(e) }}
              options={country}
              optionLabel="name"
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.COUNTRY?.PLACEHOLDER || "Select Country"}
              required
              error={
                formik.touched.country && typeof formik.errors.country === 'string'
                  ? formik.errors.country
                  : ""
              }
            />
          </div>

          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              type="master"
              label={translations?.COMPANY_REGISTRATION?.FIELDS?.STATE?.LABEL || "State"}
              name="state"
              value={formik.values.state}
              onChange={(e) => { formik.handleChange(e); handlechangeState(e) }}
              options={states}
              optionLabel="name"
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.STATE?.PLACEHOLDER || "Select State"}
              required
              error={
                formik.touched.state && formik.errors.state
                  ? Array.isArray(formik.errors.state)
                    ? formik.errors.state.join(", ")
                    : typeof formik.errors.state === "string"
                      ? formik.errors.state
                      : ""
                  : ""
              }
            />
          </div>

          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              type="master"
              label={translations?.COMPANY_REGISTRATION?.FIELDS?.CITY?.LABEL || "City"}
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              options={citys}
              optionLabel="name"
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.CITY?.PLACEHOLDER || "Select City"}
              required
              error={
                formik.touched.city && formik.errors.city
                  ? Array.isArray(formik.errors.city)
                    ? formik.errors.city.join(", ")
                    : typeof formik.errors.city === "string"
                      ? formik.errors.city
                      : ""
                  : ""
              }
            />
          </div>


          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label={translations?.COMPANY_REGISTRATION?.FIELDS?.CORPORATE_EMAIL?.LABEL || "Corporate Email Address"}
              name="email"
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.CORPORATE_EMAIL?.PLACEHOLDER || "Enter"}
              onChange={formik.handleChange}
              translate={true}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label={translations?.COMPANY_REGISTRATION?.FIELDS?.PHONE_NUMBER?.LABEL || "Phone Number"}
              name="phoneNumber"
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.PHONE_NUMBER?.PLACEHOLDER || "Enter"}
              onChange={formik.handleChange}
              required={true}
              error={
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? formik.errors.phoneNumber
                  : ""
              }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label={translations?.COMPANY_REGISTRATION?.FIELDS?.WEBSITE_URL?.LABEL || "Website URL"}
              name="websiteURL"
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.WEBSITE_URL?.PLACEHOLDER || "Enter"}
              onChange={formik.handleChange}
              required={true}
              error={
                formik.touched.websiteURL && formik.errors.websiteURL
                  ? formik.errors.websiteURL
                  : ""
              }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              type="master"
              label={translations?.COMPANY_REGISTRATION?.FIELDS?.LEGAL_ENTITY_TYPE?.LABEL || "Legal Entity Type"}
              name="legalEntityType"
              value={formik.values.legalEntityType}
              onChange={formik.handleChange}
              options={legalentity}
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.LEGAL_ENTITY_TYPE?.PLACEHOLDER || "Select Legal Entity"}
              optionLabel="name"
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              type="master"
              label={translations?.COMPANY_REGISTRATION?.FIELDS?.INDUSTRY?.LABEL || "Industry"}
              name="industry"
              value={formik.values.industry}
              onChange={formik.handleChange}
              options={industry}
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.INDUSTRY?.PLACEHOLDER || "Select Industry"}
              optionLabel="name"
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label={translations?.COMPANY_REGISTRATION?.FIELDS?.PARENT_COMPANY?.LABEL || "Parent Company"}
              name="parentCompany"
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.PARENT_COMPANY?.PLACEHOLDER || "Enter"}
              onChange={formik.handleChange}
              translate={true}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label={translations?.COMPANY_REGISTRATION?.FIELDS?.PAN?.LABEL || "PAN"}
              name="PAN"
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.PAN?.PLACEHOLDER || "Enter"}
              onChange={formik.handleChange}
              required={true}
              error={
                formik.touched.PAN && formik.errors.PAN ? formik.errors.PAN : ""
              }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label="Fax Number"
              name="faxNumber"
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.FAX_NUMBER?.PLACEHOLDER || "Enter"}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label="CIN"
              name="CIN"
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.CIN?.PLACEHOLDER || "Enter"}
              onChange={formik.handleChange}
              required={true}
              error={
                formik.touched.CIN && formik.errors.CIN ? formik.errors.CIN : ""
              }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label={translations?.COMPANY_REGISTRATION?.FIELDS?.REGISTERED_ADDRESS?.LABEL || "Registered Address"}
              name="registeredAddress"
              placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.REGISTERED_ADDRESS?.PLACEHOLDER || "Enter"}
              onChange={formik.handleChange}
              error={
                formik.touched.registeredAddress &&
                  formik.errors.registeredAddress
                  ? formik.errors.registeredAddress
                  : ""
              }
              required={true}
              translate={true}
            />
          </div>
          <div className="col-12 md:col-12 lg:col-12">
            <FileUploadTemplate file={setFile} />
          </div>
        </div>
      </div>
      <div className="button__container">
        <Button label={translations?.BUTTONS?.SUBMIT || "Submit"} onClick={formik.handleSubmit} />
      </div>
    </div>

  );
};

export default CompanyMasterForm;
