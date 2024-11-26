import { useFormik } from "formik";
import React from "preact";
import { useEffect, useState } from "preact/hooks";
import TabHeader from "./TabHeader";
import ListView from "./ListView";
import CardView from "./CardView";
import { AppDispatch } from "../../../../../redux/store";
import { useDispatch } from "react-redux";
import { getAllTeacherdisableMiddleware } from "./store/disableStaffMiddleWare";
import { data } from "../applyLeaveStaff/ListView/data";

const DisableStaff = () => {
  const [page, setPage] = useState<number>(0);
  const [rows, setRows] = useState<number>(5);
  const [viewType, setViewType] = useState<string>("list");
  const [tableShow, setTableShow] = useState<boolean>(false);
  const [roleidShow, setRoleidShow] = useState<string | undefined>(undefined);
  const [searchShow, setSearchShow] = useState<string | undefined>(undefined);

  return (
    <div className="disable__staff__directory">
      <TabHeader
        viewType={viewType}
        setViewType={setViewType}
      />
      <div className="mt-5">
        {viewType === "list" ? (
          <ListView />
        ) : (
          <CardView />
        )}
      </div>
    </div>
  );
};

export default DisableStaff;
