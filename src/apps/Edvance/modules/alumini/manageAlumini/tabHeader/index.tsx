import React, { useEffect, useState } from "react";
import "./index.scss";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
// import { Dropdown } from "primereact/dropdown";
// import SvgList from "../../../../assets/icons/SvgList";
// import SvgCategory from "../../../../assets/icons/SvgCategory";
// import SvgImghidegroup from "../../../../assets/icons/SvgImghidegroup";
// import SvgAdd from "../../../../assets/icons/SvgAdd";
// import ExportButton from "../../../../components/ExportButton";
// import SvgHumanresource from "../../../../assets/icons/SvgHumanResource";
// import FormDropdown from "../../../../components/DropDwonForm";
import { useNavigate } from "react-router-dom";
// import FormInputs from "../../../../components/InputField";
// import { getAllClassLessonMasterMiddleware, getAllSectionLessonMasterMiddleware, getAllSessionMasterMiddleware } from "../../../Subjects/SubjectMaster/store/SubjectMasterMiddleware";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import DropDownField from "../../../../../../components/DropDownField";
import InputField from "../../../../../../components/InputField";
// import DropDownField from "../../../../../components/DropDownField";
// import InputField from "../../../../../components/InputField";
// import { getAdmissionNoData, getmanagealumini } from "../../store/alumniMiddleware";

const TabHeader = ({ viewType, setViewType, searchValue, setformikValue, admissionNo, setAdmissionNo }) => {
  const dispatch = useDispatch()
  const [searchMiniValue, setSearchMiniValue] = useState("");

  console.log(admissionNo, "admissionNo")
  const navigate = useNavigate();

  // const { allclasslessonmaster, getallsectionlessonmaster, getAllsession, manageAluminiData } = useSelector((state) => {
  //   return {
  //     allclasslessonmaster: state.subjectMasterReducers?.allclasslessonmaster?.data,
  //     getallsectionlessonmaster: state.subjectMasterReducers?.getallsectionlessonmaster?.data,
  //     getAllsession: state.subjectMasterReducers?.getAllsession?.data,
  //     manageAluminiData: state.alumniReducers?.manageAluminiData?.data,

  //   };
  // });
  // console.log(manageAluminiData?.alumni, "manageAluminiData")
  const handleMiniChange = (e) => {
    setSearchMiniValue(e.target.value);
  };

  const handleChangeClass = (value) => {
    console.log(value.id, "GET_ALL_SECTION_LESSON_MASTER")
    // dispatch(getAllSectionLessonMasterMiddleware({ payload: value?.id }))
  }



  const handleNewAdmission = () => {
    // if (admissionNo !== '') {
    // dispatch(getAdmissionNoData({ admissionNo }))
    // }
  };

  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.section) {
  //     errors.section = "Section is Required";
  //   }
  //   if (!values.class) {
  //     errors.class = "Class is Required";
  //   }
  //   if (!values.session) {
  //     errors.session = "Session is Required";
  //   }


  //   return errors;
  // };

  const handleSubmit = () => {
    console.log(formik.values, "subvalues")
    console.log(searchValue, "searchValue")
    setformikValue(formik.values)
    // dispatch(getmanagealumini(
    //   {
    //     payload: {
    //       classId: 1,
    //       sectionId: 1,
    //       sessionId: 15,
    //       search: searchValue,
    //       // classId:formik.values?.class?.id,
    //       // sectionId:formik.values?.section?.id,
    //       // sessionId:formik.values?.session?.id
    //     }
    //   }
    // ))


  }
  const formik = useFormik({
    initialValues: {
      section: "",
      class: "",
      session: "",
    },
    // validate,
    onSubmit: () => {
      handleSubmit()
    },
  });

  // useEffect(() => {
  //   dispatch(getAllClassLessonMasterMiddleware())
  //   dispatch(getAllSessionMasterMiddleware())
  // }, [])
  // useEffect(() => {
  //   if (manageAluminiData?.alumni.length > 0 && searchValue) {
  //     handleSubmit();
  //   }
  // }, [searchValue]);
  // useEffect(() => {
  //   dispatch(getAdmissionNoData({ admissionNo }))
  // }, [admissionNo])
  return (
    <div className="overall_alumni_manage_container">
      <div className="profile__tab__headertxt pb-5">Manage Alumni</div>

      <div className="grid profile__input__container">
        <div className="col-8">
          <div className="grid">
            <div className="col-3 md:col-4 lg:col-4">
              
                <DropDownField
           label="Pass Out Session"
            required={false}
            placeholder="Select"
            options={[]}
            optionLabel="name"
            optionValue="id"
            name="departmentId"
            onChange={(value) => formik.setFieldValue("session", value)}
                value={formik.values.session}
          />
            </div>
            <div className="col-3 md:col-4 lg:col-4">
             
                <DropDownField
           label="name"
            required={false}
            placeholder="Select"
            options={[]}
            optionLabel="name"
            optionValue="id"
            name="departmentId"
            onChange={(value) => { formik.setFieldValue("class", value); handleChangeClass(value) }}
                value={formik.values.class}
          />
            </div>
            <div className="col-3 md:col-4 lg:col-4">
             
                <DropDownField
           label="name"
            required={false}
            placeholder="Select"
            options={[]}
            optionLabel="name"
            optionValue="id"
            name="departmentId"
            onChange={(value) => { formik.setFieldValue("section", value) }}
            value={formik.values.section}
          />
            </div>
            <div className="col-12 flex align-items-end justify-content-end ">
              <div>
                <Button
                  icon={<i className="pi pi-search" />}
                  // onClick={handleNewAdmission}
                  iconPos="left"
                  className="export__search__button"
                  onClick={formik.handleSubmit}
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="grid">
            <div className="col-3 md:col-12 lg:col-12">
             
              <InputField
             
              label="Search By Admission Number"
              placeholder="Enter"
              // value={formik.values.session}
              // onChange={formik.handleChange}
            />
              <div className="grid">
                <div className="col-12 flex align-items-end justify-content-end mt-3">
                  <div>
                    <Button
                      icon={<i className="pi pi-search" />}
                      onClick={handleNewAdmission}
                      iconPos="left"
                      className="export__search__button"
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal__line w-full"></div>

    </div>
  );
};

export default TabHeader;
