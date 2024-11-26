import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartCard from "../../../../components/ChartCard";
import "./index.scss";
import DropDownField from "../../../../components/DropDownField";
import { useState } from "preact/hooks";
import useStateValue from "../../../../contex/useStateValue";
interface DropDownData {
  label: string;
  value: string;
}
ChartJS.register(ArcElement, Tooltip, Legend);
const ZenixChart = () => {
  const [{ theme }] = useStateValue();
  const [selectData, setSelectData] = useState("Today");
  const day: DropDownData[] = [
    { label: "Today", value: "Today" },
    { label: "Yesterday", value: "Yesterday" },
  ];
  const data = {
    labels: ["Total Appointments", "Available Doctors", "Patients"],
    datasets: [
      {
        label: "7-A",
        data: [88, 12],
        backgroundColor: [theme?.totalColor, "#fff"],
        hoverBackgroundColor: ["#415BE7", "#fff"],
        borderWidth: 6,
        cutout: "50%",
        // borderDash: [0], // Solid line for the first ring
        // circumference: 180, // Arc size (half-circle)
        // rotation: 270, // Start angle to match the image
        // Determines the inner radius, making it a ring
        // borderColor: "red",
      },
      {
        label: "7-B",
        data: [78, 22],
        backgroundColor: [theme?.activeColor, "#fff"],
        hoverBackgroundColor: ["#E56A6C", "#fff"],
        borderWidth: 6,
        cutout: "50%",
      },
      {
        label: "7-B",
        data: [68, 32],
        backgroundColor: [theme?.inactiveColor, "#fff"],
        hoverBackgroundColor: ["#1DBF73", "#fff"],
        borderWidth: 6,
        cutout: "50%",
      },
    ],
    data: ["88%", "78%", "68%"],
  };

  const options: any = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        position: "bottom",
        display: false,
        labels: {
          boxWidth: 0,
        },
      },
    },
    // cutoutPercentage: 60, // Controls the size of the hole in the center
    // circumference: 360, // Full circle
  };
  return (
    <ChartCard>
      <div className="zenix__chart__container mobile__chart__container">
        <div className="title__container">
          <div className="rovy__title">Zenix</div>
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

        <div className="grid chart__main__container">
          <div className="col-12 md:col-6 lg:col-6">
            <div className="chart__caption">
              <div className="caption__control">
                <div className="caption__area">
                  <div className="small__circle vehicle__indicator"></div>
                  <div className="caption__text">Total Appointments</div>
                </div>
                <div className="caption__count appointment__indicator">90</div>
              </div>
              <div className="caption__control">
                <div className="caption__area">
                  <div className="small__circle active__indicator"></div>
                  <div className="caption__text">Available Doctors</div>
                </div>
                <div className="caption__count doctor__indicator">30</div>
              </div>
              <div className="caption__control">
                <div className="caption__area">
                  <div className="small__circle inactive__indicator"></div>
                  <div className="caption__text">Patients</div>
                </div>
                <div className="caption__count patient__indicator">60</div>
              </div>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <div className="chart__area">
              <Pie data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </ChartCard>
  );
};

export default ZenixChart;
