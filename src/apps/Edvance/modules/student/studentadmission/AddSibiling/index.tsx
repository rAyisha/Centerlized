import { useEffect, useState } from "preact/hooks";
import { Dispatch, SetStateAction } from "preact/compat";
import { Button } from "primereact/button";
import "./index.scss";
import DropDownField, { DropdownChangeEvent } from "../../../../../../components/DropDownField";
import { useFormik } from "formik";
import { getClassDropdownMiddleWare, getSectionDropdownMiddleWare, getStudentMiddleware } from "../../store/studentMiddleware";
import { useDispatch, useSelector } from "react-redux";
import { ageOptions } from "../mock";
import { FunctionalComponent } from "preact";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import { SiblingData } from "../../store/student.Types";


interface Props {
  setVisible: Dispatch<SetStateAction<boolean>>;
  onSubmit: (values: SiblingData) => void;
}

const AddSibilingDetails: FunctionalComponent<Props> = ({
  setVisible,
  onSubmit,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [studentDropdown, setStudentDropdown] = useState<any[]>([])
  const [siblingData, setSiblingData] = useState({
    classId: null,
    sectionId: null,
    student: {
      name: "",
      id: null
    },
    siblingType: null,
  })
  const { companyID, branchID, yearID, classDropdownData, sectionDropdownData } = useSelector(
    (state: RootState) => {
      return {
        companyID: state.dropdownDataReducers.companyID,
        branchID: state.dropdownDataReducers.branchID,
        yearID: state.dropdownDataReducers.yearID,
        classDropdownData: state.edvanceReducers.studentReducers.classDropdownData,
        sectionDropdownData: state.edvanceReducers.studentReducers.sectionDropdownData,
      };
    }
  );
  const handleCancelClick = () => {
    setVisible(false);
  };

  const handleSubmitClick = () => {
    onSubmit(siblingData.student)
    setVisible(false);
  };

  const handleChangeClass = (e: DropdownChangeEvent) => {
    try {
      setSiblingData(prev => ({ ...prev, classId: e.value }))
      dispatch(getSectionDropdownMiddleWare({ headers: { "company-id": companyID, "branch-id": branchID } }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSectionClass = async (e: DropdownChangeEvent) => {
    try {
      setSiblingData(prev => ({ ...prev, sectionId: e.value }))
      const res = await dispatch(getStudentMiddleware({ headers: { "company-id": companyID, "branch-id": branchID, "year-id": yearID }, params: { sessionId: 26, classId: siblingData.classId, sectionId: siblingData.sectionId, page: 1, limit: 10 } }));
      if (res.meta.requestStatus === "fulfilled") {
        console.log(res.payload);

        setStudentDropdown(res.payload.studentList)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSiblingType = (e: DropdownChangeEvent) => {
    setSiblingData(prev => ({ ...prev, siblingType: e.value }))
  };

  const handleStudentChange = (e: DropdownChangeEvent) => {
    const { firstName: name, id } = e.value
    setSiblingData(prev => ({ ...prev, student: { name, id } }))
  }

  useEffect(() => {
    dispatch(getClassDropdownMiddleWare({ headers: { "company-id": companyID, "branch-id": branchID, "year-id": yearID } }));
  }, [companyID, branchID, yearID]);

  return (
    <div className="student__add__sibiling__overall__importdetail__children">
      <div className="grid mt-1">
        <div className="col-12 md:col-6 lg:col-6">
          <DropDownField
            label={"Class"}
            required={true}
            placeholder={"Select"}
            options={classDropdownData}
            optionLabel="name"
            optionValue="id"
            onChange={handleChangeClass}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-6">
          <DropDownField
            label={"Section"}
            required={true}
            placeholder={"Select"}
            options={sectionDropdownData}
            optionLabel="name"
            optionValue="id"
            onChange={handleSectionClass}
          />
        </div>
      </div>

      <div className="grid mt-1">
        <div className="col-12 md:col-6 lg:col-6">
          <DropDownField
            label={"Student"}
            required={false}
            placeholder={"Select"}
            onChange={handleStudentChange}
            options={studentDropdown}
            optionLabel="firstName"
          />
        </div>
        <div className="col-12 md:col-6 lg:col-6">
          <DropDownField
            label={"Sibling Relation"}
            required={false}
            placeholder={"Select"}
            name="siblingType"
            options={ageOptions}
            onChange={handleSiblingType}
          />
        </div>
      </div>

      <div className="cancelbutton__overall">
        <Button
          label="Cancel"
          outlined
          className="cancelbutton__overalloutline"
          onClick={handleCancelClick}
        />
        <Button
          label="Submit"
          className="cancelbutton__overalloutline"
          onClick={handleSubmitClick}
        />
      </div>
    </div>
  );
};

export default AddSibilingDetails;
