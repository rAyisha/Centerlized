import "./index.scss"
import MyClassListView from "./MyClassListView"
import MyClassHeader from './tabHeader'

const Attendance = () => {
    return (
        <div className="myclass__main__container">
            <MyClassHeader />
            <MyClassListView />
        </div>
    )

}

export default Attendance