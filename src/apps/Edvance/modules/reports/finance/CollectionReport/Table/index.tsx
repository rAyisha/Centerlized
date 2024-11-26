import { useState } from "preact/hooks";
import DataTable from "../../../../../../../components/DataTable";
import { DataTableStateEvent } from "primereact/datatable";
import "./index.scss";
import { tableData } from "./mock";
import TableCommonHeader from "../../../../../components/TableHeader";
import { Tag } from "primereact/tag";
import SvgPrinterIcon from "../../../../../../../assets/svgIcon/SvgPrinterIcon";
const Table = () => {
  const [page, setPage] = useState<number>(0);
  const [rows, setRows] = useState<number>(5);
  const onPage = (event: DataTableStateEvent) => {
    setPage(event.page as number);
    setRows(event.rows);
  };
  const columns = [
    { header: "Date", field: "date", sortable: true },
    { header: "Total Transactions", field: "totalTransactions", sortable: true },
    { header: "Amount", field: "amount", sortable: true },
  ];
  return (
    <div className="finance__collection__report__table__area">
      <TableCommonHeader searchButton={true} exportButton={true} />
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
          showActions={true}
          viewAccess={true}
        />
      </div>
    </div>
  );
};

export default Table;
