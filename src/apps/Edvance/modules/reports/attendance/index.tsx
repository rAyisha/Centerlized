import React from 'preact'
import MasterTabs from "../../../components/MasterTabs";

const AttendanceReportAll = () => {
  const tabsData = [
    {
      index: 1,
      title: "Attendance Report",
      path: "/edvance/reports/attendance/attendancereport",
    },
    {
      index: 2,
      title: "Student Attendance Type Report",
      path: "/edvance/reports/attendance/studentattendancetypereport",
    },
    {
      index: 3,
      title: "Daily Attendance Report",
      path: "/edvance/reports/attendance/dailyattendancereport",
    },
    {
      index: 4,
      title: "Student Day Wise Attendance Report",
      path: "/edvance/reports/attendance/studentdaywiseattendancereport",
    },
    {
      index: 5,
      title: "Staff Day Wise Attendance Report",
      path: "/edvance/reports/attendance/staffdaywiseattendancereport",
    },
    {
      index: 6,
      title: "Staff Attendance Report",
      path: "/edvance/reports/attendance/staffattendancereport",
    },
  ];
  return (
    <div className="student__master">
      <MasterTabs TabName="Attendance" tabsData={tabsData} />
    </div>
  );
}

export default AttendanceReportAll
