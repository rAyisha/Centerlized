import React from "react";

// Define a type for the getallteacherbyid prop to ensure type safety
interface TeacherInfo {
  StaffType: string;
  fathersName: string;
  mothersName: string;
  email: string;
  gender: string;
  DateOfBirth: string;
  DateOfJoining: string;
  phoneNo: string;
  emergencyContact: string;
  EPF_No: string;
  basicSalary: string;
  MS_ContractTypeMaster: { type: string };
  workShift: string;
  workLocation: string;
  division: string;
  subject: string;
}

interface MainInformationProps {
  getallteacherbyid: TeacherInfo;
}

const MainInformation: React.FC<MainInformationProps> = ({ getallteacherbyid }) => {
  console.log("getallteacherbyid", getallteacherbyid);
  return (
    <div className="student__details__view__main__card">
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Staff Type </span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.StaffType}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Father Name</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.fathersName}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Mother Name</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.mothersName}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Email</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.email}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Gender</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.gender}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Date of Birth</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.DateOfBirth}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Date Of Joining</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.DateOfJoining}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Phone</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.phoneNo}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Emergency Contact Number</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.emergencyContact}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Marital Status</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.DateOfBirth}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Adhaar Number</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.DateOfBirth}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Pan Number</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.DateOfBirth}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>EPF No</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.EPF_No}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Basic Salary</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.basicSalary}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Contract Type</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.MS_ContractTypeMaster?.type}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Work Shift</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.workShift}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Work Location</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.workLocation}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>School Division</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.division}</span>
        </div>
      </div>

      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Subject</span>
        </div>
        <div className="card__right__side">
          <span>{getallteacherbyid?.subject}</span>
        </div>
      </div>
    </div>
  );
};

export default MainInformation;
