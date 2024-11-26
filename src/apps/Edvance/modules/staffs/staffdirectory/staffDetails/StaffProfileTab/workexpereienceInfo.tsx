import React from "react";

// Define the type for the props
interface WorkExperience {
  "Organization Name": string;
  Position: string;
  "Years of Experience": string;
  "Previous CTC": string;
}

interface WorkExperienceInfoProps {
  getDisablesingleData: {
    getDisablesingleData: WorkExperience[]|any;
  };
}

const WorkexperienceInfo: React.FC<WorkExperienceInfoProps> = ({ getDisablesingleData }) => {
  const parentDetails = getDisablesingleData?.getDisablesingleData || [];

  return (
    <div className="grid">
      {parentDetails.map((experience, index) => (
        <div key={index} className="col-12 md:col-6 lg:col-4">
          <div className="container_carddetail_expert ">
            <div className="container_carddetail_header mb-2">
              {/* Work Experience {index + 1} */}
              {/* Details */}
            </div>
            
            <div className="grid container_carddetail_inner">
              <div className="col-12 md:col-6 lg:col-6 container_carddetail_label">Organization Name</div>
              <div className="col-12 md:col-6 lg:col-6">{experience["Organization Name"] || "-"}</div>
            </div>
            <div className="grid container_carddetail_inner">
              <div className="col-12 md:col-6 lg:col-6 container_carddetail_label">Years of Experience</div>
              <div className="col-12 md:col-6 lg:col-6">{experience["Years of Experience"] || "-"}</div>
            </div>
            <div className="grid container_carddetail_inner">
              <div className="col-12 md:col-6 lg:col-6 container_carddetail_label">Position</div>
              <div className="col-12 md:col-6 lg:col-6">{experience["Position"] || "-"}</div>
            </div>
            <div className="grid container_carddetail_inner">
              <div className="col-12 md:col-6 lg:col-6 container_carddetail_label">Previous CTC</div>
              <div className="col-12 md:col-6 lg:col-6">{experience["Previous CTC"] || "-"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkexperienceInfo;
