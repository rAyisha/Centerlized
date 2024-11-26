import { FunctionalComponent } from "preact";
import "./index.scss";
import DropDownField from "../../../../../../../components/DropDownField";
import { useNavigate } from "react-router-dom";
import { FormikProps, useFormik } from "formik";
import Button from "../../../../../../../components/Button";
import SvgAddIcon from "../../../../../../../assets/svgIcon/SvgAddIcon";
import SvgBackArrow from "../../../../../../../assets/svgIcon/SvgBackArrow";

interface Props {

}

interface FormikState {
  classId: string;
  sectionId: string;

}

interface FormikErrors {
  classId?: string;
  sectionId?: string;
}

const CreateClassTimeTableHeader: FunctionalComponent<Props> = ({ }) => {
  const navigate = useNavigate();

  const fetchData = async () => {
    const bodyData = {
      classId: formik.values.classId,
      sectionId: formik.values.sectionId,
    };
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

  const handleCreate = () => {
    navigate("/edvance/academics/classtimetable/add")
  }
  const handleNavigate = () => {
      navigate(-1);
  };

  return (
    <div className="overall__profile__tab__header__class__timetable">
      <div className="totalcount_headerstudent mb-4">
      <div className="create__class__timetable__header">
                <div className="create__class__timetable__header__title">
                    <span
                        className="create__class__timetable__header__title__icon"
                        onClick={handleNavigate}
                    >
                        <SvgBackArrow />
                    </span>
                    <div className="create__class__timetable__header__text">
                        Create Class TimeTable
                    </div>
                </div>
            </div>
      </div>
      <div className="grid profile__input__container">
        <div className="col-3 md:col-4 lg:col-3">
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

        <div className="col-3 md:col-4 lg:col-3">
          <DropDownField
            label="Section"
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
        <div className="col-3 md:col-4 lg:col-3 pt-40px">
          <div className="search__button">
            <Button
              // icon={<i className="pi pi-search" />}
              label="Generate"
              onClick={formik.handleSubmit}
              iconPos="left"
            />
          </div>
        </div>
      </div>

      <div className="horizontal__line w-full"></div>

    </div>
  );
};

export default CreateClassTimeTableHeader;
