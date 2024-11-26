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
      header: "Payment ID",
      field: "AdmissionNo",
      sortable: true,
    },
    
    {
      header: "Date",
      field: "CurrentPhone",
      sortable: true,
    },
    {
      header: "Admission No",
      field: "CurrentPhone",
      sortable: true,
    },
    {
      header: "Name",
      field: "CurrentPhone",
      sortable: true,
    },
    {
      header: "Class",
      field: "StudentName",
      sortable: true,
    },
    {
      header: "Fees Type",
      field: "CurrentPhone",
      sortable: true,
    },
    {
      header: "Mode",
      field: "CurrentPhone",
      sortable: true,
    },
    {
      header: "Amount(₹)",
      field: "CurrentPhone",
      sortable: true,
    },
    {
      header: "Discount(₹)",
      field: "CurrentPhone",
      sortable: true,
    },
    {
      header: "Fine(₹)",
      field: "CurrentPhone",
      sortable: true,
    },
    {
      header: "Total(₹)",
      field: "CurrentPhone",
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
