import React from "react";
import TimetableRow from "./timetableRow";
import "./index.scss"

interface TimetableProps {
  timetableData: any; 
}

const Timetable: React.FC<TimetableProps> = ({ timetableData }) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const maxPeriods = Math.max(
    ...days.map((day) => timetableData[day.toLowerCase()]?.length)
  );

  return (
    <div className="timetable-container">
      <table>
        <thead>
          <tr>
            <th>Period Time</th>
            {days.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxPeriods }).map((_, periodIndex) => (
            <TimetableRow
              key={periodIndex}
              periodIndex={periodIndex}
              timetableData={timetableData}
              days={days}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
