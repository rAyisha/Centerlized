import Button from "../../../../../../../components/Button";
import SvgSearchIcon from "../../../../../../../assets/svgIcon/SvgSearchIcon";
import DropDownField from "../../../../../../../components/DropDownField";
import { useFormik } from "formik";
import { studenttypedata } from "../../../../staffs/staffdirectory/tabHeader/mock";
import "./index.scss";
import DatePicker from "../../../../../../../components/DatePicker";
interface FormValues {
  date: any;
  Role: any;
  sectionValue: any;
  Source: any;
  vehicle: string;
}
const initialValues: FormValues = {
  date: new Date(),
  Role: "",
  sectionValue: "",
  Source: "",
  vehicle: "",
};
const Header = () => {
  const handleSubmit = (values: FormValues) => {};
  const validate = (values: FormValues) => {
    const errors: Partial<Record<keyof FormValues, string>> = {};
    if (!values.Source) {
      errors.Source = "Session is required";
    }
    if (!values.Role) {
      errors.Role = "Class Leave is required";
    }
    if (!values.sectionValue) {
      errors.sectionValue = "Leave From Date is required";
    }
    if (!values.vehicle) {
      errors.vehicle = "Leave To Date is required";
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
      <div className="header__title">Staff Day Wise Attendance Report List</div>
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
        <DatePicker
            label={"Date"}
            value={formik.values.date}
            onChange={(value) =>
              formik.setFieldValue("date", new Date(value))
            }
            required={true}
            name="date"
            placeholder="Select"
            error={
              formik.touched.date && formik.errors.date
                ? formik.errors.date
                : ""
            }
          />
        </div>
        <div className="col-12 md:col-4 lg:col-4">
          <DropDownField
            label="Source"
            required={true}
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.Source}
            name="department"
            onChange={formik.handleChange}
            error={
              formik.touched.Source && formik.errors.Source
                ? (formik.errors.Source as string)
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
