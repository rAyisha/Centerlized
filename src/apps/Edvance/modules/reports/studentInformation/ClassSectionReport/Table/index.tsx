import { useState } from "preact/hooks";
import DataTable from "../../../../../../../components/DataTable";
import TableSearchHeader from "../../../../../../../components/TableSearchHeader";
import { DataTableStateEvent } from "primereact/datatable";
import "./index.scss";
import { tableData } from "./mock";
import TableCommonHeader from "../../../../../components/TableHeader";
import SvgEye from "../../../../../../../assets/svgIcon/SvgEye";
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
  const renderAction=()=>{
    return(
      <>
      <SvgEye/></>
    )
  }
  const columns = [
   
    {
      header: "S.no",
      field: "AdmissionNo",
      sortable: true,
    },
    {
      header: "Class",
      field: "StudentName",
      sortable: true,
    },
    {
      header: "Section",
      field: "CurrentPhone",
      sortable: true,
    },
    {
      header: "Action",
      body:renderAction
    },
   
   
  ];
  return (
    <div className="alumni__student__report__table__area mt-5">
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
