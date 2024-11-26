import Timetable from "../../../components/timeTable"
import "./index.scss"
import { timetableData } from "./mock"
import TabHeader from './tabHeader'

const ClassTimetable = () => {
    return (
        <div className="classtimetable">
            <TabHeader />
            <Timetable timetableData={timetableData}/>
        </div>
    )
}

export default ClassTimetable
