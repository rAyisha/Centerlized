import Button from "../../../../../../../components/Button";
import SvgSearchIcon from "../../../../../../../assets/svgIcon/SvgSearchIcon";
import DropDownField from "../../../../../../../components/DropDownField";
import { useFormik } from "formik";
import { studenttypedata } from "../../../../staffs/staffdirectory/tabHeader/mock";
import "./index.scss";
interface FormValues {
  doj: any;
  classValue: any;
  Status: any;

  Role: any;
  Designation: string;
}
const initialValues: FormValues = {
  doj: "",
  classValue: "",
  Status: "",

  Role: "",
  Designation: "",
};
const Header = () => {
  const handleSubmit = (values: FormValues) => {};
  const validate = (values: FormValues) => {
    const errors: Partial<Record<keyof FormValues, string>> = {};
    if (!values.doj) {
      errors.doj = "Session is required";
    }
    if (!values.Status) {
      errors.Status = "Class Leave is required";
    }
    if (!values.Role) {
      errors.Role = "Leave From Date is required";
    }
    if (!values.Designation) {
      errors.Designation = "Leave To Date is required";
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
      <div className="header__title">Staff Report</div>
      <div className="grid dropdowns_layout">
        <div className="col-12 md:col-4 lg:col-4">
          <DropDownField
            label="Search Type By (Date Of Joining)"
            required={true}
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.doj}
            name="department"
            onChange={formik.handleChange}
            error={
              formik.touched.doj && formik.errors.doj
                ? (formik.errors.doj as string)
                : ""
            }
          />
        </div>
        <div className="col-12 md:col-4 lg:col-4">
          <DropDownField
            label="Status"
            required={true}
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.Status}
            name="department"
            onChange={formik.handleChange}
            error={
              formik.touched.Status && formik.errors.Status
                ? (formik.errors.Status as string)
                : ""
            }
          />
        </div>
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
            label="Designation"
            required={true}
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.Designation}
            name="department"
            onChange={formik.handleChange}
            error={
              formik.touched.Designation && formik.errors.Designation
                ? (formik.errors.Designation as string)
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
