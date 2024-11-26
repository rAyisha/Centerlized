import { useState } from "preact/hooks";
import './index.scss';
import { mockAttendanceSelectData } from "../mock";
import { ChangeEvent } from "preact/compat";
import Sider from "../../../../components/Sider";
import StudentFillAttendenceList from "../AttendanceForm";

interface LegendData {
    id: string;
    name: string;
    key: string;
    color: string;
}

const legendsdata: LegendData[] = [
    { id: "1", name: "Total present(P)", key: "PRESENT", color: "#31AD76" },
    { id: "3", name: "Total Absent(A)", key: "ABSENT", color: "#E56A6C" },
    { id: "5", name: "Total Holiday(H)", key: "HOLIDAY", color: "#65B2FC" },
];

interface StudentAttendance {
    day: number;
    status: string;
}

interface FormValues {
    classValue: string;
    sectionValue: string;
    searchData: string;
}

const MyClass = () => {
    const currentYear = new Date().getFullYear();
    const currentMonthIndex = new Date().getMonth();
    const currentDate = new Date().getDate();
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const [openSidePopup, setOpenSidePopup] = useState<boolean>(false);
    const [selectedMonth, setSelectedMonth] = useState<string>(months[currentMonthIndex]);
    const daysInMonth = new Date(currentYear, months.indexOf(selectedMonth) + 1, 0).getDate();
    const firstDayOfWeek = new Date(currentYear, months.indexOf(selectedMonth), 1).getDay();
    const studentAttendanceData: StudentAttendance[] = mockAttendanceSelectData[selectedMonth] || [];

    const handleMonthChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(event.currentTarget.value);
    };

    const handleDialog = () => {
        setOpenSidePopup(true);
    };

    const renderDays = () => {
        const calendarDays = [];

        for (let i = 0; i < firstDayOfWeek; i++) {
            calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dayData = studentAttendanceData.find((day) => day.day === i);
            const status = dayData ? dayData.status : 'Holiday';
            const isFutureDay = new Date(currentYear, months.indexOf(selectedMonth), i) > new Date();
            const isSunday = new Date(currentYear, months.indexOf(selectedMonth), i).getDay() === 0;

            calendarDays.push(
                <div
                    key={i}
                    className={`calendar-day ${isFutureDay ? 'future-day' : ''} ${isSunday ? 'sunday' : ''}`}
                    onClick={() => !isFutureDay && !isSunday && handleDialog()}
                    style={isSunday ? { backgroundColor: '#f5f5f5' } : {}}
                >
                    <div className="day-number">
                        {isFutureDay ? (
                            <span className="disabled">{i}</span>
                        ) : (
                            <span>{i}</span>
                        )}
                    </div>
                </div>
            );
        }

        return calendarDays;
    };

    return (
        <div className="overall_calendar_container">

            {/* Month Selector */}
            <div className="month-selector mt-3">
                <select
                    value={selectedMonth}
                    onChange={handleMonthChange}
                    className="month-selector-selectdate"
                >
                    {months.map((month) => (
                        <option key={month} value={month}>
                            {month}
                        </option>
                    ))}
                </select>
            </div>

            {/* Calendar */}
            <div className="overall_calendar mt-4">
                <div className="calendar-header">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div className="calendar-grid">{renderDays()}</div>
            </div>

            {/* Dialog */}
            <Sider
                header="Students List"
                setVisible={setOpenSidePopup}
                visible={openSidePopup}
            >
                <StudentFillAttendenceList />
            </Sider>
        </div>
    );
};

export default MyClass;
