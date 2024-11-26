import { Route, Routes } from "react-router-dom";
import Dashboard from "../modules/dashboard";
import StudentDetails from "../modules/student/studentdetails";
import StudentsAdmission from "../modules/student/studentadmission";
import StudentDetailView from "../modules/student/studentDetailsView";
import StaffDirectory from "../modules/staffs/staffdirectory";
import DisableStudents from "../modules/student/disableStudents";
import Attendance from "../modules/academics/attendance";
import ClassTimetable from "../modules/academics/classTimetable";
import TeacherTimetable from "../modules/academics/teacherTimetable";
import ClassTeacher from "../modules/academics/classTeacher";
import DisableStaff from "../modules/staffs/disableStaff";
import ApplyLeaveStaff from "../modules/staffs/applyLeaveStaff";
import Payroll from "../modules/staffs/PayRoll";
import CreateClassTimeTable from "../modules/academics/classTimetable/createClassTimetable";
import SingleStudentAttendance from "../modules/academics/attendance/singleStudentAttendance";
import NotFound from "../../../components/NotFound";
import MyClass from "../modules/academics/myClass";

import AssingStudents from "../modules/academics/assingStudents";
import AssingTeacher from "../modules/academics/assignTeacher";

import AddStaffDirectory from "../modules/staffs/staffdirectory/addStaff";
import LessonPlan from "../modules/subject/lessonPlan";
import SyllabusStatus from "../modules/subject/syllabusStatus";
import SyllabusMaster from "../modules/subject/syllabusMaster";

import AddStaff from "../modules/staffs/staffdirectory/addStaff";
// import AddStaffDirectory from "../modules/staffs/staffdirectory/addStaff";
import HomeWork from "../modules/academics/HomeWork";
import ViewUpcomingHomeWork from "../modules/academics/HomeWork/UpcommingWorkTabel/ViewUpcommingHomeWork";
import PromoteStudents from "../modules/academics/PromoteStudent";
import ExamScheule from "../modules/examination/examSchedule";
import ExamResults from "../modules/examination/examResults";
import PublishResult from "../modules/examination/examResults/publishResult";
import EaxamMarkUpload from "../modules/examination/examMarkUpload";
import ExamSubjects from "../modules/examination/examSchedule/examSubjects";
import ExamResultsView from "../modules/examination/examResults/examResultsView";
import Announcement from "../modules/communication/announcement";
import Email from "../modules/communication/email";
import Sms from "../modules/communication/sms";
import LoginCredentials from "../modules/communication/logincredentialssend";
import Managealumini from "../modules/alumini/manageAlumini";
import ExamType from "../modules/alumini/events";
import StaffDetails from "../modules/staffs/staffdirectory/staffDetails";
import StudentInformation from "../modules/reports/studentInformation";
import Finance from "../modules/reports/finance";

import ExamRank from "../modules/reports/examrank";
import LessonPlanReport from "../modules/reports/lessonplanreport";
import HumanResourceReport from "../modules/reports/humanresourcereport";
import HomeWorkReport from "../modules/reports/homeworkreport";
import TransportReport from "../modules/reports/transportreport";
import AlumniReport from "../modules/reports/alumnireport";
import AluminiReportList from "../modules/reports/alumnireport/alumniReport";
// import AluminiReportList from "../modules/reports/alumnireport/alumniReportList";
import TransportReportList from "../modules/reports/transportreport/transportReportList";
import HomeWorkReportList from "../modules/reports/homeworkreport/HomeWorkReportList";
import PayRollReportList from "../modules/reports/humanresourcereport/PayRollReportList";
import StaffReportList from "../modules/reports/humanresourcereport/StaffReportList";
import SyllabusStatusReport from "../modules/reports/lessonplanreport/SyllabusStatusReport";
import SubjectReport from "../modules/reports/lessonplanreport/SubjectReport";
import RankReport from "../modules/reports/examrank/RankReport";
import AttendanceReportAll from "../modules/reports/attendance";
import AttendanceReport from "../modules/reports/attendance/AttendanceReport";
import StudentAttendanceTypeReport from "../modules/reports/attendance/studentAttendanceTypeReport";
import DailyAttendanceReport from "../modules/reports/attendance/dailyAttendanceReport";
import StudentDayWiseAttendanceReport from "../modules/reports/attendance/studentDayWiseAttendanceReport";
import StaffDayWiseAttendanceReport from "../modules/reports/attendance/staffDayWiseAttendanceReport";
import StaffAttendanceReport from "../modules/reports/attendance/staffAttendanceReport";
import BalanceFeesReport from "../modules/reports/finance/BalanceFeesReport";
import CollectionReport from "../modules/reports/finance/CollectionReport";
import FeesStatementReport from "../modules/reports/finance/FeesStatement";
import StudentReport from "../modules/reports/studentInformation/StudentReport";
import ClassSectionReport from "../modules/reports/studentInformation/ClassSectionReport";
import GuardianReport from "../modules/reports/studentInformation/GuardianReport";
import StudentHistory from "../modules/reports/studentInformation/StudentHistory";
import ParentLoginCredientials from "../modules/reports/studentInformation/ParentLoginCredentials";
import ClassSubjectReport from "../modules/reports/studentInformation/ClassSubjectReport";
import AdmissionReport from "../modules/reports/studentInformation/AdmissionReport";
import SiblingReport from "../modules/reports/studentInformation/SliblingReport";
import StudentProfile from "../modules/student/studentDetailsView/StudentProfile";
import StudentProfileReport from "../modules/reports/studentInformation/StudentProfile";
import StudentGenderRapioRepor from "../modules/reports/studentInformation/StudentGenderRatioReport";
import StudentTeacherRapioRepor from "../modules/reports/studentInformation/StudentTeacherRatioReport";
import BalanceFeesReportwithRemarks from "../modules/reports/finance/BalanceFeesReportWithRemark";
import OnlineFeesCollectionReport from "../modules/reports/finance/OnlineFeesCollectionReport";
import FeesCollectionReportFinance from "../modules/reports/finance/FessCollecionReport";
import PayrollReportFinance from "../modules/reports/finance/PayrollReportFinance";
import BalanceFeesReportFinanace from "../modules/reports/finance/BalanceFeesReportFinanace";
// import Alumini from "../modules/alumini";
// import Managealumini from "../modules/alumini";

const EdvanceRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/students/liststudents" element={<StudentDetails />} />
      <Route
        path="/students/studentadmission/"
        element={<StudentsAdmission />}
      />
      <Route
        path="/students/studentdetail/:id"
        element={<StudentDetailView mode="enabled" />}
      />
      <Route
        path="/students/disabledstudentdetail/:id"
        element={<StudentDetailView mode="disabled" />}
      />
      <Route path="/students/editstudent/:id" element={<StudentsAdmission />} />
      <Route path="/students/disablestudents" element={<DisableStudents />} />
      <Route path="/staffs/staffsdirectory" element={<StaffDirectory />} />

      {/* academics */}

      <Route path="/academics/attendance" element={<Attendance />} />
      <Route path="/academics/assignstudent" element={<AssingStudents />} />
      <Route path="/academics/assignteacher" element={<AssingTeacher />} />
      <Route
        path="/academics/attendance/:id"
        element={<SingleStudentAttendance />}
      />
      <Route path="/academics/classtimetable" element={<ClassTimetable />} />
      <Route
        path="/academics/classtimetable/add"
        element={<CreateClassTimeTable />}
      />
      <Route
        path="/academics/teachertimetable"
        element={<TeacherTimetable />}
      />

      {/* <Route
        path="/academics/teachertimetable"
        element={<TeacherTimetable />}
      /> */}

      <Route path="/academics/classteacher" element={<ClassTeacher />} />
      <Route path="/academic/myclass" element={<MyClass />} />
      <Route path="/academic/homework" element={<HomeWork />} />
      <Route path="/academic/promotestudents" element={<PromoteStudents />} />

      <Route path="/subject/lessonplan" element={<LessonPlan />} />
      <Route path="/subject/syllabusstatus" element={<SyllabusStatus />} />
      <Route path="/subject/syllabusmaster" element={<SyllabusMaster />} />
      {/* <Route
        path="/staffs/staffsdirectory/:action/:id"
        element={<AddStaffDirectory />}
      /> */}
      {/* <Route
        path="/staffs/staffsdirectory/:action/:id"
        element={<AddStaffDirectory />}
        // element={<HomeWork />}
      /> */}
      <Route
        path="/staffs/staffsdirectory/:action/:id"
        element={<StaffDetails />}
      />

      <Route path="/staffs/disablestaff" element={<DisableStaff />} />
      <Route path="/staffs/disablestaff:id" />
      <Route path="/staffs/leaves" element={<ApplyLeaveStaff />} />
      <Route path="/staffs/payroll" element={<Payroll />} />
      {/* <Route path="/staffs/staffsdirectory/homework" element={<HomeWork />} /> */}

      {/* Communication Routes */}

      <Route path="/communication/announcement" element={<Announcement />} />
      <Route path="/communication/email" element={<Email />} />
      <Route path="/communication/sms" element={<Sms />} />
      <Route
        path="/communication/logincredentials"
        element={<LoginCredentials />}
      />

      {/* Examination */}

      <Route path="/examination/examschedule" element={<ExamScheule />} />
      <Route path="/examination/examresult" element={<ExamResults />} />
      <Route
        path="/examination/examresult/publishresult"
        element={<PublishResult />}
      />
      <Route path="/examination/markupload" element={<EaxamMarkUpload />} />
      <Route
        path="/examination/examschedule/examsubjects"
        element={<ExamSubjects />}
      />
      <Route
        path="/examination/examresult/examresultsview"
        element={<ExamResultsView />}
      />
      {/* Alumini */}

      <Route path="/alumini/managealumini" element={<Managealumini />} />
      <Route path="/alumini/events" element={<ExamType />} />
      
      {/* Reports */}
      <Route
        path="/reports/studentinformation"
        element={<StudentInformation />}
      />
      <Route
        path="/reports/studentinformation/studentReport"
        element={<StudentReport />}
      />
      <Route
        path="/reports/studentinformation/classsectionreport"
        element={<ClassSectionReport />}
      />
      <Route
        path="/reports/studentinformation/guardianreport"
        element={<GuardianReport />}
      />
      <Route
        path="/reports/studentinformation/studenthistory"
        element={<StudentHistory />}
      />
      <Route
        path="/reports/studentinformation/parentlogincredientials"
        element={<ParentLoginCredientials />}
      />
      <Route
        path="/reports/studentinformation/classsubjectreport"
        element={<ClassSubjectReport />}
      />
       <Route path="/reports/studentinformation/admissionreport" element={<AdmissionReport/>}/>
       <Route path="/reports/studentinformation/siblingreport" element={<SiblingReport/>}/>
       <Route path="/reports/studentinformation/StudentProfileReport" element={<StudentProfileReport/>}/>
       <Route path="/reports/studentinformation/StudentGenderRapioRepor" element={<StudentGenderRapioRepor/>}/>
       <Route path="/reports/studentinformation/StudentTeacherRapioRepor" element={<StudentTeacherRapioRepor/>}/>
      <Route path="/reports/finance" element={<Finance />} />
      <Route path="/reports/attendance" element={<AttendanceReportAll />} />
      <Route
        path="/reports/attendance/attendancereport"
        element={<AttendanceReport />}
      />
      <Route
        path="/reports/attendance/studentattendancetypereport"
        element={<StudentAttendanceTypeReport />}
      />
      <Route
        path="/reports/attendance/dailyattendancereport"
        element={<DailyAttendanceReport />}
      />
      <Route
        path="/reports/attendance/studentdaywiseattendancereport"
        element={<StudentDayWiseAttendanceReport />}
      />
      <Route
        path="/reports/attendance/staffdaywiseattendancereport"
        element={<StaffDayWiseAttendanceReport />}
      />
      <Route
        path="/reports/attendance/staffattendancereport"
        element={<StaffAttendanceReport />}
      />
       <Route path="/reports/finance/balancefeesstatement" element={<BalanceFeesReport />} />
        <Route path="/reports/finance/dailycollectionreport" element={<CollectionReport />} />
        <Route path="/reports/finance/feesstatement" element={<FeesStatementReport />} />
        <Route path="/reports/finance/BalanceFeesReportFinanace" element={<BalanceFeesReportFinanace/>}/>
        <Route path="/reports/finance/BalanceFeesReportwithRemarks" element={<BalanceFeesReportwithRemarks />} />
        <Route path="/reports/finance/OnlineFeesCollectionReport" element={<OnlineFeesCollectionReport />} />
        <Route path="/reports/finance/FeesCollectionReportFinance" element={<FeesCollectionReportFinance />} />
        <Route path="/reports/finance/PayrollReportFinance" element={<PayrollReportFinance />} />

      <Route path="/reports/examrank" element={<ExamRank />} />
      <Route path="/reports/examrank/rankreport" element={<RankReport />} />
      <Route path="/reports/lessonplanreport" element={<LessonPlanReport />} />
      <Route
        path="/reports/lessonplanreport/syllabusstatusreport"
        element={<SyllabusStatusReport />}
      />
      <Route
        path="/reports/lessonplanreport/subjectstatusreport"
        element={<SubjectReport />}
      />
      <Route
        path="/reports/humanresourcereport"
        element={<HumanResourceReport />}
      />
      <Route
        path="/reports/humanresourcereport/staffreportlist"
        element={<StaffReportList />}
      />
      <Route
        path="/reports/humanresourcereport/payrollreportlist"
        element={<PayRollReportList />}
      />
      <Route path="/reports/homeworkreport" element={<HomeWorkReport />} />
      <Route
        path="/reports/homeworkreport/homeworkreportList"
        element={<HomeWorkReportList />}
      />
      <Route path="/reports/transportreport" element={<TransportReport />} />
      <Route
        path="/reports/transportreport/transportReportList"
        element={<TransportReportList />}
      />
      <Route path="/reports/alumnireport" element={<AlumniReport />} />
      <Route
        path="/reports/alumnireport/alumini"
        element={<AluminiReportList />}
      />
     
      {/* no routes found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default EdvanceRoute;
