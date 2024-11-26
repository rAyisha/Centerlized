import React, { useState } from 'react';
import 'chart.js/auto';
import './index.scss'
import { Dropdown } from 'primereact/dropdown';
import { ProgressBar } from 'primereact/progressbar';
// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import SvgLine from '../../../assets/icons/SvgLine';

const AttendencePercentage = () => {
    const [selectedClass, setSelectedClass] = useState('7-A');

    const classes = [
        { label: '7-A', value: '7-A' },
        { label: '7-B', value: '7-B' },
    ]
    return (
        <div className="Attendence">
            <div className="chart-header">
                <div className='title'>Attendance Percentage</div>
                <Dropdown
                    value={selectedClass}
                    options={classes}
                    onChange={(e) => setSelectedClass(e.value)}
                    placeholder="Select a Class"
                />
            </div>
            <div className="chart-content">
                <div className='chart__content__layout'>
                    <div className='chart__content__layout__right'>
                        <div>
                            {/* <SvgLine /> */}
                        </div>
                        <div>
                            14%
                            <div className='title'>Absent</div>
                        </div>
                    </div>
                    <div className='chart__content__layout__left'>
                        <div>
                            {/* <SvgLine /> */}
                        </div>
                        <div>
                            84%
                            <div className='title'>Present</div>
                        </div>
                    </div>
                </div>
                <div className='mt-3'> 
                <ProgressBar value={14}></ProgressBar>
                </div>
            </div>
        </div>
    )
}

export default AttendencePercentage