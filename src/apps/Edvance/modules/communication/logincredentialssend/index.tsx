import { useState } from "preact/hooks";
// import Button from "../../../../../components/Button";
import "./index.scss";
import DataTableView from "./DataTableView";
import DropDwonForm from "../../../../../components/DropDownField";
import BreadCrumbs from "../../../../../components/BreadCrumbs";
import LoginDetailTable from "./DataTableView";
import SearchInput from "../../../../../components/InputField";
import ExportButton from "../../../components/ExportButton";
// import { classes, sections } from "../../../utility/mock.data";
import { useSelector } from "react-redux";
import Button from "../../../../../components/Button";
import SvgSearchIcon from "../../../../../assets/svgIcon/SvgSearchIcon";
import { useFormik } from "formik";
interface FormValues {
  id: string;
  class: string;
  section: string;
  message: string; // Add message field for the Editor
}

const initialValues: FormValues = {
  id: "",
  class: "",
  section: "",
  message: "", // Initialize message field
};
const LoginCredentials = () => {
  const { logincredentialsData } = useSelector((state) => {
    return {
      logincredentialsData: {},
    };
  });
  console.log(logincredentialsData, "logincredentialsData");
  const [classValue, setClassValue] = useState(null);
  const [sectionValue, setSectionValue] = useState(null);
  const [tableshow, setTableshow] = useState(false);
  // const [classdata, setClassdata] = useState("");

  // const [classValue, setClassValue] = useState(null);
  // const [sectionValue, setSectionValue] = useState(null);
  // const [tableshow, setTableshow] = useState(false);

  const breadcrumbLabels = ["Communication", "Login Credentials"];

  const classOptions = [
    { label: "Class 1", value: "class1" },
    { label: "Class 2", value: "class2" },
    // Add more class options as needed
  ];

  const sectionOptions = [
    { label: "A", value: "sectionA" },
    { label: "B", value: "sectionB" },
    // Add more section options as needed
  ];

  const sectionOptionstwo = [
    { label: "A", value: "sectionA" },
    { label: "B", value: "sectionB" },
    // Add more section options as needed
  ];

  const handleClassChange = (e) => {
    setClassValue(e);
  };

  const handleSectionChange = (e) => {
    setSectionValue(e);
  };
  const validate = (values: FormValues) => {
    const errors: Partial<Record<keyof FormValues, string>> = {};

    if (!values.class) {
      errors.class = "class is required";
    }

    if (!values.section) {
      errors.section = "section is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      setTableshow(true), console.log("hi", "hhhhh");
    },
  });
  return (
    <div className="overall____logincridential">
      {/* <BreadCrumbs labels={breadcrumbLabels} />
      <hr className="hr_line" /> */}
      <div className="head__searchpayment__fees">Login Credentials</div>

      <div className="grid">
        <div className="col-12 md:col-3 lg:col-3">
          <DropDwonForm
            label="Class"
            required={true}
            value={formik.values?.class}
            onChange={(e) => formik.setFieldValue("class", e.value)}
            error={
              formik.errors.class && formik.touched.class
                ? formik.errors.class
                : ""
            }
            options={[]}
            placeholder="Select"
            optionLabel="class"
          />
        </div>
        <div className="col-12 md:col-3 lg:col-3">
          <DropDwonForm
            label="Section"
            required={true}
            value={formik.values?.section}
            onChange={(e) => formik.setFieldValue("section", e.value)}
            error={
              formik.errors.section && formik.touched.section
                ? formik.errors.section
                : ""
            }
            options={[]}
            placeholder="Select"
            optionLabel="section"
          />
        </div>
        <div className="col-12 md:col-3 lg:col-3">
          <div className="button__searchpayment__overall mt-5">
            <Button
              icon={<SvgSearchIcon color="var(--base-text-inactive-color)" />}
              label="Search"
              onClick={formik?.handleSubmit}
              iconPos="left"
            />
          </div>
        </div>
      </div>

      <hr className="hr_line mb-6" />

      {tableshow && (
        <div>
          <div className="grid">
            <div className="col-12 md:col-3 lg:col-3">
              <DropDwonForm
                label="Message To"
                required={true}
                value={classValue}
                onChange={handleClassChange}
                options={sectionOptionstwo}
                placeholder="Select"
                optionLabel="label"
              />
            </div>
            <div className="col-12 md:col-3 lg:col-3">
              <DropDwonForm
                label="Notification Type"
                required={true}
                value={sectionValue}
                onChange={handleSectionChange}
                options={sectionOptionstwo}
                placeholder="Select"
                optionLabel="label"
              />
            </div>
          </div>

          <div className="grid mt-4">
            <div className="col-12 md:col-6 lg:col-6">
              <SearchInput />
            </div>
            <div className="col-12 md:col-6 lg:col-6 academic__master__add__export__btn">
              <div className="btn__container">
                <ExportButton />
              </div>
            </div>
          </div>

          <LoginDetailTable
          // logincredentialsData={[]}
          />

          <div className="button__searchpayment__saveoverall mt-4 ">
            <Button label="Send" outlined onClick={() => setTableshow(true)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginCredentials;
