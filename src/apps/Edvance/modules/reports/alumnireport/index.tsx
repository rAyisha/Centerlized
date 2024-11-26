import React from "preact";
import { useNavigate } from "react-router-dom";
import SvgNextarrow from "../../../../../assets/svgIcon/SvgNextArrow";
import Button from "../../../../../components/Button";
import MasterTabs from "../../../components/MasterTabs";
import SvgArrowCircle from "../../../../../assets/svgIcon/SvgArrowCircle";
import "./index.scss";

const AlumniReport = () => {
  const tabsData = [
    {
      index: 1,
      title: "Alumni Report",
      path: "/edvance/reports/alumnireport/alumini",
    },
  ];
  return (
    <div className="student__master">
      <MasterTabs TabName="Alumini" tabsData={tabsData} />
    </div>
  );
};

export default AlumniReport;
