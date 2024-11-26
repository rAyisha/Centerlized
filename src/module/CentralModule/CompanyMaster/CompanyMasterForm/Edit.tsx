import Button from "../../../../components/Button";
import InputField from "../../../../components/InputField";
import "./index.scss";
import { useFormik } from "formik";
import { useToast } from "../../../../components/Toast";
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
    patchCompanyMiddleWare,
} from "../store/companyMiddleware";
import { useNavigate, useParams } from "react-router-dom";
import { getCityMiddleWare, getCountryMiddleWare, getStatesMiddleWare } from "../../CommonStore/commonMiddleware";
import LanguageContext from "../../../../config/LanguageContext";
import { convertToTamil } from "../../../../utility/baaminiConverter";
import { convertToKannada } from "../../../../utility/nudiConverter";
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


const CompanyMasterFormEdit = ({ }: signupProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
    const { id } = useParams();
    const { translations, language } = useContext(LanguageContext);
    const [file, setFile] = useState([]);
    const [countrys, setCountrys] = useState([]);
    const [city, setCity] = useState([]);
    const [state, setState] = useState([]);
    const [legalentite, setLegalentity] = useState([]);
    const [industryes, setIndustryes] = useState([]);
    const [ip, setIp] = useState("");

    const { isLoading, country, states, citys, legalentity, industry } = useSelector((state: any) => {
        return {
            isLoading: state.CompanyReducers?.isLoading,
            country: state.CommonReducers?.country?.data,
            states: state.CommonReducers?.states?.data,
            citys: state.CommonReducers?.citys?.data,
            legalentity: state.CompanyReducers?.legalentity?.data,
            industry: state.CompanyReducers?.industry?.data
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
            email: res?.email,
            phoneNumber: res?.phoneNumber,
            websiteURL: res?.websiteURL,
            parentCompany: res?.parentCompany,
            PAN: res?.pan,
            faxNumber: res?.faxNo,
            CIN: res?.cin,
            registeredAddress: res?.registeredAddress,
        };
        formik.setValues(updatedValues);
    };

    const ApiCalling = async () => {
        try {
            const res = await dispatch(getCompanyByIdMiddleWare({ id }));    
            if (res?.payload?.data) {
                setFormikValues(res.payload.data);
                // Fetch Country
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
                                        // Fetch City
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
                    const legalEntityRes = await dispatch(getAllLegalEntityMiddleWare());
                    const legalEntities = legalEntityRes?.payload?.data;
                    if (legalEntities) {
                        const setLegalEntity = legalEntities.find(
                            (entity: any) => entity.id === res.payload.data.legalEntityTypeId
                        );
                        if (setLegalEntity) {
                            formik.setFieldValue("legalEntityType", setLegalEntity.name);
                            setLegalentity(legalEntities);
                        }
                    }
                } catch (error) {
                    console.error("Error fetching legal entities:", error);
                }
                // Fetch Industry
                try {
                    const industryRes = await dispatch(getAllIndustryMiddleWare());
                    const industries = industryRes?.payload?.data;
                    if (industries) {
                        const setIndustry = industries.find(
                            (industry: any) => industry.id === res.payload.data.legalEntityTypeId
                        );
                        if (setIndustry) {
                            formik.setFieldValue("industry", setIndustry.name);
                            setIndustryes(industries);
                        }
                    }
                } catch (error) {
                    console.error("Error fetching industries:", error);
                }
            }
        } catch (error) {
            console.error("Error fetching company data:", error);
        }
    };

    useEffect(() => {
        ApiCalling();
        fetchIp();
    }, [id]);

    const handleCountrychange = async (e: any) => {
        formik.setFieldValue("city", "");
        setCity([])
        try {
            dispatch(getCountryMiddleWare()).then((countryRes) => {
                const countries = countryRes?.payload?.data;
                if (countries) {
                    const setCountry = countries.find((country: any) => country?.name === e?.value);
                    if (setCountry) {
                        formik.setFieldValue("country", setCountry.name);
                        setCountrys(countries);
                        dispatch(getStatesMiddleWare({ id: setCountry.id })).then((stateRes) => {
                            const states = stateRes?.payload?.data;
                            if (states) {
                                setState(states);
                            }
                        })
                    }
                }
            });
        }
        catch (error) {
            console.error("Dispatch failed", error);
        }
    }

    const handleStatechange = async (e: any) => {
        console.log(e.value, "test")
        try {
            formik.setFieldValue("state", e.value);
            const setState = states.find((states: any) => states.name === e?.value)
            if (setState) {
                dispatch(getCityMiddleWare({ id: setState.id })).then((cityRes) => {
                    const citys = cityRes?.payload?.data;
                    if (citys) {
                        setCity(citys)
                    }
                })
            }
        }
        catch (error) {
            console.error("Dispatch failed", error);
        }
    }
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

    const handleSubmit = async (value: FormikValues) => {
        const countryId = country.find((countrys: any) => countrys.name === value.country);
        const statesId = states.find((states: any) => states.name === value.state);
        const citysId = citys.find((city: any) => city.name === value.city);
        const legalentityId = legalentity.find((legalentity: any) => legalentity.name === value.legalEntityType);
        const industryId = industry.find((industry: any) => industry.name === value.industry);
        const mainValue = {
            code: value.companyCode,
            name: languageChecker(value?.companyName ? value?.companyName : ""),
            tin: value.taxIdentificationNumber,
            gstin: value.GSTIN,
            incorporationDate: value.incorporationDate,
            registeredAddress: languageChecker(value?.registeredAddress ? value?.registeredAddress : ""),
            email: languageChecker(value?.email ? value?.email : ""),
            phoneNumber: value.phoneNumber,
            websiteURL: value.websiteURL,
            websiteLogo: file[0]?.objectURL,
            parentCompany: languageChecker(value?.parentCompany ? value?.parentCompany : ""),
            displayName: languageChecker(value?.displayName ? value?.displayName : ""), 
            pan: value.PAN,
            faxNo: value.faxNumber,
            cin: value.CIN,
            legalEntityTypeId: legalentityId?.id,
            industryTypeId: industryId?.id,
            countryId: countryId?.id,
            stateId: statesId?.id,
            cityId: citysId?.id,
            registrationNumber:value.registrationNumber
        };
        console.log(mainValue,"mainValue")
        try {
            await dispatch(patchCompanyMiddleWare({ value: mainValue, Id: id })).then((res: any) => {
                if (res?.payload?.message === "Company Updated Successfully") {
                    navigate("/companymasterform")
                }
            })
        } catch (error) {
            console.error("Dispatch failed", error);
        }
    };


    const formik = useFormik({
        initialValues,
        onSubmit: (value) => {
            handleSubmit(value)
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
                    <div className="form__title">{translations?.COMPANY_REGISTRATION?.HEADER_TEXT.MAIN || "Company Registration"}</div>
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
                            onChange={formik.handleChange}
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
                            translate={true}
                            onChange={formik.handleChange}
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
                            translate={true}
                            onChange={formik.handleChange}
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
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.TAX_IDENTIFICATION_NUMBER?.LABEL || "Tax Identification Number"}
                            name="taxIdentificationNumber"
                            placeholder=""
                            value={formik.values.taxIdentificationNumber}
                            required={true}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label="GSTIN"
                            name="GSTIN"
                            placeholder=""
                            value={formik.values.GSTIN}
                            required={true}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <DatePicker
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.INCORPORATION_DATE?.LABEL || "Incorporation Date"}
                            value={formik.values.incorporationDate}
                            name="incorporationDate"
                            required={true}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <DropDownField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.COUNTRY?.LABEL || "Country"}
                            name="country"
                            value={formik.values.country}
                            onChange={(e) => { formik.handleChange; handleCountrychange(e) }}
                            options={countrys}
                            optionValue="name"
                            optionLabel="name"
                            placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.COUNTRY?.LABEL || "Select Country"}
                            required
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
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.STATE?.LABEL || "State"}
                            name="state"
                            value={formik.values.state}
                            onChange={(e) => { formik.handleChange; handleStatechange(e) }}
                            options={state}
                            placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.STATE?.LABEL || "Select State"}
                            optionValue="name"
                            optionLabel="name"
                            required
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
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.CITY?.LABEL || "City"}
                            name="city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            options={city}
                            placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.CITY?.LABEL || "Select City"}
                            optionValue="name"
                            optionLabel="name"
                            required
                            error={
                                formik.touched.city && formik.errors.city
                                    ? formik.errors.city
                                    : ""
                            }
                        />
                    </div>

                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.CORPORATE_EMAIL?.LABEL || "Corporate Email Address"}
                            name="email"
                            placeholder=""
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            translate={true}
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.PHONE_NUMBER?.LABEL || "Phone Number"}
                            name="phoneNumber"
                            placeholder=""
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber}
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
                            placeholder=""
                            onChange={formik.handleChange}
                            value={formik.values.websiteURL}
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
                            options={legalentite}
                            placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.LEGAL_ENTITY_TYPE?.LABEL || "Select Legal Entity"}
                            optionLabel="name"
                            optionValue="name"
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <DropDownField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.INDUSTRY?.LABEL || "Industry"}
                            name="industry"
                            value={formik.values.industry}
                            onChange={formik.handleChange}
                            options={industryes}
                            placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.INDUSTRY?.LABEL || "Select Industry"}
                            optionValue="name"
                            optionLabel="name"
                        />
                    </div>

                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.PARENT_COMPANY?.LABEL || "Parent Company"}
                            name="parentCompany"
                            placeholder=""
                            value={formik.values.parentCompany}
                            onChange={formik.handleChange}
                            translate={true}
                        />
                    </div>

                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label="PAN"
                            name="PAN"
                            placeholder=""
                            value={formik.values.PAN}
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
                            placeholder=""
                            value={formik.values.faxNumber}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label="CIN"
                            name="CIN"
                            placeholder=""
                            onChange={formik.handleChange}
                            value={formik.values.CIN}
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
                            placeholder=""
                            value={formik.values.registeredAddress}
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
                <Button label={translations?.BUTTONS?.UPDATE || "Submit"} onClick={formik.handleSubmit} />
            </div>
        </div>
    );
};

export default CompanyMasterFormEdit;
