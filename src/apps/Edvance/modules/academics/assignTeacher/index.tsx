import React from 'react'
import "./index.scss"
// import HeaderAssingStudents from './headerAssingStudents'
// import AssingStudentListView from './assingStudentsTable'
import AssingTeacherListView from './assingStudentsTable'
import TabHeaderteachere from '../teacherTimetable/tabHeader'
import HeaderAssingTeacher from './headerAssingStudents'

const AssingTeacher = () => {
    return (
        <div className="assign_class_teacher">
            <HeaderAssingTeacher />
            <AssingTeacherListView />
        </div>
    )
}

export default AssingTeacher;
