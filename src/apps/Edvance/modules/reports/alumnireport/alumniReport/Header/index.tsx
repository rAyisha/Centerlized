import Button from "../../../../../../../components/Button";
import SvgSearchIcon from "../../../../../../../assets/svgIcon/SvgSearchIcon";
import DropDownField from "../../../../../../../components/DropDownField";
import { useFormik } from "formik";
import { studenttypedata } from "../../../../staffs/staffdirectory/tabHeader/mock";
import "./index.scss";
interface FormValues {
  session: any;
  classValue: any;
  sectionValue: any;
  LeaveToDate: Date;
  Reason: string;
}
const initialValues: FormValues = {
  session: "",
  classValue: "",
  sectionValue: "",
  LeaveToDate: new Date(),
  Reason: "",
};
const Header = () => {
  const handleSubmit = (values: FormValues) => {};
  const validate = (values: FormValues) => {
    const errors: Partial<Record<keyof FormValues, string>> = {};
    if (!values.session) {
      errors.session = "Session is required";
    }
    if (!values.classValue) {
      errors.classValue = "Class Leave is required";
    }
    if (!values.sectionValue) {
      errors.sectionValue = "Leave From Date is required";
    }
    if (!values.LeaveToDate) {
      errors.LeaveToDate = "Leave To Date is required";
    }
    return errors;
  };

  const formik = useFormik<FormValues>({
    initialValues,
    validate,
    onSubmit: handleSubmit,
  });
  return (
    <div className="alumni__student__report__header__area">
      <div className="header__title">Student Report List</div>
      <div className="grid dropdowns_layout">
        <div className="col-12 md:col-4 lg:col-4">
          <DropDownField
            label="Pass Out Session"
            required={true}
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.session}
            name="department"
            onChange={formik.handleChange}
            error={
              formik.touched.session && formik.errors.session
                ? (formik.errors.session as string)
                : ""
            }
          />
        </div>
        <div className="col-12 md:col-4 lg:col-4">
          <DropDownField
            label="Class"
            required={true}
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.classValue}
            name="department"
            onChange={formik.handleChange}
            error={
              formik.touched.classValue && formik.errors.classValue
                ? (formik.errors.classValue as string)
                : ""
            }
          />
        </div>
        <div className="col-12 md:col-4 lg:col-4">
          <DropDownField
            label="Section"
            required={true}
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.sectionValue}
            name="department"
            onChange={formik.handleChange}
            error={
              formik.touched.sectionValue && formik.errors.sectionValue
                ? (formik.errors.sectionValue as string)
                : ""
            }
          />
        </div>
        <div className="col button_layout flex justify-content-end">
          <Button
            icon={<SvgSearchIcon color="var(--base-text-inactive-color)" />}
            iconPos="left"
            label="Search"
            className="export__butt__overall"
          />
        </div>
      </div>
      <hr className="my-4"/>
    </div>
  );
};

export default Header;
