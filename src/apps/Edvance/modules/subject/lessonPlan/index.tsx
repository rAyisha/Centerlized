import React from 'react'
import "./index.scss"
import LessonPlanHeader from './lessonPlanHeader'
import LessonPlanListView from './lessonPlanTable'

const LessonPlan = () => {
  return (
    <div>
        <LessonPlanHeader/>
        <LessonPlanListView/>
    </div>
  )
}

export default LessonPlan