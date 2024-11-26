import React from "react";
import "./index.scss";
import { TabPanel, TabView } from "primereact/tabview";
import { useSelector } from "react-redux";
import ViewUpcomingHomeWorkTable from "./ViewUpcommingHomeWorkTabel";
import SvgCalendar from "../../../../../../../assets/svgIcon/SvgCalendar";
import { RootState } from "../../../../../../../redux/store";

interface HomeworkStudentListData {
  completedStudentDetails: any[];
  incompleteStudentDetails: any[];
  unfinishedStudentDetails: any[];
  title: string;
  homeworkDate: string;
  submissionDate: string;
  staffFirstName: string;
  staffLastName: string;
  className: string;
  sectionName: string;
  subjectCode: string;
  subjectName: string;
  description: string;
}

const ViewUpcomingHomeWork = ({ addvisible, setAddvisible }: any) => {
  const { homeworkstudentlistdata } = useSelector((state: RootState) => ({
    homeworkstudentlistdata: state?.acadamicsReducers?.homeworkstudentlistdata,
  }));

  return (
    <div className="view__upcoming__home__work">
      <div className="view__upcoming__home__work__left">
        <TabView>
          <TabPanel header="Complete">
            <ViewUpcomingHomeWorkTable
              homeworkdata={homeworkstudentlistdata?.completedStudentDetails}
            />
          </TabPanel>
          <TabPanel header="Incomplete">
            <ViewUpcomingHomeWorkTable
              homeworkdata={homeworkstudentlistdata?.incompleteStudentDetails}
            />
          </TabPanel>
          <TabPanel header="Unfinished">
            <ViewUpcomingHomeWorkTable
              homeworkdata={homeworkstudentlistdata?.unfinishedStudentDetails}
            />
          </TabPanel>
        </TabView>
      </div>
      <div className="view__upcoming__home__work__right">
        <div className="view__upcoming__home__work__right__title">Summary</div>
        <div className="mt-4">
          <div className="view__upcoming__home__work__right__main__title">
            Title :
            <span className="view__upcoming__home__work__right__sub__title">
              {homeworkstudentlistdata?.title}
            </span>
          </div>

          <div className="view__upcoming__home__work__right__main__title mt-3">
            <SvgCalendar /> Homework Date :
            <span className="view__upcoming__home__work__right__sub__title">
              {homeworkstudentlistdata?.homeworkDate}
            </span>
          </div>

          <div className="view__upcoming__home__work__right__main__title mt-3">
            <SvgCalendar /> Submission Date:
            <span className="view__upcoming__home__work__right__sub__title">
              {homeworkstudentlistdata?.submissionDate}
            </span>
          </div>

          <div className="view__upcoming__home__work__right__main__title mt-3">
            Created By :
            <span className="view__upcoming__home__work__right__sub__title">
              {homeworkstudentlistdata?.staffFirstName}&nbsp;
              {homeworkstudentlistdata?.staffLastName}
            </span>
          </div>

          <div className="view__upcoming__home__work__right__main__title mt-3">
            Class :
            <span className="view__upcoming__home__work__right__sub__title">
              {homeworkstudentlistdata?.className}
            </span>
          </div>

          <div className="view__upcoming__home__work__right__main__title mt-3">
            Section:
            <span className="view__upcoming__home__work__right__sub__title">
              {homeworkstudentlistdata?.sectionName}
            </span>
          </div>

          <div className="view__upcoming__home__work__right__main__title mt-3">
            Subject Group :
            <span className="view__upcoming__home__work__right__sub__title">
              {homeworkstudentlistdata?.subjectCode}
            </span>
          </div>

          <div className="view__upcoming__home__work__right__main__title mt-3">
            Subject :
            <span className="view__upcoming__home__work__right__sub__title">
              {homeworkstudentlistdata?.subjectName}
            </span>
          </div>

          <div className="view__upcoming__home__work__right__main__title mt-3">
            Description :
            <span className="view__upcoming__home__work__right__sub__title">
              {homeworkstudentlistdata?.description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUpcomingHomeWork;
