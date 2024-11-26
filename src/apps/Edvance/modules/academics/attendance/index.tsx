import React from 'react'
import "./index.scss"
import AttendanceHeader from './tabHeader'
import AttendanceListView from './attendanceTable'

const Attendance = () => {
    return (
        <div className="attendance">
            <AttendanceHeader />
            <AttendanceListView />
        </div>
    )
}

export default Attendance
