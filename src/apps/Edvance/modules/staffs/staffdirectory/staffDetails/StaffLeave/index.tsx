import React, { useEffect, useState } from "react";
import "./index.scss";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { leavesdata, staffLeaves, statusColor } from "./mock.data";
import { useDispatch, useSelector } from "react-redux";
import SvgEye from "../../../../../../../assets/svgIcon/SvgEye";
import SvgThreeDots from "../../../../../../../assets/svgIcon/SvgThreeDots";
import SvgSortIcon from "../../../../../../../assets/svgIcon/SvgSortIcon";
import PaginatorTemplate from "../../../../../components/PaginatorTemplate";
import EmptyTableIcon from "../../../../../components/EmptyTableIcon";
import Sider from "../../../../../components/Sider";
import ApprovelleaveDetailView from "./DetailView";
import DataTabelView from "./TabelView";

// Type for each leave record
interface LeaveRecord {
  id: string;
  leaveType: string;
  leaveDate: string;
  days: string;
  applyDate: string;
  status: "Approved" | "Pending" | "Disapproved";
}

// Type for the component props
interface StaffLeaveProps {
  getallteacherbyid: { id: string };
}

const StaffLeave: React.FC<StaffLeaveProps> = ({ getallteacherbyid }) => {
  const [rowdata, setRowdata] = useState<LeaveRecord | null>(null);
  const [detailvisible, setdetailVisible] = useState(false);
  const [detailposition, setdetailgPosition] = useState<string>("center");
  const [editdetailvisible, seteditdetailVisible] = useState(false);
  const [editdetailposition, seteditdetailgPosition] =
    useState<string>("center");
  const [data, setdata] = useState<LeaveRecord | null>(null);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(5);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(
    //   getAllLeavesOfStaffMiddleware({
    //     payload: {
    //       id: getallteacherbyid?.id,
    //       rows: rows,
    //       pageno: page + 1,
    //     },
    //   })
    // );
  }, [rows, page, getallteacherbyid?.id, dispatch]);

  const { getallLeaves } = useSelector((state: any) => ({
    getallLeaves: state.staffDirectReducers?.getallLeaves.data,
  }));

  const detailshow = (position: string, rowdata: LeaveRecord) => {
    setdetailgPosition(position);
    setdetailVisible(true);
    setRowdata(rowdata);
  };

  const renderAction = (rowdata: LeaveRecord) => {
    return (
      <div className="render__action">
        <div
          className="render__action__trash"
          onClick={() => {
            detailshow("top-right", rowdata);
            setdata(rowdata);
          }}
        >
          <SvgEye />
        </div>
      </div>
    );
  };

  const renderStatus = (rowData: LeaveRecord) => {
    let statusClass = "";
    let statusColor = "";

    switch (rowData.status) {
      case "Approved":
        statusClass = "approved";
        statusColor = "#31AD76";
        break;
      case "Pending":
        statusClass = "pending";
        statusColor = "#F1A245";
        break;
      case "Disapproved":
        statusClass = "disapproved";
        statusColor = "#E56A6C";
        break;
      default:
        statusClass = "";
        break;
    }

    return (
      <div
        className={`render__status ${statusClass}`}
        style={{ color: statusColor }}
      >
        <SvgThreeDots color={statusColor} />
        <div className="render__status__text">{rowData.status}</div>
      </div>
    );
  };

  const HeaderTemplate = ({
    field,
    sortable = true,
  }: {
    field: string;
    sortable?: boolean;
  }) => (
    <div className="column__header">
      {field}
      {sortable && <SvgSortIcon />}
    </div>
  );

  const renderBody = (rowdata: LeaveRecord) => {
    return <div>{rowdata?.leaveType}</div>;
  };

  const renderDate = (rowdata: LeaveRecord) => {
    return <div>{rowdata?.leaveDate}</div>;
  };

  const onPage = (e: { page: number; rows: number }) => {
    setPage(e.page);
    setRows(e.rows);
  };

  const isEmpty = getallLeaves?.allLeaves.length === 0;

  return (
    <div className="staff__leave__attendance">
      <div className="allleaves__container w-full gap-6 flex align-items-center">
        <div className="legends__layout">
          {getallLeaves?.obj &&
            Object.entries(getallLeaves.obj).map(([name, value]: any) => (
              <div className="allleaves__container flex" key={name}>
                <span className="legend__indicator"></span>
                <div className="flex flex-column">
                  <span className="legend__name">{name}</span>
                  <span className="legend__indicator__value">{value}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
      <DataTabelView
        data={[]}
        setAction={""}
        setVisible={""}
      />
      {/* <div className="leave__table__container mt-4">
        <DataTable
          value={getallLeaves?.allLeaves}
          removableSort
          paginator
          first={page * rows}
          rows={rows}
          // onPage={onPage}
          totalRecords={getallLeaves?.count}
          lazy
          paginatorTemplate={PaginatorTemplate}
          scrollHeight="40vh"
          scrollable
          emptyMessage={isEmpty ? <EmptyTableIcon /> : ""}
        >
          <Column
            body={renderBody}
            sortable
            header={<HeaderTemplate field="Leave Type" />}
          />
          <Column
            body={renderDate}
            sortable
            header={<HeaderTemplate field="Leave Date" />}
          />
          <Column
            field="days"
            sortable
            header={<HeaderTemplate field="Days" />}
          />
          <Column
            field="applyDate"
            sortable
            header={<HeaderTemplate field="Apply Date" />}
          />
          <Column
            body={renderStatus}
            sortable
            header={<HeaderTemplate field="Status" />}
          />
          <Column body={renderAction} header="Action" />
        </DataTable>
      </div> */}

      {/* <ImportDatasDialog
        setVisible={setdetailVisible}
        visible={detailvisible}
        setPosition={setdetailgPosition}
        position={detailposition}
        children={<ApprovelleaveDetailView data={data} detailvisible={detailvisible} setdetailVisible={setdetailVisible} rowdata={rowdata} />}
        header="Details"
      /> */}
      <Sider
        header={"Disable Staff"}
        setVisible={setdetailVisible}
        visible={detailvisible}
        // setPosition={setPosition}
        // position={position}
        children={
          <ApprovelleaveDetailView
            data={data}
            detailvisible={detailvisible}
            setdetailVisible={setdetailVisible}
            rowdata={rowdata}
          />
        }
      />
    </div>
  );
};

export default StaffLeave;
