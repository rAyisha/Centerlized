import Button from "../../../../components/Button";
import InputField from "../../../../components/InputField";
import "./index.scss";
import { useFormik } from "formik";
import { useToast } from "../../../../components/Toast";
import LanguageContext from "../../../../config/LanguageContext";
import { useContext, useEffect } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import DropDownField from "../../../../components/DropDownField";
import DatePicker from "../../../../components/DatePicker";
import { getAllBranchTypeMiddleWare, getCurrencyMiddleWare, getTimeZoneMiddleWare, postBranchMiddleWare } from "../store/branchMiddleware";
import { useNavigate } from "react-router-dom";
import { convertToTamil } from "../../../../utility/baaminiConverter";
import { convertToKannada } from "../../../../utility/nudiConverter";
import { getAllYearTypeMiddleWare, getCityMiddleWare, getCountryMiddleWare, getStatesMiddleWare } from "../../CommonStore/commonMiddleware";
import BackNavigation from "../../../../components/BackArrowNavigation";
interface FormikValues {
  parentCompany?: string;
  branchCode?: string;
  branchName?: string;
  branchHead?: string;
  contactEmail?: string;
  contactPhone?: string;
  branchType?: any;
  dateEstablished?: string | null;
  branchAddress?: string;
  city?: any | string;
  state?: any | string;
  country?: any | string;
  financialYearEnd?: string | null;
  faxNo?: string;
  yearType?: any | string;
  displayName?: string;
  timezone?: any | string;
  currency?: any | string;
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
  yearType?: string;
  displayName?: string;
  timezone?: string;
  currency?: string;
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
  yearType: "",
  displayName: "",
  timezone: "",
  currency: ""
};

interface branchProps {

}

const BranchMasterForm = ({ }: branchProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()
  const { translations, language } = useContext(LanguageContext);
  const toast = useToast();

  const { getBranchType, country, states, citys, yeartype, company, companyID, currency, timezone,branchID } = useSelector((state: any) => {
    return {
      getBranchType: state.BranchReducers?.getBranchType?.data,
      currency: state.BranchReducers?.currency,
      timezone: state.BranchReducers?.timezone,
      country: state.CommonReducers?.country?.data,
      states: state.CommonReducers?.states?.data,
      citys: state.CommonReducers?.citys?.data,
      yeartype: state.CommonReducers?.yeartype?.data,
      company: state.CompanyReducers?.company?.data,
      companyID: state.dropdownDataReducers.companyID,
      branchID: state.dropdownDataReducers.branchID,
    };
  });

  console.log( branchID, "branchID")

  useEffect(() => {
    formik.setFieldValue("parentCompany", companyID)
  }, [company])

  useEffect(() => {
  const headers= {
      "company-id": companyID,
      "branch-id": branchID
    }
    const fetchData = async () => {
      try {
        await dispatch(getAllBranchTypeMiddleWare());
        await dispatch(getCountryMiddleWare());
        await dispatch(getAllYearTypeMiddleWare({headers}));
        await dispatch(getCurrencyMiddleWare());
        await dispatch(getTimeZoneMiddleWare())
      } catch (error) {
        toast.error("An error occurred while fetching data.");
        console.error("Error in fetching branch, country, or year data:", error);
      }
    };

    fetchData();
  }, []);



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
    if (!values.yearType) {
      errors.yearType = "Year Type is Required";
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
  const handleBranchSubmit = async (values: FormikValues) => {

    const payload = {
      "code": values?.branchCode,
      "displayName": values?.displayName,
      "name": languageChecker(values?.branchName ? values?.branchName : ""),
      "head": languageChecker(values?.branchHead ? values?.branchHead : ""),
      "dateEstablished": values?.dateEstablished,
      "email": languageChecker(values?.contactEmail ? values?.contactEmail : ""),
      "phoneNumber": values?.contactPhone,
      "faxNo": values?.faxNo,
      "financialYearEnd": values?.financialYearEnd,
      "branchAddress": languageChecker(values?.branchAddress ? values?.branchAddress : ""),
      "countryId": values.country?.id,
      "stateId": values?.state?.id,
      "cityId": values.city?.id,
      "companyId": values?.parentCompany,
      "branchTypeId": values?.branchType?.id,
      "yearTypeId": values?.yearType,
      "currencyId": values?.currency?.id,
      "timezoneId": values?.timezone?.id
    }
    console.log(payload,"payload")
    dispatch(postBranchMiddleWare({ payload })).then((res) => {
      if (res.meta.requestStatus === "rejected") {
        const error = res.payload?.response?.data?.error || "Something went wrong"
        toast.error(error)
      } else {
        toast.success("Branch added successfully");
        navigate("/branchmasterform")
      }
    })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  const handlechangeCountry = async (e: any) => {
    try {
      await dispatch(getStatesMiddleWare({ id: e?.value?.id }));
    } catch (error) {
      toast.error("Failed to load states.");
    }
  };

  const handlechangeState = async (e: any) => {
    try {
      await dispatch(getCityMiddleWare({ id: e?.value?.id }));
    } catch (error) {
      toast.error("Failed to load cities.");
    }
  };


  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      handleBranchSubmit(values);
    },
  });


  return (
    <div className="branch__master__form__container">
      <div className="form__top">
        <div className="form__header__area flex gap-2">
          <BackNavigation />
          <div className="form__title">{translations?.BRANCH_REGISTRATION?.HEADER_TEXT?.MAIN || "Branch Registration"}</div>
        </div>
        <div className="grid">
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              type="master"
              label={translations?.BRANCH_REGISTRATION?.FIELDS?.PARENT_COMPANY?.LABEL || "Parent Company"}
              name="parentCompany"
              value={formik.values.parentCompany}
              onChange={formik.handleChange}
              options={company}
              placeholder={translations?.BRANCH_REGISTRATION?.FIELDS?.PARENT_COMPANY?.PLACEHOLDER || "Select Parent Company"}
              required={true}
              optionLabel="displayName"
              optionValue="id"
              error={
                formik.touched.parentCompany && formik.errors.parentCompany
                  ? formik.errors.parentCompany
                  : ""
              }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              type="master"
              label={translations?.BRANCH_REGISTRATION?.FIELDS?.YEAR_TYPE?.LABEL || "Year Type"}
              name="yearType"
              value={formik.values.yearType}
              onChange={formik.handleChange}
              options={yeartype}
              optionLabel="name"
              optionValue="id"
              placeholder={translations?.BRANCH_REGISTRATION?.FIELDS?.YEAR_TYPE?.PLACEHOLDER || "Select Year Type"}
              required
              error={
                formik.touched.yearType && formik.errors.yearType
                  ? formik.errors.yearType
                  : ""
              }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label={translations?.BRANCH_REGISTRATION?.FIELDS?.BRANCH_CODE?.LABEL || "Branch Code"}
              name="branchCode"
              placeholder={translations?.BRANCH_REGISTRATION?.FIELDS?.BRANCH_CODE?.PLACEHOLDER || "Enter"}
              onChange={formik.handleChange}
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
              required={true}
              translate={true}
            />
          </div>

          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label={translations?.BRANCH_REGISTRATION?.FIELDS?.BRANCH_NAME?.LABEL || "Branch Name"}
              name="branchName"
              placeholder={translations?.BRANCH_REGISTRATION?.FIELDS?.BRANCH_NAME?.PLACEHOLDER || "Enter"}
              onChange={formik.handleChange}
              error={
                formik.touched.branchName && formik.errors.branchName
                  ? formik.errors.branchName
                  : ""
              }
              required={true}
              translate={true}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label={translations?.BRANCH_REGISTRATION?.FIELDS?.BRANCH_HEAD?.LABEL || "Branch Head/Manager"}
              name="branchHead"
              placeholder={translations?.BRANCH_REGISTRATION?.FIELDS?.BRANCH_HEAD?.PLACEHOLDER || "Enter"}
              onChange={formik.handleChange}
              translate={true}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label={translations?.BRANCH_REGISTRATION?.FIELDS?.CONTACT_EMAIL?.LABEL || "Contact Email"}
              name="contactEmail"
              placeholder={translations?.BRANCH_REGISTRATION?.FIELDS?.CONTACT_EMAIL?.PLACEHOLDER || "Enter"}
              onChange={formik.handleChange}
              error={
                formik.touched.contactEmail && formik.errors.contactEmail
                  ? formik.errors.contactEmail
                  : ""
              }
              required={true}
              translate={true}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label={translations?.BRANCH_REGISTRATION?.FIELDS?.CONTACT_PHONE?.LABEL || "Contact Phone Number"}
              name="contactPhone"
              placeholder={translations?.BRANCH_REGISTRATION?.FIELDS?.CONTACT_PHONE?.PLACEHOLDER || "Enter"}
              onChange={formik.handleChange}
              error={
                formik.touched.contactPhone && formik.errors.contactPhone
                  ? formik.errors.contactPhone
                  : ""
              }
              required={true}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              type="master"
              label={translations?.BRANCH_REGISTRATION?.FIELDS?.BRANCH_TYPE?.LABEL || "Branch Type"}
              name="branchType"
              value={formik.values.branchType}
              onChange={formik.handleChange}
              options={getBranchType}
              placeholder={translations?.BRANCH_REGISTRATION?.FIELDS?.BRANCH_TYPE?.PLACEHOLDER || "Select Branch Type"}
              optionLabel="name"
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DatePicker
              type="master"
              label={translations?.BRANCH_REGISTRATION?.FIELDS?.DATE_ESTABLISHED?.LABEL || "Date Established"}
              value={formik.values.dateEstablished}
              name="dateEstablished"
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label={translations?.BRANCH_REGISTRATION?.FIELDS?.BRANCH_ADDRESS?.LABEL || "Branch Address"}
              name="branchAddress"
              placeholder={translations?.BRANCH_REGISTRATION?.FIELDS?.BRANCH_ADDRESS?.PLACEHOLDER || "Enter"}
              value={formik.values.branchAddress}
              onChange={formik.handleChange}
              error={
                formik.touched.branchAddress && formik.errors.branchAddress
                  ? formik.errors.branchAddress
                  : ""
              }
              required={true}
              translate={true}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              type="master"
              label={translations?.BRANCH_REGISTRATION?.FIELDS?.COUNTRY?.LABEL || "Country"}
              name="country"
              value={formik.values.country}
              onChange={(e) => { formik.handleChange(e); handlechangeCountry(e) }}
              options={country}
              optionLabel="name"
              placeholder={translations?.BRANCH_REGISTRATION?.FIELDS?.COUNTRY?.PLACEHOLDER || "Select Country"}
              required={true}
              error={
                formik.touched.country && formik.errors.country
                  ? formik.errors.country
                  : ""
              }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              type="master"
              label={translations?.BRANCH_REGISTRATION?.FIELDS?.STATE?.LABEL || "State"}
              name="state"
              value={formik.values.state}
              onChange={(e) => { formik.handleChange(e); handlechangeState(e) }}
              options={states}
              optionLabel="name"
              placeholder={translations?.BRANCH_REGISTRATION?.FIELDS?.STATE?.PLACEHOLDER || "Select State"}
              required={true}
              error={
                formik.touched.state && formik.errors.state
                  ? formik.errors.state
                  : ""
              }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              type="master"
              label={translations?.BRANCH_REGISTRATION?.FIELDS?.CITY?.LABEL || "City"}
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              options={citys}
              optionLabel="name"
              placeholder={translations?.BRANCH_REGISTRATION?.FIELDS?.CITY?.PLACEHOLDER || "Select City"}
              required={true}
              error={
                formik.touched.city && formik.errors.city
                  ? formik.errors.city
                  : ""
              }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DatePicker
              type="master"
              label={translations?.BRANCH_REGISTRATION?.FIELDS?.FINANCIAL_YEAR_END?.LABEL || "Financial Year End"}
              value={formik.values.financialYearEnd}
              name="financialYearEnd"
              onChange={formik.handleChange}
              required={true}
              error={
                formik.touched.financialYearEnd && formik.errors.financialYearEnd
                  ? formik.errors.financialYearEnd
                  : ""
              }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              type="master"
              label={translations?.BRANCH_REGISTRATION?.FIELDS?.FAX_NUMBER?.LABEL || "Fax Number"}
              name="faxNo"
              placeholder={translations?.BRANCH_REGISTRATION?.FIELDS?.FAX_NUMBER?.PLACEHOLDER || "Enter"}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              type="master"
              label={"Currency"}
              name="currency"
              value={formik.values.currency}
              onChange={formik.handleChange}
              options={currency}
              optionLabel="isoCode"
              placeholder={"Select Currency"}
              // required={true}
              error={
                formik.touched.currency && formik.errors.currency
                  ? formik.errors.currency
                  : ""
              }
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              type="master"
              label={"Timezone"}
              name="timezone"
              value={formik.values.timezone}
              onChange={formik.handleChange}
              options={timezone}
              optionLabel="name"
              placeholder={"Select Timezone"}
              error={
                formik.touched.timezone && formik.errors.timezone
                  ? formik.errors.timezone
                  : ""
              }
            />
          </div>
        </div>
      </div>
      <div className="button__container">
        <Button label={translations?.BUTTONS?.SUBMIT || "Submit"} onClick={formik.handleSubmit} />
      </div>
    </div>
  );
};

export default BranchMasterForm;
