import { DataTable } from 'primereact/datatable'
import { Image } from 'primereact/image'
import { Column } from 'primereact/column'
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import SvgSortIcon from '../../../../../../../assets/svgIcon/SvgSortIcon';
import SvgEye from '../../../../../../../assets/svgIcon/SvgEye';
import { examResultData } from './mock';
import "./index.scss"
import Sider from '../../../../../components/Sider';
import { useState } from 'preact/hooks';
import CategoryMarkDetails from './categoryMarkDetail';


const ExamResultsView = ({ setOpenPopup, setOpeninnerPopup }) => {
    const [viewcategoryResults, setViewcategoryResults] = useState(false)

    const HeaderTemplate = ({ field, sortable = true }) => (
        <div className="column__header">
            {field}
            {sortable && <SvgSortIcon />}
        </div>
    );

    const handleResult = (rowData) => (
        <div className={rowData.result === "Pass" ? "pass_color" : "another_color"}>
            {rowData.result}
        </div>
    );

    const footerGroup = (
        <ColumnGroup>
            <Row>
                <Column footer="Totals : " colSpan={1} />
                <Column footer="" colSpan={3} footerStyle={{ textAlign: 'left' }} />
                <Column footer="" colSpan={2} footerStyle={{ textAlign: 'left' }} />
                <Column className={"Pass" === "Pass" ? "pass_color" : "another_color"} footer="" colSpan={2} />

            </Row>
        </ColumnGroup>
    );

    const handleActions = () => {
        return (
            <div onClick={() => handleView()}>
                <SvgEye />
            </div>
        )
    }
    const handleView = () => {
        setViewcategoryResults(true)
    }
    return (
        <div className='studentmarkresult__overall'>
            <div className='studentmark__overall'>
                <Image src="https://i.ibb.co/dt4VcGf/Rectangle-6869.png" alt="Image" width="72" />
                <div>
                    <div className='student__name'></div>
                    <div className='studentmark__roolnumber'>Roll No:</div>
                    <div>Section: A</div>
                </div>
            </div>

            <DataTable
                style={{ marginTop: 20 }}
                value={examResultData}
                removableSort
                scrollHeight="40vh"
                scrollable
                footerColumnGroup={footerGroup}
            >
                <Column
                    field="subjectName"
                    sortable
                    header={<HeaderTemplate field="Subject" />}
                />
                <Column
                    field="maximumTheoryMark"
                    sortable
                    header={<HeaderTemplate field="Maximum" />}
                />
                <Column
                    field="obtainedTheoryMark"
                    sortable
                    header={<HeaderTemplate field="Theory" />}
                />
                <Column
                    field="obtainedPracticalMark"
                    sortable
                    header={<HeaderTemplate field="Practical" />}
                />
                <Column
                    field="totalMarksObtained"
                    sortable
                    header={<HeaderTemplate field="Marks Obtained" />}
                />
                <Column
                    field="grade"
                    sortable
                    header={<HeaderTemplate field="Grade" />}
                />
                <Column
                    sortable
                    header={<HeaderTemplate field="Result" />}
                    body={handleResult}
                />
                <Column
                    body={handleActions}
                    sortable
                    header={<HeaderTemplate field="Action" />}
                />
            </DataTable>
            <Sider
                header={"Category mark details"}
                setVisible={setViewcategoryResults}
                visible={viewcategoryResults}
                position={"top-right"}
            >
                <CategoryMarkDetails />
            </Sider>



        </div>
    );
}

export default ExamResultsView;
