import React from "react";
import { convertTo12HourFormat } from "./utils";

interface PeriodRowProps {
  dayData: {
    isBreak: boolean;
    breakName?: string;
    subjectName?: string;
    staffName?: string;
    roomNo?: string;
    startTime?: string;
    endTime?: string;
  };
}

const PeriodRow: React.FC<PeriodRowProps> = ({ dayData }) => {
  const backgroundColor = dayData.isBreak
    ? dayData.breakName === "Lunch"
      ? "gray"
      : "lightgray"
    : "transparent";

  return (
    <td style={{ backgroundColor }}>
      {dayData.isBreak ? (
        <div>{dayData.breakName || "Break"}</div>
      ) : (
        <>
          <div>{dayData?.subjectName}</div>
          <div>({dayData?.staffName})</div>
          <div>Room {dayData?.roomNo}</div>
        </>
      )}
    </td>
  );
};

export default PeriodRow;
