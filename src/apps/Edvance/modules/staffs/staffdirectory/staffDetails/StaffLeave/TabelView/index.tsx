import { FunctionalComponent, h } from "preact";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import SvgCaretUp from "../../../../../../../../assets/svgIcon/SvgCaretUp";
import SvgCaretDown from "../../../../../../../../assets/svgIcon/SvgCaretDown";
import SvgSortIcon from "../../../../../../../../assets/svgIcon/SvgSortIcon";
import SvgEye from "../../../../../../../../assets/svgIcon/SvgEye";
import SvgEditIcon from "../../../../../../../../assets/svgIcon/SvgEditIcon";
import DataTable, { DataTableStateEvent } from "../../../../../../../../components/DataTable";
import { AppDispatch } from "../../../../../../../../redux/store";



interface Props {
  data: any;
  setAction: any;
  setVisible: any;
  //   mode?: "enabled" | "disabled";
}

const DataTabelView: FunctionalComponent<Props> = ({
  data,
  setAction,
  setVisible,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState<number>(0);
  const [rows, setRows] = useState<number>(5);

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
  const handleEditStudent = async (rowData: any, action: string) => {
    setAction(action);
    setVisible(true);
    console.log(action, "add", "newssssTesttt");
    // const id = rowData?.id;
    // try {
    //   const res = await dispatch(getStudentSingleDataMiddleware(id));

    //   if (res.meta.requestStatus === "fulfilled") {
    //     navigate(`/edvance/students/studentadmission/edit`);
    //   } else {
    //     console.error("find api failed:", res?.payload?.response);
    //   }
    // } catch (error: any) {
    //   console?.error("find An error occurred:", error.message);
    // }
  };
  const handleViewStudent = async (rowData: any, action: string) => {
    setAction(action);
    setVisible(true);
    console.log(action, "add", "newssssTesttt");
    // console.log(action,"add","newssssTesttt");
    // const id = rowData?.id;
    // try {
    //   const res = await dispatch(getSingleStudentMiddleware(id));

    //   if (res.meta.requestStatus === "fulfilled") {
    //     // navigate(mode === "enabled" ? "/edvance/students/liststudents/studentDetail" : "/edvance/students/disablestudents/studentDetail");
    //   } else {
    //     console.error("find api failed:", res?.payload?.response);
    //   }
    // } catch (error: any) {
    //   console?.error("find An error occurred:", error.message);
    // }
  };

  const onPage = (e: DataTableStateEvent) => {
    dispatch(setRows(e.rows));
    dispatch(setPage(e.page));
  };

  const actionTemplate = (rowData: any) => (
    <div className="flex justify-content-center">
      <span className="table__arrow__icon flex gap-2">
        <div onClick={() => handleViewStudent(rowData, "view")}>
          <SvgEye />
        </div>
        <div onClick={() => handleEditStudent(rowData, "edit")}>
          <SvgEditIcon />
        </div>
      </span>
    </div>
  );
  const columns = [
    {
      field: "Payslip",
      header: "Payslip",
    },
    {
      field: "MonthYear",
      header: "Month/Year",
    },
    {
      field: "Date",
      header: "Date",
    },
    {
      field: "Mode",
      header: "Mode",
    },
    {
      field: "Status",
      header: "Status",
    },
    {
      field: "NetSalary",
      header: "Net Salary",
    },
    {
      header: "Action",
      body: actionTemplate,
    },
  ];

  return (
    <div>
      <DataTable
        value={data}
        columns={columns}
        paginator
        first={page * rows}
        rows={rows}
        totalRecords={data.length}
        onPage={onPage}
        lazy={false}
      />
    </div>
  );
};

export default DataTabelView;
