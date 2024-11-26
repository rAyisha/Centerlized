import { useState } from "preact/hooks";
import DataTable from "../../../../../../../components/DataTable";
import TableSearchHeader from "../../../../../../../components/TableSearchHeader";
import { DataTableStateEvent } from "primereact/datatable";
import "./index.scss";
import { tableData } from "./mock";
import TableCommonHeader from "../../../../../components/TableHeader";
const Table = () => {
  const [page, setPage] = useState<number>(0);
  const [rows, setRows] = useState<number>(5);
  const onPage = (event: DataTableStateEvent) => {
    setPage(event.page as number);
    setRows(event.rows);
  };
  const onButtonClick = () => {
    // navigate(`/useraccesscontrol/add`);
  };
  const columns = [
    
    {
      header: "Name",
      field: "AdmissionNo",
      sortable: true,
    },
    
    {
      header: "Role",
      field: "CurrentPhone",
      sortable: true,
    },
    {
      header: "Designation",
      field: "StudentName",
      sortable: true,
    },
    {
      header: "Month Year",
      field: "CurrentPhone",
      sortable: true,
    },
    {
      header: "Payslip#",
      field: "StudentName",
      sortable: true,
    },
    {
      header: "Basic Salary",
      field: "StudentName",
      sortable: true,
    },
    {
      header: "Earning(₹)",
      field: "StudentName",
      sortable: true,
    },
    {
      header: "Deduction(₹)",
      field: "StudentName",
      sortable: true,
    },{
      header: "Gross Salary(₹)",
      field: "StudentName",
      sortable: true,
    },
    {
      header: "Tax(₹)",
      field: "StudentName",
      sortable: true,
    },
    {
      header: "Net Salary(₹)",
      field: "StudentName",
      sortable: true,
    },
    
  ];
  return (
    <div className="alumni__student__report__table__area">
        <TableCommonHeader searchButton={true} exportButton={true}/>
      <div className="mt-4">
        <DataTable
          value={Array.isArray(tableData) ? tableData : []}
          columns={columns}
          paginator
          first={page * rows}
          rows={rows}
          totalRecords={Array.isArray(tableData) ? tableData?.length : 0}
          onPage={onPage}
          lazy={false}
          
        />
      </div>
    </div>
  );
};

export default Table;
