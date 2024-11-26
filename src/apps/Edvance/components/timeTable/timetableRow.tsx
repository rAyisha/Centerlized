import React from "react";
import PeriodRow from "./periodRow";
import { convertTo12HourFormat } from "./utils";

interface TimetableRowProps {
  periodIndex: number;
  timetableData: any; // Define appropriate type
  days: string[];
}

const TimetableRow: React.FC<TimetableRowProps> = ({
  periodIndex,
  timetableData,
  days,
}) => {
  const isBreak = days.every((day) => {
    const dayLower = day.toLowerCase();
    const dayData = timetableData[dayLower]?.[periodIndex];
    return dayData?.isBreak;
  });

  const breakName =
    timetableData.monday[periodIndex]?.breakName || "Short Break";

  return isBreak ? (
    <tr key={periodIndex}>
      <td>
        {timetableData.monday[periodIndex]?.startTime
          ? `${convertTo12HourFormat(
              timetableData.monday[periodIndex]?.startTime
            )} - ${convertTo12HourFormat(
              timetableData.monday[periodIndex]?.endTime
            )}`
          : "N/A"}
      </td>
      <td colSpan={days.length} className="break-row">
        {breakName}
      </td>
    </tr>
  ) : (
    <tr key={periodIndex}>
      <td>
        {timetableData.monday[periodIndex]?.startTime
          ? `${convertTo12HourFormat(
              timetableData.monday[periodIndex]?.startTime
            )} - ${convertTo12HourFormat(
              timetableData.monday[periodIndex]?.endTime
            )}`
          : "N/A"}
      </td>
      {days.map((day, index) => {
        const dayLower = day.toLowerCase();
        const dayData = timetableData[dayLower]?.[periodIndex];

        return <PeriodRow key={index} dayData={dayData || {}} />;
      })}
    </tr>
  );
};

export default TimetableRow;
