import React from 'preact'
import MasterTabs from "../../../components/MasterTabs";

const ExamRank = () => {
    const tabsData = [
        {
          index: 1,
          title: "Rank Report",
          path: "/edvance/reports/examrank/rankreport",
        },
      ];
      return (
        <div className="student__master">
          <MasterTabs TabName="Exam-Rank" tabsData={tabsData} />
        </div>
      );
}

export default ExamRank
