import Button from "../../../../../../../components/Button";
import SvgSearchIcon from "../../../../../../../assets/svgIcon/SvgSearchIcon";
import { useFormik } from "formik";
import { studenttypedata } from "../../../../staffs/staffdirectory/tabHeader/mock";
import "./index.scss";
import DatePicker from "../../../../../../../components/DatePicker";
interface FormValues {
  fromDate: any;
  toDate: any;

}
const initialValues: FormValues = {
  fromDate: "",
  toDate: "",

};
const Header = () => {
  const handleSubmit = (values: FormValues) => { };
  const validate = (values: FormValues) => {
    const errors: Partial<Record<keyof FormValues, string>> = {};

    if (!values.fromDate) {
      errors.fromDate = "Class is required";
    }
    if (!values.toDate) {
      errors.toDate = "Section is required";
    }
    return errors;
  };

  const formik = useFormik<FormValues>({
    initialValues,
    validate,
    onSubmit: handleSubmit,
  });
  return (
    <div className="finance__collection__report__header__area">
      <div className="header__title">Daily Collection Report List</div>
      <div className="grid dropdowns_layout">
        <div className="col-12 md:col-4 lg:col-4">
          <DatePicker
            label="From Date"
            required={true}
            placeholder="Select"
            value={formik.values.fromDate}
            name="fromDate"
            onChange={formik.handleChange}
            error={
              formik.touched.fromDate && formik.errors.fromDate
                ? (formik.errors.fromDate as string)
                : ""
            }
          />
        </div>
        <div className="col-12 md:col-4 lg:col-4">
          <DatePicker
            label="Date To"
            required={true}
            placeholder="Select"
            value={formik.values.toDate}
            name="toDate"
            onChange={formik.handleChange}
            error={
              formik.touched.toDate && formik.errors.toDate
                ? (formik.errors.toDate as string)
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
            onClick={formik.handleSubmit}
          />
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default Header;
