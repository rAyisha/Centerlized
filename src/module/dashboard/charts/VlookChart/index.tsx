import "./index.scss";
import ChartCard from "../../../../components/ChartCard";
import { MeterGroup } from "primereact/metergroup";
import DropDownField from "../../../../components/DropDownField";
import { useState } from "preact/hooks";
import "../../../../utility/them.scss";
import useStateValue from "../../../../contex/useStateValue";
interface DropDownData {
  label: string;
  value: string;
}

const VlookChart = () => {
  const [{ theme }] = useStateValue();
  const [selectData, setSelectData] = useState("Today");
  const day: DropDownData[] = [
    { label: "Today", value: "Today" },
    { label: "Yesterday", value: "Yesterday" },
  ];
  const ChartData = {
    Today: [
      { label: "Absent", color: theme?.inactiveColor, value: 20 },
      { label: "Present", color: theme?.activeColor, value: 70 },
      { label: "Total Employees", color: theme?.overallColor, value: 10 },
    ],
    Yesterday: [
      { label: "Absent", color: theme?.inactiveColor, value: 10 },
      { label: "Present", color: theme?.activeColor, value: 60 },
      { label: "Total Employees", color: theme?.overallColor, value: 30 },
    ],
  };

  return (
    <ChartCard>
      <div className="vlook__chart__container mobile__chart__container">
        <div className="title__container">
          <div className="rovy__title">VLook</div>
          <div className="dropdown__card">
            <DropDownField
              label=""
              value={selectData}
              onChange={(e) => setSelectData(e.value)}
              options={Array.isArray(day) ? day : []}
              placeholder="Select"
            />
          </div>
        </div>

        <div className="chart__caption">
          <div className="caption__area">
            <div className="small__circle total__indicator"></div>
            <div className="caption__text">Total Employees</div>
          </div>
          <div className="caption__area">
            <div className="small__circle present__indicator"></div>
            <div className="caption__text">Present</div>
          </div>
          <div className="caption__area">
            <div className="small__circle absent__indicator"></div>
            <div className="caption__text">Absent</div>
          </div>
        </div>
        <div className="chart__area">
          {Object.keys(ChartData).length != 0 &&
            Object.keys(ChartData).map((item: any) => (
              <div>
                <div className="bar__title">{item}</div>
                <MeterGroup values={ChartData[item]} max="100" />
              </div>
            ))}
        </div>
      </div>
    </ChartCard>
  );
};

export default VlookChart;
