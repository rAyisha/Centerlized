// Define types for Legends
export type Legend = {
  id: string;
  name: string;
  key: string;
  color: string;
};

// Define types for Attendance Data
export type AttendanceData = {
  day: number;
  Jan: string;
  Feb: string;
  Mar: string;
  Apr: string;
  May: string;
  Jun: string;
  Jul: string;
  Aug: string;
  Sep: string;
  Oct: string;
  Nov: string;
  Dec: string;
};

// Define types for Log Table Data
export type LogTableData = {
  id: string;
  Payslip: string;
  MonthYear: string;
  Date: string;
  Mode: string;
  Status: string;
  NetSalary: string;
  Action: string;
};

// Define types for Mock Attendance Data
export type MockAttendanceData = {
  day: number;
  value: number;
  goal: number;
  status: string;
};

// Legends data
export const legends: Legend[] = [
  { id: "1", name: "Total present(P)", key: "P", color: "#31AD76" },
  { id: "2", name: "Total Late(L)", key: "L", color: "#F1A245" },
  { id: "3", name: "Total Absent(A)", key: "A", color: "#E56A6C" },
  { id: "4", name: "Total Half Day(F)", key: "F", color: "#2ACCCB" },
  { id: "5", name: "Total Holiday(H)", key: "H", color: "#65B2FC" },
];

// Status color based on key
export const statusColor = (key: string): string => {
  switch (key) {
    case "P":
      return "#31AD76";
    case "A":
      return "#E56A6C";
    case "L":
      return "#F1A245";
    case "F":
      return "#2ACCCB";
    case "H":
      return "#65B2FC";
    default:
      return "#263446";
  }
};

// Attendance data
export const attendanceData: AttendanceData[] = [
  { day: 1, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 2, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 3, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 4, Jan: "A", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  // Add more rows as needed...
];

// Log table data
export const logtableData: LogTableData[] = [
  { id: "1", Payslip: "9000", MonthYear: "Joe Black", Date: "Super Admin", Mode: "Cash", Status: "Paid", NetSalary: "45,000.00", Action: "View Payslip" },
  { id: "2", Payslip: "9000", MonthYear: "Joe Black", Date: "Super Admin", Mode: "", Status: "Generated", NetSalary: "45,000.00", Action: "" },
];

// Mock Attendance data
export const mockAttendanceData: { [key: string]: MockAttendanceData[] } = {
  January: [
    { day: 1, value: 8, goal: 8, status: "Present" },
    { day: 2, value: 3, goal: 8, status: "Late" },
    { day: 3, value: 8, goal: 8, status: "Absent" },
    { day: 4, value: 5, goal: 8, status: "Half Day" },
    { day: 5, value: 8, goal: 8, status: "Holiday" },
    // Continue for all days...
  ],
  February: [
    { day: 1, value: 7, goal: 8, status: "Present" },
    { day: 2, value: 6, goal: 8, status: "Late" },
    { day: 3, value: 8, goal: 8, status: "Absent" },
    { day: 4, value: 4, goal: 8, status: "Half Day" },
    { day: 5, value: 8, goal: 8, status: "Holiday" },
    // Continue for all days...
  ],
  // Add more months as necessary...
};
