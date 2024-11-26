
import { useState } from "preact/hooks";
import { DataTableStateEvent } from "primereact/datatable";
import DataTable from "../../../../../components/DataTable";
import { tableData } from "./mock";

const LoginDetailTable = () => {
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
      header: "Admission No",
      field: "Class",
      sortable: true,
    },
    {
      header: "Student Name",
      field: "AdmissionNo",
      sortable: true,
    },
    {
      header: "Class",
      field: "StudentName",
      sortable: true,
    },
    {
      header: "Date of Birth",
      field: "CurrentPhone",
      sortable: true,
    },
    {
      header: "Gender",
      field: "StudentName",
      sortable: true,
    },

    {
      header: "Mobile Number",
      field: "StudentName",
      sortable: true,
    },

    
  ];
  return (
    <div className="alumni__student__report__table__area">
     {/* <TableCommonHeader searchButton={true} exportButton={true}/> */}
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

export default LoginDetailTable;
