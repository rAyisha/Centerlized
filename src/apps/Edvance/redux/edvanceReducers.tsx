import { combineReducers } from "@reduxjs/toolkit";
import { studentReducers } from "../modules/student/store/studentReducer";
import { staffDirectoryReducer } from "../modules/staffs/staffdirectory/store/staffDirectoryReducers";
import { staffReducers } from "../modules/staffs/store/staffReducer";
import { MyClassListReducers } from "../modules/academics/myClass/store/myClassListReducer";
import { AcademicCommonReducers } from "../modules/academics/academicsCommonStore/academicsCommonReducer";
import { ClassTimeTableReducers } from "../modules/academics/classTimetable/store/classTimeTableReducer";
import { TeacherTimeTableReducers } from "../modules/academics/teacherTimetable/store/teacherTimeTableReducer";
import { AssingTeacherReducers } from "../modules/academics/assignTeacher/store/assingTeacherReducer";
import { AnnouncementMainReducers } from "../modules/communication/announcement/store/announcementReduces";
import { EmailMainReducers } from "../modules/communication/email/store/emailReducers";
import { SmsMainReducers } from "../modules/communication/sms/store/smsReducers";
import { PromoteStudentsTableReducers } from "../modules/academics/PromoteStudent/store/promoteStudentReducer";
import { HomeWorkReducers } from "../modules/academics/HomeWork/store/homeWorkReducer";

const edvanceReducerList = {
  studentReducers,
  staffReducers,
  staffDirectoryReducer,
  MyClassListReducers,
  AcademicCommonReducers,
  ClassTimeTableReducers,
  TeacherTimeTableReducers,
  AssingTeacherReducers,
  AnnouncementMainReducers,
  EmailMainReducers,
  SmsMainReducers,
  PromoteStudentsTableReducers,
  HomeWorkReducers
};

export const edvanceReducers = combineReducers(edvanceReducerList);
