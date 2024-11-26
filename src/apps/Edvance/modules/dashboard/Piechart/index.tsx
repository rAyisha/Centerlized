import React, { useState } from 'react';
import './index.scss';
import { Pie } from 'react-chartjs-2';
import { Dropdown } from 'primereact/dropdown';
// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const LessonPlanChart = () => {
    const [selectedClass, setSelectedClass] = useState('7-A');

    const classes = [
        { label: '7-A', value: '7-A' },
        { label: '7-B', value: '7-B' },
    ];

    const data = {
        labels: ['English', 'Tamil', 'Maths', 'Science', 'Social'],
        datasets: [
            {
                label: '7-A',
                data: [88,12],
                backgroundColor: ['#415BE7',"#fff"],
                hoverBackgroundColor: ['#415BE7',"#fff"],
                borderWidth: 10,
                borderColor: '#fff' 
            },
            {
                label: '7-B',
                data: [78,22],
                backgroundColor: ['#E56A6C',"#fff"],
                hoverBackgroundColor: ['#E56A6C',"#fff"],
                borderWidth: 10,
                borderColor: '#fff' 
            },
            {
                label: '7-B',
                data: [68,32],
                backgroundColor: ['#1DBF73',"#fff"],
                hoverBackgroundColor: ['#1DBF73',"#fff"],
                borderWidth: 10,
                borderColor: '#fff' 
            },
            {
                label: '7-B',
                data: [58,42],
                backgroundColor: ['#65B2FC',"#fff"],
                hoverBackgroundColor: ['#65B2FC',"#fff"],
                borderWidth: 10,
                borderColor: '#fff' 
            },
            {
                label: '7-B',
                data: [48,52],
                backgroundColor: ['#F1A245',"#fff"],
                hoverBackgroundColor: ['#F1A245',"#fff"],
                borderWidth: 15,
                borderColor: '#fff' 
            },
            {
                label: '7-B',
                data: [48],
                backgroundColor: ['#fff'],
                hoverBackgroundColor: ['#fff'],
                borderWidth: 0,
                borderColor: '#fff' 
            },
        ],
        color :['#415BE7','#E56A6C','#1DBF73','#65B2FC','#F1A245'],
        data:["88%","78%","68%","58%","48%"]
    };


    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false 
            },
            legend: {
                position: 'bottom',
                display:false,
                labels: {
                    boxWidth: 0,
                },
            
            },
        },
    };

    return (
        <div className="lesson-plan-chart">
            <div className="chart-header">
                <div className='title'>Lesson Plan</div>
                <Dropdown
                    value={selectedClass}
                    options={classes}
                    onChange={(e) => setSelectedClass(e.value)}
                    placeholder="Select a Class"
                />
            </div>
            <div className="chart-content">
                {/* <Pie data={data} options={options} /> */}
            </div>
            <div className="chart-legend">
                {data.labels.map((label, index) => (
                    <div>
                        <div key={index} className="legend-item">
                            <span className="legend-color" style={{ backgroundColor: data.color[index] }}></span>
                            <span className="legend-label">{label}</span>
                        </div>
                        <span className="legend-value">{data.data[index]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LessonPlanChart;
