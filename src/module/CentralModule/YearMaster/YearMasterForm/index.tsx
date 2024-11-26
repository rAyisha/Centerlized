import "./index.scss";
import { useFormik } from "formik";
import { useToast } from "../../../../components/Toast";
import LanguageContext from "../../../../config/LanguageContext";
import { useContext, useEffect, useRef, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import DatePicker from "../../../../components/DatePicker";
import Button from "../../../../components/Button";
import { useNavigate, useParams } from "react-router-dom";

import ApiLoader from "../../../../components/ApiLoader";
import {
  getYearMasterTableDataMiddleware,
  getYearTypeMiddleware,
  postYearMasterFormMiddleware,
} from "../store/yearMasterMiddleware";
import BackNavigation from "../../../../components/BackArrowNavigation";
import InputField from "../../../../components/InputField";
import CheckBox from "../../../../components/CheckBox";
import DropDownField from "../../../../components/DropDownField";
import { fetchIp } from "../../../../utility/getIpAddress";

interface FormikValues {
  yearType?: string;
  startDate?: string;
  endDate?: string;
  yearName: string;
  isCurrent: boolean;
}

interface FormikErrors {
  yearType?: string;
  startDate?: string;
  endDate?: string;
  yearName?: string;
  // isCurrent: boolean,
}

const initialValues = {
  yearType: "",
  startDate: "",
  endDate: "",
  yearName: "",
  isCurrent: false,
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

const YearMasterForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const ipAddress = useRef("");
  const [checked, setChecked] = useState<boolean>(false);
  const { translations } = useContext(LanguageContext);
  const { isLoading, companyID, branchID, getyearTypeData } = useSelector(
    (state: any) => {
      return {
        isLoading: state.userAccessReducers?.isLoading,
        companyID: state.dropdownDataReducers.companyID,
        branchID: state.dropdownDataReducers.branchID,
        getyearTypeData: state?.yearMasterReducers?.getyearTypeData,
      };
    }
  );
  console.log(getyearTypeData, "companyIDcompanyIDcompanyID");

  const yearType = [
    { id: 1, name: "Financial Year" },
    { id: 2, name: "Calendar Year" },
  ];
  const initialFetch = async () => {
    try {
      ipAddress.current = await fetchIp();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initialFetch();
  }, [companyID, branchID]);

  const handleFormSubmit = async (values: FormikValues) => {
    ipAddress.current = await fetchIp();
    const payload = {
      name: values?.yearName,
      startDate: values?.startDate,
      endDate: values?.endDate,
      isCurrent: values.isCurrent,
      yearTypeId: values?.yearType?.id,
    };
    console.log(payload, "payloadpayload");
    const headers = {
      "company-id": companyID,
      "branch-id": branchID,
      ip: ipAddress.current,
    };
    dispatch(postYearMasterFormMiddleware({ headers, payload }))
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          const headers = {
            "company-id": companyID,
            "branch-id": branchID,
            ip: ipAddress.current,
          };
          dispatch(getYearMasterTableDataMiddleware({ headers }));
          navigate("/yearmasterform");
        } else {
          alert(res.payload);
        }
      })
      .catch((err) => {
        console.error("Unexpected error occurred:", err);
      });
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: async (values) => {
      handleFormSubmit(values);
    },
  });

  useEffect(() => {
    const headers = { "company-id": companyID, "branch-id": branchID };
    dispatch(getYearTypeMiddleware({ headers })).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
      }
    });
  }, [dispatch]);
  if (isLoading) {
    return <ApiLoader />;
  }
  return (
    <div className="year__master__form">
      <div className="form__top">
        <div className="form__header__area flex gap-2">
          <BackNavigation />
          <div className="form__title">
            {translations?.YEAR_TYPE?.HEADER_TEXT?.MAIN || "Year Registration"}
          </div>
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
            <DropDownField
              label={
                translations?.YEAR_TYPE?.FIELDS?.YEAR_TYPE?.LABEL || "Year Type"
              }
              name="yearType"
              value={formik.values.yearType}
              onChange={formik.handleChange}
              placeholder={"Select Year Type"}
              required
              error={
                formik.touched.yearType && formik.errors.yearType
                  ? formik.errors.yearType
                  : ""
              }
              options={getyearTypeData}
              optionLabel="name"
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <DatePicker
              type="master"
              label={
                translations?.YEAR_TYPE?.FIELDS?.START_DATE?.LABEL ||
                "Start Date"
              }
              placeholder={
                translations?.YEAR_TYPE?.FIELDS?.START_DATE?.PLACEHOLDER ||
                "Select Start Date"
              }
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
              label={
                translations?.YEAR_TYPE?.FIELDS?.END_DATE?.LABEL || "End Date"
              }
              placeholder={
                translations?.YEAR_TYPE?.FIELDS?.END_DATE?.PLACEHOLDER ||
                "Select End Date"
              }
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
            {/* <CheckBox label="Current Year" onChange={e => setChecked(e)} value={checked} /> */}

            {/* <CheckBox
              label="Current Year"
              onChange={(e) => setChecked(e)}
              value={checked}
            /> */}
            <CheckBox
              label="Current Year"
              onChange={(e) => formik.setFieldValue("isCurrent", e)}
              value={formik.values.isCurrent}
            />
          </div>
        </div>
      </div>

      <div className="button__container">
        <Button
          label={translations?.BUTTONS?.SUBMIT || "Submit"}
          onClick={formik.handleSubmit}
          type="button"
        />
      </div>
    </div>
  );
};

export default YearMasterForm;
