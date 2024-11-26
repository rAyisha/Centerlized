import { useNavigate } from "react-router-dom";
import Button from "../../../../../../../components/Button";
import DropDownField from "../../../../../../../components/DropDownField";
import { FormikProps, useFormik } from "formik";
import { Checkbox } from "primereact/checkbox"; // Ensure you import Checkbox from the correct library
import { MultiSelect } from "primereact/multiselect"; // Assuming you are using MultiSelect somewhere
import { useState } from "react"; // Import from 'react' instead of 'preact/hooks'
import "./index.scss";
import SvgDeleteIcon from "../../../../../../../assets/svgIcon/SvgDeleteIcon";
import SvgAddIcon from "../../../../../../../assets/svgIcon/SvgAddIcon"; // Assuming you have an add icon

interface Props {
    setVisible: (visible: boolean) => void; // Specify the type for setVisible
    action: string;
}

interface FormikState {
    classId: string;
    sectionId: string;
    subjectTeachers: Array<{ subjectId: string; teacherId: string }>; // Define the structure for subjectTeachers
    classTeacherId?: number; // Optional to hold the index of the class teacher
}

interface FormikErrors {
    classId?: string;
    sectionId?: string;
}

const AssingTeacherSlider: React.FC<Props> = ({ setVisible, action }) => {
    const navigate = useNavigate();
    const [selectedCities, setSelectedCities] = useState(null);
    
    const cities = [
        { name: 'qwerty', code: 'NY' },
        { name: 'yuva', code: 'RM' },
        { name: 'manoj', code: 'LDN' },
        { name: 'suresh', code: 'IST' },
        { name: 'ramesh', code: 'PRS' }
    ];

    const fetchData = async () => {
        const bodyData = {
            classId: formik.values.classId,
            sectionId: formik.values.sectionId,
            subjectTeachers: formik.values.subjectTeachers,
        };
        // You can add your API call here
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
            subjectTeachers: [
                {
                    subjectId: "",
                    teacherId: ""
                }
            ],
            classTeacherId: undefined,
        },
        validate,
        onSubmit: fetchData,
    });

    const addTeacher = () => {
        formik.setFieldValue("subjectTeachers", [
            ...formik.values.subjectTeachers,
            {
                subjectId: "",
                teacherId: "",
            },
        ]);
    };

    const deleteTeacher = (index: number) => {
        const afterDeleted = formik.values.subjectTeachers.filter((_, id) => id !== index);
        formik.setFieldValue("subjectTeachers", afterDeleted);
    };

    return (
        <div className="assing_student_slider">
            <div className="grid profile__input__container">
                <div className="col-12 md:col-12 lg:col-12">
                    <DropDownField
                        label="Class"
                        required={true}
                        placeholder="Select"
                        options={[]}
                        optionLabel="name"
                        optionValue="id"
                        name="classId"
                        value={formik.values.classId}
                        onChange={formik.handleChange} // Add onChange handler
                        error={
                            formik.touched.classId && formik.errors.classId
                                ? formik.errors.classId
                                : ""
                        }
                    />
                </div>

                <div className="col-12 md:col-12 lg:col-12">
                    <DropDownField
                        label="Section"
                        placeholder="Select"
                        required={true}
                        options={[]}
                        optionLabel="section"
                        optionValue="id"
                        value={formik.values.sectionId}
                        name="sectionId"
                        onChange={formik.handleChange} // Add onChange handler
                        error={
                            formik.touched.sectionId && formik.errors.sectionId
                                ? formik.errors.sectionId
                                : ""
                        }
                    />
                </div>

                <div className="flex gap-2" onClick={addTeacher}>
                    <div className="add_teacher_icon" >
                        <SvgAddIcon color="#fff" />
                    </div>
                    <div className="add_teacher_label">Add Teacher</div>
                </div>

                {formik.values.subjectTeachers.map((item, index) => (
                    <div className="subject_teacher_card" key={index}>
                        <div className="flex justify-content-between align-items-center">
                            <div className="flex ">
                            <Checkbox
                                label="Make as class teacher"
                                checked={formik.values.classTeacherId === index}
                                onChange={() => formik.setFieldValue("classTeacherId", index)}
                            />
                            <div className={"ml-2"}>Make as class teacher</div>
                            </div>
                            <div onClick={() => deleteTeacher(index)}>
                                <SvgDeleteIcon />
                            </div>
                        </div>
                        <div className="grid flex-1 mt-3">
                            <div className="col-12 md:col-6">
                                <DropDownField
                                    options={[]} // Populate with actual subjects
                                    label="Subject"
                                    placeholder="Select"
                                />
                            </div>
                            <div className="col-12 md:col-6">
                                <DropDownField
                                    options={[]} // Populate with actual teachers
                                    label="Teacher"
                                    placeholder="Select"
                                />
                            </div>
                        </div>
                    </div>
                ))}

                <div className="col-3 md:col-3 lg:col-3 mt-2 pt-40px">
                    <div className="search__button">
                        <Button
                            label={
                                action === "add"
                                    ? "Submit"
                                    : action === "edit"
                                        ? "Update"
                                        : ""
                            }
                            onClick={formik.handleSubmit}
                            iconPos="left"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AssingTeacherSlider;
