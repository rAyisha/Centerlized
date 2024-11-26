import Button from "../../../../../../../components/Button";
import SvgSearchIcon from "../../../../../../../assets/svgIcon/SvgSearchIcon";
import DropDownField from "../../../../../../../components/DropDownField";
import { useFormik } from "formik";
import { studenttypedata } from "../../../../staffs/staffdirectory/tabHeader/mock";
import "./index.scss";
interface FormValues {
  Role: any;
  classValue: any;
  Month: any;
  Year: any;
  Subject: string;
}
const initialValues: FormValues = {
  Role: "",
  classValue: "",
  Month: "",
  Year: "",
  Subject: "",
};
const Header = () => {
  const handleSubmit = (values: FormValues) => {};
  const validate = (values: FormValues) => {
    const errors: Partial<Record<keyof FormValues, string>> = {};
    if (!values.Role) {
      errors.Role = "Session is required";
    }
    if (!values.Month) {
      errors.Month = "Class Leave is required";
    }
    if (!values.Year) {
      errors.Year = "Leave From Date is required";
    }
    if (!values.Subject) {
      errors.Subject = "Leave To Date is required";
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
      <div className="header__title">Payroll Report</div>
      <div className="grid dropdowns_layout">
        <div className="col-12 md:col-4 lg:col-4">
          <DropDownField
            label="Role"
            required={true}
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.Role}
            name="department"
            onChange={formik.handleChange}
            error={
              formik.touched.Role && formik.errors.Role
                ? (formik.errors.Role as string)
                : ""
            }
          />
        </div>
        <div className="col-12 md:col-4 lg:col-4">
          <DropDownField
            label="Month"
            required={true}
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.Month}
            name="department"
            onChange={formik.handleChange}
            error={
              formik.touched.Month && formik.errors.Month
                ? (formik.errors.Month as string)
                : ""
            }
          />
        </div>
        <div className="col-12 md:col-4 lg:col-4">
          <DropDownField
            label="Subject Group"
            required={true}
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.Year}
            name="department"
            onChange={formik.handleChange}
            error={
              formik.touched.Year && formik.errors.Year
                ? (formik.errors.Year as string)
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
