import { FunctionalComponent, h } from "preact";
import { useFormik } from "formik";
// import "./index.scss";
import { InputTextarea } from "primereact/inputtextarea";

import { Button } from "primereact/button";
import FormDropdown from "../../../../components/DropDwonForm";
import DatePicker from "../../../../../../components/DatePicker";
import DropDownField from "../../../../../../components/DropDownField";
import { studenttypedata } from "../../staffdirectory/tabHeader/mock";

interface ProceedPayProps {
  setVisible: (visible: boolean) => void;
}

const initialValues = {
  staffName: "",
  paymentAmount: "",
  monthYear: "",
  paymentMode: "",
  paymentDate: "",
  note: "",
};

const ProceedPay: FunctionalComponent<ProceedPayProps> = ({ setVisible }) => {
  const handleSubmit = () => {
    console.log(formik.values);
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const validate = (values: typeof initialValues) => {
    const errors: { [key: string]: string } = {};
    if (!values.paymentMode) {
      errors.paymentMode = "Payment mode is required";
    }
    if (!values.paymentDate) {
      errors.paymentDate = "Payment date is required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: handleSubmit,
  });

  return (
    <div className="proceed__pay">
      <DropDownField
        label="Staff Name"
        required={true}
        placeholder="Select"
        options={studenttypedata}
        optionLabel="name"
        optionValue="id"
        value={formik.values.staffName}
        name="department"
        onChange={formik.handleChange}
        error={
          formik.touched.staffName && formik.errors.staffName
            ? (formik.errors.staffName as string)
            : ""
        }
      />
      <DropDownField
        label="Payment Amount (₹)"
        required={true}
        placeholder="Select"
        options={studenttypedata}
        optionLabel="name"
        optionValue="id"
        value={formik.values.paymentAmount}
        name="department"
        onChange={formik.handleChange}
        error={
          formik.touched.paymentAmount && formik.errors.paymentAmount
            ? (formik.errors.paymentAmount as string)
            : ""
        }
      />
      <DropDownField
        label="Payment Mode"
        required={true}
        placeholder="Select"
        options={studenttypedata}
        optionLabel="name"
        optionValue="id"
        value={formik.values.paymentMode}
        name="department"
        onChange={formik.handleChange}
        error={
          formik.touched.paymentMode && formik.errors.paymentMode
            ? (formik.errors.paymentMode as string)
            : ""
        }
      />
      <DropDownField
        label="Month - Year"
        required={true}
        placeholder="Select"
        options={studenttypedata}
        optionLabel="name"
        optionValue="id"
        value={formik.values.monthYear}
        name="department"
        onChange={formik.handleChange}
        error={
          formik.touched.monthYear && formik.errors.monthYear
            ? (formik.errors.monthYear as string)
            : ""
        }
      
      />
      <div className="my-2">
        <DatePicker
          label={"Payment Date"}
          value={formik.values.paymentDate}
          onChange={(value) =>
            formik.setFieldValue("paymentDate", new Date(value))
          }
          required={true}
          name="paymentDate"
          placeholder="Select"
          error={
            formik.touched.paymentDate && formik.errors.paymentDate
              ? formik.errors.paymentDate
              : ""
          }
          //   disabled={action === "view" ? true : false}
        />
      </div>

      <div className="textarea__layout">
        <span className="textarea__label">Note</span>
        <InputTextarea
          rows={5}
          autoResize
          value={formik.values.note}
          onChange={formik.handleChange("note")}
        />
      </div>
      <div className="flex justify-content-end mt-7 gap-2">
        <Button label="Cancel" outlined onClick={handleCancel} />
        <Button label="Save" onClick={formik.handleSubmit} />
      </div>
    </div>
  );
};

export default ProceedPay;
