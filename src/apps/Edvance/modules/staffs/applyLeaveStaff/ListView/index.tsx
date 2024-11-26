import { FunctionalComponent, h } from "preact";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import SvgSortIcon from "../../../../../../assets/svgIcon/SvgSortIcon";
import SvgCaretUp from "../../../../../../assets/svgIcon/SvgCaretUp";
import SvgCaretDown from "../../../../../../assets/svgIcon/SvgCaretDown";
import SvgEye from "../../../../../../assets/svgIcon/SvgEye";
import SvgEditIcon from "../../../../../../assets/svgIcon/SvgEditIcon";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import DataTable from "../../../../../../components/DataTable";
import { DataTableStateEvent } from "primereact/datatable";

interface Props {
  data: any;
  setAction: any;
  setVisible: any;
  //   mode?: "enabled" | "disabled";
}

const ListView: FunctionalComponent<Props> = ({
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
  const DataValue = [
    {
      code: "John Doe",
      name: "Sick Leave",
      email: "2023-10-01",
      phoneNumber: 3,
      applyStatus: "Approved",
      status: "Active",
    },
    {
      code: "Jane Smith",
      name: "Vacation Leave",
      email: "2023-10-10",
      phoneNumber: 5,
      applyStatus: "Pending",
      status: "Active",
    },
    {
      code: "Sam Johnson",
      name: "Casual Leave",
      email: "2023-09-15",
      phoneNumber: 2,
      applyStatus: "Rejected",
      status: "Inactive",
    },
    {
      code: "Lisa Brown",
      name: "Maternity Leave",
      email: "2023-08-20",
      phoneNumber: 30,
      applyStatus: "Approved",
      status: "Active",
    },
    {
      code: "Tom Wilson",
      name: "Paternity Leave",
      email: "2023-09-01",
      phoneNumber: 10,
      applyStatus: "Approved",
      status: "Active",
    },
  ];

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
      field: "code",
      header: "Staff Name",
    },
    {
      field: "name",
      header: "Leave Type",
    },
    {
      field: "email",
      header: "Leave Date",
    },
    {
      field: "phoneNumber",
      header: "Days",
    },
    {
      header: "Apply Status",
    },
    {
      header: "Status",
    },
    {
      header: "Action",
      body: actionTemplate,
    },
  ];
  return (
    <div>
      <DataTable
        value={DataValue}
        columns={columns}
        paginator
        first={page * rows}
        rows={rows}
        totalRecords={DataValue.length}
        onPage={onPage}
        lazy={false}
      />
    </div>
  );
};

export default ListView;
