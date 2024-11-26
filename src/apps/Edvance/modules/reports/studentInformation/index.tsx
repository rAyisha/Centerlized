import React from "preact";
import MasterTabs from "../../../components/MasterTabs";

const StudentInformation = () => {
  const tabsData = [
    {
      index: 1,
      title: "Student Report",
      path: "/edvance/reports/studentinformation/studentReport",
    },
    {
      index: 2,
      title: "Class & Section Report",
      path: "/edvance/reports/studentinformation/classsectionreport",
    },
    {
      index: 3,
      title: "Fees StatementGuardian Report",
      path: "/edvance/reports/studentinformation/guardianreport",
    },
    {
      index: 4,
      title: "Student History",
      path: "/edvance/reports/studentinformation/studenthistory",
    },
    {
      index: 5,
      title: "Parent Login Credentials",
      path: "/edvance/reports/studentinformation/parentlogincredientials",
    },
    {
      index: 6,
      title: "Class Subject Report",
      path: "/edvance/reports/studentinformation/classsubjectreport",
    },
    {
      index: 7,
      title: "Admission Report",
      path: "/edvance/reports/studentinformation/admissionreport",
    },
    {
      index: 8,
      title: "Sibling Report",
      path: "/edvance/reports/studentinformation/siblingreport",
    },
    {
      index: 9,
      title: "Student Profile",
      path: "/edvance/reports/studentinformation/StudentProfileReport",
    },
    {
      index: 10,
      title: "Student Gender Ratio",
      path: "/edvance/reports/studentinformation/StudentGenderRapioRepor",
    },
    {
      index: 11,
      title: "Student Teacher Ratio Report",
      path: "/edvance/reports/studentinformation/StudentTeacherRapioRepor",
    },
  ];
  return (
    <div className="student__master">
      <MasterTabs TabName="Student Information" tabsData={tabsData} />
    </div>
  );
};

export default StudentInformation;
