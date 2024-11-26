import React from 'react'
import SingleStudentAttendanceHeader from './singleStudentAttendanceHeader/indx'
import AttendanceTable from './singleStudentAttendanceCalendar'
import AttendenceCount from './singlestudentAttendanceCount'

const SingleStudentAttendance = () => {
  return (
    <div>
     <SingleStudentAttendanceHeader/>
     <AttendenceCount/>
     <AttendanceTable/>
    </div>
  )
}

export default SingleStudentAttendance
