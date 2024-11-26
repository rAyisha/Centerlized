
import "./index.scss";
import Header from "./Header";
import BreadCrumb from "./BreadCrumb";
import Table from "./Table";

const BalanceFeesReport = () => {

  return (
    <div className="finance__balance__fees__report__main__arae">
      <BreadCrumb />
      <Header />
      <Table />
    </div>
  );
};

export default BalanceFeesReport;
