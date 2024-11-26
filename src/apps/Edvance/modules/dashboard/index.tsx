 import './index.scss'
import LineChartWhitBar from "./LineChartwithbar";
import LessonPlanChart from "./Piechart";
import Barchart from "./BarChart";
import AttendencePercentage from "./AttendancePercentage";
import UpcomingEvent from "./UpcomingEvent";
import Totalcount from "./TotalCount";

const Dashboard = () => {
  
  return (
    <div className="dashboard">
      <div className="dashboard__title">Good Morning, John!</div>
      <div className="dashboard__sub__title mt-1">Wednesday, June 3 2024</div>
      <div className="dashboard__body mt-3">
        <div className="dashboard__body__right">
          <LineChartWhitBar />
          <div className="barchart__container mt-4">
            <div className="barchart__container__right"><Barchart /></div>
            <div className="barchart__container__left"><AttendencePercentage />
              <UpcomingEvent />
            </div>
          </div>
        </div>
        <div className="dashboard__body__left">
          <LessonPlanChart />
          <Totalcount />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
