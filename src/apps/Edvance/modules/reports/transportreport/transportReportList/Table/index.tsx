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
      header: "Class",
      field: "Class",
      sortable: true,
    },
    {
      header: "Admission No",
      field: "AdmissionNo",
      sortable: true,
    },
    {
      header: "Student Name",
      field: "StudentName",
      sortable: true,
    },
    {
      header: "Mobile No",
      field: "CurrentPhone",
      sortable: true,
    },
    {
      header: "Father Name",
      field: "StudentName",
      sortable: true,
    },
   
    {
      header: "Route title",
      field: "StudentName",
      sortable: true,
    },
   
    {
      header: "Gender",
      field: "Gender",
      sortable: true,
    },
    {
      header: "Vehicle No",
      field: "StudentName",
      sortable: true,
    },
    {
      header: "Pickup Point",
      field: "StudentName",
      sortable: true,
    },
    {
      header: "Driver Name",
      field: "StudentName",
      sortable: true,
    },
    {
      header: "Fare(₹)",
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
