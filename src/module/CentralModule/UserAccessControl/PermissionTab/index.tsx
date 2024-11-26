import { useFormik } from "formik";
import DropDownField from "../../../../components/DropDownField";
import "./index.scss"
import Button from "../../../../components/Button";
import { useEffect } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { getAllTemplateMiddleWare } from "../store/userAccessMiddleware";
import { AppDispatch } from "../../../../redux/store";
interface FormikValues {
    template: string;
}

interface FormikErrors {
    template?: string;
}
const initialValues = {
    template: ""
};
interface setProps {
    onTabChange: (activeIndex: number) => void
    // setFormType: Dispatch<SetStateAction<boolean>>;
    // form: string;
}
const PermissionTab = ({ onTabChange }: setProps) => {

    const dispatch = useDispatch<AppDispatch>();
    const { templateDropDown } = useSelector((state: any) => {
        return {
            templateDropDown: state.userAccessReducers?.templateDropDown
        };
    })
    const validate = (values: FormikValues) => {
        const errors: FormikErrors = {};
        if (!values.template) {
            errors.template = "Template Name is Required";
        }
        return errors;
    };
    const handleBranchSubmit = async (values: FormikValues) => {
        const payload = {
            template: values?.template,
        };
        console.log(payload, "find payload")
        onTabChange(2)
        // try {
        //   const res = await dispatch({

        //   });

        //   if (res.meta.requestStatus === "fulfilled") {
        //     console.log(res, "Branch API success");
        //     toast.success("Branch successfully registered");
        //     // setForm("nextForm");
        //   } else {
        //     console.error("Branch API failed:", res?.payload?.response);
        //   }
        // } catch (error) {
        //   console.error("An error occurred:", error);
        // }
    };
    const formik = useFormik({
        initialValues: initialValues,
        validate,
        onSubmit: async (values) => {
            handleBranchSubmit(values);
        },
    });
    useEffect(() => {
        dispatch(getAllTemplateMiddleWare());
    }, [])

    return (
        <div className="permission__tab__form">
            <div className="form__top">
                <div className="form__title">Permission</div>
                <div className="justify-content-center">
                    <div className="col-12 md:col-12 lg:col-6">
                        <DropDownField
                            label="Template Name"
                            name="template"
                            value={formik.values.template}
                            onChange={formik.handleChange}
                            options={Array.isArray(templateDropDown) ? templateDropDown : []}
                            optionLabel="name"
                            optionValue="id"
                            placeholder="Select Template"
                            error={
                                formik.touched.template && formik.errors.template
                                    ? formik.errors.template
                                    : ""
                            }
                            required={true}
                        />
                    </div>
                </div>
            </div>
            {/* <div className="button__container">
                <Button label="Next" onClick={formik.handleSubmit} type="button" />
            </div> */}
        </div>
    );
}

export default PermissionTab;
