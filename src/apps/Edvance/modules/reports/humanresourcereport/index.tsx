import React from 'preact'
import MasterTabs from "../../../components/MasterTabs";

const HumanResourceReport = () => {
    const tabsData = [
        {
          index: 1,
          title: "Staff Report",
          path: "/edvance/reports/humanresourcereport/staffreportlist",
        },
        {
            index: 2,
            title: "Payroll Report",
            path: "/edvance/reports/humanresourcereport/payrollreportlist",
          },
      ];
      return (
        <div className="student__master">
          <MasterTabs TabName="Human Resource" tabsData={tabsData} />
        </div>
      );
}

export default HumanResourceReport
