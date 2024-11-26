import React from 'react';

type Legend = {
  id: string;
  name: string;
  key: string;
  color: string;
};

type PayrollData = {
  id: number;
  lable: string;
  value: string;
};

type LogTableData = {
  id: string;
  Payslip: string;
  MonthYear: string;
  Date: string;
  Mode: string;
  Status: string;
  NetSalary: string;
  Action: string;
};

type AttendanceData = {
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

// Legends data
export const legends: Legend[] = [
  {
    id: "1",
    name: "Total present(P)",
    key: "PRESENT",
    color: "#31AD76",
  },
  {
    id: "2",
    name: "Total Late(L)",
    key: "LATE",
    color: "#F1A245",
  },
  {
    id: "3",
    name: "Total Absent(A)",
    key: "ABSENT",
    color: "#E56A6C",
  },
  {
    id: "4",
    name: "Total Half Day(F)",
    key: "HALFDAY",
    color: "#2ACCCB",
  },
  {
    id: "5",
    name: "Total Holiday(H)",
    key: "HOLIDAY",
    color: "#65B2FC",
  },
];

// Payroll data
export const payrolldata: PayrollData[] = [
  {
    id: 1,
    lable: 'Total Net Salary Paid',
    value: '4,49,480.00'
  },
  {
    id: 2,
    lable: 'Total Gross Salary',
    value: '4,49,480.00'
  },
  {
    id: 3,
    lable: 'Total Earning',
    value: '4,49,480.00'
  },
  {
    id: 4,
    lable: 'Total Deduction',
    value: '4,49,480.00'
  },
];

// Log table data
export const logtableData: LogTableData[] = [
  {
    id: "1",
    Payslip: "9000",
    MonthYear: "Joe Black",
    Date: "Super Admin",
    Mode: "Cash",
    Status: "Paid",
    NetSalary: "45,000.00",
    Action: "View Payslip"
  },
  {
    id: "1",
    Payslip: "9000",
    MonthYear: "Joe Black",
    Date: "Super Admin",
    Mode: "",
    Status: "Generated",
    NetSalary: "45,000.00",
    Action: ""
  }
];

// Function to get the color based on the attendance key
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
  { day: 5, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 6, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 7, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 8, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 9, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 10, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 11, Jan: "L", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 12, Jan: "H", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 13, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 14, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 15, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 16, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 17, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 18, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 19, Jan: "F", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 20, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 21, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 22, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 23, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 24, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 25, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 26, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 27, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 28, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 29, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 30, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
  { day: 31, Jan: "P", Feb: "-", Mar: "-", Apr: "-", May: "-", Jun: "-", Jul: "-", Aug: "-", Sep: "-", Oct: "-", Nov: "-", Dec: "-" },
];
