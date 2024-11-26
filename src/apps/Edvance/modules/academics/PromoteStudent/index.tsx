import React, { useEffect } from "react";
import FormDropdown from "../../../components/DropDwonForm";

import "./index.scss";

import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import TableData from "./TableData";
import DropDownField from "../../../../../components/DropDownField";
import { departmentdata } from "../../staffs/staffdirectory/tabHeader/mock";
import SvgSearchIcon from "../../../../../assets/svgIcon/SvgSearchIcon";
import Button from "../../../../../components/Button";
import { RootState } from "../../../../../redux/store";
// import {
//   getStudentListTabelDataMiddleWare,
//   getClassDropdownMiddleWare,
//   getSectionDropdownMiddleWare,
//   getPromoteSectionDropdownMiddleWare,
//   getPromoteSessionMiddleWare,
// } from "../store/acadamicsMiddleware";

interface FormValues {
  class: any; // Replace with actual type if known
  section: any; // Replace with actual type if known
  session: any; // Replace with actual type if known
  classpromoted: any; // Replace with actual type if known
  sectionpromoted: any; // Replace with actual type if known
}

const initialValues: FormValues = {
  class: "",
  section: "",
  session: "",
  classpromoted: "",
  sectionpromoted: "",
};

const PromoteStudents: React.FC = () => {
  const dispatch = useDispatch();
  const {
    studentTableData,
    getClassData,
    getSectionsData,
    promoteSectionDropdownData,
    promoteSessionData,
  } = useSelector((state: RootState) => ({
    studentTableData:
      state.StudentDetailListReducers?.studentTableData?.students,
    getClassData: state?.studentDetailsReducers?.getClassData?.data?.data,
    getSectionsData: state?.studentDetailsReducers?.getSectionsData?.data?.data,
    promoteSectionDropdownData:
      state?.acadamicsReducers?.promoteSectionDropdownData,
    promoteSessionData: state?.acadamicsReducers?.promoteSessionData,
  }));

  const customValidation = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.class) {
      errors.class = "Class is required";
    }
    if (!values.section) {
      errors.section = "Section is required";
    }
    if (!values.session) {
      errors.session = "Session is required";
    }
    if (!values.classpromoted) {
      errors.classpromoted = "Class is required";
    }
    if (!values.sectionpromoted) {
      errors.sectionpromoted = "Section is required";
    }
    return errors;
  };

  const onSubmit = (values: FormValues) => {
    const bodyData = {
      classID: values.class.id,
      sectionID: values.section.id,
    };
    // dispatch(getStudentListTabelDataMiddleWare(bodyData));
  };

  const formik = useFormik({
    initialValues,
    validate: customValidation,
    onSubmit,
  });

  useEffect(() => {
    const id = formik.values.class?.id;
    if (id) {
      //   dispatch(getSectionDropdownMiddleWare(id));
    }
  }, [formik.values.class?.id, dispatch]);

  useEffect(() => {
    const id = formik.values?.classpromoted?.id;
    if (id) {
      //   dispatch(getPromoteSectionDropdownMiddleWare(id));
    }
  }, [formik.values?.classpromoted?.id, dispatch]);

  useEffect(() => {
    // dispatch(getClassDropdownMiddleWare());
    // dispatch(getPromoteSessionMiddleWare());
  }, [dispatch]);

  return (
    <div className="promoted_students_container">
      <div className="caption_title mb-5">Promote Students</div>
      <div className="grid profile__input__container">
        <div className="col-6 md:col-6 lg:col-6">
          <DropDownField
            label="Class"
            required={true}
            placeholder="Select"
            options={departmentdata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.class}
            name="class"
            onChange={formik.handleChange}
            error={
              formik.touched.class && formik.errors.class
                ? (formik.errors.class as string)
                : ""
            }
          />
        </div>
        <div className="col-6 md:col-6 lg:col-6">
          <DropDownField
            label="Section"
            required={true}
            placeholder="Select"
            options={departmentdata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.section}
            name="section"
            onChange={formik.handleChange}
            error={
              formik.touched.section && formik.errors.section
                ? (formik.errors.section as string)
                : ""
            }
          />
        </div>
      </div>
      <div className="caption_title pt-5 mb-5">Promote Students In Next Session</div>
      <div className="grid profile__input__container">
        <div className="col-4 md:col-4 lg:col-3">
          <DropDownField
            label="Promote In Session"
            required={true}
            placeholder="Select"
            options={departmentdata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.session}
            name="session"
            onChange={formik.handleChange}
            error={
              formik.touched.session && formik.errors.session
                ? (formik.errors.session as string)
                : ""
            }
          />
        </div>
        <div className="col-4 md:col-4 lg:col-3">
          <DropDownField
            label="Class"
            required={true}
            placeholder="Select"
            options={departmentdata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.classpromoted}
            name="classpromoted"
            onChange={formik.handleChange}
            error={
              formik.touched.classpromoted && formik.errors.classpromoted
                ? (formik.errors.classpromoted as string)
                : ""
            }
          />
        </div>
        <div className="col-4 md:col-4 lg:col-3">
          <DropDownField
            label="Section"
            required={true}
            placeholder="Select"
            options={departmentdata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.sectionpromoted}
            name="sectionpromoted"
            onChange={formik.handleChange}
            error={
              formik.touched.sectionpromoted && formik.errors.sectionpromoted
                ? (formik.errors.sectionpromoted as string)
                : ""
            }
          />
        </div>
        <div className="col-4 md:col-4 lg:col-3 search_container mt-5">
          <Button
            label="Search"
            icon={<SvgSearchIcon color="var(--base-text-inactive-color)" />}
            onClick={formik.handleSubmit}
            iconPos="left"
            className="export__butt__overall"
          />
        </div>
      </div>

      <div className="mt-4">
        <TableData tabledata={studentTableData} formik={formik} />
      </div>
    </div>
  );
};

export default PromoteStudents;
