import { FunctionalComponent } from "preact";
import "./index.scss";
import DropDownField from "../../../../../../components/DropDownField";
import { useNavigate } from "react-router-dom";
import { FormikProps, useFormik } from "formik";
import Button from "../../../../../../components/Button";
import SvgBackArrow from "../../../../../../assets/svgIcon/SvgBackArrow";
import InputField from "../../../../../../components/InputField";
import ExportButton from "../../../../components/ExportButton";

interface Props {

}

interface FormikState {
    classId: string;
    sectionId: string;
    subjectId: string;
    searchData: string;
}

interface FormikErrors {
    classId?: string;
    sectionId?: string;
    subjectId?: string;
    searchData?: string;
}

const SyllabuStatusHeader: FunctionalComponent<Props> = ({ }) => {
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
            subjectId: "",
            searchData: ""
        },
        validate,
        onSubmit: fetchData,
    });

    return (
        <div className="syllabus_status_header">
            <div className="totalcount_headerstudent mb-4">
                <div className="create__class__timetable__header">
                    <div className="create__class__timetable__header__title">
                        <div className="create__class__timetable__header__text">
                            Syllabus status
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
                <div className="col-3 md:col-4 lg:col-3">
                    <DropDownField
                        label="Subject"
                        placeholder="Select"
                        options={[]}
                        optionLabel="subject"
                        optionValue="id"
                        value={formik.values.subjectId}
                        name="subjectId"
                        onChange={formik.handleChange}
                        error={
                            formik.touched.subjectId && formik.errors.subjectId
                                ? (formik.errors.subjectId as string)
                                : ""
                        }
                    />
                </div>
                <div className="col-3 md:col-4 lg:col-3 pt-40px">
                    <div className="search__button">
                        <Button
                            icon={<i className="pi pi-search" />}
                            label="Search"
                            onClick={formik.handleSubmit}
                            iconPos="left"
                        />
                    </div>
                </div>
            </div>
            <div className="horizontal__line w-full"></div>
            <div className="tab__header">
                <div className="dropdown__layout">
                    {/* <div className="tab__header__search">
                        <div className="p-input-icon-left w-full">
                            <i className="pi pi-search" />
                            <InputField
                                placeholder="Search"
                                value={formik.values.searchData}
                                onChange={formik.handleChange("searchData")}
                            />
                        </div>
                    </div> */}
                </div>
                <div>
                    <ExportButton />
                </div>
            </div>
        </div>
    );
};

export default SyllabuStatusHeader;
