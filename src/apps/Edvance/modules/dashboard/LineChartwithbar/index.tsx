import './index.scss'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const PerformanceChart = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const lineData = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9];
  
  const data:any = {
    labels: labels,
    datasets: [
      {
        type: 'line',
        label: '',
        data: lineData,
        backgroundColor: "#FFFFFF",
        borderColor: "#5654D4",
        borderWidth: 2,
        pointRadius: (context:any) => context.dataIndex === 10 ? 6 : 0, 
        pointBackgroundColor: "#ffff",
        pointBorderColor: "#5654D4",
        pointBorderWidth: 2,
      },
      {
        type: 'bar',
        label: '',
        data: labels.map((_, index) => index === 10 ? 9 : 0), 
        backgroundColor: " #E6E6F8",
        borderWidth: 0,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: false,
        beginAtZero: false,
      },
    },
  };

  return (
    <div className='linechart__with__barchart__container'>
      <div className="linechart__with__barchart__container__inner__layout mb-4">
        <div className='title'>Academic Performance</div>
        <h2>47%+</h2>
        <p>Performance per month <span style={{ color: 'green' }}>↑12%</span> vs last month</p>
      </div>
      <div className='linechart__with__barchart__layout'>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default PerformanceChart;
