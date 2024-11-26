import { useState } from "react";

import { Column } from "primereact/column";
import "./index.scss";
import { payrolldata, logtableData } from "../mock.data";
import { InputText } from "primereact/inputtext";
import ExportButton from "../../../../../components/ExportButton";
import PaginatorTemplate from "../../../../../components/PaginatorTemplate";
import SvgSortIcon from "../../../../../../../assets/svgIcon/SvgSortIcon";
import DataTabelView from "./DataTableView";

interface LogTableData {
  Payslip: string;
  MonthYear: string;
  Date: string;
  Mode: string;
  Status: string;
  NetSalary: number;
  Action?: string;
}

const StaffPayroll: React.FC = () => {
  const bodyTemplate = (data: LogTableData, field: string) => {
    return <span>{data[field]}</span>;
  };

  const HeaderTemplate = ({ field }: { field: string }) => (
    <div className="column__header">
      {field}
      <SvgSortIcon />
    </div>
  );

  const ActionBodyTemplate = (rowData: LogTableData) => {
    return rowData.Action ? (
      <div className="action__overall">
        <div className="action__overall_txt">{rowData.Action}</div>
      </div>
    ) : null;
  };

  const StatusBodyTemplate = (rowData: LogTableData) => {
    const statusStyle: Record<string, React.CSSProperties> = {
      Paid: { color: "#31AD76" },
      Generated: { color: "#3D5EE1" },
    };

    const statusDoutStyle: Record<string, React.CSSProperties> = {
      Paid: { backgroundColor: "#31AD76" },
      Generated: { backgroundColor: "#3D5EE1" },
    };

    return (
      <div className="overall__dout__status">
        <div
          className="dout__status"
          style={statusDoutStyle[rowData.Status]}
        ></div>
        <span style={statusStyle[rowData.Status]}>{rowData.Status}</span>
      </div>
    );
  };

  return (
    <div className="staff__payroll__attendance">
      <div className="w-full gap-6 flex align-items-center">
        <div className="legends__layout">
          {payrolldata.map((data) => (
            <div className="flex" key={data.id}>
              <span className="legend__indicator"></span>
              <div className="flex flex-column">
                <span className="legend__name">{data.lable}</span>
                <span className="legend__indicator__value"> ₹{data.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="staff__payroll__searchattendance">
        <div className="tab__header__search">
          <span className="p-input-icon-left w-full">
            <i className="pi pi-search" />
            <InputText placeholder="Search" />
          </span>
        </div>
        <ExportButton />
      </div>

      {/* table */}
      <DataTabelView data={logtableData} setAction={""} setVisible={""} />
      {/* <div className="payolllist__view mt-6">
        <DataTable
          value={logtableData}
          removableSort
          paginator
          rows={10}
          paginatorTemplate={PaginatorTemplate}
        >
          <Column
            field="Payslip"
            sortable
            header={<HeaderTemplate field="Pay slip" />}
          />
          <Column
            field="MonthYear"
            sortable
            header={<HeaderTemplate field="Month -Year" />}
          />
          <Column
            field="Date"
            sortable
            header={<HeaderTemplate field="Date" />}
          />
          <Column
            field="Mode"
            sortable
            header={<HeaderTemplate field="Mode" />}
          />
          <Column
            field="Status"
            sortable
            header={<HeaderTemplate field="Status" />}
            body={StatusBodyTemplate}
          />
          <Column
            field="NetSalary"
            sortable
            header={<HeaderTemplate field="Net Salary(₹)" />}
          />
          <Column
            field="Action"
            sortable
            header={<HeaderTemplate field="Action" />}
            body={ActionBodyTemplate}
          />
        </DataTable>
      </div> */}
    </div>
  );
};

export default StaffPayroll;
