import React from 'react'
import "./index.scss"
import HeaderAssingStudents from './headerAssingStudents'
import AssingStudentListView from './assingStudentsTable'

const AssingStudents = () => {
    return (
        <div className="assign_class_teacher">
            <HeaderAssingStudents />
            <AssingStudentListView />
        </div>
    )
}

export default AssingStudents
