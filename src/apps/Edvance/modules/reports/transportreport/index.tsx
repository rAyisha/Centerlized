import React from "preact";
import MasterTabs from "../../../components/MasterTabs";

const TransportReport = () => {
  const tabsData = [
    {
      index: 1,
      title: "Student Transport",
      path: "/edvance/reports/transportreport/transportReportList",
    },
  ];
  return (
    <div className="student__master">
      <MasterTabs TabName="Transport" tabsData={tabsData} />
    </div>
  );
};

export default TransportReport;
