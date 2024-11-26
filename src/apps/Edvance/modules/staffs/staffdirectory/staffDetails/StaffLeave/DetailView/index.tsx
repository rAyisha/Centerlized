import React, { useEffect, useState } from "react";
// import { InputTextarea } from "primereact/inputtextarea";
import "../index.scss";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../../../../../../components/InputField";
import { InputTextarea } from "primereact/inputtextarea";


// Type for the leave details
interface LeaveDetail {
  id: string;
  staff: {
    firstName: string;
    staffId: string;
  };
  fromDate: string;
  toDate: string;
  MS_LeaveType: {
    type: string;
  };
  status: string;
  applyDate: string;
  reason: string;
  note: string;
}

// Props type for the component
interface ApprovelleaveDetailViewProps {
  data: LeaveDetail | any;
  detailvisible: boolean;
  setdetailVisible: (visible: boolean) => void;
  rowdata: any;
}

const ApprovelleaveDetailView: React.FC<ApprovelleaveDetailViewProps> = ({
  data,
  detailvisible,
  setdetailVisible,
  rowdata,
}) => {
  const [value, setValue] = useState<string>("");

  const dispatch = useDispatch();

  const { getLeavesbyid } = useSelector((state: any) => ({
    getLeavesbyid: state.staffDirectReducers?.getLeavesbyid.data,
  }));

  console.log(getLeavesbyid, "data....");

  useEffect(() => {
    // if (data?.id) {
    //   dispatch(getLeavesByIDMiddleware({ payload: data.id }));
    // }
  }, [detailvisible, data?.id, dispatch]);

  const date = `${getLeavesbyid?.fromDate} - ${getLeavesbyid?.toDate}`;

  return (
    <div className="add__leave__request">
      <div className="grid mt-1">
        <div className="col-12 md:col-12 lg:col-12">
          <InputField
            label={"Staff Name"}
           
            disabled
            placeholder={"Enter"}
            value={getLeavesbyid?.staff?.firstName}
          />
        </div>
      </div>
      <div className="grid mt-1">
        <div className="col-12 md:col-12 lg:col-12">
          <InputField
            label={"Staff ID"}
            
            disabled
            placeholder={"Enter"}
            value={getLeavesbyid?.staff?.staffId}
          />
        </div>
      </div>
      <div className="grid mt-1">
        <div className="col-12 md:col-12 lg:col-12">
          <InputField
            label={"Leave"}
           
            disabled
            placeholder={"Enter"}
            value={date}
          />
        </div>
      </div>
      <div className="grid mt-1">
        <div className="col-12 md:col-12 lg:col-12">
          <InputField
            label={"Leave Type"}
           
            disabled
            placeholder={"Enter"}
            value={getLeavesbyid?.MS_LeaveType?.type}
          />
        </div>
      </div>
      <div className="grid mt-1">
        <div className="col-12 md:col-12 lg:col-12">
          <InputField
            label={"Status"}
            // Start={false}
            disabled
            placeholder={"Enter"}
            value={getLeavesbyid?.status}
          />
        </div>
      </div>
      <div className="grid mt-1">
        <div className="col-12 md:col-12 lg:col-12">
          <InputField
            label={"Apply Date"}
            // Start={false}
            disabled
            placeholder={"Enter"}
            value={getLeavesbyid?.applyDate}
          />
        </div>
      </div>
      <div className="grid mt-1">
        <div className="col-12 md:col-12 lg:col-12">
          <InputField
            label={"Reason"}
            // Start={false}
            disabled
            placeholder={"Enter"}
            value={getLeavesbyid?.reason}
          />
        </div>
      </div>
      <div className="grid mt-1">
        <div className="col-12 md:col-12 lg:col-12">
          <div className="student__file__uploade__label mb-2">Note</div>
          <div className="student__text__area">
            <InputTextarea
              autoResize
              value={getLeavesbyid?.note}
              rows={5}
              cols={30}
              placeholder="Enter"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovelleaveDetailView;
