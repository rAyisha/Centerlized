import React from 'react'
import "./index.scss"
import SyllabuStatusHeader from './syllabusStatusHeader'
import SyllabusTableListView from './syllabusStatusTable'

const SyllabusStatus = () => {
    return (
        <div>
            <SyllabuStatusHeader />
            <SyllabusTableListView/>
        </div>
    )
}

export default SyllabusStatus