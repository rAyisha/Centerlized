import { useNavigate } from "react-router-dom";
import Button from "../../../../../../../components/Button";
import DropDownField from "../../../../../../../components/DropDownField";
import { FormikProps, useFormik } from "formik";
import { MultiSelect } from "primereact/multiselect";
import { useState } from "preact/hooks";
import"./index.scss"

interface Props {
    setVisible: any;
    action: string;
}

interface FormikState {
    classId: string;
    sectionId: string;
}

interface FormikErrors {
    classId?: string;
    sectionId?: string;
}

const AssingStudentSlider: React.FC<Props> = ({ setVisible, action }) => {
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
                        error={
                            formik.touched.classId && formik.errors.classId
                                ? (formik.errors.classId as string)
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
                        onChange={formik.handleChange}
                        error={
                            formik.touched.sectionId && formik.errors.sectionId
                                ? (formik.errors.sectionId as string)
                                : ""
                        }
                    />
                </div>
                <div className="col-12 md:col-12 lg:col-12">
                    <div className=" mb-2">Assign Students</div>
                    <div >
                        <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
                            filter placeholder="Select Students" maxSelectedLabels={3} className="w-full md:w-100rem" />
                    </div>
                </div>
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
    )
}

export default AssingStudentSlider
