// staffLeaves.ts
interface StaffLeave {
  id: string;
  leaveType: string;
  leaveDate: string;
  days: string;
  applyDate: string;
  status: "Approved" | "Pending" | "Disapproved"; // Limiting the status to the possible values
}

export const staffLeaves: StaffLeave[] = [
  {
    id: "1",
    leaveType: "Sick Leave",
    leaveDate: "2024/02/15-2024/02/18",
    days: "4",
    applyDate: "2024-01-25",
    status: "Approved"
  },
  {
    id: "2",
    leaveType: "Earned Leave",
    leaveDate: "2024/07/12-2024/07/15",
    days: "4",
    applyDate: "2024-06-30",
    status: "Pending"
  },
  {
    id: "3",
    leaveType: "Compensatory Leave",
    leaveDate: "2024/09/01-2024/09/04",
    days: "4",
    applyDate: "2024-08-15",
    status: "Disapproved"
  },
  {
    id: "4",
    leaveType: "Casual Leave",
    leaveDate: "2024/03/21-2024/03/24",
    days: "4",
    applyDate: "2024-03-10",
    status: "Approved"
  },
  {
    id: "5",
    leaveType: "Maternity Leave",
    leaveDate: "2024/04/05-2024/04/12",
    days: "8",
    applyDate: "2024-03-20",
    status: "Approved"
  },
  {
    id: "6",
    leaveType: "Paternity Leave",
    leaveDate: "2024/08/15-2024/08/17",
    days: "3",
    applyDate: "2024-07-25",
    status: "Pending"
  },
  {
    id: "7",
    leaveType: "Special Leave",
    leaveDate: "2024/11/01-2024/11/03",
    days: "3",
    applyDate: "2024-10-15",
    status: "Approved"
  },
  {
    id: "8",
    leaveType: "Study Leave",
    leaveDate: "2024/05/10-2024/05/20",
    days: "11",
    applyDate: "2024-04-25",
    status: "Pending"
  },
  {
    id: "9",
    leaveType: "Earned Leave",
    leaveDate: "2024/06/25-2024/06/30",
    days: "6",
    applyDate: "2024-06-10",
    status: "Disapproved"
  },
  {
    id: "10",
    leaveType: "Casual Leave",
    leaveDate: "2024/12/01-2024/12/05",
    days: "5",
    applyDate: "2024-11-20",
    status: "Approved"
  }
];

interface LeaveData {
  id: number;
  name: string;
  value: number; // Changed from "Value" to "value" to match common camelCase naming conventions
}

export const leavesdata: LeaveData[] = [
  {
    id: 1,
    name: "Medical Leave",
    value: 20
  },
  {
    id: 2,
    name: "Casual Leave",
    value: 20
  },
  {
    id: 3,
    name: "Maternity Leave",
    value: 20
  }
];

export const statusColor: Record<string, string> = {
  Approved: "#31AD76",
  Pending: "#F1A245",
  Disapproved: "#E56A6C",
};
