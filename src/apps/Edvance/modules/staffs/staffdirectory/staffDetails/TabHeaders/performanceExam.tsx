import React from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Tag } from "primereact/tag";
import SvgArrowLeftRound from "../../../../../../../assets/svgIcon/SvgArrowLeftRound";


// Define the type for the staffperformanedata
interface StaffPerformanceData {
  name: string;
  totalMarks: number;
  obtainedmarks: number;
  passPercent: number;
  failPercent: number;
  average: number;
  ratio: string;
  result: string; // The result can be "Pass" or "Fail"
}

interface PerformanceExamProps {
  setViewExam: (value: boolean) => void;
  staffperformanedata: StaffPerformanceData[];
}

const PerformanceExam: React.FC<PerformanceExamProps> = ({
  setViewExam,
  staffperformanedata,
}) => {
  // Header Template for column headers
  const HeaderTemplate = ({ field }: { field: string }) => (
    <div className="column__header">{field}</div>
  );

  // Function to determine the severity for the Tag component
  const getSeverity = (value: string) => {
    switch (value) {
      case "Pass":
        return "success";
      case "Fail":
        return "warning";
      default:
        return null;
    }
  };

  // Template to display status with a Tag component
  const statusBodyTemplate = (rowData: StaffPerformanceData) => (
    <Tag value={rowData.result} severity={getSeverity(rowData.result)} />
  );

  return (
    <>
      {staffperformanedata && staffperformanedata.length > 0 ? (
        staffperformanedata.map((dat, index) => (
          <div
            key={index}
            className="exam__table__container"
            style={{ marginTop: 15 }}
          >
            <div
              className="title__text"
              style={{ alignItems: "center", display: "flex", gap: 10 }}
              onClick={() => setViewExam(false)}
            >
              <SvgArrowLeftRound /> 
              {dat.name}
            </div>
            <div className="table__main__container">
              <DataTable value={[dat]} removableSort>
                <Column
                  field="totalMarks"
                  header={<HeaderTemplate field="Total Marks" />}
                />
                <Column
                  field="obtainedmarks"
                  header={<HeaderTemplate field="Total Obtain Marks" />}
                />
                <Column
                  field="passPercent"
                  header={<HeaderTemplate field="Pass(%)" />}
                />
                <Column
                  field="failPercent"
                  header={<HeaderTemplate field="Fail(%)" />}
                />
                <Column
                  field="average"
                  header={<HeaderTemplate field="Average(%)" />}
                />
                <Column
                  field="ratio"
                  header={<HeaderTemplate field="Fail/Pass(Ratio)" />}
                />
                <Column body={statusBodyTemplate} header="Result" />
              </DataTable>
            </div>
          </div>
        ))
      ) : (
        // <EmptyTableIcon />
        <></>
      )}
    </>
  );
};

export default PerformanceExam;
