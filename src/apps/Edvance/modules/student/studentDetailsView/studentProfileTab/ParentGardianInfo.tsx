import { Image } from "primereact/image";
import { StudentFormData } from "../../store/student.Types";
import { FunctionalComponent } from "preact";
import { guardianOptions } from "../../studentadmission/mock";

interface Props {
  studentData: StudentFormData
}

const ParentGardianInfo: FunctionalComponent<Props> = ({ studentData }) => {

  return (
    <div className="grid">
      {guardianOptions.filter((item) => studentData[`${item.value}Name`] !== undefined).map((item, index) => (
        <div key={index} className="col-12 md:col-6 lg:col-4 ">
          <div className="container_carddetail">
            <div className="container_carddetail_header">{item.label} Details</div>
            <div className="container_carddetail_img mb-4 mt-2">
              <Image
                src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg"
                alt={`${item.label} Image`}
                width="150"
                height="100"
              />
            </div>
            <div className="grid container_carddetail_inner">
              <div className="col-12 md:col-6 lg:col-4 container_carddetail_lable">Name</div>
              <div className="col-12 md:col-6 lg:col-4">{studentData[`${item.value}Name`] || "-"}</div>
            </div>
            <div className="grid container_carddetail_inner">
              <div className="col-12 md:col-6 lg:col-4 container_carddetail_lable">Phone</div>
              <div className="col-12 md:col-6 lg:col-4">{studentData[`${item.value}Phone`] || "-"}</div>
            </div>
            <div className="grid container_carddetail_inner">
              <div className="col-12 md:col-6 lg:col-4 container_carddetail_lable">Email</div>
              <div className="col-12 md:col-6 lg:col-4">{studentData[`${item.value}Email`] || "-"}</div>
            </div>
            <div className="grid container_carddetail_inner">
              <div className="col-12 md:col-6 lg:col-4 container_carddetail_lable">Occupation</div>
              <div className="col-12 md:col-6 lg:col-4">{studentData[`${item.value}Occupation`] || "-"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParentGardianInfo;
