import React from 'preact'
import MasterTabs from "../../../components/MasterTabs";

const LessonPlanReport = () => {
    const tabsData = [
        {
          index: 1,
          title: "Syllabus Status Report",
          path: "/edvance/reports/lessonplanreport/syllabusstatusreport",
        },
        {
            index: 2,
            title: "Subject Lesson Plan Report",
            path: "/edvance/reports/lessonplanreport/subjectstatusreport",
          },
      ];
      return (
        <div className="student__master">
          <MasterTabs TabName="Lesson Plan Report" tabsData={tabsData} />
        </div>
      );
}

export default LessonPlanReport
