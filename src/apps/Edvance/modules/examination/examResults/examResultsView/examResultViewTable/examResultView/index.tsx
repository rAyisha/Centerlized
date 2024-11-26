import "./index.scss";
import { Column } from "primereact/column";
import { DataTable, DataTableStateEvent } from "primereact/datatable";
import EmptyTableIcon from "../../../../../../components/EmptyTableIcon";
import SvgCaretUp from "../../../../../../../../assets/svgIcon/SvgCaretUp";
import SvgCaretDown from "../../../../../../../../assets/svgIcon/SvgCaretDown";
import SvgSortIcon from "../../../../../../../../assets/svgIcon/SvgSortIcon";
import { useState } from "react";
import PaginatorTemplate from "../../../../../../components/PaginatorTemplate";
import SvgDownload from "../../../../../../../../assets/svgIcon/SvgDownload";
import { mockData } from "./mock";

const ExamResultsView = () => {

    const [sortField, setSortField] = useState<any>(null);
    const [sortOrder, setSortOrder] = useState<any>(null);
    const [viewResults, setViewResults] = useState(false)

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

    const handleNavigation = (rowData: any) => {
    };

    const onPage = (e: DataTableStateEvent) => {

    };

    const renderAction = (rowData: any) => {
        return (
            <div className="action_spliticon">
                <div onClick={() => handleViewExamResult()}>
                    <SvgDownload />
                </div>
            </div>
        );
    };

    const handleViewExamResult = () => {
        setViewResults(true)
    }

    return (
        <div>
            <DataTable
                value={mockData}
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
                    field="class"
                    sortable
                    header={<HeaderTemplate field="Class" />}
                />
                <Column
                    field="subject"
                    sortable
                    header={<HeaderTemplate field="Subject" />}
                />
                <Column
                    field="status"
                    sortable
                    header={<HeaderTemplate field="Status" />}
                />
                <Column
                    sortable
                    header={<HeaderTemplate field="Action" />}
                    body={renderAction}
                />
            </DataTable>
        </div>
    )
}

export default ExamResultsView