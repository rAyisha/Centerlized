import Button from "../../../../../../../components/Button";
import SvgSearchIcon from "../../../../../../../assets/svgIcon/SvgSearchIcon";
import DropDownField from "../../../../../../../components/DropDownField";
import { useFormik } from "formik";
import { studenttypedata } from "../../../../staffs/staffdirectory/tabHeader/mock";
import "./index.scss";
interface FormValues {
  examgroup: any;
  classValue: any;

  Exam: any;
  Session: any;
  Section: string;
}
const initialValues: FormValues = {
  examgroup: "",
  classValue: "",

  Exam: "",
  Session: "",
  Section: "",
};
const Header = () => {
  const handleSubmit = (values: FormValues) => {};
  const validate = (values: FormValues) => {
    const errors: Partial<Record<keyof FormValues, string>> = {};
    if (!values.examgroup) {
      errors.examgroup = "Session is required";
    }
    if (!values.Exam) {
      errors.Exam = "Class Leave is required";
    }
    if (!values.Session) {
      errors.Session = "Leave From Date is required";
    }
    if (!values.Section) {
      errors.Section = "Leave To Date is required";
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
      <div className="header__title">Rank Report List</div>
      <div className="grid dropdowns_layout">
        <div className="col-12 md:col-4 lg:col-4">
          <DropDownField
            label="Exam Group"
            required={true}
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.examgroup}
            name="department"
            onChange={formik.handleChange}
            error={
              formik.touched.examgroup && formik.errors.examgroup
                ? (formik.errors.examgroup as string)
                : ""
            }
          />
        </div>
        <div className="col-12 md:col-4 lg:col-4">
          <DropDownField
            label="Exam"
            required={true}
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.Exam}
            name="department"
            onChange={formik.handleChange}
            error={
              formik.touched.Exam && formik.errors.Exam
                ? (formik.errors.Exam as string)
                : ""
            }
          />
        </div>
        <div className="col-12 md:col-4 lg:col-4">
          <DropDownField
            label="Session"
            required={true}
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.Session}
            name="department"
            onChange={formik.handleChange}
            error={
              formik.touched.Session && formik.errors.Session
                ? (formik.errors.Session as string)
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
            value={formik.values.Section}
            name="department"
            onChange={formik.handleChange}
            error={
              formik.touched.Section && formik.errors.Section
                ? (formik.errors.Section as string)
                : ""
            }
          />
        </div>
        <div className="col button_layout flex justify-content-end align-items-end">
          <Button
            icon={<SvgSearchIcon color="var(--base-text-inactive-color)" />}
            iconPos="left"
            label="Search"
            className="export__butt__overall"
          />
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default Header;
