import React from 'react'
import "./index.scss"
import SyllabusMasterHeader from './syllabusMasterHeader'
import SyllabusMasterTableListView from './syllabusMasterTable'

const SyllabusMaster = () => {
    return (
        <div>
            <SyllabusMasterHeader />
            <SyllabusMasterTableListView/>
        </div>
    )
}

export default SyllabusMaster
