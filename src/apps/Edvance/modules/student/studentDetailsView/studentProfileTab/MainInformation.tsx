import { FunctionalComponent } from "preact";
import { StudentFormData } from "../../store/student.Types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../redux/store";
import { formatDate } from "../../../../../../utility/helpers";

interface Props {
  studentData: StudentFormData
}

const MainInformation: FunctionalComponent<Props> = ({ studentData }) => {

  const { categoryDropdownData, religionDropdownData } = useSelector((state: RootState) => {
    return {
      categoryDropdownData: state.edvanceReducers.studentReducers.categoryDropdownData,
      religionDropdownData: state.edvanceReducers.studentReducers.religionDropdownData,
    }
  })

  const fetchNameById = (data: any[], id: number) => {
    return data.find(item => item.id === id)?.name
  }

  return (
    <div className="student__details__view__main__card">
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Admission Date</span>
        </div>
        <div className="card__right__side">
          <span>{studentData?.admissionDate ? formatDate(studentData?.admissionDate) : "-"}</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Date of Birth</span>
        </div>
        <div className="card__right__side">
          <span>{studentData?.dateOfBirth ? formatDate(studentData?.dateOfBirth) : "-"}</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Category</span>
        </div>
        <div className="card__right__side">
          <span>{fetchNameById(categoryDropdownData, studentData.categoryId) || "-"} </span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Mobile Number</span>
        </div>
        <div className="card__right__side">
          <span>{studentData?.mobileNumber || "-"}</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Caste</span>
        </div>
        <div className="card__right__side">
          <span>{studentData?.caste || "-"}</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Religion</span>
        </div>
        <div className="card__right__side">
          <span>{fetchNameById(religionDropdownData, studentData.religionId) || "-"}</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Email</span>
        </div>
        <div className="card__right__side">
          <span>{studentData?.email || "-"}</span>
        </div>
      </div>
    </div>
  );
};

export default MainInformation;
