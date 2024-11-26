import { useState } from "preact/hooks";
import DataTable from "../../../../../../../components/DataTable";
import TableSearchHeader from "../../../../../../../components/TableSearchHeader";
import { DataTableStateEvent } from "primereact/datatable";
import "./index.scss";


import TableCommonHeader from "../../../../../components/TableHeader";
import { legends, tableData } from "./mock";


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
      header: "Student",
      field: "Class",
      sortable: true,
    },
    {
      header: "(%)",
      field: "Class",
      sortable: true,
    },
    {
      header: "P",
      field: "Class",
      sortable: true,
    },
    {
      header: "L",
      field: "Class",
      sortable: true,
    },
    {
      header: "A",
      field: "Class",
      sortable: true,
    },
    {
      header: "H",
      field: "Class",
      sortable: true,
    },
    {
      header: "F",
      field: "Class",
      sortable: true,
    },
    {
      header: "01 Mon",
      field: "Class",
      sortable: true,
    },
    {
      header: "02 Tue",
      field: "Class",
      sortable: true,
    },
    {
      header: "03 Wed",
      field: "Class",
      sortable: true,
    },
    {
      header: "04 Thu",
      field: "Class",
      sortable: true,
    },
    {
      header: "05 Fri",
      field: "Class",
      sortable: true,
    },
    {
      header: "06 Sat",
      field: "Class",
      sortable: true,
    },
    {
      header: "07 Sun",
      field: "Class",
      sortable: true,
    },
    {
      header: "08 Mon",
      field: "Class",
      sortable: true,
    },
    {
      header: "09 Tue",
      field: "Class",
      sortable: true,
    },
    {
      header: "10 Wed",
      field: "Class",
      sortable: true,
    },
    {
      header: "11 Thu",
      field: "Class",
      sortable: true,
    },
    {
      header: "12 Fri",
      field: "Class",
      sortable: true,
    },
    {
      header: "13 Sat",
      field: "Class",
      sortable: true,
    },
    {
      header: "14 Sun",
      field: "Class",
      sortable: true,
    },
    {
      header: "15 Mon",
      field: "Class",
      sortable: true,
    },
    {
      header: "16 Tue",
      field: "Class",
      sortable: true,
    },
    {
      header: "17 Wed",
      field: "Class",
      sortable: true,
    },
    {
      header: "18 Thu",
      field: "Class",
      sortable: true,
    },
    {
      header: "19 Fri",
      field: "Class",
      sortable: true,
    },
    {
      header: "20 Sat",
      field: "Class",
      sortable: true,
    },
    {
      header: "21 Sun",
      field: "Class",
      sortable: true,
    },
    {
      header: "22 Mon",
      field: "Class",
      sortable: true,
    },
    {
      header: "23 Tue",
      field: "Class",
      sortable: true,
    },
    {
      header: "24 Wed",
      field: "Class",
      sortable: true,
    },
    {
      header: "25 Thu",
      field: "Class",
      sortable: true,
    },
    {
      header: "26 Fri",
      field: "Class",
      sortable: true,
    },
    {
      header: "27 Sat",
      field: "Class",
      sortable: true,
    },
    {
      header: "28 Sun",
      field: "Class",
      sortable: true,
    },
    {
      header: "29 Mon",
      field: "Class",
      sortable: true,
    },
    {
      header: "30 Tue",
      field: "Class",
      sortable: true,
    },
    {
      header: "31 Wed",
      field: "Class",
      sortable: true,
    },
  ];
  return (
    <div className="alumni__student__report__table__area">
        <TableCommonHeader searchButton={true} exportButton={true}/>
      <div className="legends__layout">
        {legends?.map((legend) => (
          <div className="flex" key={legend?.id}>
            <span
              className="legend__indicator"
              style={{ backgroundColor: legend.color }}
            ></span>
            <div className="flex flex-column">
              <span style={{ color: legend.color }} className="legend__name">
                {legend?.name}
              </span>
              <span>00</span>
            </div>
          </div>
        ))}
      </div>
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
