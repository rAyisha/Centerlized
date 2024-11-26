import { useState } from "preact/hooks";
import DataTable from "../../../../../../../components/DataTable";
import { DataTableStateEvent } from "primereact/datatable";
import "./index.scss";
import { tableData } from "./mock";
import TableCommonHeader from "../../../../../components/TableHeader";
import { Tag } from "primereact/tag";
const Table = () => {
  const [page, setPage] = useState<number>(0);
  const [rows, setRows] = useState<number>(5);
  const onPage = (event: DataTableStateEvent) => {
    setPage(event.page as number);
    setRows(event.rows);
  };
  const getSeverity = (value: string) => {
    switch (value) {
      case "Pending":
        return "danger";
      case "Paid":
        return "success";
      case "Overdue":
        return "warning";

      default:
        return null;
    }
  };

  const statusBodyTemplate = (rowData: any) => {
    return (
      <Tag
        value={rowData?.status}
        severity={getSeverity(rowData?.status)}
      ></Tag>
    );
  };
  const columns = [
    { header: "Fees Group", field: "feesGroup", sortable: true },
    { header: "Fees Code", field: "feesCode", sortable: true },
    { header: "Due Date", field: "dueDate", sortable: true },
    { header: "Status", field: "status", sortable: true, body: statusBodyTemplate },
    { header: "Amount", field: "amount", sortable: true },
    { header: "Payment ID", field: "paymentId", sortable: true },
    { header: "Mode", field: "mode", sortable: true },
    { header: "Date", field: "date", sortable: true },
    { header: "Discount", field: "discount", sortable: true },
    { header: "Fine", field: "fine", sortable: true },
    { header: "Paid", field: "paid", sortable: true },
    { header: "Balance", field: "balance", sortable: true },
  ];
  return (
    <div className="finance__balance___fees__report__table__area">
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

        />
      </div>
    </div>
  );
};

export default Table;
