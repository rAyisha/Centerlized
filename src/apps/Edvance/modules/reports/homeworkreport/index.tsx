import React from 'preact'
import MasterTabs from "../../../components/MasterTabs";

const HomeWorkReport = () => {
    const tabsData = [
        {
          index: 1,
          title: "Homework",
          path: "/edvance/reports/homeworkreport/homeworkreportList",
        },
      ];
      return (
        <div className="student__master">
          <MasterTabs TabName="Homework" tabsData={tabsData} />
        </div>
      );
}

export default HomeWorkReport
