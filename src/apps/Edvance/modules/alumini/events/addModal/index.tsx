
import "./index.scss";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
// import RadioField from "../../../../components/RadioButton";
// import InputField from "../../../../components/InputField";
// import DropDownForm from "../../../../components/DropDwonForm";
// import DatePicker from "../../../../components/DatePicker";
// import FileDrag from "../../../../components/FileDrag";
// import SvgClockIcon from "../../../../assets/icons/SvgClockIcon";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import DropDownField from "../../../../../../components/DropDownField";
import { InputText } from "primereact/inputtext";
import DatePicker from "../../../../../../components/DatePicker";
import SvgCalculator from "../../../../../../assets/svgIcon/SvgCalculator";
import InputField from "../../../../../../components/InputField";
import { RadioButton } from "primereact/radiobutton";
import FileDragUpload from "../../../../../../components/FileDragUpload";
import { Checkbox } from "primereact/checkbox";
// import { getEventsDetailsMiddleware, postEventsDetailsMiddleware, putEventsDetailsMiddleware } from "../../store/alumniMiddleware";
// import Checkboxes from "../../../../components/CheckBox";
// import FormDropdown from "../../../../components/DropDwonForm";
// import { getSectionDropdownMiddleWare } from "../../../students/store/studentDetailsMiddleware";

const AddModal = ({
  setVisible,
  setEditData,
  selectedData,
  typeData,
  // formikSearch
}) => {


  const [type, setType] = useState("All Alumni");
  const [emailCheck, setEmailCheck] = useState(false);
  const [smsCheck, setSmsCheck] = useState(false);


  // const { singleeventsDetails, getClassData, getSectionsData } = useSelector((state) => {
  //   return {
  //     singleeventsDetails: state?.alumniReducers?.singleeventsDetails,
  //     getClassData: state?.studentDetailsReducers?.getClassData?.data?.data,
  //     getSectionsData: state?.studentDetailsReducers?.getSectionsData?.data?.data,
  //   };
  // });
  const dispatch = useDispatch();
  const handleChangeEmail = (value) => {
    setEmailCheck(!emailCheck);
  };
  const handleChangeSms = () => {
    setSmsCheck(!smsCheck)
  }
  const TemplateLabel = () => (
    <div className="template_label">
      Template ID
      <span>(This field is required only for Indian SMS Gateway)</span>
    </div>
  );

  const [checkedSections, setCheckedSections] = useState({});
  const handleCheckboxChange = (id, checked, data) => {
    let updatedSections = [...formik.values.sections];
    if (checked) {
      updatedSections.push(id);
    } else {
      updatedSections = updatedSections.filter(sectionId => sectionId !== id);
    }
    formik.setFieldValue("sections", updatedSections);
  };

  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.title) errors.title = "Title is Required";
  //   if (!values.fromDate) errors.fromDate = "From Date is Required";
  //   if (!values.toDate) errors.toDate = "To Date is Required";
  //   else if (new Date(values.fromDate) > new Date(values.toDate)) errors.toDate = "To Date must be after From Date";
  //   if (type === "Class") {
  //     // if (!values.passedOut) errors.passedOut = "Passed Out Session is Required";
  //     if (!values.class) errors.class = "Class is Required";
  //     // if (values.sections.length === 0) errors.sections = "Sections is Required";
  //   }
  //   return errors;
  // };


  const handleSubmit = () => {

    const disableDateData = formik?.values?.fromDate;
    const date = new Date(disableDateData);
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '-');
    const todateDateValeu = new Date(formik?.values?.toDate)
    const todateDate = todateDateValeu.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '-');



    if (typeData === 'Add') {
      // const payload = {
      //   eventFor: type === "All Alumni" ? "ALL" : 'CLASS',
      //   title: formik.values.title,
      //   fromDate: formattedDate,
      //   toDate: todateDate,
      //   photoUrl: "https://google.com",
      //   note: formik.values.note,
      //   message: formik.values.message,
      //   ...(type === "Class" && {
      //     sessionId: 1,
      //     classId: formik.values.class?.id,
      //     sectionIds: formik.values?.sections

      //   })
      // };
      // dispatch(postEventsDetailsMiddleware(payload));
      // dispatch(getEventsDetailsMiddleware({ pageNum: 1, pageSizeValue: 10, serachValue: "" }))
      setVisible(false);
   
    } if (typeData === 'Edit') {


      const payloadData = {
        eventFor: type === "All Alumni" ? "ALL" : 'CLASS',
        title: formik.values.title,
        fromDate: formattedDate,
        toDate: todateDate,
        photoUrl: "https://google.com",
        note: formik.values.note,
        message: formik.values.message,
        ...(type === "Class" && {
          sessionId: 1,
          // classId: formik.values.class?.id,
          sectionIds: formik.values?.sections

        })

      }
      console.log(payloadData, "payloadData");
      setVisible(false);
      // dispatch(putEventsDetailsMiddleware({ id: singleeventsDetails?.id, payloadData }))
      // dispatch(getEventsDetailsMiddleware({ pageNum: 1, pageSizeValue: 5, serachValue: "" })).then((res) => {
        // if (res.meta.requestStatus === 'fulfilled') {
        //   setVisible(false);
        // }
      // })



    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      class: "",
      sections: [],
      passedOut: "",
      fromDate: "",
      toDate: "",
      note: "",
      message: "",
    },
    // validate,
    onSubmit: handleSubmit,
  });
  const sessionArrayData = [{
    "id": 1,
    "session": "2010-11"
  },]
  // useEffect(() => {
  //   if (type === 'Class' && typeData === 'Edit' && singleeventsDetails) {
  //     // const updatedValues = {
  //     //   title: singleeventsDetails?.title,
  //     //   fromDate: new Date(singleeventsDetails?.fromDate),
  //     //   toDate: new Date(singleeventsDetails?.toDate),
  //     //   message: singleeventsDetails?.message,
  //     //   note: singleeventsDetails?.note,
  //     //   passedOut: sessionArrayData?.find(item => item?.id === singleeventsDetails?.MS_Session?.id) || "",
  //     //   class: getClassData?.find(item => item?.id === singleeventsDetails?.JN_ClassSections[0]?.MS_Class?.id) || "",
  //     //   sections: singleeventsDetails?.JN_ClassSections.map((val) => val.MS_Section?.id) || [],
  //     // };

  //     // formik.setValues({ ...formik.values, ...updatedValues });
  //     setType(singleeventsDetails?.eventFor === "ALL" ? "All Alumni" : "Class");
  //   } else if (typeData === 'Edit' && singleeventsDetails) {
  //     const updatedValues = {
  //       title: singleeventsDetails?.title,
  //       fromDate: new Date(singleeventsDetails?.fromDate),
  //       toDate: new Date(singleeventsDetails?.toDate),
  //       message: singleeventsDetails?.message,
  //       note: singleeventsDetails?.note,
  //     };

  //     setType(singleeventsDetails?.eventFor === "ALL" ? "All Alumni" : "Class");
  //     formik.setValues({ ...formik.values, ...updatedValues });
  //   }
  // }, [singleeventsDetails, typeData, getClassData, type]);

  // useEffect(() => {
  //   if (type == 'Class') {
  //     if (typeData === 'Edit' && singleeventsDetails) {
  //       const updatedValues = {
  //         title: singleeventsDetails?.title,
  //         fromDate: new Date(singleeventsDetails?.fromDate),
  //         toDate: new Date(singleeventsDetails?.toDate),
  //         message: singleeventsDetails?.message,
  //         note: singleeventsDetails?.note,
  //         passedOut: sessionArrayData?.find(item => item?.id === singleeventsDetails?.MS_Session?.id) || "",
  //         // class: "",
  //         class: getClassData?.find(item => item?.id === singleeventsDetails?.JN_ClassSections[0]?.MS_Class?.id) || getClassData,
  //         sections: singleeventsDetails?.JN_ClassSections.map((val) => val.MS_Section?.id) || [],
  //       };
  //       const classdata = getClassData?.filter((item) => item?.id === singleeventsDetails?.JN_ClassSections[0]?.MS_Class?.id)
  //       formik.setFieldValue("class", classdata[0])

  //       setType(singleeventsDetails?.eventFor === "ALL" ? "All Alumni" : "Class");
  //       formik.setValues({ ...formik.values, ...updatedValues });
  //     }
  //   } else {
  //     if (typeData === 'Edit' && singleeventsDetails) {
  //       const updatedValues = {
  //         title: singleeventsDetails?.title,
  //         fromDate: new Date(singleeventsDetails?.fromDate),
  //         toDate: new Date(singleeventsDetails?.toDate),
  //         message: singleeventsDetails?.message,
  //         note: singleeventsDetails?.note,
  //       };
  //       console.log(updatedValues, "sections");
  //       setType(singleeventsDetails?.eventFor === "ALL" ? "All Alumni" : "Class");

  //       formik.setValues({ ...formik.values, ...updatedValues });
  //     }
  //   }
  // }, [singleeventsDetails, typeData, getClassData, getSectionsData]);



  // useEffect(() => {

  //   if (formik.values.class?.id) {
  //     dispatch(getSectionDropdownMiddleWare(formik.values.class.id));
  //   }
  // }, [formik.values.class, dispatch, getSectionsData]);


  const [ingredient, setIngredient] = useState<any>('');
  const onSectionChange = (e) => {
    let _sections = [...formik.values.sections];
    if (e.checked) _sections.push(e.value);
    else _sections.splice(_sections.indexOf(e.value), 1);
    formik.setFieldValue("sections", _sections);
  };

  const closeModal = () => {
    setVisible(false);
    setEditData(null);
  };
  const handleChangeClass = (value) => {
    if (value) {
      const id = value?.id;
      // dispatch(getSectionDropdownMiddleWare(id));
    } else {
      formik.setFieldValue("sections", []);
    }
  };

  // useEffect(() => {
  //   console.log('Selected Class:', formik.values.class);
  //   console.log('Sections Data:', getSectionsData);
  // }, [formik.values.class, getSectionsData]);

  return (
    <div className="add_event_modal">
      <div>
        {/* <RadioField
          label="Event For"
          Start={true}
          selectedOption={type}
          options={["All Alumni", "Class"]}
          onSelectOption={(value) => setType(value)}
        /> */}
        <div>Event For</div>
        <div className="flex flex-wrap gap-3 mt-3">
    <div className="flex align-items-center">
        <RadioButton  />
        <label  className="ml-2">All Alumini</label>
    </div>
    <div className="flex align-items-center">
        <RadioButton />
        <label htmlFor="ingredient2" className="ml-2"onChange={(e) => setIngredient(e.target.value)} checked={ingredient}>Class</label>
    </div>
   
</div>

        {ingredient === "Class" && (
          <div>
            <div className="mt-3">
             
               <DropDownField
           label="Pass Out Session"
            required={false}
            placeholder="Select"
            options={[]}
            optionLabel="name"
            optionValue="id"
            name="departmentId"
            // onChange={(value) => formik.setFieldValue("session", value)}
            //     value={formik.values.session}
          />
            </div>
            <div className="mt-3">
            <DropDownField
           label="Select Class"
            required={false}
            placeholder="Select"
            options={[]}
            optionLabel="name"
            optionValue="id"
            name="departmentId"
           
          />
               

            </div>


            {/* <div className="checkbox_controller mt-2 flex gap-4 align-items-center flex-wrap mt-3">
              {[{id:"A"}]?.map((section) => (
                <div key={section?.id} style={{ display: 'flex' }}>
                  <Checkboxes
                    label={section?.section}
                    onChange={(e) =>
                      handleCheckboxChange(section?.id, e?.target?.checked, section)
                    }
                    checked={formik.values.sections.includes(section?.id)}
                  />
                </div>
              ))}
            </div> */}

          </div>
        )}
        
         <InputField
            // value={formik.values.staffID}
            // onChange={formik.handleChange}
             label="Event Title"
            name="staffID"
            required={true}
            placeholder={"Enter"}
           className="mt-4"
          />
        <div className="grid mt-3">
          <div className="col-12 md:col-6">
            <DatePicker
              label="Date"
              // Start={true}
              // disabled
              value={formik.values.fromDate}
              onChange={(value) => formik.setFieldValue("fromDate", value)}
            />
            {/* <DatePicker
              label="Leave From Date"
              Start={true}
              value={formik.values.fromDate}
              onChange={(value) =>
                formik.setFieldValue("fromDate", new Date(value))
              }
            // dateFormat="yy-mm-dd"
            /> */}
            {/* <DatePicker
              label="Event From Date"
              Start={true}
              icon={<SvgClockIcon />}
              value={formik.values.fromDate}
              onChange={(value) => formik.setFieldValue("fromDate", value)}
            /> */}
            <div className="formik__error">
              {formik.touched.fromDate && formik.errors.fromDate}
            </div>
          </div>
          <div className="col-12 md:col-6">
            <DatePicker
              label="Event To Date"
              // Start={true}
              icon={<SvgCalculator/>}
              value={formik.values.toDate}
              onChange={(value) => formik.setFieldValue("toDate", value)}
            />
            <div className="formik__error">
              {formik.touched.toDate && formik.errors.toDate}
            </div>
          </div>
        </div>
        <div className="mt-3">
          {/* <FileDrag label="Photo (100px X 100px)" /> */}
          <FileDragUpload label="Photo (100px X 100px)"/>
        </div>
        <div className="mt-3 flex flex-column">
          <label>Note</label>
          <InputTextarea
            rows={5}
            autoResize
            className="mt-2"
            name="note"
            value={formik.values.note}
            onChange={formik.handleChange}
          />
        </div>
        <div className="mt-3 flex flex-column">
          <label>Event Notification Message</label>
          <InputTextarea
            rows={5}
            autoResize
            className="mt-2"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      
      <div className="flex flex-wrap justify-content-start gap-3 mt-3">
    <div className="flex align-items-center">
        <Checkbox checked={emailCheck}
          onChange={handleChangeEmail} />
        <label htmlFor="ingredient1" className="ml-2">Email</label>
    </div>
    <div className="flex align-items-center">
        <Checkbox checked={smsCheck}
          onChange={handleChangeSms} />
        <label htmlFor="ingredient2" className="ml-2">SMS</label>
    </div>
    </div>

      <div className="mt-3">
        <InputField label={"   Template ID"} />
      </div>
      <div className="buttons_layout">
        <Button label="Cancel" outlined onClick={closeModal} />
        <Button
          label={typeData === 'Edit' ? "Update" : "Save"}
          type="submit"
          onClick={formik.handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddModal;
