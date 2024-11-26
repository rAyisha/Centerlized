
import "./index.scss";
import Header from "./Header";
import BreadCrumb from "./BreadCrumb";
import Table from "./Table";

const CollectionReport = () => {

  return (
    <div className="finance__collection__report__main__arae">
      <BreadCrumb />
      <Header />
      <Table />
    </div>
  );
};

export default CollectionReport;
