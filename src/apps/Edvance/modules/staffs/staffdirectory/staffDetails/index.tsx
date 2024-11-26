import React, { useEffect } from "react";

import "./index.scss";
import { useParams } from "react-router-dom";
// import { getAllTeacherByIdMiddleware } from "../store/staffDirectoryMiddleware";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../../../../../../components/BreadCrumbs";
import TabHeaders from "./TabHeaders";
import StudentTabs from "./studentTabs";

type StaffDetailsProps = {
  getallteacherbyid: {
    status: boolean;
  };
};

type RootState = {
  staffDirectReducers: {
    getallteacherbyid: {
      data: {
        status: boolean;
      };
    };
  };
};

const StaffDetails: React.FC = () => {
  const { getallteacherbyid } = useSelector((state: RootState) => ({
    getallteacherbyid: state.staffDirectReducers?.getallteacherbyid.data,
  }));

  const lables = [
    {
      label: getallteacherbyid?.status ? "Staff Directory" : "Disable staff",
      url: getallteacherbyid?.status
        ? "/humanresource/staffdirectory"
        : "/humanresource/disablestaff",
    },
    "Staff Details",
  ];

  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      // dispatch(getAllTeacherByIdMiddleware({ payload: id }));
    }
  }, [dispatch, id]);

  console.log(getallteacherbyid?.status, "getallteacherbyid");

  return (
    <div>
      <BreadCrumbs data={["Staff Directory", "Disable staff"]} />
      <hr className="hr__breadcrumbs__staffattendence" />
      <TabHeaders getallteacherbyid={""} />
      <StudentTabs getallteacherbyid={""} />
    </div>
  );
};

export default StaffDetails;
