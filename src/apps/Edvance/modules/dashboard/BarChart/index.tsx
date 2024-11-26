import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import 'chart.js/auto';
import './index.scss'
import { Dropdown } from 'primereact/dropdown';
// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';

const Barchart = () => {
    const [selectedClass, setSelectedClass] = useState('2019-24');
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    const classes = [
        { label: '2015-19', value: '2015-19' },
        { label: '2019-24', value: '2019-24' },
    ]

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');

        const data = {
            labels:['2019-20', '2021-21', '2021-22', '2021-23'],
            datasets: [
                {
                    label: 'Fees Awaiting Payment',
                    backgroundColor: "#415BE7",
                    borderColor: "#415BE7",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderRadius: 5,
                },
                {
                    label: 'staff Present Today',
                    backgroundColor:"#A5B4F3",
                    borderColor: "#A5B4F3",
                    data: [28, 48, 40, 19, 86, 27, 90],
                    borderRadius: 5,
                },
                {
                    label: 'Student Present Today',
                    backgroundColor:"#415BE7",
                    borderColor: "#415BE7",
                    data: [35, 40, 60, 47, 88, 27, 65],
                    borderRadius: 5,
                }
            ]
        };

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    display: false,
                  },
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);
    return (
        <div className="bar-plan-chart">
            <div className="chart-header">
                <div className='title'>New Students by Academic Year</div>
                <Dropdown
                    value={selectedClass}
                    options={classes}
                    onChange={(e) => setSelectedClass(e.value)}
                    placeholder="Select a Class"
                />
            </div>
            <div className="chart-content">
            <Chart type="bar" data={chartData} options={chartOptions} />
            </div>
        </div>
    )
}

export default Barchart