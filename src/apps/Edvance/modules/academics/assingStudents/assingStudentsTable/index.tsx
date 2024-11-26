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
import SvgEditIcon from "../../../../../../assets/svgIcon/SvgEditIcon";
import SvgDeleteIcon from "../../../../../../assets/svgIcon/SvgDeleteIcon";
import DataTable from "../../../../../../components/DataTable";
import Sider from "../../../../components/Sider";
import AssingStudentSlider from "../headerAssingStudents/assingStudentSlider";


const AssingStudentListView = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [visible, setVisible] = useState(false);
    const [action, setAction] = useState("add");
    const [sortField, setSortField] = useState<any>(null);
    const [sortOrder, setSortOrder] = useState<any>(null);
    const [rows, setRows] = useState<number>(5);
    const [page, setPage] = useState<number>(0);
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
    const handleAssingStudent = (action: string) => {
        setVisible(true);
        setAction(action);
    };

    const handleAction = (rowData: any) => {
        return (
            <div className="action_spliticon">
                <div 
                // onClick={() => handleViewStudent(rowData)}
                onClick={() => handleAssingStudent("edit")}
                >
                    <SvgEditIcon />
                </div>
                <div>
                    <SvgDeleteIcon/>
                </div>
            </div>
        );
    };
    const columns = [
        {
          
          header: "Class",
          body:classTemplate
        },
        {
          field: "studentName",
          header: "Section",
        },
        {
            field: "studentName",
            header: "Student Count",
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
        <div className="assingstudent__table mt-6">
            {/* <DataTable
                value={[{admissionNumber:""}]}
                removableSort
                selectionMode="single"
                onRowSelect={handleNavigation}
                paginator
                first={1 * 5}
                rows={10}
                paginatorTemplate={PaginatorTemplate}
                scrollHeight="350px"
                scrollable
                emptyMessage={<EmptyTableIcon />}
                sortField={sortField}
                sortOrder={sortOrder}
                onPage={onPage}
                totalRecords={10}
                lazy
            >
                <Column
                    sortable
                    header={<HeaderTemplate field="Class" />}
                    body={classTemplate}
                />
                <Column
                    field="section"
                    sortable
                    header={<HeaderTemplate field="Section" />}
                />
                <Column
                    field="studentcount"
                    sortable
                    header={<HeaderTemplate field="Student Count" />}
                />
                <Column
                    sortable
                    header={<HeaderTemplate field="Action" sortable={false} />}
                    body={handleAction}
                />
            </DataTable> */}

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

{/* Slidder*/}

<Sider
                header={
                    action === "add"
                        ? "Assign Class Student"
                        : action === "edit"
                            ? "Edit Class Student"
                            : "View Class Student"
                }
                setVisible={setVisible}
                visible={visible}
                children={
                    <AssingStudentSlider
                        setVisible={setVisible}
                        action={action}
                    />
                }
            />

        </div>
    );
};

export default AssingStudentListView;
