import { useState } from "preact/hooks";
import DataTable from "../../../../../../../components/DataTable";
import TableSearchHeader from "../../../../../../../components/TableSearchHeader";
import { DataTableStateEvent } from "primereact/datatable";
import "./index.scss";
import { tableData } from "./mock";
import SvgEye from "../../../../../../../assets/svgIcon/SvgEye";
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
  const handleAction = () => {
    return <SvgEye />;
  };
  const columns = [
    {
      header: "Staff ID",
      field: "Class",
      sortable: true,
    },
    {
      header: "Staff Name",
      field: "AdmissionNo",
      sortable: true,
    },
    {
      header: "Role",
      field: "StudentName",
      sortable: true,
    },
    {
      header: "Designation",
      field: "CurrentPhone",
      sortable: true,
    },
    {
      header: "Department",
      field: "StudentName",
      sortable: true,
    },

    {
      header: "Qualification",
      field: "StudentName",
      sortable: true,
    },

    {
      header: "Work Experience",
      field: "Gender",
      sortable: true,
    },
    {
      header: "DateofJoining",
      field: "StudentName",
      sortable: true,
    },
    {
      header: "Current Phone",
      field: "StudentName",
      sortable: true,
    },
    {
      header: "Action",
      body: handleAction,
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
