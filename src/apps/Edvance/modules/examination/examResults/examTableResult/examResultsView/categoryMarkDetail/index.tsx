import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import SvgSortIcon from '../../../../../../../../assets/svgIcon/SvgSortIcon';

const CategoryMarkDetails = () => {

    const HeaderTemplate = ({ field, sortable = true }) => (
        <div className="column__header">
            {field}
            {sortable && <SvgSortIcon />}
        </div>
    );

    return (
        <div>
            <DataTable
                style={{ marginTop: 20 }}
                value={[]}
                removableSort
                scrollHeight="40vh"
                scrollable
            >
                <Column
                    field="category"
                    sortable
                    header={<HeaderTemplate field="category" />}
                />
                <Column
                    field="categoryMarks"
                    sortable
                    header={<HeaderTemplate field="Category Marks" />}
                />
            </DataTable>
        </div>
    )
}

export default CategoryMarkDetails