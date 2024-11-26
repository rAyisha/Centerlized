import "./index.scss";
import Header from "./Header";
import BreadCrumb from "./BreadCrumb";
import Table from "./Table";
import { Image } from "primereact/image";

const FeesStatementReport = () => {
  return (
    <div className="finance__balance__fees__report__main__arae">
      <BreadCrumb />
      <Header />
      <div className="underline_code"></div>
      <div className="tab__overall__container flex mt-3 mb-3">
        <div className="top__profile__header">
          <Image
            className="image__area"
            src="https://i.ibb.co/Zg23Tf7/Rectangle-6869-1.png"
            alt="Image"
          />
        </div>
        <div className="flex">
          <div>
            <div className="flex info__container__adjust">
              <div className="student__caption__info">
                <span>Name: Hudson</span>
                <span>Father Name: Emrys</span>
                <span>Mobile Number:16514840184</span>
                <span>Mobile Number: 9087654321</span>
                <span>Category:</span>
              </div>
              <div className="student__caption__info">
                <span>Class: Class 1 (A)</span>
                <span>Admission No: 1001</span>
                <span>Roll Number: 0201</span>
                <span>RTE: No</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default FeesStatementReport;
