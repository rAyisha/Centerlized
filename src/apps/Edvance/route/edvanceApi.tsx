export const EDVANCEAPI = {
  STUDENT_MODULE: {
    GET_STUDENT: "edvance/student",
    GET_STUDENT_BY_ID: "edvance/student/",
    GET_DISABLE_STUDENT: "edvance/student/disabled",
    POST_STUDENT: "edvance/student",
    PATCH_STUDENT: "edvance/student/",
    DELETE_STUDENT: "edvance/student/",
    PATCH_ENABLE_DISABLE_STUDENT: "edvance/student/disable/"
  },
  STAFF_MODULE: {
    GET_DESIGNATION_DROPDOWN: 'common/dynamic-masters/data/MS0002',
    GET_DEPARTMENT_DROPDOWN: "common/dynamic-masters/data/MS0003",
    GET_STAFF_TYPE_DROPDOWN: "common/dynamic-masters/data/MS0013",
    GET_STAFFS: "edvance/staff",
    GET_DISABLED_STAFFS: "edvance/staff/disabled"
  },
  STAFF_DIRECTORY_MODULE: {
    GET_ALL_CONTRACT: "masters/contract-type/get-all-contracts",
    GET_ALL_MARITIAL_STATUS: "masters/maritial-status",
    GET_ALL_ROLES: "masters/role/all",
    GET_TEACHER_BY_ID: "staff/",
    PATCH_UPDATE_STAFF_BY_ID: "staff/",
    POST_TEACHER: "staff/",
    PATCH_ENABLE_DISABLE_TEACHER: "staff/enable-disable/",
    GET_ALL_TEACHER_DISABLE_STAFF: "staff/paginated?",

    //staff centralized
    GET_DESIGNATION_DROPDOWN: 'common/dynamic-masters/data/6',
    GET_DEPARTMENT_DROPDOWN: "common/dynamic-masters/data/7",
    GET_STAFF_DROPDOWN: "common/dynamic-masters/data/17",
    GET_STAFF_LIST: "edvance/staff"
  },
  STAFF_MASTER_MODULE: {
    GET_STAFF_DESIGNATION_DROPDOWN: "masters/designation",
    GET_STAFF_DEPARTMENT_DROPDOWN: 'masters/department'
  },
  STAFF_DISABLE_MODULE: {
    GET_ALL_TEACHER_DISABLESTAFF: "api/v1/staff/paginated?",
    PATCH_ENABLEDISABLE_TEACHER: "api/v1/staff/enable-disable/",
  },
  STAFF_APPLY_LEAVE: {
    GET_APPLYLEAVE_DATA: "api/v1/leave/get-leaves",
    GET_ONELEAVE_DATA: "api/v1/leave/",
    GET_LEAVE_TYPE: "api/v1/masters/leave-type",
    POST_APPLY_LEAVE: "api/v1/leave/apply-leave",
    PATCH_ONELEAVE_DATA: "api/v1/leave/",
  },
  MYCLASS:{
    GET_STUDENTLIST:"",
    POST_STUDENTLIST:"",
    PATCH_STUDENTLIST:""
  },
  ACADEMICCOMMON:{
    GET_CLASS:"",
    GET_SECTION:"",
    GET_TEACHER:"",
    GET_SUBJECT:"",
  },
  CLASSTIMETABLE:{
    GET_CLASS_TIMETABLE:""
  },
  TEACHERTIMETABLE:{
    GET_TEACHER_TIMETABLE:""
  },
  ASSINGTEACHER:{
    GET_ALL_TABLEDATA:"",
    POST_ASSING_TEACHER:"",
    PATCH_ASSING_TEACHER:"",
    DELETE_ASSING_TEACHER:""
  },
  ATTENDANCE:{
    GET_ALLATTENDANCE_TABLE:"",
    GET_ATTENDANCE:""
  },
  ASSINGSTUDENTS:{
    GET_ALL_TABLEDATA:"",
    POST_ASSING_STUDENTS:"",
    PATCH_ASSING_STUDENTS:"",
    DELETE_ASSING_STUDENTS:""
  },
  ANNOUNCEMENT:{
    GET_TABLE_ANNOUNCEMENTAPI:"",
    POST_ANNOUNCEMENTAPI:"",
    EDIT_ANNOUNCEMENTAPI:"",
    VIEW_ANNOUNCEMENTAPI:"",
    DLETE_ANNOUNCEMENTAPI:""
  },
  EMAIL:{
    GET_TABLE_EMAILAPI:"",
    POST_EMAILAPI:"",
    EDIT_EMAILAPI:"",
    VIEW_EMAILAPI:"",
    DLETE_EMAILAPI:""
  },
  SMS:{
    GET_TABLE_SMSAPI:"",
    POST_SMSAPI:"",
    EDIT_SMSAPI:"",
    VIEW_SMSAPI:"",
    DLETE_SMSAPI:""
  },
  LOGINCREDENTIALS:{
    GET_TABLE_LOGINCREDENTIALSAPI:"",
    POST_LOGINCREDENTIALSAPI:"",
    EDIT_LOGINCREDENTIALSAPI:"",
    VIEW_LOGINCREDENTIALSAPI:"",
    DLETE_LOGINCREDENTIALSAPI:""
  },
  LESSONPLAN:{
    GET_TABLE_LESSONPLANAPI:"",
  },
  SYLLABUSMASTER:{
    GET_TABLE_SYLLABUSMASTERAPI:"",
  },
  SYLLABUSSTATUS:{
    GET_TABLE_SYLLABUSSTATUSAPI:"",
  },
  PROMOTESTUDENTS:{
    GET_PROMOTESTUDENT_TABLE:""
  },
  HOMEWORK:{
    GET_HOMEWORK:"",
    GET_ALLHOMEWORK_TABLE:""
  }
};
