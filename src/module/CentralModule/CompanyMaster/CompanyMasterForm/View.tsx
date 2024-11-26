import Button from "../../../../components/Button";
import InputField from "../../../../components/InputField";
import "./index.scss";
import { useFormik } from "formik";
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
    getCompanyByIdMiddleWare,
} from "../store/companyMiddleware";
import { useNavigate, useParams } from "react-router-dom";
import { getCityMiddleWare, getCountryMiddleWare, getStatesMiddleWare } from "../../CommonStore/commonMiddleware";
import LanguageContext from "../../../../config/LanguageContext";
import ApiLoader from "../../../../components/ApiLoader";
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
    city?: string;
    state?: string;
    country?: string;
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


const CompanyMasterFormView = ({ }: signupProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
    const { id } = useParams();
    const { translations } = useContext(LanguageContext);
    const [file, setFile] = useState<any>("");
    const [countrys, setCountrys] = useState<any>();
    const [city, setCity] = useState<any>();
    const [state, setState] = useState<any>();
    const [legalentite, setLegalentity] = useState<any>();
    const [industryes, setIndustryes] = useState<any>();
    const [ip, setIp] = useState("");
    // const toast = useToast();


    const { isLoading } = useSelector((state: any) => {
        return {
            isLoading: state.CompanyReducers?.isLoading,
        };
    });



    const fetchIp = async () => {
        try {
            const response = await axios.get("https://api.ipify.org?format=json");
            setIp(response.data.ip);
        } catch (error) {
            console.error("Error fetching IP address:", error);
        }
    };


    const ApiCalling = async () => {
        try {
          const res = await dispatch(getCompanyByIdMiddleWare({ id }));
      
          if (res?.payload?.data) {
            setFormikValues(res.payload.data);
      
            // Fetch Countries
            try {
              const countryRes = await dispatch(getCountryMiddleWare());
      
              const countries = countryRes?.payload?.data;
              if (countries) {
                const setCountry = countries.find((country: any) => country.id === res.payload.data.countryId);
      
                if (setCountry) {
                  formik.setFieldValue("country", setCountry.name);
                  setCountrys(countries);
      
                  // Fetch States
                  try {
                    const stateRes = await dispatch(getStatesMiddleWare({ id: setCountry.id }));
                    const states = stateRes?.payload?.data;
                    if (states) {
                      const setstates = states.find((States: any) => States.id === res.payload.data.stateId);
      
                      if (setstates) {
                        formik.setFieldValue("state", setstates.name);
                        setState(states);
      
                        // Fetch Cities
                        try {
                          const cityRes = await dispatch(getCityMiddleWare({ id: setstates.id }));
                          const citys = cityRes?.payload?.data;
                          if (citys) {
                            const setcitys = citys.find((Citys: any) => Citys.id === res.payload.data.cityId);
      
                            if (setcitys) {
                              formik.setFieldValue("city", setcitys.name);
                              setCity(citys);
                            }
                          }
                        } catch (error) {
                          console.error("Error fetching cities:", error);
                        }
                      }
                    }
                  } catch (error) {
                    console.error("Error fetching states:", error);
                  }
                }
              }
            } catch (error) {
              console.error("Error fetching countries:", error);
            }
      
            // Fetch Legal Entities
            try {
              const legalentity = await dispatch(getAllLegalEntityMiddleWare());
      
              const legalentitys = legalentity?.payload?.data;
              if (legalentitys) {
                const setlegalentity = legalentitys.find(
                  (entitys: any) => entitys.id === res.payload.data.legalEntityTypeId
                );
      
                if (setlegalentity) {
                  formik.setFieldValue("legalEntityType", setlegalentity.name);
                  setLegalentity(legalentitys);
                }
              }
            } catch (error) {
              console.error("Error fetching legal entities:", error);
            }
      
            // Fetch Industries
            try {
              const industry = await dispatch(getAllIndustryMiddleWare());
              const industrys = industry?.payload?.data;
      
              if (industrys) {
                const setIndustrys = industrys.find(
                  (entitys: any) => entitys.id === res.payload.data.industryTypeId
                );
      
                if (setIndustrys) {
                  formik.setFieldValue("industry", setIndustrys.name);
                  setIndustryes(industrys);
                }
              }
            } catch (error) {
              console.error("Error fetching industries:", error);
            }
          }
        } catch (error) {
          console.error("Error fetching company details:", error);
        }
      };
      


    const setFormikValues = (res: any) => {
        console.log(res, "newres")
        const updatedValues = {
            companyCode: res?.code,
            companyName: res?.name,
            displayName: res?.displayName,
            registrationNumber: res?.registrationNumber,
            taxIdentificationNumber: res?.tin,
            GSTIN: res?.gstin,
            incorporationDate: res?.incorporationDate,
            city: res?.cityId,
            state: res?.stateId,
            country: res?.countryId,
            email: res?.email,
            phoneNumber: res?.phoneNumber,
            websiteURL: res?.websiteURL,
            legalEntityType: res?.legalEntityTypeId,
            industry: res?.industryTypeId,
            parentCompany: res?.parentCompany,
            PAN: res?.pan,
            faxNumber: res?.faxNo,
            CIN: res?.cin,
            registeredAddress: res?.registeredAddress,
        };
        formik.setValues(updatedValues);
    };

    useEffect(() => {
        ApiCalling();
        fetchIp();
    }, [id]);

    const handleSubmit = () => {
        navigate("/companymasterform")
    };

    const formik = useFormik({
        initialValues,
        onSubmit: () => {
            handleSubmit()
        }
    });
    
    if (isLoading) {
        return <ApiLoader />;
    }
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
                            disabled
                            placeholder=""
                            value={formik?.values?.companyCode}
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.COMPANY_NAME?.LABEL || "Company Name"}
                            name="companyName"
                            placeholder=""
                            value={formik?.values?.companyName}
                            required
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.DISPLAY_NAME?.LABEL || "Display Name"}
                            name="displayName"
                            placeholder=""
                            value={formik.values.displayName}
                            required
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.REGISTRATION_NUMBER?.LABEL || "Registration Number"}
                            name="registrationNumber"
                            placeholder=""
                            value={formik.values.registrationNumber}
                            required
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.TAX_IDENTIFICATION_NUMBER?.LABEL || "Tax Identification Number"}
                            name="taxIdentificationNumber"
                            placeholder=""
                            value={formik.values.taxIdentificationNumber}
                            required
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label="GSTIN"
                            name="GSTIN"
                            placeholder=""
                            value={formik.values.GSTIN}
                            required
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <DatePicker
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.INCORPORATION_DATE?.LABEL || "Incorporation Date"}
                            value={formik.values.incorporationDate}
                            name="incorporationDate"
                            disabled
                            required
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <DropDownField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.COUNTRY?.LABEL || "Country"}
                            name="country"
                            value={formik.values.country}
                            onChange={formik.handleChange}
                            options={countrys}
                            optionValue="name"
                            optionLabel="name"
                            placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.COUNTRY?.LABEL || "Select Country"}
                            required
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <DropDownField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.STATE?.LABEL || "State"}
                            name="state"
                            value={formik.values.state}
                            options={state}
                            placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.STATE?.LABEL || "Select State"}
                            optionValue="name"
                            optionLabel="name"
                            required
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <DropDownField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.CITY?.LABEL || "City"}
                            name="city"
                            value={formik.values.city}
                            options={city}
                            placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.CITY?.LABEL || "Select City"}
                            optionValue="name"
                            optionLabel="name"
                            required
                            disabled
                        />
                    </div>

                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.CORPORATE_EMAIL?.LABEL || "Corporate Email Address"}
                            name="email"
                            placeholder=""
                            value={formik.values.email}
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.PHONE_NUMBER?.LABEL || "Phone Number"}
                            name="phoneNumber"
                            placeholder=""
                            value={formik.values.phoneNumber}
                            required
                            disabled
                        />
                    </div>

                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.WEBSITE_URL?.LABEL || "Website URL"}
                            name="websiteURL"
                            placeholder=""
                            value={formik.values.websiteURL}
                            required
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <DropDownField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.LEGAL_ENTITY_TYPE?.LABEL || "Legal Entity Type"}
                            name="legalEntityType"
                            value={formik.values.legalEntityType}
                            options={legalentite}
                            placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.LEGAL_ENTITY_TYPE?.LABEL || "Select Legal Entity"}
                            optionLabel="name"
                            optionValue="name"
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <DropDownField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.INDUSTRY?.LABEL || "Industry"}
                            name="industry"
                            value={formik.values.industry}
                            options={industryes}
                            placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.INDUSTRY?.LABEL || "Select Industry"}
                            optionValue="name"
                            optionLabel="name"
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.PARENT_COMPANY?.LABEL || "Parent Company"}
                            name="parentCompany"
                            placeholder=""
                            value={formik.values.parentCompany}
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label="PAN"
                            name="PAN"
                            placeholder=""
                            value={formik.values.PAN}
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label="Fax Number"
                            name="faxNumber"
                            placeholder=""
                            value={formik.values.faxNumber}
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label="CIN"
                            name="CIN"
                            placeholder=""
                            value={formik.values.CIN}
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.REGISTERED_ADDRESS?.LABEL || "Registered Address"}
                            name="registeredAddress"
                            placeholder=""
                            value={formik.values.registeredAddress}
                            disabled
                        />
                    </div>

                    <div className="col-12 md:col-12 lg:col-12">
                        <FileUploadTemplate file={setFile} />
                    </div>
                </div>
            </div>
            <div className="button__container">
                <Button label={translations?.BUTTONS?.BACK || "Back"} onClick={formik.handleSubmit} />
            </div>
        </div>

    );
};

export default CompanyMasterFormView;
