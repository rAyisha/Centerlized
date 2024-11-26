export const legendsdata = [
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

export const statusColor = (key:string) => {
  return key === "P"
    ? "#31AD76"
    : key === "A"
    ? "#E56A6C"
    : key === "L"
    ? "#F1A245"
    : key === "F"
    ? "#2ACCCB"
    : key === "H"
    ? "#65B2FC"
    : "#263446";
};

export const mockAttendanceData = {
  January: [
    { day: 1, value: 8, goal: 8, status: "Present" },
    // { day: 2, value: 3, goal: 8, status: "Late" },
    { day: 3, value: 8, goal: 8, status: "Absent" },
    // { day: 4, value: 5, goal: 8, status: "Half Day" },
    { day: 5, value: 8, goal: 8, status: "Holiday" },
    // Continue for all days...
  ],
  February: [
    { day: 1, value: 7, goal: 8, status: "Present" },
    // { day: 2, value: 6, goal: 8, status: "Late" },
    { day: 3, value: 8, goal: 8, status: "Absent" },
    // { day: 4, value: 4, goal: 8, status: "Half Day" },
    { day: 5, value: 8, goal: 8, status: "Holiday" },
    // Continue for all days...
  ],
  March: [
    { day: 1, value: 8, goal: 8, status: "Present" },
    { day: 2, value: 8, goal: 8, status: "Absent" },
    // { day: 3, value: 6, goal: 8, status: "Late" },
    { day: 4, value: 8, goal: 8, status: "Holiday" },
    { day: 5, value: 4, goal: 8, status: "Half Day" },
    // Continue for all days...
  ],
  September: [
    { day: 1, value: 8, goal: 8, status: "Present" },
    // { day: 2, value: 4, goal: 8, status: "Half Day" },
    { day: 3, value: 8, goal: 8, status: "Absent" },
    { day: 4, value: 8, goal: 8, status: "Holiday" },
    { day: 5, value: 8, goal: 8, status: "Present" },
    // { day: 6, value: 6, goal: 8, status: "Late" },
    { day: 7, value: 8, goal: 8, status: "Present" },
    { day: 8, value: 8, goal: 8, status: "Absent" },
    // Continue for all days...
  ],
  // Add more months as necessary...
};


