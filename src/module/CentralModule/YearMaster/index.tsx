import { useEffect, useRef, useState } from "preact/hooks";
import DataTable from "../../../components/DataTable";
import { DataTableStateEvent } from "primereact/datatable";
import "./index.scss";
import SvgEditIcon from "../../../assets/svgIcon/SvgEditIcon";
import SvgDeleteIcon from "../../../assets/svgIcon/SvgDeleteIcon";
import TableSearchHeader from "../../../components/TableSearchHeader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ApiLoader from "../../../components/ApiLoader";
import { YearMasterData } from "./store/yearMaster.Type";
import ConfirmDeleteComponent from "../../../components/DeleteDialog";
import FilterComponent from "../../../components/filterComponet";
import { tabs } from "./mock";
import { AppDispatch } from "../../../redux/store";
import { getYearMasterTableDataMiddleware } from "./store/yearMasterMiddleware";
import { fetchIp } from "../../../utility/getIpAddress";

const YearMaster = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const ipAddress = useRef("");
  const { isLoading, companyID, branchID, yearMasterTableData } = useSelector(
    (state: any) => ({
      isLoading: state.yearMasterReducers.isLoading,
      companyID: state.dropdownDataReducers.companyID,
      branchID: state.dropdownDataReducers.branchID,
      yearMasterTableData: state?.yearMasterReducers?.yearMasterTableData,
    })
  );
  console.log(yearMasterTableData, "yearMasterTableDatayearMasterTableData");

  const [page, setPage] = useState<number>(0);
  const [rows, setRows] = useState<number>(5);
  const [visible, setVisible] = useState<boolean>(false);

  const onPage = (event: DataTableStateEvent) => {
    setPage(event.page as number);
    setRows(event.rows);
  };
  const actionTemplate = (rowData: YearMasterData) => (
    <div className="flex justify-content-center">
      <span className="table__arrow__icon flex gap-2">
        <div onClick={() => navigate(`/yearmasterform/edit/1`)}>
          <SvgEditIcon />
        </div>
        <div onClick={() => setVisible(true)}>
          <SvgDeleteIcon />
        </div>
      </span>
    </div>
  );
  const startDateTemplate = (rowData: YearMasterData) => (
    <div className="flex">
      <div>
        {rowData?.startDate}/{rowData?.startMonth}/{rowData?.startYear}
      </div>
    </div>
  );
  const endDateTemplate = (rowData: YearMasterData) => (
    <div className="flex">
      <div>
        {rowData?.endDate}/{rowData?.endMonth}/{rowData?.endYear}
      </div>
    </div>
  );
  const accept = () => {};

  const reject = () => {
    setVisible(false);
  };
  const columns = [
    {
      header: "S.No.",
      body: (_: any, column: any) => column.rowIndex + 1,
    },
    {
      field: "name",
      header: "Year Name",
    },
    {
      field: "yearType",
      header: "Year Type",
    },
    {
      header: "Start Date",
      body: startDateTemplate,
    },
    {
      header: "End date",
      body: endDateTemplate,
    },
    {
      header: "Action",
      body: actionTemplate,
    },
  ];
  const onButtonClick = () => {
    navigate("/yearmasterform/add");
  };

  if (isLoading) {
    return <ApiLoader />;
  }

  const initialFetch = async () => {
    try {
      ipAddress.current = await fetchIp();

      const headers = {
        "company-id": companyID,
        "branch-id": branchID,
        ip: ipAddress.current,
      };
      await dispatch(getYearMasterTableDataMiddleware({ headers }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initialFetch();
  }, [companyID, branchID]);
  // useEffect(() => {
  //   const headers = {
  //     "company-id": companyID,
  //     "branch-id": branchID,
  //     ip: ipAddress.current,
  //   };
  //   dispatch(getYearMasterTableDataMiddleware({ headers }));
  // }, []);
  return (
    <div>
      <TableSearchHeader
        title="Year List"
        onButtonClick={onButtonClick}
        addButton={true}
      />
      <div className="mt-2 mb-4">
        <FilterComponent tabs={tabs} />
      </div>
      <DataTable
        value={yearMasterTableData}
        columns={columns}
        paginator
        first={page * rows}
        rows={rows}
        totalRecords={0}
        onPage={onPage}
        lazy={false}
      />
      <ConfirmDeleteComponent
        visible={visible}
        onHide={() => setVisible(false)}
        message="Are you sure you want to delete?"
        accept={accept}
        reject={reject}
      />
    </div>
  );
};

export default YearMaster;
