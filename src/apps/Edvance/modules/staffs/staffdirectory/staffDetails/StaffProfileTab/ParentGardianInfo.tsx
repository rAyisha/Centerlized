import React from "react";

// Define the type for the props
interface TeacherDetails {
  bankAccountTitle?: string;
  bankName?: string;
  bankBranchName?: string;
  bankAccountNumber?: string;
  IFSC_CODE?: string;
}

interface ParentGardianInfoProps {
  getallteacherbyid: TeacherDetails;
}

const ParentGardianInfo: React.FC<ParentGardianInfoProps> = ({ getallteacherbyid }) => {
  return (
    <div className="student__details__view__main__card">
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Account Title</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.bankAccountTitle}</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Bank Name</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.bankName}</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Bank Branch Name</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.bankBranchName}</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Bank Account Number</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.bankAccountNumber}</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>IFSC Code</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.IFSC_CODE}</span>
        </div>
      </div>
    </div>
  );
};

export default ParentGardianInfo;
