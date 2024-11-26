import React from 'react'
import './index.scss'

const UpcomingEvent = () => {
  return (
    <div className='upcoming__event mt-4'>
      <div className='title'>Upcoming events</div>
      <div className='upcoming__event__layout'>
      <div className='text__container mt-4'>
        <div className='name'><div className='dots'></div> Sports Meet </div>
        <div className='subname'>April 11th, Thursday</div>
      </div>
      <div className='text__container mt-4'>
        <div className='name'><div className='dots'></div> Annual Day </div>
        <div className='subname'>May 1st, Thursday</div>
      </div>
      <div className='text__container mt-4'>
        <div className='name'><div className='dots'></div> Science Workshop </div>
        <div className='subname'>June 17, Monday</div>
      </div>
      </div>
    </div>
  )
}

export default UpcomingEvent
