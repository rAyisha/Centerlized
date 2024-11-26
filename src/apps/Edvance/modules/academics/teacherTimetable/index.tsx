import React from 'react'
import "./index.scss"
import TabHeaderteachere from './tabHeader'
import Timetable from '../../../components/timeTable'
import { teachertimetable, timetableData } from '../classTimetable/mock'

const TeacherTimetable = () => {
  return (
    <div className="teachertimetable">
     <TabHeaderteachere />
     <Timetable timetableData={teachertimetable}/>
    </div>
  )
}

export default TeacherTimetable
