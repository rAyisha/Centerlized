import React from "react";
import MainInformation from "./MainInformation";
import "./index.scss";
import AdressInformation from "./AdressInformation";
import ParentGardianInfo from "./ParentGardianInfo";
import QualificationInfo from "./QualificationsInfo";
import WorkexperienceInfo from "./workexpereienceInfo";

// Define the types for the `getallteacherbyid` prop passed to the component
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
  // Add other fields as needed
}



const StaffProfileTab = ({ getallteacherbyid }:any) => {
  return (
    <div className="w-full staff__details__overall__container mb-3">
      <MainInformation getallteacherbyid={getallteacherbyid} />
      <div className="card__title">
        <span>Address</span>
      </div>
      <AdressInformation getallteacherbyid={getallteacherbyid} />
      <div className="card__title">
        <span>Bank Account Details</span>
      </div>
      <ParentGardianInfo getallteacherbyid={getallteacherbyid} />
      <div className="card__title">
        <span>Qualifications Details</span>
      </div>
      <QualificationInfo />
      <div className="card__title">
        <span>Work Experience Details</span>
      </div>
      <WorkexperienceInfo />
      {/* <MiscellaneousInfo /> */}
    </div>
  );
};

export default StaffProfileTab;
