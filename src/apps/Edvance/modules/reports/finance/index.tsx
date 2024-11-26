import MasterTabs from "../../../components/MasterTabs";

const Finance = () => {
  const tabsData = [
    {
      index: 1,
      title: "Balance Fees Statement",
      path: "/edvance/reports/finance/balancefeesstatement",
    },
    {
      index: 2,
      title: "Daily Collection Report",
      path: "/edvance/reports/finance/dailycollectionreport",
    },
    {
      index: 3,
      title: "Fees Statement",
      path: "/edvance/reports/finance/feesstatement",
    },
    {
      index: 4,
      title: "Balance Fees Report",
      path: "/edvance/reports/finance/BalanceFeesReportFinanace",
    },
    {
      index: 5,
      title: "Fees Collection Report",
      path: "/edvance/reports/finance/FeesCollectionReportFinance",
    },
    {
      index: 6,
      title: "Online Fees Collection Report",
      path: "/edvance/reports/finance/OnlineFeesCollectionReport",
    },
    {
      index: 7,
      title: "Balance Fees Report with Remark",
      path: "/edvance/reports/finance/BalanceFeesReportwithRemarks",
    },
    {
      index: 8,
      title: "Payroll Report",
      path: "/edvance/reports/finance/PayrollReportFinance",
    },
  ];
  return (
    <div className="finance__report__module">
      <MasterTabs TabName="Finance" tabsData={tabsData} />
    </div>
  );
}

export default Finance
