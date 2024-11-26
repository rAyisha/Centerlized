import React from 'react';
import './index.scss'; 

interface LegendData {
  id: string;
  name: string;
  key: string;
  color: string;
}

const legendsdata: LegendData[] = [
  { id: "1", name: "Total present(P)", key: "PRESENT", color: "#31AD76" }, 
  { id: "2", name: "Total Absent(A)", key: "ABSENT", color: "#E56A6C" },   
  { id: "3", name: "Total Holiday(H)", key: "HOLIDAY", color: "#65B2FC" }, 
];


const totals = {
  PRESENT: 0,
  ABSENT: 0,
  HOLIDAY: 0,
};

const AttendenceCount: React.FC = () => {
  return (
    <div className="attendance-summary mt-6">
      {legendsdata.map((legend) => (
        <div key={legend.id} className="legend-item">
          <div className="title">
          <span
            className="legend-circle"
            style={{ backgroundColor: legend.color }}
          />
          <span className="legend-label" style={{color:legend.color}}>{legend.name}</span>
          </div>
          <div className="legend-total">{totals[legend.key as keyof typeof totals]}</div>
        </div>
      ))}
    </div>
  );
};

export default AttendenceCount;
