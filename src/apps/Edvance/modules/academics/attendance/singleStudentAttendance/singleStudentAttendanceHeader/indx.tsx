import "./index.scss"
import { useNavigate } from 'react-router-dom';
import SvgBackArrow from '../../../../../../../assets/svgIcon/SvgBackArrow';
import { Image } from "primereact/image";

const SingleStudentAttendanceHeader = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(-1);
    };
    return (
        <div className="single__studnet__attendance">
            <div className="totalcount_headerstudent mb-4">
                <div className="create__class__timetable__header">
                    <div className="create__class__timetable__header__title">
                        <span
                            className="create__class__timetable__header__title__icon"
                            onClick={handleNavigate}
                        >
                            <SvgBackArrow />
                        </span>
                        <div className="create__class__timetable__header__text">
                            Student Attendance Details
                        </div>
                    </div>
                </div>
            </div>
            <div className="horizontal__line w-full"></div>

            <div className="attendance_tab_container flex mt-4">
                <div className="top_profile_header">
                    <Image
                        className="image_area"
                        src="https://i.ibb.co/Zg23Tf7/Rectangle-6869-1.png"
                        alt="Image"
                    />
                </div>
                <div className="flex">
                    <div>
                        <div className="student_caption_name"></div>
                        <div className="flex info_container_adjust">
                            <div className="student_caption_info">
                                <span>Admission No: </span>
                                <span>Roll No: </span>
                            </div>
                            <div className="student_caption_info">
                                <span>Class: </span>
                                <span>Section: </span>
                            </div>
                            <div className="student_caption_info__Sec">
                                <span>RTE: NO</span>
                                <span>Gender: </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleStudentAttendanceHeader
