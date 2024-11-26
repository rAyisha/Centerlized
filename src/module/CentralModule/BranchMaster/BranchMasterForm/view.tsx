import InputField from "../../../../components/InputField";
import "./index.scss";
import { useFormik } from "formik";
import LanguageContext from "../../../../config/LanguageContext";
import { useContext, useEffect, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import DropDownField from "../../../../components/DropDownField";
import DatePicker from "../../../../components/DatePicker";
import { getAllBranchTypeMiddleWare, getBranchByIdMiddleWare, getCurrencyMiddleWare, getTimeZoneMiddleWare, postBranchMiddleWare } from "../store/branchMiddleware";
import { useNavigate, useParams } from "react-router-dom";
import { getAllYearTypeMiddleWare, getCityMiddleWare, getCountryMiddleWare, getStatesMiddleWare } from "../../CommonStore/commonMiddleware";
import BackNavigation from "../../../../components/BackArrowNavigation";
import ApiLoader from "../../../../components/ApiLoader";

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
    currency: "",
};

interface branchProps {
}

const BranchMasterViewForm = ({ }: branchProps) => {
    const [countrys, setCountrys] = useState<any>();
    const [city, setCity] = useState<any>();
    const [state, setState] = useState<any>();
    const [currencyList, setCurrencyList] = useState<any>();
    const [timeZones, setTimeZone] = useState<any>();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
    const { id } = useParams();
    const { translations, language } = useContext(LanguageContext);

    const { getBranchType, yeartype, company, isLoading,branchID,companyID } = useSelector((state: any) => {
        return {
            getBranchType: state.BranchReducers?.getBranchType?.data,
            isLoading: state.CommonReducers?.isLoading,
            yeartype: state.CommonReducers?.yeartype?.data,
            company: state.CompanyReducers?.company?.data,
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
            timezone: "",
            currency: ""
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

                const res = await dispatch(getBranchByIdMiddleWare({ id: id }));
                setFormik(res?.payload?.data);

                if (res?.payload?.data) {
                    const countryRes = await dispatch(getCountryMiddleWare());
                    const countries = countryRes?.payload?.data;

                    if (countries) {
                        const setCountry = countries.find((country: any) => country.id === res.payload.data.countryId);
                        if (setCountry) {
                            formik.setFieldValue("country", setCountry.name);
                            setCountrys(countries);

                            const stateRes = await dispatch(getStatesMiddleWare({ id: setCountry.id }));
                            const states = stateRes?.payload?.data;

                            if (states) {
                                const setstates = states.find((States: any) => States.id === res.payload.data.stateId);
                                if (setstates) {
                                    formik.setFieldValue("state", setstates.name);
                                    setState(states);

                                    const cityRes = await dispatch(getCityMiddleWare({ id: setstates.id }));
                                    const citys = cityRes?.payload?.data;

                                    if (citys) {
                                        const setcitys = citys.find((Citys: any) => Citys.id === res.payload.data.cityId);
                                        console.log(setcitys, "setcitys");
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
                // featch currency 

                try {
                    const currency = await dispatch(getCurrencyMiddleWare());

                    const currencys = currency?.payload?.data;
                    if (currencys) {
                        const setcurrency = currencys.find(
                            (currencysList: any) => currencysList.id === res.payload.data.currencyId
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
                            (timezoneList: any) => timezoneList.id === res.payload.data.timezoneId
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
                console.error("Error fetching data:", error);
            }

        };

        fetchData();
    }, [company]);


    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {
        },
    });

    if (isLoading) {
        return <ApiLoader />;
    }

console.log(timeZones,"timeZones")
    return (
        <div className="branch__master__form__container">
            <div className="form__top">
                <div className="form__header__area flex gap-2">
                    <BackNavigation />
                    <div className="form__title">{translations?.BRANCH_REGISTRATION?.HEADER_TEXT?.MAIN || "Branch View"}</div>
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <DatePicker
                            type="master"
                            label={translations?.BRANCH_REGISTRATION?.FIELDS?.DATE_ESTABLISHED?.LABEL || "Date Established"}
                            value={formik.values.dateEstablished}
                            name="dateEstablished"
                            onChange={formik.handleChange}
                            disabled
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
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <DropDownField
                            type="master"
                            label={translations?.BRANCH_REGISTRATION?.FIELDS?.COUNTRY?.LABEL || "Country"}
                            name="country"
                            value={formik.values.country}
                            onChange={formik.handleChange}
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
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <DropDownField
                            type="master"
                            label={translations?.BRANCH_REGISTRATION?.FIELDS?.STATE?.LABEL || "State"}
                            name="state"
                            value={formik.values.state}
                            onChange={formik.handleChange}
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
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
                            disabled
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4"></div>
                </div>
            </div>
            {/* <div className="button__container">
                <Button label={translations?.BUTTONS?.SUBMIT || "Submit"} onClick={formik.handleSubmit} />
            </div> */}
        </div>
    );
};

export default BranchMasterViewForm;
