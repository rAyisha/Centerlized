
import { useState } from "preact/hooks";
import "./index.scss";
import SvgSortIcon from "../../../../../../assets/svgIcon/SvgSortIcon";
import { useFormik } from "formik";
import Header from "./Header";
import BreadCrumb from "./BreadCrumb";
import Table from "./Table";

const HomeWorkReportList = () => {
  const [classValue, setClassValue] = useState("");
  const [sectionValue, setSectionValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [genderValue, setGenderValue] = useState("");

  const HeaderTemplate = ({ field, sortable = true }) => (
    <div className="column__header">
      {field}
      {sortable && <SvgSortIcon />}
    </div>
  );

  const labels = [
    { label: "Alumini", url: "/reports/aluminireport" },
    "Alumini Report",
  ];

  const formikSearch = useFormik({
    initialValues: { search: "" },
    onSubmit: () => {},
  });
  return (
    <div className="student__alumni__report__main__arae">
      <BreadCrumb />
      <Header />
      <Table />
    </div>
  );
};

export default HomeWorkReportList;
