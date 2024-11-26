import "./index.scss"
import Timetable from "../../../../components/timeTable";
import { timetableData } from "../mock";
import CreateClassTimeTableHeader from "./tabHeader";

const CreateClassTimeTable = () => {
    return (
        <div className="create__class__timetable">
            <CreateClassTimeTableHeader />
            <Timetable timetableData={timetableData} />
        </div>
    )
}

export default CreateClassTimeTable
