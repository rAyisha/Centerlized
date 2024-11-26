import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { Dispatch, SetStateAction } from "preact/compat";
import DatePicker from "../../../../../../components/DatePicker";
import InputField from "../../../../../../components/InputField";
import FileDragUpload from "../../../../../../components/FileDragUpload";
import Checkboxes from "../../../../../../components/CheckBox";
import "./index.scss";
import EditorScreen from "./editor";
import { Button } from "primereact/button";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { formatDate } from "../../../../../../utility/helpers";

interface Props {
  setPopup: Dispatch<SetStateAction<boolean>>;
}
interface FormValues {
  id: string;
  Announcement: string;
  NoticeDate: Date;
  PublishDate: Date;
  CreatedBy: any;
  Recipients: any;
}

const initialValues: FormValues = {
  id: "",
  Announcement: "",
  NoticeDate: new Date(),
  PublishDate: new Date(),
  CreatedBy: "",
  Recipients: [],
};

const Message: FunctionalComponent<Props> = ({ setPopup }) => {
  const dispatch = useDispatch();

  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event?.target?.files[0]);
  }
  console.log(file, "file");
  const validate = (values: FormValues) => {
    const errors: Partial<Record<keyof FormValues, string>> = {};
    if (!values.Announcement) {
      errors.Announcement = "Apply date is required";
    }
    if (!values.PublishDate) {
      errors.PublishDate = "PublishDate is required";
    }
    if (!values.NoticeDate) {
      errors.NoticeDate = "NoticeDate is required";
    }
    if (!values.CreatedBy) {
      errors.CreatedBy = "CreatedBy is required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      setPopup(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="overall__message">
      <div className="grid mt-1">
        <div className="col-12 md:col-12 lg:col-12">
          <InputField
            value={formik.values.Announcement}
            onChange={formik.handleChange("Announcement")}
            label={"Title"}
            required={true}
            placeholder={"Enter"}
            error={formik.errors.Announcement as string}
          />
        </div>
      </div>
      <div className="grid mt-1">
        <div className="col-12 md:col-6 lg:col-6">
          <DatePicker
            label="Notice Date"
            required={true}
            value={formik.values.NoticeDate}
            onChange={(value) =>
              formik.setFieldValue("NoticeDate", new Date(value))
            }
            error={formik.errors.NoticeDate as string}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-6">
          <DatePicker
            label="Publish On"
            required={true}
            value={formik.values.PublishDate}
            onChange={(value) =>
              formik.setFieldValue("PublishDate", new Date(value))
            }
            error={formik.errors.PublishDate as string}
          />
        </div>
      </div>
      <div className="grid mt-1">
        <div className="col-12 md:col-12 lg:col-12">
          <FileDragUpload label={"Attachment"} onChange={handleChange} />
        </div>
      </div>

      <EditorScreen
        value={formik.values.CreatedBy}
        onTextChange={(e) => formik.setFieldValue("CreatedBy", e?.textValue)}
      />

      <div className="overall__message__head">Message To</div>
      <div className="flex mt-3 messageto__radio">
        {[
          "Admin",
          "Teacher",
          "Accountant",
          "Super Admin",
          "Student",
          "Parent",
        ].map((role) => (
          <Checkboxes
            key={role}
            label={role}
            value={formik.values.Recipients?.includes(role)}
            onChange={(checked) => {
              const newRecipients = checked
                ? [...formik.values.Recipients, role]
                : formik.values.Recipients.filter((r) => r !== role);
              formik.setFieldValue("Recipients", newRecipients);
            }}
          />
        ))}
      </div>

      <div className="overall__message__button">
        <Button
          label="Cancel"
          outlined
          className="overall__outlined__button"
          onClick={() => setPopup(false)}
        />
        <Button
          label={"Send"}
          className="overall__save__button"
          type="submit"
        />
      </div>
    </form>
  );
};

export default Message;
