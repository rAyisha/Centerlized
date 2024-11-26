import { useEffect } from "preact/hooks";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Tag } from "primereact/tag";
import { useDispatch, useSelector } from "react-redux";
import EmptyTableIcon from "../../../../components/EmptyTableIcon";
import { AppDispatch, RootState } from "../../../../../../redux/store";

const StudentExamTab = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { getstudentexamdetail } = useSelector((state: RootState) => {
    return {
      getstudentexamdetail: []
    };
  });
  const HeaderTemplate = ({ field }: any) => (
    <div className="column__header">{field}</div>
  );
  const getSeverity = (value: any) => {
    switch (value) {
      case true:
        return "success";

      case false:
        return "warning";

      default:
        return null;
    }
  };
  const statusBodyTemplate = (rowData: any) => {
    return (
      <Tag value={rowData.result ? "Pass" : "Fail"} severity={getSeverity(rowData.result)}></Tag>
    );
  };

  return (
    <div className="exam__table__container">
      {
        getstudentexamdetail && getstudentexamdetail.length > 0
          ?
          <>
            {getstudentexamdetail?.map((dat: any, index: number) => (

              <div key={index} className="individual_table_container">
                <div className="title__text">{dat?.name}</div>
                <div className="table__main__container">
                  <DataTable value={dat?.subjects} removableSort>
                    <Column field="subject" header={<HeaderTemplate field="Subject" />} />
                    <Column
                      field="maxmarks"
                      header={<HeaderTemplate field="Max Marks" />}
                    />
                    <Column
                      field="minmarks"
                      header={<HeaderTemplate field="Min Marks" />}
                    />
                    <Column
                      field="marks"
                      header={<HeaderTemplate field="Marks Obtained" />}
                    />
                    <Column
                      field="result"
                      body={statusBodyTemplate}
                      header={<HeaderTemplate field="Result" />}
                    />
                    <Column field="note" header={<HeaderTemplate field="Note" />} />
                  </DataTable>
                </div>
                <div className="table__bottom">
                  <span>Percentage : {dat?.percentage}</span>
                  <span>Result: <span className={dat?.overallResult ? "Pass_text" : "Fail_text"}>{dat?.overallResult ? "Pass" : "Fail"}</span> </span>
                  <span>Division : First</span>
                  <span>Grand Total : {dat?.grandTotal}</span>
                  <span>Total Obtain Marks : {dat?.totalObtainedMarks}</span>
                </div>
              </div>

            ))}
          </>
          :
          <EmptyTableIcon />
      }
    </div>
  );
};

export default StudentExamTab;
