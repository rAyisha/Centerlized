import { FunctionalComponent } from "preact";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import SvgSortIcon from "../../../../../../assets/svgIcon/SvgSortIcon";
import SvgCaretUp from "../../../../../../assets/svgIcon/SvgCaretUp";
import SvgCaretDown from "../../../../../../assets/svgIcon/SvgCaretDown";
import SvgEditIcon from "../../../../../../assets/svgIcon/SvgEditIcon";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import DataTable from "../../../../../../components/DataTable";
import { DataTableStateEvent } from "primereact/datatable";
import SvgBackwards from "../../../../../../assets/svgIcon/SvgBackWords";
import { ConfirmDialog } from "primereact/confirmdialog";
import { statusButtonLabel } from "../mock";

interface Props {
  data: any;
  setAction: any;
  setVisible: any;
  onButtonClick: any;
  handleEditAction: any;
  //   mode?: "enabled" | "disabled";
}

const ListView: FunctionalComponent<Props> = ({
  data,
  setAction,
  setVisible,
  onButtonClick,
  handleEditAction,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(0);
  const [rows, setRows] = useState<number>(5);
  const DataValue = [
    {
      id: 1,
      code: "S001",
      name: "John Doe",
      email: "pain",
      phoneNumber: "123-456-7890",
      department: "HR",
      designation: "Manager",
      mobileNumber: "987-654-3210",
    },
    {
      id: 2,
      code: "S002",
      name: "Jane Smith",
      email: "generate",
      phoneNumber: "234-567-8901",
      department: "Finance",
      designation: "Analyst",
      mobileNumber: "876-543-2109",
    },
    {
      id: 3,
      code: "S003",
      name: "not paid",
      email: "alice@example.com",
      phoneNumber: "345-678-9012",
      department: "IT",
      designation: "Developer",
      mobileNumber: "765-432-1098",
    },
    {
      id: 4,
      code: "S004",
      name: "Bob Brown",
      email: "not paid",
      phoneNumber: "456-789-0123",
      department: "Marketing",
      designation: "Executive",
      mobileNumber: "654-321-0987",
    },
    {
      id: 5,
      code: "S005",
      name: "Charlie Davis",
      email: "paid",
      phoneNumber: "567-890-1234",
      department: "Sales",
      designation: "Sales Rep",
      mobileNumber: "543-210-9876",
    },
  ];
  const [sortField, setSortField] = useState<any>(null);
  const [sortOrder, setSortOrder] = useState<any>(null);

  const HeaderTemplate = ({ field, sortable = true }: any) => {
    const isSorted = sortField === field;
    const sortDirection = isSorted
      ? sortOrder === 1
        ? "asc"
        : sortOrder === -1
        ? "desc"
        : "nor"
      : "nor";
    if (!sortable) {
      return <div className="column__header">{field}</div>;
    }
    return (
      <div className="column__header" onClick={() => handleSort(field)}>
        {field}
        {sortDirection === "asc" ? (
          <SvgCaretUp />
        ) : sortDirection === "desc" ? (
          <SvgCaretDown />
        ) : (
          <SvgSortIcon />
        )}
      </div>
    );
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder((prevOrder: any) => {
        if (prevOrder === 1) return -1;
        if (prevOrder === -1) return 0;
        return 1;
      });
    } else {
      setSortField(field);
      setSortOrder(1);
    }
  };

  const classTemplate = (rowData: any) => <span>{`${rowData.class}`}</span>;
  const handleNavigation = (rowData: any) => {
    dispatch({ payload: rowData.data });
  };

  const [popupVisible, setPopupVisible] = useState(false);
  const closePopup = () => {
    setPopupVisible(false);
  };
  const acceptPopup = () => {
    setPopupVisible(false);
  };
  const onPage = (e: DataTableStateEvent) => {
    dispatch(setLimit(e.rows));
    dispatch(setPage(e.page));
  };
  const { company } = useSelector((state: any) => ({
    company: state.CompanyReducers.company?.data,
  }));
  const actionTemplate = (rowData: any) => (
    <div className="flex justify-content-center">
      <span className="table__arrow__icon flex gap-2">
        <div onClick={() => setPopupVisible(true)}>
          <SvgBackwards />
        </div>
        <div onClick={() => handleEditAction(rowData)}>
          <SvgEditIcon />
        </div>
      </span>
    </div>
  );
  const actionTemplatepayslip = (rowData: any) => (
    <div
      className="action__template"
      onClick={() => onButtonClick(rowData.Status)}
    >
      {statusButtonLabel[rowData.Status]}
    </div>
  );
  const columns = [
    {
      field: "code",
      header: "Staff ID",
      sortable: true,
    },
    {
      field: "name",
      header: "Name",
      sortable: true,
    },
    {
      field: "email",
      header: "Status",
      sortable: true,
    },
    {
      field: "phoneNumber",
      header: "Roll",
      sortable: true,
    },
    {
      field: "department",
      header: "Department",
      sortable: true,
    },
    {
      field: "designation",
      header: "Designation",
      sortable: true,
    },
    {
      field: "mobileNumber",
      header: "Mobile Number",
      sortable: true,
    },
    { header: "Action", body: actionTemplatepayslip },
    {
      header: "Action",
      body: actionTemplate,
    },
  ];
  return (
    <div>
      <DataTable
        className="data-table" 
        value={DataValue}
        columns={columns}
        paginator
        first={page * rows}
        rows={rows}
        totalRecords={Array.isArray(DataValue) ? DataValue?.length : 0}
        onPage={onPage}
        lazy={false}
      />
      <ConfirmDialog
        visible={popupVisible}
        message="Are you sure you want to revert this data?"
        closable={false}
        reject={closePopup}
        accept={acceptPopup}
      />
    </div>
  );
};

export default ListView;
