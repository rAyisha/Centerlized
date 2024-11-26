import Button from "../../../../../../../components/Button";
import SvgSearchIcon from "../../../../../../../assets/svgIcon/SvgSearchIcon";
import DropDownField from "../../../../../../../components/DropDownField";
import { useFormik } from "formik";
import { studenttypedata } from "../../../../staffs/staffdirectory/tabHeader/mock";
import "./index.scss";
interface FormValues {
  classValue: string;
  sectionValue: string;
  student: string;

}
const initialValues: FormValues = {
  classValue: "",
  sectionValue: "",
  student: ""

};
const Header = () => {
  const handleSubmit = (values: FormValues) => { };
  const validate = (values: FormValues) => {
    const errors: Partial<Record<keyof FormValues, string>> = {};

    if (!values.classValue) {
      errors.classValue = "Class is required";
    }
   
    return errors;
  };

  const formik = useFormik<FormValues>({
    initialValues,
    validate,
    onSubmit: handleSubmit,
  });
  return (
    <div className="finance__balance__fees__report__header__area">
      <div className="header__title">Balance Fees Statement List</div>
      <div className="grid dropdowns_layout">
        <div className="col-12 md:col-4 lg:col-4">
          <DropDownField
            label="Class"
            required={true}
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.classValue}
            name="classValue"
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
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.sectionValue}
            name="sectionValue"
            onChange={formik.handleChange}
           
          />
        </div>
        <div className="col-12 md:col-4 lg:col-4">
          <DropDownField
            label="Student"
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.student}
            name="student"
            onChange={formik.handleChange}
           
          />
        </div>
        <div className="col button_layout flex justify-content-end align-items-end">
          <Button
            icon={<SvgSearchIcon color="var(--base-text-inactive-color)" />}
            iconPos="left"
            label="Search"
            className="export__butt__overall"
            onClick={formik.handleSubmit}
          />
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default Header;
