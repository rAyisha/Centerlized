import { useState, useEffect } from 'preact/hooks';
import { DataTableStateEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Checkbox } from 'primereact/checkbox';
import SvgSortIcon from '../../../../../../assets/svgIcon/SvgSortIcon';
import EmptyTableIcon from '../../../../components/EmptyTableIcon';
import { mockstudentlistData } from '../mock';
import Button from '../../../../../../components/Button';
import "./index.scss"
import { AppDispatch } from '../../../../../../redux/store';
import { useDispatch } from 'react-redux';
import DataTable from '../../../../../../components/DataTable';

interface Student {
    id: number;
    rollNumber: string;
    studentName: string;
}

const StudentFillAttendenceList = () => {
    const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
    const [checkedState, setCheckedState] = useState<Record<number, boolean>>({});
    const [rows, setRows] = useState<number>(5);
    const [page, setPage] = useState<number>(0);
    const dispatch = useDispatch<AppDispatch>();
    // Set default checked state for all students
    useEffect(() => {
        const initialCheckedState: Record<number, boolean> = {};
        mockstudentlistData.forEach((student: Student) => {
            initialCheckedState[student.id] = true; // Set default checked to true
            setSelectedStudents((prev) => [...prev, student]); // Add to selected students
        });
        setCheckedState(initialCheckedState);
    }, []);

    const HeaderTemplate = ({ field }: { field: string }) => (
        <div className="column__header">
            {field}
            <SvgSortIcon />
        </div>
    );

    const onSelectionChange = (e: { value: Student[] }) => {
        console.log('Selected students:', e.value);
    };

    const CheckboxTemplate = (rowData: Student) => {
        const isChecked = checkedState[rowData.id] || false; // Check if the current row is checked

        const handleCheckboxChange = (e: { checked: boolean }) => {
            setCheckedState((prevState) => ({
                ...prevState,
                [rowData.id]: e.checked,
            }));

            if (e.checked) {
                setSelectedStudents((prev) => [...prev, rowData]); // Add to selected if checked
            } else {
                setSelectedStudents((prev) => prev.filter((student) => student.id !== rowData.id)); // Remove if unchecked
            }
        };

        return (
            <div className="flex justify-content-center">
                <Checkbox
                    inputId={`cb-${rowData.id}`}
                    onChange={handleCheckboxChange}
                    checked={isChecked}
                />
            </div>
        );
    };
    const columns = [
        {
           field: "rollNumber",
          header: "Roll No",
        },
        {
          field: "studentName",
          header: "Student Name",
        },
       
        {
          header: "Mark Attendance",
          body: CheckboxTemplate,
        },
      ];
      const onPage = (e: DataTableStateEvent) => {
        dispatch(setRows(e.rows));
        dispatch(setPage(e.page));
      };
    return (
        <div className="myclass__form__container">
            <div className="grid align-items-center">
                <div className="col-12 md:col-6 lg:col-12 grid align-items-center">
                    <span className="col-12 md:col-2 lg:col-2 header">Class</span>
                    <span>: 1st</span>
                </div>
                <div className="col-12 md:col-6 lg:col-12 grid align-items-center">
                    <span className="col-12 md:col-2 lg:col-2 header">Section</span>
                    <span>: B</span>
                </div>
            </div>

            {/* DataTable */}
            <div className="table__layout">
               
                <DataTable
        value={mockstudentlistData}
        columns={columns}
        paginator
        first={page * rows}
        rows={rows}
        totalRecords={mockstudentlistData.length}
        onPage={onPage}
        lazy={false}
      />


            </div>

            <div className="button_view flex justify-content-end mt-5">
                <Button label="Submit" />
            </div>
        </div>
    );
};

export default StudentFillAttendenceList;
