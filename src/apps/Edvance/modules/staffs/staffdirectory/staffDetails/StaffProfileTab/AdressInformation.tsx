import React from "react";

// Define the type for the `getallteacherbyid` prop
interface TeacherInfo {
  address?: string;
  permanentAddress?: string;
}

interface AdressInformationProps {
  getallteacherbyid: TeacherInfo;
}

const AdressInformation: React.FC<AdressInformationProps> = ({ getallteacherbyid }) => {
  return (
    <div className="student__details__view__main__card">
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Current Address</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.address || "-"}</span>
        </div>
      </div>
      <div className="flex card__content__last">
        <div className="card__left__side">
          <span>Permanent Address</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.permanentAddress || "-"}</span>
        </div>
      </div>
    </div>
  );
};

export default AdressInformation;
