import { useRef, useState } from "react";
import "./index.scss";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import FormDropdownField from "../../../../../../components/DropDownField"
import DatePicker from "../../../../../../components/DatePicker";
import InputField from "../../../../../../components/InputField";
import EmptyTableIcon from "../../../../components/EmptyTableIcon";
import { Checkbox } from "primereact/checkbox";
import { Toast } from 'primereact/toast';
import { confirmDialog, ConfirmDialog } from "primereact/confirmdialog";
import Sider from "../../../../components/Sider";
import StudentAssignList from "./studentAssingList"
import SvgClockIcon from "../../../../../../assets/svgIcon/SvgClockIcon";

const ExamSubject = () => {
    const navigate = useNavigate();
    const [addsibilingvisible, setAddsibilingVisible] = useState(false);


    const toastRef = useRef(null);

    const validate = () => {

    };




    const handleDelete = (deleteIndex) => {
        const _subjects = formik.values.subjects.filter((_, index) => index !== deleteIndex);
        formik.setFieldValue("subjects", _subjects);
    };

    const handleAdd = () => {
        const newSubjects = {
            id: (formik.values.subjects.length + 1).toString(),
            subject: "",
            date: "",
            startTime: "",
            duration: "00:00",
            creditHours: "00:00",
            roomNo: "",
            marksMax: "",
            marksMin: "",
            Practical: false,
            practicalFields: null,
        };
        const _subjects = [...formik.values.subjects, newSubjects];
        formik.setFieldValue("subjects", _subjects);
    };
    const handleAassignStudent = () => {
        setAddsibilingVisible(true)
    }
    const handleSubmit = (value) => {
        console.log(value, "handleSubmit trigger")
        confirmDialog({
            message: 'publish the exam schedule',
            //  header: 'publish the exam schedule',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            // reject
        });
        const mainvalue = () => {

            function convertToAMPM(dateString) {
                const date = new Date(dateString);
                let hours = date.getHours();
                const minutes = date.getMinutes();
                const period = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12;
                const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${period}`;

                return formattedTime;
            }


            const convertToDateFormat = (dateString) => {
                const date = new Date(dateString);
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();

                const dayStr = day < 10 ? '0' + day : day;
                const monthStr = month < 10 ? '0' + month : month;

                return `${monthStr}-${dayStr}-${year}`;
            };

            return value.subjects.map((data) => {
                console.log(data?.duration, "data?.duration")
                if (!data.Practical) {
                    return {
                        "subject": data?.subject.id,
                        "date": convertToDateFormat(data?.date),
                        "starttime": convertToAMPM(data?.startTime),
                        "duration": data?.duration,
                        "roomno": parseInt(data?.roomNo),
                        "minmarks": parseInt(data?.marksMin),
                        "maxmarks": parseInt(data?.marksMax),
                        "practical": data?.Practical
                    };
                } else {
                    return {
                        "subject": data?.subject.id,
                        "date": convertToDateFormat(data?.date),
                        "starttime": convertToAMPM(data?.startTime),
                        "duration": data?.duration,
                        "roomno": parseInt(data?.roomNo),
                        "minmarks": parseInt(data?.marksMin),
                        "maxmarks": parseInt(data?.marksMax),
                        "practical": data?.Practical,
                        // "creditHours": data?.creditHours,
                        "practicalDetails": {
                            "subject": data?.practicalFields?.subject.id,
                            "date": convertToDateFormat(data?.practicalFields?.date),
                            "starttime": convertToAMPM(data?.practicalFields?.startTime),
                            "duration": data?.practicalFields?.duration,
                            "roomno": parseInt(data?.practicalFields?.roomNo),
                            "minmarks": parseInt(data?.practicalFields?.marksMin),
                            "maxmarks": parseInt(data?.practicalFields?.marksMax),
                            // "creditHours": data?.practicalFields?.creditHours,
                        }
                    };
                }
            });
        };
        const result = mainvalue();
        console.log(result, "result")

    };


    const handlecheckChange = (e, index) => {

    }




    const formik = useFormik({
        initialValues: {
            subjects: "",
            Practical: false,
            practicalFields: {
                subject: "",
                date: "",
                startTime: "",
                duration: "00:00",
                creditHours: "00:00",
                roomNo: "",
                marksMax: "",
                marksMin: "",
            },
        },
        validate,
        onSubmit: handleSubmit,
    });
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'success', summary: 'Confirmed', detail: 'Successfully Published', life: 3000 });
    }


    return (
        <div className="subject_list_module">
            <Toast ref={toastRef} />
            <Toast ref={toast} />
            <ConfirmDialog />






            <div className="tab__header">
                <div className="profile_tab_header" onClick={() => navigate(-1)}>

                    Exam Subject List
                </div>

            </div>


            <div className="grid profile__input__container">


                <div className="col-3 md:col-4 lg:col-3">
                    <FormDropdownField
                        label="Class"

                        placeholder="Select"

                    />
                </div>

                <div className="col-3 md:col-4 lg:col-3">
                    <FormDropdownField
                        label="Section"

                        placeholder="Select"

                    />
                </div>
                <div className="col-3 md:col-4 lg:col-3">
                    <FormDropdownField
                        label="Exam Group"

                        placeholder="Select"

                    />
                </div>
                <div className="col-3 md:col-4 lg:col-3 tab__header__buttons__layout justify-content-end">
                    <Button label="Add Schedule" icon="pi pi-plus" onClick={handleAdd} />
                </div>
                <div className="Assign_student_textlayout" onClick={handleAassignStudent}>Click Here to Assign Students</div>

            </div>


            {formik.values.subjects.length === 0 ? (
                <EmptyTableIcon />
            ) : (
                <div>
                    {formik.values.subjects.map((item, index) => (
                        <div key={index} className="inputs_card grid">
                            <div className="col-12 md:col-6 lg:col-3">
                                <FormDropdownField
                                    options={[]}
                                    label="Subject"

                                    optionLabel="name"
                                    value={item.subject}
                                    onChange={(value) =>
                                        formik.setFieldValue(`subjects[${index}].subject`, value)
                                    }
                                />
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <DatePicker
                                    label="Date"

                                    value={item.date}
                                    onChange={(e) => {
                                        return (
                                            formik.setFieldValue(`subjects[${index}].date`, e))
                                    }
                                    }
                                />
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <DatePicker
                                    label="Start Time"
                                    timeOnly

                                    icon={<SvgClockIcon />}
                                    value={item.startTime}
                                    onChange={(e) => {
                                        console.log(e, "time")
                                        return (
                                            formik.setFieldValue(
                                                `subjects[${index}].startTime`,
                                                e)
                                        )
                                    }
                                    }

                                />
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <InputField
                                    label="Duration"

                                    name={`subjects[${index}].duration`}
                                    value={item.duration}
                                    onChange={formik.handleChange}

                                />
                            </div>

                            <div className="col-12 md:col-6 lg:col-3">
                                <InputField
                                    label="Room No"
                                    name={`subjects[${index}].roomNo`}
                                    value={item.roomNo}
                                    onChange={formik.handleChange}

                                />
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <InputField
                                    label="Marks (Max..)"

                                    name={`subjects[${index}].marksMax`}
                                    value={item.marksMax}
                                    onChange={formik.handleChange}

                                />
                            </div>
                            <div className="col-12 md:col-6 lg:col-3">
                                <InputField
                                    label="Marks (Min..)"

                                    name={`subjects[${index}].marksMin`}
                                    value={item.marksMin}
                                    onChange={formik.handleChange}

                                />
                            </div>
                            <div className="col-12 md:col-6 lg:col-3"></div>
                            <div className="flex align-items-center mt-3 mb-3 pl-2">
                                <Checkbox
                                    inputId={`practical${index}`}
                                    checked={item.Practical}
                                    onChange={(e) => {
                                        handlecheckChange(e, index)
                                    }}
                                />
                                <label htmlFor={`practical${index}`} className="ml-2">
                                    Practical Required
                                </label>
                            </div>
                            {item.Practical && item.practicalFields && (
                                <div className="inputs_addcard grid">
                                    <div className="col-12 md:col-6 lg:col-3">
                                        <FormDropdownField
                                            options={[]}
                                            label="Practical Subject"

                                            optionLabel="name"
                                            value={item.practicalFields.subject}
                                            onChange={(value) =>
                                                formik.setFieldValue(`subjects[${index}].practicalFields.subject`, value)
                                            }
                                        />
                                    </div>
                                    <div className="col-12 md:col-6 lg:col-3">
                                        <DatePicker
                                            label="Practical Date"

                                            value={item.practicalFields.date}
                                            onChange={(e) =>
                                                formik.setFieldValue(`subjects[${index}].practicalFields.date`, e)
                                            }
                                        />
                                    </div>
                                    <div className="col-12 md:col-6 lg:col-3">
                                        <DatePicker
                                            label="Practical Start Time"
                                            timeOnly

                                            icon={<SvgClockIcon />}
                                            value={item.practicalFields.startTime}
                                            onChange={(e) =>
                                                formik.setFieldValue(`subjects[${index}].practicalFields.startTime`, e)
                                            }
                                        />
                                    </div>
                                    <div className="col-12 md:col-6 lg:col-3">
                                        <InputField
                                            label="Practical Duration"

                                            name={`subjects[${index}].practicalFields.duration`}
                                            value={item.practicalFields.duration}
                                            onChange={formik.handleChange}

                                        />
                                    </div>
                                    <div className="col-12 md:col-6 lg:col-3">
                                        <InputField
                                            label="Practical Credit Hours"

                                            name={`subjects[${index}].practicalFields.creditHours`}
                                            value={item.practicalFields.creditHours}
                                            onChange={formik.handleChange}

                                        />
                                    </div>
                                    <div className="col-12 md:col-6 lg:col-3">
                                        <InputField
                                            label="Practical Room No"
                                            name={`subjects[${index}].practicalFields.roomNo`}
                                            value={item.practicalFields.roomNo}
                                            onChange={formik.handleChange}

                                        />
                                    </div>
                                    <div className="col-12 md:col-6 lg:col-3">
                                        <InputField
                                            label="Practical Marks (Max..)"

                                            name={`subjects[${index}].practicalFields.marksMax`}
                                            value={item.practicalFields.marksMax}
                                            onChange={formik.handleChange}

                                        />
                                    </div>
                                    <div className="col-12 md:col-6 lg:col-3">
                                        <InputField
                                            label="Practical Marks (Min..)"

                                            name={`subjects[${index}].practicalFields.marksMin`}
                                            value={item.practicalFields.marksMin}
                                            onChange={formik.handleChange}

                                        />
                                    </div>
                                </div>
                            )}
                            <div className="col-12 flex justify-content-end">
                                <Button
                                    label="Delete"
                                    outlined
                                    icon="pi pi-trash"
                                    iconPos="right"
                                    onClick={() => handleDelete(index)}
                                />
                            </div>
                        </div>
                    ))}
                    <div className="tab__save__buttons__layout">
                        <Button label="Save" onClick={() => formik.handleSubmit()} />
                    </div>
                </div>
            )}


            <Sider
                header={"Students List"}
                setVisible={setAddsibilingVisible}
                visible={addsibilingvisible}
                position={"top-right"}
            >
                <StudentAssignList />
            </Sider>
        </div>
    );
};

export default ExamSubject;
