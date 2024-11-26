import React, { useState } from 'react'
import DropDownField from '../../../../../../../components/DropDownField'
import { FormikProps, useFormik } from 'formik';
import FileDragUpload from '../../../../../components/fileUploade';
import Button from '../../../../../../../components/Button';
import "./index.scss"

interface FormikState {
    classId: string;
    sectionId: string;

}

interface FormikErrors {
    classId?: string;
    sectionId?: string;
}

interface UploadFileProps {
    setVisible?:any
}

const UploadFile: React.FC<UploadFileProps> = ({setVisible}) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        if (target.files) {
            setSelectedFiles(Array.from(target.files));
        }
    };
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

    const handleClick = () =>{
        setVisible(false)
    }

    const formik: FormikProps<FormikState> = useFormik<FormikState>({
        initialValues: {
            classId: "",
            sectionId: "",
        },
        validate,
        onSubmit: fetchData,
    });

    return (
        <div className="grid profile__input__container">
            <div className="col-12 md:col-6 lg:col-6">
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
            <div className="col-12 md:col-6 lg:col-6">
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
            <div className="col-12 md:col-12 lg:col-12">
                <FileDragUpload
                    label="Upload Files"
                    star={true}
                    onChange={handleFileChange}
                    multiple={true}
                    value={selectedFiles}
                />
            </div>
            <div className="uploade_btn col-12 md:col-12 lg:col-12">
                <Button 
                 label="Submit"
                 onClick={()=>handleClick()}
                />
            </div>
        </div>

    )
}

export default UploadFile
