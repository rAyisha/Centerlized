import { FunctionalComponent } from "preact";
import "./index.scss";
import {
  DataTable as PrimeTable,
  DataTableSelectionMultipleChangeEvent,
  DataTableStateEvent,
} from "primereact/datatable";
import { Column, ColumnProps } from "primereact/column";
import PaginatorTemplate from "./paginatorTemplate";
import SvgCaretUp from "../../assets/svgIcon/SvgCaretUp";
import SvgCaretDown from "../../assets/svgIcon/SvgCaretDown";
import SvgSortIcon from "../../assets/svgIcon/SvgSortIcon";
import { useState } from "preact/hooks";
import SvgEye from "../../assets/svgIcon/SvgEye";
import SvgEditIcon from "../../assets/svgIcon/SvgEditIcon";
import SvgDeleteIcon from "../../assets/svgIcon/SvgDeleteIcon";

interface Props<T> {
  value: T[];
  columns?: ColumnProps[];
  paginator?: boolean;
  rows?: number;
  first?: number;
  totalRecords?: number;
  selectionMode?: "multiple" | "checkbox" | null;
  selection?: any;
  onSelectionChange?: (e: DataTableSelectionMultipleChangeEvent<any>) => void;
  scrollable?: boolean;
  scrollHeight?: string;
  className?: string;
  onPage?: (event: DataTableStateEvent) => void;
  lazy?: boolean;
  showActions?: boolean;
  viewAccess?: boolean;
  editAccess?: boolean;
  deleteAccess?: boolean;
  onView?: (rowData: any) => void,
  onEdit?: (rowData: any) => void,
  onDelete?: (rowData: any) => void
}

const EmptyMessageTemplate = () => (
  <div className="empty__message__template">No Data Found</div>
);

const DataTable: FunctionalComponent<Props<any>> = ({
  value,
  columns = [],
  paginator = false,
  rows = 5,
  first = 0,
  totalRecords = 0,
  selectionMode = null,
  selection,
  onSelectionChange,
  scrollable = true,
  scrollHeight = '500px',
  className = "",
  onPage = () => { },
  lazy = true,
  showActions = false,
  viewAccess = false,
  editAccess = false,
  deleteAccess = false,
  onView = () => { },
  onEdit = () => { },
  onDelete = () => { },
}) => {

  const sortIcon = (options: any) => {
    if (options.sortOrder === 1) {
      return <SvgCaretUp />;
    } else if (options.sortOrder === -1) {
      return <SvgCaretDown />;
    } else {
      return <SvgSortIcon />;
    }
  };

  const handleView = (event: MouseEvent, rowData: any) => {
    if (!viewAccess) {
      event.preventDefault();
      return
    }
    onView(rowData);
  }
  const handleEdit = (event: MouseEvent, rowData: any) => {
    if (!editAccess) {
      event.preventDefault();
      return
    }
    onEdit(rowData);
  }
  const handleDelete = (event: MouseEvent, rowData: any) => {
    if (!deleteAccess) {
      event.preventDefault();
      return
    }
    onDelete(rowData);
  }

  const actionTemplate = (rowData: any) => (
    <div className="flex justify-content-center">
      <span className="flex gap-2">
        <div onClick={(e) => handleView(e, rowData)} className={viewAccess ? "cursor-pointer" : ""}>
          <SvgEye color={viewAccess ? "#292D32" : "#292D3233"} />
        </div>
        <div onClick={(e) => handleEdit(e, rowData)} className={editAccess ? "cursor-pointer" : ""}>
          <SvgEditIcon color={editAccess ? "292D32" : "#292D3233"} />
        </div>
        <div onClick={(e) => handleDelete(e, rowData)} className={deleteAccess ? "cursor-pointer" : ""}>
          <SvgDeleteIcon color={deleteAccess ? "#292D32" : "#292D3233"} />
        </div>
      </span>
    </div>
  );

  return (
    <PrimeTable
      value={value}
      className={`custom__datatable ${className}`}
      paginator={paginator}
      paginatorTemplate={PaginatorTemplate}
      rows={rows}
      first={first}
      totalRecords={totalRecords}
      selectionMode={selectionMode}
      selection={selection}
      onSelectionChange={onSelectionChange}
      scrollable={scrollable}
      scrollHeight={scrollHeight}
      emptyMessage={<EmptyMessageTemplate />}
      onPage={onPage}
      lazy={lazy}
      sortIcon={sortIcon}
      removableSort
    >
      {selectionMode && (
        <Column selectionMode="multiple" headerStyle={{ width: "3rem" }} />
      )}
      {columns.map((column) => (
        <Column {...column} />
      ))}
      {showActions && (
        <Column header="Action" body={actionTemplate} />
      )}
    </PrimeTable>
  );
};

export default DataTable;
export type { DataTableSelectionMultipleChangeEvent, DataTableStateEvent };