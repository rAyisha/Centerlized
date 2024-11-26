import React from 'react';
import { useFormik } from 'formik';
import InputField from '../../../../../../../components/InputField';
import Button from '../../../../../../../components/Button';

const SyllabusMasterEdit = () => {
    const Arry = ["Tamil", "English"]; 

    
    const formik = useFormik({
        initialValues: {
            lesson: '',
            topics: Arry, 
        },
        onSubmit: (values) => {
            console.log('Form Values:', values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="grid">
                <div className="col-12 md:col-12 lg:col-12">
                    <InputField
                        type="master"
                        label="Lesson"
                        name="lesson"
                        placeholder="Enter"
                        value={formik.values.lesson}
                        onChange={formik.handleChange}
                    />
                </div>

                {formik.values.topics.map((topic, index) => (
                    <div key={index} className="col-12 md:col-12 lg:col-12">
                        <InputField
                            type="master"
                            label={`Topic`}
                            name={`topics[${index}]`}
                            placeholder="Enter Topic"
                            value={formik.values.topics[index]}
                            onChange={formik.handleChange}
                        />
                    </div>
                ))}

                <div className="uploade_btn col-12 md:col-12 lg:col-12">
                    <Button label="Submit" type="submit" />
                </div>
            </div>
        </form>
    );
};

export default SyllabusMasterEdit;
