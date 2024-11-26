import "./index.scss";
import { Column } from "primereact/column";
import {  DataTableStateEvent } from "primereact/datatable";
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
import DataTable from "../../../../../../components/DataTable";


const AttendanceListView = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [rows, setRows] = useState<number>(5);
    const [page, setPage] = useState<number>(0);
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
    const handleEditStudent = async (rowData: any) => {

    };
    const handleViewStudent = async (rowData: any) => {
      navigate(`/edvance/academics/attendance/${1}`)
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
          
          header: "Admission No",
          field: "admissionNumber",
        },
        {
          field: "studentName",
          header: "Student Name",
        },
        {
            field: "RollNo",
            header: "Roll No",
          },
          {
            body:classTemplate,
            header: "Class",
          },
          {
            field: "Section",
            header: "Section",
          },
          {
            field: "Mobile No",
            header: "Mobile No",
          },
          {
            field: "RollNo",
            header: "Roll No",
          },
       
        {
          header: "Action",
          body: handleAction,
        },
      ];
      const onPage = (e: DataTableStateEvent) => {
        dispatch(setRows(e.rows));
        dispatch(setPage(e.page));
      };

    return (
        <div className="attendance__table mt-6">
           

            <DataTable
        value={[{admissionNumber:""}]}
        columns={columns}
        paginator
        first={page * rows}
        rows={rows}
        totalRecords={10}
        onPage={onPage}
        lazy={false}
      />


        </div>
    );
};

export default AttendanceListView;
