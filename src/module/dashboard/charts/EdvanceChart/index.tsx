import { useEffect, useState } from "preact/hooks";
import ChartCard from "../../../../components/ChartCard";
import { Chart } from "primereact/chart";
import "./index.scss";
import { Carousel } from "primereact/carousel";
import DropDownField from "../../../../components/DropDownField";
import useStateValue from "../../../../contex/useStateValue";
import SvgChartPrevIcon from "../../../../assets/svgIcon/SvgChartPrevIcon";
import SvgChartNextIcon from "../../../../assets/svgIcon/SvgChartNextIcon";
interface Month {
  label: string;
  value: string;
}
const EdvanceChart = () => {
  const currentMonth = new Date();
  const [{ theme }] = useStateValue();
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [selectMonth, setSelectMonth] = useState(
    currentMonth.toLocaleString("default", { month: "long" })
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMobilePage, setCurrentMobilePage] = useState(1);
  const isMobile = window.innerWidth <= 768;
  const months: Month[] = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ];
  // Full data for all pages
  const fullData = [
    50, 75, 100, 90, 85, 0, 0, 120, 70, 80, 95, 65, 0, 0, 100, 50, 75, 100, 90,
    0, 0, 70, 30, 80, 75, 55, 0, 0, 60, 100,
  ];
  const fullCount = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ];
  const getSliceRange = (
    isMobile: any,
    currentPage: any,
    currentMobilePage: any
  ) => {
    if (isMobile) {
      const start = (currentMobilePage - 1) * 5;
      const end = start + 5;
      return [start, end];
    } else {
      const start = (currentPage - 1) * 15;
      const end = start + 15;
      return [start, end];
    }
  };

  const [start, end] = getSliceRange(isMobile, currentPage, currentMobilePage);
  const labels = fullCount?.slice(start, end);
  const dataSet = fullData?.slice(start, end);

  const handleChartUpdate = () => {
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Data",
          data: dataSet,
          backgroundColor: (context: any) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;

            if (!chartArea) {
              // Skip rendering until chartArea is available
              return null;
            }

            const gradient = ctx.createLinearGradient(
              0,
              chartArea.top,
              0,
              chartArea.bottom
            );
            gradient.addColorStop(0, theme?.barTopColor); // (top)
            gradient.addColorStop(1, theme?.barBottomColor); // Transparent white (bottom)

            return gradient;
          },
          borderColor: theme?.barBaseColor,
          borderWidth: { top: 2 },
          barPercentage: 1,
          categoryPercentage: 1,
          borderRadius: 0,
          //   barPercentage: 0.9, // Decrease value to increase the bar width and reduce gaps
          //   categoryPercentage: 0.8, // Decrease value to reduce the space between categories
          //   borderDash: [5, 5], // Dashed border
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            // stepSize: 0,
            font: {
              size: 16,
              color: "#636363",
            },
          },
          border: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            // stepSize: 0,
            display: false,
          },
          border: {
            display: false,
          },
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
        },
      },
      elements: {
        bar: {
          borderRadius: 5, // Rounded corners for the bars
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  };
  useEffect(() => {
    handleChartUpdate();
  }, [selectMonth, currentPage, currentMobilePage]);
  useEffect(() => {
    handleChartUpdate();
  }, [theme?.name]);

  const ChartTemplate = () => {
    return (
      <div className="grid">
        <div className="col-12">
          <div className="chart__control">
            <Chart type="bar" data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <ChartCard>
      <div className="edvance__chart__container mobile__chart__container">
        <div className="title__container">
          <div className="edvance__title">Edvance</div>
          <div className="dropdown__card">
            <DropDownField
              label=""
              value={selectMonth}
              onChange={(e) => setSelectMonth(e.value)}
              options={Array.isArray(months) ? months : []}
              placeholder="Select"
            />
          </div>
        </div>

        <div>
          <div className="chart__caption">
            <div className="count__caption">
              <div className="count__text">3,253</div>
              <div className="count__caption__text">Present today</div>
            </div>
            <div className="percentage__caption">
              <div className="percentage__count">&#8593; 12%</div>
              <div className="percentage__caption_text">vs last month</div>
            </div>
          </div>
          <div className="chart__area">
            <Carousel
              value={Array(isMobile ? 6 : 2).fill(null)}
              numVisible={1}
              numScroll={1}
              className="custom__chart__carousel"
              itemTemplate={ChartTemplate}
              prevIcon={
                <div
                  className="flex"
                  onClick={() =>
                    isMobile
                      ? setCurrentMobilePage(currentMobilePage - 1)
                      : setCurrentPage(currentPage - 1)
                  }
                >
                  <SvgChartPrevIcon />
                </div>
              }
              nextIcon={
                <div
                  className="flex"
                  onClick={() =>
                    isMobile
                      ? setCurrentMobilePage(currentMobilePage + 1)
                      : setCurrentPage(currentPage + 1)
                  }
                >
                  <SvgChartNextIcon />
                </div>
              }
            />
          </div>
          <div className="chart__reference__main">Student Attendance</div>
        </div>
      </div>
    </ChartCard>
  );
};

export default EdvanceChart;
