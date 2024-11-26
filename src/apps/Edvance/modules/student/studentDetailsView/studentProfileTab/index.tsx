import MainInformation from "./MainInformation";
import "./index.scss";
import AdressInformation from "./AdressInformation";
import ParentGardianInfo from "./ParentGardianInfo";
import MedicalInfo from "./MedicalInfo";
import PreviousSchoolInfo from "./previousSchoolInfo";
import { StudentFormData } from "../../store/student.Types";
import { FunctionalComponent } from "preact";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import { useEffect } from "preact/hooks";
import { getBloodGroupDropdownMiddleWare, getCategoryDropdownMiddleWare, getReligionDropdownMiddleWare } from "../../store/studentMiddleware";

interface Props {
  studentData: StudentFormData
}
const StudentProfileTab: FunctionalComponent<Props> = ({ studentData }) => {

  const dispatch = useDispatch<AppDispatch>()
  const { companyID, branchID } = useSelector((state: RootState) => {
    return {
      companyID: state.dropdownDataReducers.companyID,
      branchID: state.dropdownDataReducers.branchID,
    }
  })

  useEffect(() => {
    const headers = { "company-id": companyID, "branch-id": branchID }
    dispatch(getCategoryDropdownMiddleWare({ headers }))
    dispatch(getReligionDropdownMiddleWare({ headers }))
    dispatch(getBloodGroupDropdownMiddleWare({ headers }))
  }, [companyID, branchID])

  return (
    <div className="w-full student__details__overall__container mb-3">
      <MainInformation studentData={studentData} />
      <div className="card__title">
        <span>Address</span>
      </div>
      <AdressInformation studentData={studentData} />
      <div className="card__title mb-4">
        <span>Health Details</span>
      </div>
      <MedicalInfo studentData={studentData} />
      <div className="card__title">
        <span>Parent Guardian Detail</span>
      </div>
      <ParentGardianInfo studentData={studentData} />
      <div className="card__title">
        <span>Previous School Detail</span>
      </div>
      <PreviousSchoolInfo studentData={studentData} />

    </div>
  );
};

export default StudentProfileTab;
