import { useState } from "preact/hooks";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
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
 
}

const initialValues: FormValues = {
  id: "",
  email: "",
  title: "",

 
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
      console.log(values);
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
            onChange={(e) => formik.setFieldValue("email", e.value)}
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
            onChange={formik.handleChange("title")}
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
              value={text}
              onTextChange={(e) => {
                setText(e.htmlValue);
                formik.setFieldValue("message", e.htmlValue);
              }}
            />
          </div>

          {/* Tabs */}
          <Tabs formik={formik} />
        </div>
      </form>
    </div>
  );
};

export default AddModal;
