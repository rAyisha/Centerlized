import React from "react";

// Define the type for the props
interface Qualification {
  "School Name": string;
  Location: string;
  "Passout year": string;
}

interface QualificationInfoProps {
  getDisablesingleData: {
    getDisablesingleData: Qualification[]|any;
  };
}

const QualificationInfo: React.FC<QualificationInfoProps> = ({ getDisablesingleData }) => {
  const parentDetails = getDisablesingleData?.getDisablesingleData || [];

  return (
    <div className="grid">
      {parentDetails.map((school, index) => (
        <div key={index} className="col-12 md:col-6 lg:col-4">
          <div className="container_carddetail">
            <div className="container_carddetail_header mb-2">
              {/* School {index + 1} */}
              {/* Details */}
            </div>
            
            <div className="grid container_carddetail_inner">
              <div className="col-12 md:col-6 lg:col-6 container_carddetail_label">College or University Name</div>
              <div className="col-12 md:col-6 lg:col-6">{school["School Name"] || "-"}</div>
            </div>
            <div className="grid container_carddetail_inner">
              <div className="col-12 md:col-6 lg:col-6 container_carddetail_label">Passed out year</div>
              <div className="col-12 md:col-6 lg:col-6">{school["Passout year"] || "-"}</div>
            </div>
            <div className="grid container_carddetail_inner">
              <div className="col-12 md:col-6 lg:col-6 container_carddetail_label">Stream</div>
              <div className="col-12 md:col-6 lg:col-6">{school["Location"] || "-"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QualificationInfo;
