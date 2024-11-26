import { useState } from "preact/hooks";
import { Button } from "primereact/button";
import DropdownField from "../../../../../../components/DropDownField";
import InputField from "../../../../../../components/InputField";
import "./index.scss";
import FileDragUpload from "../../../../../../components/FileDragUpload";
import Tabs from "../Tabs";
import { Editor } from "primereact/editor";
import { useFormik } from "formik";

interface FormValues {
  id: string;
  email: string;
  title: string;
  message: string; // Add message field for the Editor
}

const initialValues: FormValues = {
  id: "",
  email: "",
  title: "",
  message: "", // Initialize message field
};

const AddModal = () => {
  const [text, setText] = useState("");

  const validate = (values: FormValues) => {
    const errors: Partial<Record<keyof FormValues, string>> = {};

    if (!values.email) {
      errors.email = "Email is required";
    }

    if (!values.title) {
      errors.title = "Title is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      console.log(values); // Submit form data
    },
  });

  return (
    <div className="email_list_modal">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <DropdownField
            label="Email Template"
            placeholder="Select"
            value={formik.values.email}
            onChange={(e) => formik.setFieldValue("email", e.value)} // Update email value
            error={
              formik.errors.email && formik.touched.email
                ? formik.errors.email
                : ""
            }
          />

          <InputField
            label="Title"
            required={true}
            value={formik.values.title}
            onChange={formik.handleChange("title")} // Handle title change
            error={
              formik.errors.title && formik.touched.title
                ? formik.errors.title
                : ""
            }
          />

          <FileDragUpload label="Attachment" />

          <div className="editor_controller">
            <div className="form__inputs__label__container">
              <label className="form__inputs__text">Message To</label>
              <div className="label__important">*</div>
            </div>

            <Editor
              value={formik.values.message} // Bind editor to formik
              onTextChange={(e) => {
                setText(e.htmlValue); // Update local state (if needed)
                formik.setFieldValue("message", e.htmlValue); // Update formik message value
              }}
            />
          </div>

          {/* Tabs component */}
          <Tabs formik={formik} />
        </div>
      </form>
    </div>
  );
};

export default AddModal;
