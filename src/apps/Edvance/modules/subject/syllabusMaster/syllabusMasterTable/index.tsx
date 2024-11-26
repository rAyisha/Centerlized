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
import SvgEditIcon from "../../../../../../assets/svgIcon/SvgEditIcon";
import SyllabusMasterView from "./syllabuMasterView";
import SyllabusMasterEdit from "./syllabusMasterEdit";
import { tableData } from "../../../communication/email/mock";
import DataTable, { DataTableStateEvent } from "../../../../../../components/DataTable";


interface Props {
    setVisible: any;
    action: string;
}

const SyllabusMasterTableListView = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [visible, setVisible] = useState(false);
    const [type, setType] = useState("");
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
    const handleEditStudent = async (rowData: any, types: any) => {
        setType(types)
        setVisible(true)
    };
    const handleViewStudent = async (rowData: any, types: any) => {
        setVisible(true)
        setType(types)
    };

    const handleStatus = () => {

    }
    const handleAction = (rowData: any) => {
        return (
            <div className="action_spliticon">
                <div onClick={() => handleViewStudent(rowData, "view")}>
                    <SvgEye />
                </div>
                <div onClick={() => handleEditStudent(rowData, "edit")}>
                    <SvgEditIcon />
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
          header: "Lesson",
          field: "StudentName",
          sortable: true,
        },
        {
          header: "Topic",
          field: "CurrentPhone",
          sortable: true,
        },
       
       
        {
          header: "Action",
       
        body:handleAction
        },
      ];
   
    

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
                header={type === "view" ? "Syllabus View" : "Syllabus Edit"}
                setVisible={setVisible}
                visible={visible}
                children={
                    type === "view" ?  <SyllabusMasterView /> :<SyllabusMasterEdit/>
                }
            />
        </div>
    );
};

export default SyllabusMasterTableListView;
