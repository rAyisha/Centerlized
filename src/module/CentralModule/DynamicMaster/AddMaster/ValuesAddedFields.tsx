import InputField from '../../../../components/InputField';
import DropDownField from '../../../../components/DropDownField';
import { useFormik } from 'formik';
import Button from '../../../../components/Button';
import SvgAddIcon from '../../../../assets/svgIcon/SvgAddIcon';
import SvgDeleteIcon from '../../../../assets/svgIcon/SvgDeleteIcon';
import { useLocation, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'preact/hooks';
import LanguageContext from '../../../../config/LanguageContext';

interface DetailedView {
    value: string;
    associatevalue: string;
}

interface FormValues {
    masterDetails: DetailedView[];
}

interface ValuesAddedFieldsProps {
    setCheckValues: (values: DetailedView[]) => void;
    associationOptionsData: any[];
    associationOptionsId: string;
}

const ValuesAddedFields: React.FC<ValuesAddedFieldsProps> = ({ setCheckValues, associationOptionsData, associationOptionsId }) => {
    const location = useLocation();
    const { action } = useParams();
    const { masterValue } = location.state || {};
    const { translations } = useContext(LanguageContext);
    const initialValues: FormValues = {
        masterDetails: [
            { value: action != "add" ? masterValue : '', associatevalue: '' },
        ],
    };
    const formik = useFormik<FormValues>({
        initialValues,
        onSubmit: (values) => {
            console.log("Submitted masterDetails:", values.masterDetails);
        },
    });
    const handleAddValue = () => {
        const newEntry: DetailedView = { value: '', associatevalue: '' };
        formik.setFieldValue('masterDetails', [...formik.values.masterDetails, newEntry]);
        setCheckValues([...formik.values.masterDetails, newEntry]); 
    };

    const handleDeleteValue = (index: number) => {
        const updatedDetails = formik.values.masterDetails.filter((_, i) => i !== index);
        formik.setFieldValue('masterDetails', updatedDetails);
        setCheckValues(updatedDetails); 
    };

    const handleChange = (index: number, field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        formik.setFieldValue(`masterDetails.${index}.${field}`, e.currentTarget.value);
        const updatedDetails = [...formik.values.masterDetails]; 
        updatedDetails[index] = { ...updatedDetails[index], [field]: e.currentTarget.value }; 
        setCheckValues(updatedDetails); 
    };
    useEffect(() => {
        if (associationOptionsId) {
            formik.setFieldValue(`masterDetails[0].associatevalue`, associationOptionsId);
        }
    }, [associationOptionsId])

    return (
        <form onSubmit={formik.handleSubmit}>
            {formik.values.masterDetails.map((detail, index) => (
                <div className="overall_delete_button" key={index}>
                    {action === "add" && (
                        <div className="button_shower" onClick={() => handleDeleteValue(index)}>
                            <SvgDeleteIcon />
                        </div>
                    )}
                    <div className="grid">
                        <div className="col-12 md:col-6 lg:col-4">
                            <InputField
                                disabled={action === "view"}
                                label={translations?.DYNAMIC_MASTER_FORM?.FIELDS?.VALUE?.LABEL || "Value"}
                                name={`masterDetails.${index}.value`}
                                placeholder={translations?.DYNAMIC_MASTER_FORM?.FIELDS?.VALUE?.PLACEHOLDER || "Enter"}
                                onChange={handleChange(index, 'value')}
                                value={detail.value}
                                required={true}
                                translate={true}
                            />
                        </div>

                        <div className="col-12 md:col-6 lg:col-4">
                            <DropDownField
                                disabled={action === "view"}
                                label={translations?.DYNAMIC_MASTER_FORM?.FIELDS?.ASSOCIATED_MASTER_VALUE?.LABEL || "Associated Master Value"}
                                required={false}
                                placeholder={translations?.DYNAMIC_MASTER_FORM?.FIELDS?.ASSOCIATED_MASTER_VALUE?.PLACEHOLDER || "Select"}
                                options={Array.isArray(associationOptionsData) ? associationOptionsData : []}
                                optionLabel="name"
                                optionValue="id"
                                value={detail.associatevalue}
                                name={`masterDetails.${index}.associatevalue`}
                                onChange={(e) => {
                                    formik.setFieldValue(`masterDetails.${index}.associatevalue`, e.value);
                                    const updatedDetails = [...formik.values.masterDetails];
                                    updatedDetails[index].associatevalue = e.value;
                                    setCheckValues(updatedDetails);
                                }}
                            />
                        </div>
                    </div>
                </div>
            ))}
            {action === "add" && (
                <div className="suboverall_custom_Addbutton_add mt-4">
                    <Button
                        className='custom_Addbutton_save'
                        label='Add Value'
                        icon={<SvgAddIcon color="#fff" />}
                        onClick={handleAddValue}
                        type="button"
                    />
                </div>
            )}

        </form>
    );
};

export default ValuesAddedFields;
