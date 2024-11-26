import { useState } from "preact/hooks";
import DataTable from "../../../../components/DataTable";
import { DataTableStateEvent } from "primereact/datatable";
import TableSearchHeader from "../../../../components/TableSearchHeader";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import ApiLoader from "../../../../components/ApiLoader";
import BackNavigation from "../../../../components/BackArrowNavigation";
import "./index.scss"
type StateType = {
  id?: number;
};
interface TableFileds {
  id?: number;
  applicableProcess?: string;
  approvalLevels?: string;

}
interface PropsState {
}
const ApprovalTab = ({ }: PropsState) => {
  const [page, setPage] = useState<number>(0);
  const [rows, setRows] = useState<number>(5);
  const onPage = (event: DataTableStateEvent) => {
    setPage(event.page as number);
    setRows(event.rows);
  };
  const { isLoading, listOfUsersAccess } = useSelector((state: RootState) => ({
    isLoading: state?.TemplatesReducers?.isLoading,
    listOfUsersAccess: state?.TemplatesReducers?.listOfUsersAccess
  }))
  const columns = [
    {
      header: "S.No.",
      body: (_: any, column: any) => column.rowIndex + 1,
    },
    {
      field: "Name",
      header: "Name",
    },
    {
      field: "workEmail",
      header: "Work Email",
    },
    {
      field: "departmentName",
      header: "Department",
    },
  ];
  if (isLoading) {
    return <ApiLoader />
  }

  return (
    <div className="approval__main__container">
      {/* <TableSearchHeader
        title="Approval List"
        addButton={false}
        searchButton={false}
      /> */}
      <div className="form__header__area flex gap-2 mb-5 align-items-center">
        <BackNavigation />
        <div className="form__title">
          Users List
        </div>
      </div>
      <div className="mt-5">
        <DataTable
          value={Array.isArray(listOfUsersAccess) ? listOfUsersAccess : []}
          columns={columns}
          paginator
          first={page * rows}
          rows={rows}
          totalRecords={listOfUsersAccess?.length ?? 0}
          onPage={onPage}
          lazy={false}
        />
      </div>
    </div>
  );
};

export default ApprovalTab;
