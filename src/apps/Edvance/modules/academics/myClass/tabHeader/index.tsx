import { FunctionalComponent } from "preact";
import "./index.scss";
import DropDownField from "../../../../../../components/DropDownField";
import { FormikProps, useFormik } from "formik";
import Button from "../../../../../../components/Button";

interface Props { }

interface FormikState {
  classId: string;
  sectionId: string;
}

interface FormikErrors {
  classId?: string;
  sectionId?: string;
}

const AttendanceHeader: FunctionalComponent<Props> = ({ }) => {

  const fetchData = async (values: FormikState) => {
    console.log(values)
  };

  const validate = (values: FormikState) => {
    const errors: FormikErrors = {};
    if (!values.classId) {
      errors.classId = "Class is required";
    }
    if (!values.sectionId) {
      errors.sectionId = "Section is required";
    }
    return errors;
  };

  const formik: FormikProps<FormikState> = useFormik<FormikState>({
    initialValues: {
      classId: "",
      sectionId: "",
    },
    validate,
    onSubmit: fetchData,
  });

  return (
    <div className="myclass__tab__header__container">
      <div className="header__Title">
        My Class
      </div>
      <div className="grid">
        <div className="col-12 md:col-4 lg:col-3">
          <DropDownField
            label="Class"
            required={true}
            placeholder="Select"
            options={[]}
            optionLabel="name"
            optionValue="id"
            name="classId"
            value={formik.values.classId}
            error={
              formik.touched.classId && formik.errors.classId
                ? (formik.errors.classId as string)
                : ""
            }
          />
        </div>
        <div className="col-12 md:col-4 lg:col-3">
          <DropDownField
            label="Section"
            required={true}
            placeholder="Select"
            options={[]}
            optionLabel="section"
            optionValue="id"
            value={formik.values.sectionId}
            name="sectionId"
            onChange={formik.handleChange}
            error={
              formik.touched.sectionId && formik.errors.sectionId
                ? (formik.errors.sectionId as string)
                : ""
            }
          />
        </div>
        <div className="search__button">
            <Button
              icon={<i className="pi pi-search" />}
              label="Search"
              onClick={formik.handleSubmit}
              iconPos="left"
            />
        </div>
      </div>
      <hr className="horizontal__line w-full"></hr>
    </div>
  );
};

export default AttendanceHeader;
