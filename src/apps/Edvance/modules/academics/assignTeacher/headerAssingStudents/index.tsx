import { useNavigate } from "react-router-dom";
import InputField from "../../../../../../components/InputField"
import ExportButton from "../../../../components/ExportButton"
import "./index.scss"
import { FormikProps, useFormik } from "formik";
import Button from "../../../../../../components/Button";
import SvgAddIcon from "../../../../../../assets/svgIcon/SvgAddIcon";
import { useState } from "preact/hooks";
import Sider from "../../../../components/Sider";
import AssingStudentSlider from "./assingStudentSlider";
import AssingTeacherSlider from "./assingStudentSlider";

interface Props {

}

interface FormikState {
    searchData: string;
}

interface FormikErrors {
    searchData?: string;
}

const HeaderAssingTeacher = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [action, setAction] = useState("add");

    const fetchData = async () => {
        const bodyData = {
            searchData: formik.values.searchData,
        };
    };

    const validate = (values: FormikState) => {
        const errors: FormikErrors = {};
        if (!values.searchData) {
            errors.searchData = "Section is required";
        }
        return errors;
    };

    const handleAssingStudent = (action: string) => {
        setVisible(true);
        setAction(action);
    };

    const formik: FormikProps<FormikState> = useFormik<FormikState>({
        initialValues: {
            searchData: ""
        },
        validate,
        onSubmit: fetchData,
    });

    return (
        <div className="header__Assing__students">
            <div className="header_title">Class Teacher List</div>
            <div className="horizontal__line w-full"></div>
            <div className="tab__header">
                <div className="dropdown__layout">
                    <div className="tab__header__search">
                        <div className="p-input-icon-left w-full">
                            <i className="pi pi-search" />
                            <InputField
                                placeholder=" Admission no / Student Name"
                                value={formik.values.searchData}
                                onChange={formik.handleChange("searchData")}
                            />
                        </div>
                    </div>
                </div>
                <div className="btn_layout">
                    <ExportButton />
                    <div>
                        <Button
                            label="Assing Teacher"
                            icon={<SvgAddIcon color="var(--base-text-inactive-color)" />}
                            onClick={() => handleAssingStudent("add")}
                            iconPos="left"
                            className="export__butt__overall"
                        />
                    </div>
                </div>
            </div>
            <Sider
                header={
                    action === "add"
                        ? "Assign Class Teacher"
                        : action === "edit"
                            ? "Edit Class Teacher"
                            : "View Class Teacher"
                }
                setVisible={setVisible}
                visible={visible}
                children={
                    <AssingTeacherSlider
                        setVisible={setVisible}
                        action={action}
                    />
                }
            />
        </div>
    )
}

export default HeaderAssingTeacher
