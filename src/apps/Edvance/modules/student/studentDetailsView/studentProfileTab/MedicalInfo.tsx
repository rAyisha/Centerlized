import { FunctionalComponent } from "preact";
import { StudentFormData } from "../../store/student.Types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../redux/store";

interface Props {
  studentData: StudentFormData
}

const MedicalInfo: FunctionalComponent<Props> = ({ studentData }) => {

  const { bloodGroupDropdownData } = useSelector((state: RootState) => {
    return {
      bloodGroupDropdownData: state.edvanceReducers.studentReducers.bloodGroupDropdownData,
    }
  })

  const fetchNameById = (data: any[], id: number) => {
    return data.find(item => item.id === id)?.name
  }
  return (
    <div className="student__details__view__main__card">
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Blood Group</span>
        </div>
        <div className="card__right__side">
          <span>{fetchNameById(bloodGroupDropdownData, studentData.bloodGroupId) || "-"}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Height</span>
        </div>
        <div className="card__right__side">
          <span>{studentData?.height || "-"}</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Weight</span>
        </div>
        <div className="card__right__side">
          <span>{studentData?.weight || "-"}</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Medical History</span>
        </div>
        <div className="card__right__side">
          <span>{"..."}</span>
        </div>
      </div>
    </div>
  );
};

export default MedicalInfo;
