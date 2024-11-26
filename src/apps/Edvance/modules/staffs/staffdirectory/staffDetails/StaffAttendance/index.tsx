import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import './index.scss'; // Ensure styles are correctly set up here
import { mockAttendanceData } from './mock.data';

// Legends data type definition
interface Legend {
  id: string;
  name: string;
  key: string;
  color: string;
}

// Attendance data type definition
interface AttendanceDay {
  day: number;
  status: 'Present' | 'Absent' | 'Half Day' | 'Holiday';
}

// Legends data
const legendsdata: Legend[] = [
  { id: "1", name: "Total present(P)", key: "PRESENT", color: "#31AD76" },
  // { id: "2", name: "Total Late(L)", key: "LATE", color: "#F1A245" },
  { id: "3", name: "Total Absent(A)", key: "ABSENT", color: "#E56A6C" },
  // { id: "4", name: "Total Half Day(F)", key: "HALFDAY", color: "#2ACCCB" },
  { id: "5", name: "Total Holiday(H)", key: "HOLIDAY", color: "#65B2FC" },
];

// Status colors and labels for the pie chart
const STATUS_COLORS: Record<string, string> = {
  Present: 'rgb(49, 173, 118)',    // Green
  // Late: 'rgb(241, 162, 69)',       // Orange
  Absent: 'rgb(229, 106, 108)',    // Red
  'Half Day': '#2ACCCB', // Sky Blue
  Holiday: '#65B2FC',   // Blue
};

const STATUS_LABELS: Record<string, string> = {
  Present: 'P',
  // Late: 'L',
  Absent: 'A',
  'Half Day': 'F',
  Holiday: 'H',
};

// Get the number of days in a specific month
const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate(); // month is 0-based
};

// Function to render the pie chart for each day
const renderPieChart = (status: string) => {
  const value = status === "Present" || status === "Absent" || status === "Holiday" ? 100 : 50;
  const data = [
    { name: 'Achieved', value: value },
    { name: 'Remaining', value: 100 - value },
  ];

  const statusColor = STATUS_COLORS[status] || '#f5f5f5'; // Default to gray if status is missing
  const statusLabel = STATUS_LABELS[status] || '';

  return (
    <div className="pie-chart-wrapper" style={{ position: 'relative' }}>
      <PieChart width={60} height={60}>
        <Pie
          data={data}
          innerRadius={0}
          outerRadius={30}
          paddingAngle={0}
          dataKey="value"
        >
          <Cell fill={statusColor} />
          <Cell fill="#f5f5f5" />
        </Pie>
      </PieChart>
      <div
        className="status-label"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '14px',
          fontWeight: 'bold',
        }}
      >
        {statusLabel}
      </div>
    </div>
  );
};

// Main Calendar component
const Calendar: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Get current year dynamically
  const currentMonth = new Date().toLocaleString('default', { month: 'long' }); // Get current month name
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [selectedMonth, setSelectedMonth] = useState<string>(currentMonth); // Default to current month
  const daysInMonth = getDaysInMonth(currentYear, months.indexOf(selectedMonth)); // Get days for selected month
  const firstDayOfWeek = new Date(currentYear, months.indexOf(selectedMonth), 1).getDay(); // Get the first day of the month (0 = Sunday)

  const studentAttendanceData: AttendanceDay[] = mockAttendanceData[selectedMonth] || []; // Access data for the selected month

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value); // Update selected month
  };

  // Render the calendar days based on the selected month
  const renderDays = () => {
    const calendarDays: JSX.Element[] = [];

    // Push empty cells for days before the first of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Render each day with pie chart and status
    for (let i = 1; i <= daysInMonth; i++) {
      const dayData = studentAttendanceData.find(day => day.day === i);
      const status = dayData ? dayData.status : 'Holiday'; // Default status if no data

      calendarDays.push(
        <div key={i} className="calendar-day">
          <div className="day-number">{i}</div>
          {renderPieChart(status)}
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div className="overall_calendar_container">
      <div className="w-full gap-6 flex align-items-center mt-3">
        <div className="legends__layout">
          {legendsdata.map((legend) => (
            <div className="flex" key={legend.id}>
              <span
                className="legend__indicator"
                style={{ backgroundColor: legend.color }}
              ></span>
              <div className="flex flex-column gap-29">
                <span style={{ color: legend.color }} className="legend__name">
                  {legend.name}
                </span>
                {/* Replace with real data once integrated */}
                <span>-</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Month Selector */}
      <div className="month-selector">
        <select value={selectedMonth} onChange={handleMonthChange} className="month-selector-selectdate">
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
    </div>
  );
};

export default Calendar;
