import "./index.scss";
import { useFormik } from "formik";
import LanguageContext from "../../../../config/LanguageContext";
import { useContext, useEffect, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import DatePicker from "../../../../components/DatePicker";
import Button from "../../../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { fetchIp } from "../../../../utility/getIpAddress";
import ApiLoader from "../../../../components/ApiLoader";
import BackNavigation from "../../../../components/BackArrowNavigation";
import InputField from "../../../../components/InputField";
import CheckBox from "../../../../components/CheckBox";

interface FormikValues {
    yearType?: string;
    startDate?: string;
    endDate?: string;
    yearName: string
}

interface FormikErrors {
    yearType?: string;
    startDate?: string;
    endDate?: string;
    yearName?: string
}

const initialValues = {
    yearType: "",
    startDate: "",
    endDate: "",
    yearName: ""
};

const validate = (values: FormikValues) => {
    const errors: FormikErrors = {};
    if (!values.yearName) {
        errors.yearName = "Year Name is Required";
    }
    if (!values.yearType) {
        errors.yearType = "Year Type is Required";
    }
    if (!values.startDate) {
        errors.startDate = "Start Date is Required";
    }
    if (!values.endDate) {
        errors.endDate = "End Date is Required";
    }
    return errors;
};

const YearEditForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { translations } = useContext(LanguageContext);
    const [ip, setIp] = useState<string | null>(null);
    const [checked, setChecked] = useState<boolean>(false);
    const { isLoading } = useSelector((state: any) => {
        return {
            isLoading: state.userAccessReducers?.isLoading,
        };
    });




    const handleFormSubmit = async (values: FormikValues) => {

    };

    const formik = useFormik({
        initialValues: initialValues,
        validate,
        onSubmit: async (values) => {
            handleFormSubmit(values);
        },
    });


    if (isLoading) {
        return <ApiLoader />;
    }
    return (
        <div className="year__Edit__form">
            <div className="form__top">
                <div className="form__header__area flex gap-2">
                    <BackNavigation />
                    <div className="form__title">{translations?.YEAR_TYPE?.HEADER_TEXT?.MAIN || "Year Registration"}</div>
                </div>
                <div className="grid">
                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            label={"Year Name"}
                            name="yearName"
                            value={formik.values.yearName}
                            onChange={formik.handleChange}
                            placeholder={"Enter Year Type"}
                            required
                            error={
                                formik.touched.yearName && formik.errors.yearName
                                    ? formik.errors.yearName
                                    : ""
                            }
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <InputField
                            label={translations?.YEAR_TYPE?.FIELDS?.YEAR_TYPE?.LABEL || "Year Type"}
                            name="yearType"
                            value={formik.values.yearType}
                            onChange={formik.handleChange}
                            placeholder={"Enter Year Type"}
                            required
                            error={
                                formik.touched.yearType && formik.errors.yearType
                                    ? formik.errors.yearType
                                    : ""
                            }
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <DatePicker
                            type="master"
                            label={translations?.YEAR_TYPE?.FIELDS?.START_DATE?.LABEL || "Start Date"}
                            placeholder={translations?.YEAR_TYPE?.FIELDS?.START_DATE?.PLACEHOLDER || "Select Start Date"}
                            value={formik.values.startDate}
                            name="startDate"
                            onChange={formik.handleChange}
                            error={
                                formik.touched.startDate && formik.errors.startDate
                                    ? formik.errors.startDate
                                    : ""
                            }
                            required={true}
                        />


                    </div>
                    <div className="col-12 md:col-6 lg:col-4">
                        <DatePicker
                            type="master"
                            label={translations?.YEAR_TYPE?.FIELDS?.END_DATE?.LABEL || "End Date"}
                            placeholder={translations?.YEAR_TYPE?.FIELDS?.END_DATE?.PLACEHOLDER || "Select End Date"}
                            value={formik.values.endDate}
                            name="endDate"
                            onChange={formik.handleChange}
                            error={
                                formik.touched.endDate && formik.errors.endDate
                                    ? formik.errors.endDate
                                    : ""
                            }
                            required={true}
                        />
                    </div>
                    <div className="col-12 md:col-6 lg:col-4 flex align-items-center">
                        <CheckBox label="Current Year" onChange={(e:boolean) => setChecked(e)} value={checked} />
                    </div>
                </div>
            </div>

            <div className="button__container">
                <Button
                    label={translations?.BUTTONS?.SUBMIT || "Submit"} onClick={formik.handleSubmit} type="button" />
            </div>

        </div>

    );
};

export default YearEditForm;
