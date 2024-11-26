import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PerformanceExam from '../TabHeaders/performanceExam';
import SvgArrowLeftRound from '../../../../../../../assets/svgIcon/SvgArrowLeftRound';
import EmptyTableIcon from '../../../../../components/EmptyTableIcon';


// Define types for the data passed as props and state
interface TeacherClassData {
  firstName: string;
  lastName: string;
  className: string;
  sectionName: string;
  subjectName: string;
  subjectId: string;
  classId: string;
  sectionId: string;
  index: number;
}

interface StaffPerformanceData {
  // Define properties according to your actual data structure
}

interface PerformanceStaffProps {
  getallteacherbyid: {
    id: string;
  };
}

const PerformanceStaff: React.FC<PerformanceStaffProps> = ({ getallteacherbyid }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [viewExam, setViewExam] = useState<boolean>(false);

  // Using types for the state selections
  const { getteacherclass, staffperformanedata } = useSelector((state: any) => ({
    getteacherclass: state.staffDirectReducers?.getteacherclass?.data || [],
    staffperformanedata: state.staffDirectReducers?.staffperformanedata?.data || [],
  }));

  // Handler for navigation
  const handlenavigate = (data: TeacherClassData) => {
    // dispatch(getExambyClassMiddleware({
    //   payload: {
    //     subjectId: data.subjectId,
    //     classId: data.classId,
    //     sectionId: data.sectionId,
    //   }
    // }));
    setViewExam(true);
  };

  useEffect(() => {
    if (getallteacherbyid?.id) {
      // dispatch(getPerformanceClassMiddleware({
      //   payload: {
      //     teacherId: getallteacherbyid.id,
      //     sessionId: 1,
      //   }
      // }));
    }
  }, [dispatch, getallteacherbyid]);

  return (
    <div className="grid card__layout" style={{ width: "100%" }}>
      {getteacherclass.length > 0 && !viewExam ? (
        getteacherclass.map((data: TeacherClassData) => (
          <div className="lg:col-4 sm:col-6 col-12 p-[10]" key={data.index}>
            <div className="card__layout__cardview">
              <div className="flex-1 flex flex-column">
                <div className="w-full flex justify-content-between">
                  <div className="staff__name">{data.firstName} {data.lastName}</div>
                  <div onClick={() => handlenavigate(data)}>
                    <SvgArrowLeftRound />
                  </div>
                </div>
                <span className="mt-2 card__text_title">
                  Class: {data.className}
                </span>
                <span className="card__text_title">
                  Section: {data.sectionName}
                </span>
                <span className="card__text_title">
                  Subject: {data.subjectName}
                </span>
              </div>
            </div>
          </div>
        ))
      ) : viewExam ? (
        <PerformanceExam setViewExam={setViewExam} staffperformanedata={staffperformanedata} />
      ) : (
        <EmptyTableIcon />
      )}
    </div>
  );
};

export default PerformanceStaff;
