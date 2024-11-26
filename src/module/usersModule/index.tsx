import { DataTable, DataTableStateEvent } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "preact/hooks";
import { InputText } from "primereact/inputtext";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getUserListMiddleware } from "./store/userListModuleMiddleWare";
import SvgApiLoader from "../../assets/svgIcon/SvgApiLoader";
import ApiLoader from "../../components/ApiLoader";

export default function UserModule() {
  const dispatch = useDispatch<AppDispatch>();
  const { tableData, totalRecords, isLoading } = useSelector((state: any) => {
    return {
      tableData: state.userListModuleReducers?.userList,
      totalRecords: state.userListModuleReducers?.totalRecords,
      isLoading: state.userListModuleReducers?.isLoading,
    };
  });
  console.log(totalRecords, "find totalRecords");

  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(5);
  const [searchValue, setSearchValue] = useState("");
  const handleGetTableData = (searchValue: string) => {
    const params = {
      pageNo: page + 1,
      perPage: rows,
      search: searchValue ? searchValue : "",
    };
    dispatch(getUserListMiddleware({ params }));
  };
  const onPage = (event: DataTableStateEvent) => {
    setPage(event.page as number);
    setRows(event.rows);
  };
  const actionTemplate = () => {
    return <span className="font-bold">Action</span>;
  };
  useEffect(() => {
    handleGetTableData(searchValue);
  }, [page, rows]);

  useEffect(() => {
    const handleSearch = setTimeout(() => {
      handleGetTableData(searchValue);
    }, 500);
    return () => {
      clearTimeout(handleSearch);
    };
  }, [searchValue]);
  if (isLoading) {
    return <ApiLoader />;
  }
  return (
    <div className="card">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.currentTarget.value)}
          placeholder="Search..."
        />
      </span>
      <DataTable
        value={Array.isArray(tableData) ? tableData : []}
        scrollable
        scrollHeight="400px"
        className="mt-4"
        paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        paginator
        rowsPerPageOptions={[5, 10, 20, 25, 50]}
        lazy
        first={page * rows}
        rows={rows}
        totalRecords={totalRecords}
        onPage={onPage}
      >
        <Column
          sortable
          field="id"
          header="Id"
          style={{ minWidth: "100px" }}
          frozen
        ></Column>
        <Column
          sortable
          field="username"
          header="User Name"
          style={{ minWidth: "200px" }}
          frozen
          className="font-bold"
        ></Column>
        <Column
          sortable
          field="email"
          header="Email"
          style={{ minWidth: "200px" }}
        ></Column>
        <Column
          sortable
          field="companyId"
          header="Company ID"
          style={{ minWidth: "200px" }}
        ></Column>
        <Column
          sortable
          field="branchId"
          header="Branch ID"
          style={{ minWidth: "200px" }}
        ></Column>
        <Column
          sortable
          field="year"
          header="Year"
          style={{ minWidth: "200px" }}
        ></Column>
        <Column
          sortable
          field="createdBy"
          header="Created By"
          style={{ minWidth: "200px" }}
        ></Column>
        <Column
          sortable
          field="createdOn"
          header="Created On"
          style={{ minWidth: "200px" }}
        ></Column>
        <Column
          sortable
          field="ipAddress"
          header="IP Address"
          style={{ minWidth: "200px" }}
        ></Column>
        <Column
          field="Action"
          header="Action"
          body={actionTemplate}
          style={{ minWidth: "100px" }}
          frozen
          alignFrozen="right"
        ></Column>
      </DataTable>
    </div>
  );
}
