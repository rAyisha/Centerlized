import { DataTable } from 'primereact/datatable';
import React, { useState, useEffect } from 'react';
import { Column } from 'primereact/column';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { mockstudentlistData } from '../mock';
import SvgSortIcon from '../../../../../../../assets/svgIcon/SvgSortIcon';

const StudentAssignList = () => {
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [checkedState, setCheckedState] = useState({});


    useEffect(() => {
        const initialCheckedState = {};
        mockstudentlistData.forEach(student => {
            initialCheckedState[student.id] = true;
            setSelectedStudents(prev => [...prev, student]);
        });
        setCheckedState(initialCheckedState);
    }, []);

    const HeaderTemplate = ({ field }) => (
        <div className="column__header">
            {field}
            <SvgSortIcon />
        </div>
    );

    const onSelectionChange = (e) => {
        console.log("Selected students:", e.value);
    };

    const CheckboxTemplate = (rowData) => {
        const isChecked = checkedState[rowData.id] || false;

        const handleCheckboxChange = (e) => {
            setCheckedState((prevState) => ({
                ...prevState,
                [rowData.id]: e.checked,
            }));

            if (e.checked) {
                setSelectedStudents((prev) => [...prev, rowData]);
            } else {
                setSelectedStudents((prev) => prev.filter((student) => student.id !== rowData.id));
            }
        };

        return (
            <div className='flex justify-content-center'>
                <Checkbox
                    inputId={`cb-${rowData.id}`}
                    onChange={handleCheckboxChange}
                    checked={isChecked}
                />
            </div>
        );
    };

    return (
        <div className='overall_studentlist'>

            <div className="table__layout">
                <DataTable
                    value={mockstudentlistData}
                    removableSort
                    selection={selectedStudents}
                    onSelectionChange={onSelectionChange}
                >
                    <Column
                        field="rollNumber"
                        sortable
                        header={<HeaderTemplate field="Roll No" />}
                    />
                    <Column
                        field="studentName"
                        sortable
                        header={<HeaderTemplate field="Student Name" />}
                    />
                    <Column
                        body={CheckboxTemplate}
                        header={<HeaderTemplate field="Mark Attendance" />}
                    />
                </DataTable>
            </div>
            <div className='button_view'>
                <Button
                    label="Submit"
                    type="button"
                />
            </div>
        </div>
    );
};

export default StudentAssignList;
