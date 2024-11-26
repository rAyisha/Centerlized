import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import './index.scss'; 
import { mockAttendanceData } from './mock';

interface LegendData {
  id: string;
  name: string;
  key: string;
  color: string;
}

interface StatusColors {
  Present: string;
  Absent: string;
  Holiday: string;
}

interface StatusLabels {
  Present: string;
  Absent: string;
  Holiday: string;
}

interface DayData {
  day: number;
  status: keyof StatusColors; 
}

const legendsdata: LegendData[] = [
  { id: "1", name: "Total present(P)", key: "PRESENT", color: "#31AD76" },
  { id: "3", name: "Total Absent(A)", key: "ABSENT", color: "#E56A6C" },
  { id: "5", name: "Total Holiday(H)", key: "HOLIDAY", color: "var(--base-theme-color)" },
];

const STATUS_COLORS: StatusColors = {
  Present: 'rgb(49, 173, 118)',    
  Absent: 'rgb(229, 106, 108)',    
  Holiday: 'var(--base-theme-color)',   
};

const STATUS_LABELS: StatusLabels = {
  Present: 'P',
  Absent: 'A',
  Holiday: 'H',
};


const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate(); 
};


const renderPieChart = (status: keyof StatusColors) => {
  const value = status === "Present" || status === "Absent" || status === "Holiday" ? 100 : 50;
  const data = [
    { name: 'Achieved', value: value },
    { name: 'Remaining', value: 100 - value },
  ];

  const statusColor = STATUS_COLORS[status] || '#f5f5f5'; 
  const statusLabel = STATUS_LABELS[status] || '';

  return (
    <div className="pie-chart-wrapper mt-4" style={{ position: 'relative' }}>
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


const AttendenceCalendar: React.FC = () => {
  const currentYear = new Date().getFullYear(); 
  const currentMonth = new Date().toLocaleString('default', { month: 'long' }); 
  const months: string[] = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [selectedMonth, setSelectedMonth] = useState<string>(currentMonth); 
  const daysInMonth: number = getDaysInMonth(currentYear, months.indexOf(selectedMonth)); 
  const firstDayOfWeek: number = new Date(currentYear, months.indexOf(selectedMonth), 1).getDay(); 

  const studentAttendanceData: DayData[] = mockAttendanceData[selectedMonth] || []; 

  const handleMonthChange = (event:any) => {
    setSelectedMonth(event.target.value); 
  };

  
  const renderDays = () => {
    const calendarDays: JSX.Element[] = [];

    
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    
    for (let i = 1; i <= daysInMonth; i++) {
      const dayData = studentAttendanceData.find(day => day.day === i);
      const status = dayData ? dayData.status : 'Holiday'; 

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

export default AttendenceCalendar;
