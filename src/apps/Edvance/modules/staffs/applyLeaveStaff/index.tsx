import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import SvgSortIcon from "../../../../../assets/svgIcon/SvgSortIcon";
import SvgThreeDots from "../../../../../assets/svgIcon/SvgThreeDots";
import SvgEye from "../../../../../assets/svgIcon/SvgEye";
import SvgEditIcon from "../../../../../assets/svgIcon/SvgEditIcon";
import InputField from "../../../../../components/InputField";
import SvgAddIcon from "../../../../../assets/svgIcon/SvgAddIcon";
import { useEffect, useState } from "preact/hooks";
import ListView from "./ListView";
import Button from "../../../../../components/Button";
import ExportButton from "../../../components/ExportButton";
import Sider from "../../../components/Sider";
import AddLeaveRequest from "./AddApplyLeave";
import {
  getapllyleaveMiddleware,
  getleavetype,
  getOneLeave,
  getSearchapplyLeaveMiddleware,
} from "./store/applyLeaveMiddleware";
import { AppDispatch } from "../../../../../redux/store";
import { Navigate } from "react-router-dom";

interface LeaveData {
  id: string;
  staff: {
    firstName: string;
    lastName: string;
  };
  MS_LeaveType: {
    type: string;
  };
  fromDate: string;
  toDate: string;
  status: string;
  applyDate: string;
  numberOfDays: number;
}

interface RootState {
  applyleaveMainReducers: {
    data: LeaveData[];
    searchLeaveData: LeaveData[];
    getallapplyleave: { allLeaves: LeaveData[]; count: number };
  };
  approveleaveMainReducers: {
    getallleavedata: { data: any };
    getoneleavedata: { data: any };
  };
}

const ApplyLeaveStaff: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(5);
  const [visible, setVisible] = useState(false);
  const [showNodataFound, setShowNoDataFound] = useState(false);
  const [errorData, setErrorData] = useState<any>();
  const [action, setAction] = useState("add");
  const { data, searchLeaveData, getallleavedata, getoneleavedata } =
    useSelector((state: RootState) => ({
      data: state.applyleaveMainReducers?.data,
      searchLeaveData: state.applyleaveMainReducers?.searchLeaveData,
      getallleavedata: state.approveleaveMainReducers?.getallleavedata?.data,
      getoneleavedata: state.approveleaveMainReducers?.getoneleavedata?.data,
      // getallapplyleave: state.applyleaveMainReducers?.getallapplyleave?.data,
    }));

  const [addsibilingvisible, setAddsibilingVisible] = useState(false);
  const [addsibilingposition, setAddsibilingPosition] =
    useState<string>("center");
  const [detailvisible, setdetailVisible] = useState(false);
  const [detailposition, setdetailgPosition] = useState<string>("center");
  const [editdetailvisible, seteditdetailVisible] = useState(false);
  const [editdetailposition, seteditdetailgPosition] =
    useState<string>("center");
  const [editvisible, setEditVisible] = useState<LeaveData | null>(null);

  const dispatch: AppDispatch = useDispatch();

  const addSibilingshow = (position: string) => {
    setAddsibilingPosition(position);
    setAddsibilingVisible(true);
    // dispatch(getleavetype());
  };

  const detailshow = (rowData: LeaveData) => {
    setdetailgPosition("top-right");
    setdetailVisible(true);
    dispatch(getOneLeave(rowData?.id));
  };

  const editdetailshow = (position: string) => {
    seteditdetailgPosition(position);
    seteditdetailVisible(true);
  };

  const handleSubmit = (value: { search: string }) => {
    // dispatch(getSearchapplyLeaveMiddleware({ textSearch: value.search })).then(
    //   (res) => {
    //     if (res?.meta?.requestStatus === "rejected") {
    //       setShowNoDataFound(true);
    //       setErrorData("hhhhhhh");
    //     }
    //   }
    // );

    // if (formik.values.search !== "") {
    dispatch(
      getSearchapplyLeaveMiddleware({ textSearch: formik.values.search })
    ).then((res) => {
      if (res?.meta?.requestStatus === "rejected") {
        console.log("Error data:", "hjhjhh", res?.payload?.error);
        setShowNoDataFound(true);
        setErrorData(res?.payload?.error);
      }
    });
    // }
  };

  const formik = useFormik({
    initialValues: { search: "" },
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (formik.values.search !== "") {
      // dispatch(
      //   getSearchapplyLeaveMiddleware({ textSearch: formik.values.search })
      // ).then((res) => {
      //   if (res?.meta?.requestStatus === "rejected") {
      //     console.log(res, "==============>tesr");

      //     setShowNoDataFound(true);
      //     setErrorData(res?.payload?.error);
      //   } else {
      //     console.log(res?.payload?.response, "res?.payload?.response");
      //   }
      // });
      dispatch(
        getSearchapplyLeaveMiddleware({ textSearch: formik.values.search })
      ).then((res) => {
        if (res?.meta?.requestStatus === "rejected") {
          console.log("Error data:", "hjhjhh", res?.payload?.error);
          setShowNoDataFound(true);
          setErrorData(res?.payload?.error);
        }
      });
    }
  }, [formik.values.search, dispatch]);

  const HeaderTemplate = ({ field }: { field: string }) => (
    <div className="column__header">
      {field}
      <SvgSortIcon />
    </div>
  );

  const handleEdit = (rowData: LeaveData) => {
    editdetailshow("top-right");
    setEditVisible(rowData);
    dispatch(getOneLeave(rowData?.id));
    dispatch(getleavetype());
  };

  const renderStatus = (rowData: LeaveData) => {
    let statusClass = "";
    let statusColor = "";
    switch (rowData.status) {
      case "APPROVED":
        statusClass = "approved";
        statusColor = "#31AD76";
        break;
      case "PENDING":
        statusClass = "pending";
        statusColor = "#F1A245";
        break;
      case "DISAPPROVED":
        statusClass = "disapproved";
        statusColor = "#E56A6C";
        break;
      default:
        statusClass = "";
        break;
    }

    return (
      <div className={`render__status ${statusClass}`}>
        <SvgThreeDots color={statusColor} />
        <div className="render__status__text">{rowData.status}</div>
      </div>
    );
  };

  const menuOptions = [
    {
      name: "View Details",
      onClick: (rowData: LeaveData) => {
        detailshow(rowData);
      },
    },
    {
      name: "Edit",
      onClick: (rowData: LeaveData) => {
        if (rowData.status === "PENDING") {
          handleEdit(rowData);
        }
      },
    },
  ];

  const onPage = (e: { page: number; rows: number }) => {
    setPage(e.page);
    setRows(e.rows);
  };

  const renderAction = (rowData: LeaveData) => (
    <div className="render__action">
      <div
        className="render__action__trash"
        onClick={() => detailshow(rowData)}
      >
        <SvgEye />
      </div>
      {rowData?.status === "PENDING" && (
        <div
          className="render__action__edit"
          onClick={() => handleEdit(rowData)}
        >
          <SvgEditIcon />
        </div>
      )}
    </div>
  );

  const payload = {
    page: page + 1,
    rows: rows,
    term: formik.values.search || "",
  };

  const applyleavefunc = () => {
    dispatch(
      getapllyleaveMiddleware({
        payload,
      })
    );
  };

  useEffect(() => {
    applyleavefunc();
  }, [page, rows, dispatch, formik.values.search]);

  const handlestaffname = (rowdata: LeaveData) => (
    <div>
      {rowdata?.staff?.firstName} {rowdata?.staff?.lastName}
    </div>
  );

  const handleleaveDate = (rowdata: LeaveData) => (
    <div>
      {rowdata?.fromDate} - {rowdata?.toDate}
    </div>
  );

  const handleleaveType = (rowdata: LeaveData) => (
    <div>{rowdata?.MS_LeaveType?.type}</div>
  );
  const handleNewAdmission = (action: string) => {
    console.log(action, "add", "newssssTesttt");

    setVisible(true);
    setAction(action);
  };
  return (
    <div className="apply__leave_type grid">
      <div className="col-12 apply__leave__header__title">Apply Leave</div>
      {/* //search test */}
      <div className="tab__header col-6 ">
        <div className="tab__header__search">
          <div className="p-input-icon-left w-full">
            <i className="pi pi-search" />
            <InputField
              placeholder="Leave Type"
              value={formik.values.search}
              onChange={formik.handleChange("search")}
            />
          </div>
        </div>
      </div>
      {/* apply leave/ */}
      <div className="col-12 md:col-6 lg:col-6 apply__leave__add__export__btn">
        <div className="btn__container">
          <ExportButton />
          <div className="btn__add">
            <Button
              label="Apply Leave"
              icon={<SvgAddIcon color="var(--base-text-inactive-color)" />}
              onClick={() => handleNewAdmission("add")}
              iconPos="left"
              className="export__butt__overall"
            />
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* tabel */}
      <div className="col-12">
        <ListView data={data} setAction={setAction} setVisible={setVisible} />
      </div>
      {/*create apply leave popup */}
      <Sider
        header={
          action === "add"
            ? "Add LeaveType"
            : action === "edit"
            ? "Edit Leave Type"
            : "View Leave Type"
        }
        setVisible={setVisible}
        visible={visible}
        children={
          <AddLeaveRequest
            setVisible={setVisible}
            action={action}
            applyleavefunc={applyleavefunc}
            getoneleavedata={getoneleavedata}
          />
        }
      />
      {showNodataFound && (
        <Navigate to="/notfound" replace state={{ error: errorData }} />
      )}
    </div>
  );
};

export default ApplyLeaveStaff;
