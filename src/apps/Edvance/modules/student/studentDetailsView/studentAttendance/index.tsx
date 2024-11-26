import { useState } from 'preact/hooks';
import { PieChart, Pie, Cell } from 'recharts';
import './index.scss';
import { mockAttendanceData } from './mock';

type MonthType = keyof typeof mockAttendanceData;
type StatusLabelType = keyof typeof STATUS_LABELS;

const legendsdata = [
  { id: "1", name: "Total present(P)", key: "PRESENT", color: "#31AD76" },
  // { id: "2", name: "Total Late(L)", key: "LATE", color: "#F1A245" },
  { id: "3", name: "Total Absent(A)", key: "ABSENT", color: "#E56A6C" },
  // { id: "4", name: "Total Half Day(F)", key: "HALFDAY", color: "#2ACCCB" },
  { id: "5", name: "Total Holiday(H)", key: "HOLIDAY", color: "#65B2FC" },
];

const STATUS_COLORS = {
  Present: 'rgb(49, 173, 118)', 
  // Late: 'rgb(241, 162, 69)',
  Absent: 'rgb(229, 106, 108)',
  'Half Day': '#2ACCCB',
  Holiday: '#65B2FC',
};

const STATUS_LABELS = {
  Present: 'P',
  // Late: 'L',
  Absent: 'A',
  'Half Day': 'F',
  Holiday: 'H',
};

const getDaysInMonth = (year:number, month:number) => {
  return new Date(year, month + 1, 0).getDate();
};

const renderPieChart = (status:StatusLabelType) => {
  const value = status === "Present" || status === "Absent" || status === "Holiday" ? 100 : 50;
  const data = [
    { name: 'Achieved', value: value },
    { name: 'Remaining', value: 100 - value },
  ];

  const statusColor = STATUS_COLORS[status] || '#f5f5f5';
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

const StudentAttendance = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString('default', { month: 'long' }) as MonthType
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [selectedMonth, setSelectedMonth] = useState<MonthType>(currentMonth);
  const daysInMonth = getDaysInMonth(currentYear, months.indexOf(selectedMonth));
  const firstDayOfWeek = new Date(currentYear, months.indexOf(selectedMonth), 1).getDay();

  const studentAttendanceData = mockAttendanceData[selectedMonth] || []; 

  const handleMonthChange = (event:any) => {
    setSelectedMonth(event.target.value);
  };

  const renderDays = () => {
    const calendarDays = [];

    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayData = studentAttendanceData.find(day => day.day === i);
      const status = dayData ? dayData.status : 'Present';

      calendarDays.push(
        <div key={i} className="calendar-day">
          <div className="day-number">{i}</div>
          {renderPieChart(status as StatusLabelType)}
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
                <span>-</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="month-selector">
        {/* <label>Select Month : </label> */}
        <select value={selectedMonth} onChange={handleMonthChange} className="month-selector-selectdate">
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

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

export default StudentAttendance;
