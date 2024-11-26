import { FunctionalComponent } from "preact";
import { StudentFormData } from "../../store/student.Types";

interface Props {
  studentData: StudentFormData
}

const PreviousSchoolInfo: FunctionalComponent<Props> = ({ studentData }) => {

  return (
    <div className="grid">
      {studentData?.previousSchoolDetails?.map((school, index) => (
        <div key={index} className="col-12 md:col-6 lg:col-4">
          <div className="container_carddetail">
            <div className="container_carddetail_header mb-2">School {index + 1} Details</div>

            <div className="grid container_carddetail_inner">
              <div className="col-12 md:col-6 lg:col-4 container_carddetail_label">School Name</div>
              <div className="col-12 md:col-6 lg:col-7">{school.name || "-"}</div>
            </div>
            <div className="grid container_carddetail_inner">
              <div className="col-12 md:col-6 lg:col-4 container_carddetail_label">Location</div>
              <div className="col-12 md:col-6 lg:col-7">{school.location || "-"}</div>
            </div>
            <div className="grid container_carddetail_inner">
              <div className="col-12 md:col-6 lg:col-4 container_carddetail_label">Passout Year</div>
              <div className="col-12 md:col-6 lg:col-7">{school.year || "-"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviousSchoolInfo;
