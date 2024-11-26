import { FunctionalComponent } from "preact";
import { StudentFormData } from "../../store/student.Types";

interface Props {
  studentData: StudentFormData
}

const AdressInformation: FunctionalComponent<Props> = ({ studentData }) => {
  const formatAddress = (type: "current" | "primary") => {
    return ``
  }
  return (
    <div className="student__details__view__main__card">
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Current Address</span>
        </div>
        <div className="card__right__side">
          <span>{studentData?.currentAddress || "-"}</span>
        </div>
      </div>
      <div className="flex card__content__last">
        <div className="card__left__side">
          <span>Permanent Address</span>
        </div>
        <div className="card__right__side">
          <span>{studentData?.permanentAddress || "-"}</span>
        </div>
      </div>
    </div>
  );
};

export default AdressInformation;
