import { Avatar } from "primereact/avatar";
import SvgCalculator from "../../../../../../assets/svgIcon/SvgCalculator";
import "./index.scss";
// import SvgClockSmall from "../../../../assets/icons/SvgClockSmall";
// import SvgPlaceholderImage from "../../../../assets/icons/SvgPlaceholderImage";
// import { formatDate } from "../../../../utility/helper";
// import SvgClockIcon from "../../../../assets/icons/SvgClockIcon";
import { useSelector } from "react-redux";

const ViewModal = ({ data }) => {
  // const { singleeventsDetails } = useSelector((state) => {
  //   return {
  //     singleeventsDetails: state?.alumniReducers?.singleeventsDetails
  //   };
  // });
  return (
    <div className="view_event_modal">
      <div className="flex justify-content-between">
        <div className="flex flex-column">
          <span className="title">title</span>
          <div className="flex align-items-center gap-2 mt-2">
            <SvgCalculator />
            <span className="time_period">
              {/* {singleeventsDetails?.fromDate} -  {singleeventsDetails?.toDate} */}
              "2024-08-31"-"2024-08-31"
              {/* {`${formatDate(
              singleeventsDetails?.from
            )} - ${formatDate(singleeventsDetails?.to)}`} */}
            </span>
          </div>
        </div>
        <div className="image_container">
          <image />
      
          <Avatar icon="pi pi-user" size="xlarge" />
          {/* <SvgPlaceholderImage /> */}
        </div>
      </div>
      <div className="flex flex-column mt-5">
        <span className="title">Note</span>
        <div className="flex align-items-center gap-2 mt-2">
          <span className="time_period">details</span>
        </div>
      </div>
      <div className="flex flex-column mt-5">
        <span className="title">Event Notification Message</span>
        <div className="flex align-items-center gap-2 mt-2">
          <span className="time_period">message</span>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
