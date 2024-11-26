import { Dropdown } from "primereact/dropdown";
import {
  PaginatorCurrentPageReportOptions,
  PaginatorFirstPageLinkOptions,
  PaginatorLastPageLinkOptions,
  PaginatorNextPageLinkOptions,
  PaginatorPrevPageLinkOptions,
  PaginatorRowsPerPageDropdownOptions,
} from "primereact/paginator";
import SvgPaginatorFirstPage from "../../assets/svgIcon/SvgPaginatorFirstPage";
import SvgPaginatorPrevPage from "../../assets/svgIcon/SvgPaginatorPrevPage";
import SvgPaginatorNextPage from "../../assets/svgIcon/SvgPaginatorNextPage";
import SvgPaginatorLastPage from "../../assets/svgIcon/SvgPaginatorLastPage";


const PaginatorTemplate = {
  layout:
    "RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",
  RowsPerPageDropdown: (options: PaginatorRowsPerPageDropdownOptions) => {
    const dropdownOptions = [
      { label: 5, value: 5 },
      { label: 10, value: 10 },
      { label: 15, value: 15 },
      { label: 20, value: 20 },
    ];

    return (
      <div className="flex-1 flex justify-content-center align-items-center">
        <span className="row__count">Row Count :</span>
        <Dropdown
          value={options.value}
          options={dropdownOptions}
          onChange={options.onChange}
          variant="filled"
          // dropdownIcon="pi pi-sort-down-fill"
        />
      </div>
    );
  },
  CurrentPageReport: (options: PaginatorCurrentPageReportOptions) => {
    return (
      <span className="mx-4">
        {`${options.first}-${options.last} of ${options.totalRecords}`}
      </span>
    );
  },
  FirstPageLink: (options: PaginatorFirstPageLinkOptions) => {
    return (
      <button
        type="button"
        className={options.className}
        onClick={options.onClick}
        disabled={options.disabled}
      >
        <SvgPaginatorFirstPage />
      </button>
    );
  },
  PrevPageLink: (options: PaginatorPrevPageLinkOptions) => {
    return (
      <button
        type="button"
        className={options.className}
        onClick={options.onClick}
        disabled={options.disabled}
      >
        <SvgPaginatorPrevPage />
      </button>
    );
  },
  NextPageLink: (options: PaginatorNextPageLinkOptions) => {
    return (
      <button
        type="button"
        className={options.className}
        onClick={options.onClick}
        disabled={options.disabled}
      >
        <SvgPaginatorNextPage />
      </button>
    );
  },
  LastPageLink: (options: PaginatorLastPageLinkOptions) => {
    return (
      <button
        type="button"
        className={options.className}
        onClick={options.onClick}
        disabled={options.disabled}
      >
        <SvgPaginatorLastPage />
      </button>
    );
  },
};

export default PaginatorTemplate