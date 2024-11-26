import React from 'react'
import './index.scss'
import { ProgressBar } from 'primereact/progressbar'

const Totalcount = () => {
    return (
        <div className='total__count mt-4'>
            <div className='title'>Total Count</div>
            <div className='count__text mt-3'>
                <div>
                    <div className='count__text__title'><div className='dots'></div>Total Students</div>
                    <div className='mt-2'>353</div>
                </div>
                <div>
                    <div className='count__text__title'><div className='dotsone'></div>Total Staffs</div>
                    <div className='mt-2'>73</div>
                </div>
                <div>
                    <div className='count__text__title'><div className='dotstwo'></div>Total Vehicles</div>
                    <div className='mt-2'>39</div>
                </div>
            </div>
            <div>
            <div className='progress__bar mt-6'>
                <div className='progress__bar__text'>Students</div>
                <div className='progreebar'>
                <ProgressBar value={14}></ProgressBar>
                </div>
            </div>
            <div className='progress__bar__one mt-6'>
                <div className='progress__bar__text'>Staffs</div>
                <div className='progreebar'>
                <ProgressBar value={14}></ProgressBar>
                </div>
            </div>
            <div className='progress__bar__two mt-6'>
                <div className='progress__bar__text'>Vehicles</div>
                <div className='progreebar'>
                <ProgressBar value={14}></ProgressBar>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Totalcount
