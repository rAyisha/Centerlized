import Button from "../../../../../../../components/Button";
import SvgSearchIcon from "../../../../../../../assets/svgIcon/SvgSearchIcon";
import DropDownField from "../../../../../../../components/DropDownField";
import { useFormik } from "formik";
import { studenttypedata } from "../../../../staffs/staffdirectory/tabHeader/mock";
import "./index.scss";
interface FormValues {
  routeList: any;
  classValue: any;
  sectionValue: any;
  pickuppoint: any;
  vehicle: string;
}
const initialValues: FormValues = {
  routeList: "",
  classValue: "",
  sectionValue: "",
  pickuppoint: "",
  vehicle: "",
};
const Header = () => {
  const handleSubmit = (values: FormValues) => {};
  const validate = (values: FormValues) => {
    const errors: Partial<Record<keyof FormValues, string>> = {};
    if (!values.routeList) {
      errors.routeList = "Session is required";
    }
    if (!values.classValue) {
      errors.classValue = "Class Leave is required";
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
      <div className="header__title">Student Transport</div>
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
        <div className="col-12 md:col-4 lg:col-4">
          <DropDownField
            label="Route List"
            required={true}
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.routeList}
            name="department"
            onChange={formik.handleChange}
            error={
              formik.touched.routeList && formik.errors.routeList
                ? (formik.errors.routeList as string)
                : ""
            }
          />
        </div>
        <div className="col-12 md:col-4 lg:col-4">
          <DropDownField
            label="Pickup Point"
            required={true}
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.pickuppoint}
            name="department"
            onChange={formik.handleChange}
            error={
              formik.touched.pickuppoint && formik.errors.pickuppoint
                ? (formik.errors.pickuppoint as string)
                : ""
            }
          />
        </div>
        <div className="col-12 md:col-4 lg:col-4">
          <DropDownField
            label="Vehicle"
            required={true}
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.vehicle}
            name="department"
            onChange={formik.handleChange}
            error={
              formik.touched.vehicle && formik.errors.vehicle
                ? (formik.errors.vehicle as string)
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
