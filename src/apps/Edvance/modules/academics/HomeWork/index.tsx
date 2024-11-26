import React from "preact";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import FormDropdown from "../../../components/DropDwonForm";
import { TabPanel, TabView } from "primereact/tabview";
import "./index.scss";
import { useEffect } from "preact/hooks";
import DropDownField from "../../../../../components/DropDownField";
import { departmentdata } from "../../staffs/staffdirectory/tabHeader/mock";
import SvgSearchIcon from "../../../../../assets/svgIcon/SvgSearchIcon";
import Button from "../../../../../components/Button";
import UpcomingHomeWorkTable from "./UpcommingWorkTabel";

// Define types for the form values
interface FormValues {
  class: { id: string; name: string } | any;
  section: { id: string; section: string } | any;
  subjectGroup: { id: string; name: string } | any;
  subjects: { id: string; name: string } | any;
  searchData: string;
}

// Define types for the Redux state
interface RootState {
  studentDetailsReducers: {
    getClassData: { data: { data: Array<{ id: string; name: string }> } };
    getSectionsData: { data: { data: Array<{ id: string; section: string }> } };
  };
  academicsReducers: {
    subjectGroupOptions: Array<{ id: string; name: string }>;
    subjectOptions: Array<{ id: string; name: string }>;
    homeworklistdata: {
      upcomingHomework: any; // Adjust type as needed
      closedHomework: any; // Adjust type as needed
    };
  };
}

const initialValues: FormValues = {
  class: null,
  section: null,
  subjectGroup: null,
  subjects: null,
  searchData: "",
};

const HomeWork = () => {
  const dispatch = useDispatch();
  //   const {
  //     getClassData,
  //     getSectionsData,
  //     subjectGroupOptions,
  //     subjectOptions,
  //     homeworklistdata,
  //   } = useSelector((state: RootState) => ({
  //     getClassData: state.studentDetailsReducers.getClassData.data.data,
  //     getSectionsData: state.studentDetailsReducers.getSectionsData.data.data,
  //     subjectGroupOptions: state.academicsReducers.subjectGroupOptions,
  //     subjectOptions: state.academicsReducers.subjectOptions,
  //     homeworklistdata: state.academicsReducers.homeworklistdata,
  //   }));

  const customValidation = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.class) {
      errors.class = { id: "", name: "" };
    }
    if (!values.section) {
      errors.section = { id: "", section: "" };
    }
    if (!values.subjectGroup) {
      errors.subjectGroup = { id: "", name: "" };
    }
    if (!values.subjects) {
      errors.subjects = { id: "", name: "" };
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    validate: customValidation,
    onSubmit: (values) => {
      const bodyData = {
        classID: values.class?.id,
        sectionID: values.section?.id,
        subjectID: values.subjects?.id,
        searchData: values.searchData || "",
      };
      //   dispatch(getHomeWorkDataMiddleWare(bodyData));
    },
  });

  useEffect(() => {
    if (formik.values.subjects?.id) {
      const bodyData = {
        classID: formik.values.class?.id,
        sectionID: formik.values.section?.id,
        subjectID: formik.values.subjects?.id,
        searchData: formik.values.searchData || "",
      };
      const searchData = setTimeout(() => {
        // dispatch(getHomeWorkDataMiddleWare(bodyData));
      }, 300);
      return () => {
        clearTimeout(searchData);
      };
    }
  }, [formik.values.searchData]);

  useEffect(() => {
    const classId = formik.values.class?.id;
    if (classId) {
      if (formik.values.section?.id) {
        if (formik.values.subjectGroup?.id) {
          //   dispatch(getSubjectBySubjectGroup(formik.values.subjectGroup.id));
        } else {
          //   dispatch(getSubjectGroupsByClassSection({
          //     classId: classId,
          //     sectionId: formik.values.section.id,
          //   }));
        }
      } else {
        // dispatch(getSectionDropdownMiddleWare(classId));
      }
    } else {
      //   dispatch(getClassDropdownMiddleWare());
    }
  }, [
    formik.values.class?.id,
    formik.values.section?.id,
    formik.values.subjectGroup?.id,
  ]);

  return (
    <div className="home__work">
      <div className="home__work__header__title">Homework Status</div>
      <div className="grid mt-4">
        <div className="col-12 md:col-6 lg:col-3">
          {/* <FormDropdown
            label={"Class"}
            Start={true}
            placeholder={"Select"}
            options={[]}
            optionLabel="name"
            value={formik.values.class}
            onChange={(value) => formik.setFieldValue("class", value)}
            error={
              formik.touched.class && formik.errors.class
                ? "Class is required"
                : null
            }
          /> */}
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
        <div className="col-12 md:col-6 lg:col-3">
          {/* <FormDropdown
            label={"Section"}
            Start={true}
            placeholder={"Select"}
            options={[]}
            optionLabel="section"
            value={formik.values.section}
            onChange={(value) => formik.setFieldValue("section", value)}
            error={
              formik.touched.section && formik.errors.section
                ? "Section is required"
                : null
            }
          /> */}
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
        <div className="col-12 md:col-6 lg:col-3">
          {/* <FormDropdown
            label={"Subject"}
            Start={true}
            placeholder={"Select"}
            options={[]}
            optionLabel="name"
            value={formik.values.subjects}
            onChange={(value) => formik.setFieldValue("subjects", value)}
            error={
              formik.touched.subjects && formik.errors.subjects
                ? "Subjects are required"
                : null
            }
          /> */}
          <DropDownField
            label="Subject"
            required={true}
            placeholder="Select"
            options={departmentdata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.subjects}
            name="subjects"
            onChange={formik.handleChange}
            error={
              formik.touched.subjects && formik.errors.subjects
                ? (formik.errors.subjects as string)
                : ""
            }
          />
        </div>
        <div className=" mt-3 col-12 md:col-3 lg:col-3 mt-5">
          <div className="home__work__btn">
            <Button
              label="Search"
              icon={<SvgSearchIcon color="var(--base-text-inactive-color)" />}
              onClick={formik.handleSubmit}
              iconPos="left"
              className="export__butt__overall"
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <hr />
      </div>
      <div className="home__work__header__title mt-5 col-12">Homework List</div>
      <TabView>
        <TabPanel header="Upcoming Homework">
          <UpcomingHomeWorkTable tablevisible={[]} formik={formik} />
        </TabPanel>
        <TabPanel header="Closed Homework">
          <UpcomingHomeWorkTable tablevisible={[]} formik={formik} />
        </TabPanel>
      </TabView>
    </div>
  );
};

export default HomeWork;
