import { Dropdown } from "primereact/dropdown";
import "./index.scss";

const PaginatorTemplate = {
  layout:
    "RowsPerPageDropdown CurrentPageReport FirstPageLink PrevPageLink NextPageLink LastPageLink",
  RowsPerPageDropdown: (options:any) => {
    const dropdownOptions = [
      { label: 5, value: 5 },
      { label: 10, value: 10 },
      { label: 15, value: 15 },
      { label: 20, value: 20 },
    ];

    return (
        <div className="overall_paginator">
      <div className="p-d-flex p-ai-center">
        <span className="p-mr-2">Rows per Page:</span>
        <Dropdown
          value={options.value}
          options={dropdownOptions}
          onChange={options.onChange}
          variant="filled"
        />
      </div>
      </div>
    );
  },
  CurrentPageReport: (options:any) => {
    return (
      <span className="mx-4">
        {`${options.first}-${options.last} of ${options.totalRecords}`}
      </span>
    );
  },
  FirstPageLink: (options:any) => {
    return (
      <button
        type="button"
        className={options.className}
        onClick={options.onClick}
        disabled={options.disabled}
        
      >
        <i className="pi pi-angle-double-left" ></i>
      </button>
    );
  },
  PrevPageLink: (options:any) => {
    return (
      <button
        type="button"
        className={options.className}
        onClick={options.onClick}
        disabled={options.disabled}
      >
        <i className="pi pi-angle-left" ></i>
      </button>
    );
  },
  NextPageLink: (options:any) => {
    return (
      <button
        type="button"
        className={options.className}
        onClick={options.onClick}
        disabled={options.disabled}
      >
        <i className="pi pi-angle-right" ></i>
      </button>
    );
  },
  LastPageLink: (options:any) => {
    return (
      <button
        type="button"
        className={options.className}
        onClick={options.onClick}
        disabled={options.disabled}
      >
        <i className="pi pi-angle-double-right" ></i>
      </button>
    );
  },
};

export default PaginatorTemplate;