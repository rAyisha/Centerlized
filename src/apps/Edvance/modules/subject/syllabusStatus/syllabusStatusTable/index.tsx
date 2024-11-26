import "./index.scss";
import { Column } from "primereact/column";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import EmptyTableIcon from "../../../../components/EmptyTableIcon";
import SvgSortIcon from "../../../../../../assets/svgIcon/SvgSortIcon";
import SvgCaretUp from "../../../../../../assets/svgIcon/SvgCaretUp";
import SvgCaretDown from "../../../../../../assets/svgIcon/SvgCaretDown";
import PaginatorTemplate from "../../../../components/PaginatorTemplate";
import SvgEye from "../../../../../../assets/svgIcon/SvgEye";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import Sider from "../../../../components/Sider";
import SyllabuStatusDetails from "./syllabusStatusDetails";
import { lessonData } from "./mock";
import DataTable, {
  DataTableStateEvent,
} from "../../../../../../components/DataTable";
import { tableData } from "../../../communication/email/mock";

interface Props {
  setVisible: any;
  action: string;
}

const SyllabusTableListView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [visible, setVisible] = useState(false);
  const [sortField, setSortField] = useState<any>(null);
  const [sortOrder, setSortOrder] = useState<any>(null);
  const [page, setPage] = useState<number>(0);
  const [rows, setRows] = useState<number>(5);
  const onPage = (event: DataTableStateEvent) => {
    setPage(event.page as number);
    setRows(event.rows);
  };
  const onButtonClick = () => {
    // navigate(`/useraccesscontrol/add`);
  };
  const handleAction = (rowData: any) => {
    return (
      <div className="action_spliticon">
        <div onClick={() => handleViewStudent(rowData)}>
          <SvgEye />
        </div>
      </div>
    );
  };
  const columns = [
    {
      header: "S.no",
      field: "Class",
      sortable: true,
    },
    {
      header: "Staff Name",
      field: "AdmissionNo",
      sortable: true,
    },
    {
      header: "Lesson Topic",
      field: "StudentName",
      sortable: true,
    },
    {
      header: "Topic Completion Date",
      field: "CurrentPhone",
      sortable: true,
    },
    {
      header: "Status",
      field: "StudentName",
      sortable: true,
    },
    {
      header: "Action",
      body: handleAction,
    },
  ];
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
  const handleEditStudent = async (rowData: any) => {};
  const handleViewStudent = async (rowData: any) => {
    setVisible(true);
  };

  const handleStatus = () => {};

  return (
    <div className="lessonplan__table mt-6">
      <DataTable
        value={Array.isArray(tableData) ? tableData : []}
        columns={columns}
        paginator
        first={page * rows}
        rows={rows}
        totalRecords={Array.isArray(tableData) ? tableData?.length : 0}
        onPage={onPage}
        lazy={false}
      />
      <Sider
        header="SyllabusStatus Details"
        setVisible={setVisible}
        visible={visible}
        children={
          <SyllabuStatusDetails
            setVisible={setVisible}
            staffName={lessonData.staffName}
            lessonName={lessonData.lessonName}
            topics={lessonData.topics}
          />
        }
      />
    </div>
  );
};

export default SyllabusTableListView;
