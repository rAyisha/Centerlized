import Button from "../../../../components/Button";
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
import { getAllBranchTypeMiddleWare, getBranchByIdMiddleWare, getCurrencyMiddleWare, getTimeZoneMiddleWare, patchBranchMiddleWare, postBranchMiddleWare } from "../store/branchMiddleware";
import { useNavigate, useParams } from "react-router-dom";
import { convertToTamil } from "../../../../utility/baaminiConverter";
import { convertToKannada } from "../../../../utility/nudiConverter";
import { getAllYearTypeMiddleWare, getCityMiddleWare, getCountryMiddleWare, getStatesMiddleWare } from "../../CommonStore/commonMiddleware";
import BackNavigation from "../../../../components/BackArrowNavigation";
import ApiLoader from "../../../../components/ApiLoader";
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
    timezone?:any | string;
    currency?:any | string;
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
    timezone?:any | string;
    currency?:any | string;
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
    timezone:'',
    currency:""
};

interface branchProps {

}

const BranchMasterEditForm = ({ }: branchProps) => {
    const [countrys, setCountrys] = useState<any>();
    const [city, setCity] = useState<any>();
    const [state, setState] = useState<any>();
    const [currencyList, setCurrencyList] = useState<any>();
    const [timeZones, setTimeZone] = useState<any>();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
    const toast = useToast();
    const { id } = useParams();
    const { translations, language } = useContext(LanguageContext);

    const { getBranchType, yeartype, company,companyID,branchID, country, states, citys, isLoading,currency,timezone } = useSelector((state: any) => {
        return {
            getBranchType: state.BranchReducers?.getBranchType?.data,
            yeartype: state.CommonReducers?.yeartype?.data,
            company: state.CompanyReducers?.company?.data,
            country: state.CommonReducers?.country?.data,
            states: state.CommonReducers?.states?.data,
            citys: state.CommonReducers?.citys?.data,
            isLoading: state.CommonReducers?.isLoading,
            currency: state.BranchReducers?.currency,
            timezone: state.BranchReducers?.timezone,
            companyID: state.dropdownDataReducers.companyID,
            branchID: state.dropdownDataReducers.branchID,
        };
    });

    const setFormik = (res: any) => {
        const UpdatedValue = {
            parentCompany: res?.companyId,
            branchCode: res?.code,
            branchName: res?.name,
            branchHead: res?.head,
            contactEmail: res?.email,
            contactPhone: res?.phoneNumber,
            branchType: res?.branchTypeId,
            dateEstablished: res?.dateEstablished,
            branchAddress: res?.branchAddress,
            city: res?.cityId,
            state: res?.stateId,
            country: res?.countryId,
            financialYearEnd: res?.financialYearEnd,
            faxNo: res?.faxNo,
            yearType: res?.yearTypeId,
            displayName: res?.displayName,
            timezone:"",
            currency:"",
        }
        formik.setValues(UpdatedValue);
    }

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
                const branchRes = await dispatch(getBranchByIdMiddleWare({ id: id }));
                if (branchRes?.payload?.data) {
                    setFormik(branchRes.payload.data);
                    const countryRes = await dispatch(getCountryMiddleWare());
                    const countries = countryRes?.payload?.data;
                    if (countries) {
                        const setCountry = countries.find((country: any) => country.id === branchRes.payload.data.countryId);
                        if (setCountry) {
                            formik.setFieldValue("country", setCountry.name);
                            setCountrys(countries);
                            const stateRes = await dispatch(getStatesMiddleWare({ id: setCountry.id }));
                            const states = stateRes?.payload?.data;
                            if (states) {
                                const setstates = states.find((state: any) => state.id === branchRes.payload.data.stateId);
                                if (setstates) {
                                    formik.setFieldValue("state", setstates.name);
                                    setState(states);
                                    const cityRes = await dispatch(getCityMiddleWare({ id: setstates.id }));
                                    const citys = cityRes?.payload?.data;
                                    if (citys) {
                                        const setcitys = citys.find((city: any) => city.id === branchRes.payload.data.cityId);
                                        if (setcitys) {
                                            formik.setFieldValue("city", setcitys.name);
                                            setCity(citys);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                try {
                    const currency = await dispatch(getCurrencyMiddleWare());

                    const currencys = currency?.payload?.data;
                    if (currencys) {
                        const setcurrency = currencys.find(
                            (currencysList: any) => currencysList.id === branchRes.payload.data.currencyId
                        );

                        if (setcurrency) {
                            formik.setFieldValue("currency", setcurrency.isoCode);
                            setCurrencyList(currencys);
                        }
                    }
                } catch (error) {
                    console.error("Error fetching legal entities:", error);
                }

                //featch time zone

                try {
                    const timezone = await dispatch(getTimeZoneMiddleWare());
                      console.log(timezone,"find")
                    const timezones = timezone?.payload?.data;
                    if (timezones) {
                        const settimezone = timezones.find(
                            (timezoneList: any) => timezoneList.id === branchRes.payload.data.timezoneId
                        );

                        if (settimezone) {
                            formik.setFieldValue("timezone", settimezone.name);
                            setTimeZone(timezones);
                        }
                    }
                } catch (error) {
                    console.error("Error fetching legal entities:", error);
                }

            } catch (error) {
                toast.error("An error occurred while fetching data.");
            }
        };

        fetchData();
    }, [company]);


    const handleCountrychange = async (e: any) => {
        formik.setFieldValue("city", "");
        setCity([])
        try {
            dispatch(getCountryMiddleWare()).then((countryRes) => {
                console.log(countryRes?.payload?.data, "find");

                const countries = countryRes?.payload?.data;
                if (countries) {
                    const setCountry = countries.find((country: any) => country?.name === e?.value);
                    console.log(setCountry.id, "setCountry");
                    if (setCountry) {
                        formik.setFieldValue("country", setCountry.name);
                        setCountrys(countries);
                        dispatch(getStatesMiddleWare({ id: setCountry.id })).then((stateRes) => {
                            const states = stateRes?.payload?.data;
                            console.log(states, "statesone")
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
            const setState = state.find((states: any) => states.name === e?.value)
            console.log(setState, "setStateone")
            if (setState) {
                dispatch(getCityMiddleWare({ id: setState.id })).then((cityRes) => {
                    const citys = cityRes?.payload?.data;
                    console.log(citys, "testtwo")
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
    const handleBranchSubmit = async (values: FormikValues) => {
        console.log(values, "values one")
        const countryId = country.find((countrys: any) => countrys.name === values.country);
        const statesId = states.find((states: any) => states.name === values.state);
        const citysId = citys.find((city: any) => city.name === values.city);
        const currencyId = currency.find((currencys: any) => currencys.isoCode === values.currency);
        const timezoneId = timezone.find((timezone: any) => timezone.name === values.timezone);

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
            "countryId": countryId?.id,
            "stateId": statesId?.id,
            "cityId": citysId?.id,
            "companyId": values?.parentCompany,
            "branchTypeId": values?.branchType,
            // "createdBy": 1,
            "yearTypeId": values?.yearType,
            "currencyId": currencyId?.id,
            "timezoneId": timezoneId?.id
        }
        console.log(payload,"payload")
        dispatch(patchBranchMiddleWare({ value: payload, Id: id })).then((res) => {
            if (res.meta.requestStatus === "rejected") {
                const error = res.payload?.response?.data?.error || "Something went wrong"
                toast.error(error)
            } else {
                toast.success("Branch Updated successfully");
                navigate("/branchmasterform")
            }
        })
            .catch(() => {
                toast.error("Something went wrong");
            });
    };


    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {
            console.log(values, "Branch formik values");
            handleBranchSubmit(values);
        },
    });

    if (isLoading) {
        return <ApiLoader />;
    }

    return (
        <div className="branch__master__form__container">
            <div className="form__top">
                <div className="form__header__area flex gap-2">
                    <BackNavigation />
                    <div className="form__title">{translations?.BRANCH_REGISTRATION?.HEADER_TEXT?.MAIN || "Branch Edit"}</div>
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
                            disabled
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
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label={translations?.BRANCH_REGISTRATION?.FIELDS?.BRANCH_CODE?.LABEL || "Branch Code"}
                            name="branchCode"
                            placeholder={translations?.BRANCH_REGISTRATION?.FIELDS?.BRANCH_CODE?.PLACEHOLDER || "Enter"}
                            onChange={formik.handleChange}
                            value={formik.values.branchCode}
                        />
                    </div>

                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label={translations?.COMPANY_REGISTRATION?.FIELDS?.DISPLAY_NAME?.LABEL || "Display Name"}
                            name="displayName"
                            placeholder={translations?.COMPANY_REGISTRATION?.FIELDS?.DISPLAY_NAME?.PLACEHOLDER || "Enter"}
                            onChange={formik.handleChange}
                            value={formik.values.displayName}
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            type="master"
                            label={translations?.BRANCH_REGISTRATION?.FIELDS?.BRANCH_NAME?.LABEL || "Branch Name"}
                            name="branchName"
                            placeholder={translations?.BRANCH_REGISTRATION?.FIELDS?.BRANCH_NAME?.PLACEHOLDER || "Enter"}
                            onChange={formik.handleChange}
                            value={formik.values.branchName}
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
                            value={formik.values.branchHead}
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
                            value={formik.values.contactEmail}
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
                            value={formik.values.contactPhone}
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
                            optionValue="id"
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
                            onChange={(e) => { formik.handleChange; handleCountrychange(e) }}
                            options={countrys}
                            optionValue="name"
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
                            onChange={(e) => { formik.handleChange; handleStatechange(e) }}
                            options={state}
                            optionValue="name"
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
                            options={city}
                            optionValue="name"
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
                            value={formik.values.faxNo}
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <DropDownField
                            type="master"
                            label={"Currency"}
                            name="currency"
                            value={formik.values.currency}
                            onChange={formik.handleChange}
                            options={currencyList}
                             optionLabel="isoCode"
                            optionValue="isoCode"
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
                            options={timeZones}
                            optionLabel="name"
                            optionValue="name"
                            placeholder={"Select Timezone"}
                            // required={true}
                            error={
                                formik.touched.timezone && formik.errors.timezone
                                    ? formik.errors.timezone
                                    : ""
                            }
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4"></div>
                </div>
            </div>
            <div className="button__container">
                <Button label={translations?.BUTTONS?.UPDATE || "Update"} onClick={formik.handleSubmit} />
            </div>
        </div>
    );
};

export default BranchMasterEditForm;
