import { FunctionalComponent } from "preact";
import "./index.scss";
import { TabPanel, TabView } from "primereact/tabview";
import { homeworkdata, Incompletedhomeworkdata, pendinghomeworkdata } from "./mock";
import ViewUpcomingHomeWorkTable from "../../UpcommingWorkTabel/ViewUpcommingHomeWork/ViewUpcommingHomeWorkTabel";
import SvgCalendar from "../../../../../../../assets/svgIcon/SvgCalendar";



const ViewUpcomingHomeWork: FunctionalComponent = () => {
  return (
    <div className="view__upcoming__home__work">
      <div className="view__upcoming__home__work__left">
        <TabView>
          <TabPanel header="Complete">
            <ViewUpcomingHomeWorkTable homeworkdata={homeworkdata} />
          </TabPanel>
          <TabPanel header="Incomplete">
            <ViewUpcomingHomeWorkTable homeworkdata={Incompletedhomeworkdata} />
          </TabPanel>
          <TabPanel header="Unfinished">
            <ViewUpcomingHomeWorkTable homeworkdata={pendinghomeworkdata} />
          </TabPanel>
        </TabView>
      </div>
      <div className="view__upcoming__home__work__right">
        <div className="view__upcoming__home__work__right__title">Summary</div>
        <div className="mt-4">
          <div className="view__upcoming__home__work__right__main__title">
            Title: 
            <span className="view__upcoming__home__work__right__sub__title">
              English Homework
            </span>
          </div>

          <div className="view__upcoming__home__work__right__main__title mt-3">
            <SvgCalendar /> Homework Date: 
            <span className="view__upcoming__home__work__right__sub__title">
              05/29/2024
            </span>
          </div>

          <div className="view__upcoming__home__work__right__main__title mt-3">
            <SvgCalendar /> Submission Date: 
            <span className="view__upcoming__home__work__right__sub__title">
              05/29/2024
            </span>
          </div>

          <div className="view__upcoming__home__work__right__main__title mt-3">
            Created By: 
            <span className="view__upcoming__home__work__right__sub__title">
              Joe Black (9000)
            </span>
          </div>

          <div className="view__upcoming__home__work__right__main__title mt-3">
            Class: 
            <span className="view__upcoming__home__work__right__sub__title">
              Class 1
            </span>
          </div>

          <div className="view__upcoming__home__work__right__main__title mt-3">
            Section: 
            <span className="view__upcoming__home__work__right__sub__title">
              A
            </span>
          </div>

          <div className="view__upcoming__home__work__right__main__title mt-3">
            Subject Group: 
            <span className="view__upcoming__home__work__right__sub__title">
              Class 1st Subject Group
            </span>
          </div>

          <div className="view__upcoming__home__work__right__main__title mt-3">
            Subject: 
            <span className="view__upcoming__home__work__right__sub__title">
              English (210)
            </span>
          </div>

          <div className="view__upcoming__home__work__right__main__title mt-3">
            Description: 
            <span className="view__upcoming__home__work__right__sub__title">
              Homework
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUpcomingHomeWork;
