
import "./index.scss";
import Header from "./Header";
import BreadCrumb from "./BreadCrumb";
import Table from "./Table";

const StaffDayWiseAttendanceReport = () => {
  return (
    <div className="student__alumni__report__main__arae">
      <BreadCrumb />
      <Header />
      <Table />
    </div>
  );
};

export default StaffDayWiseAttendanceReport;