import { useEffect, useState } from "preact/hooks";
import "./index.scss";
import TabHeader from "./tabHeader";
import CardView from "./cardView";
import ListView from "./listView";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
// import { getSearchStaffDirectoryMiddleware } from "./store/staffDirectoryMiddleware";
import { getAllRolesMiddleware } from "../staffdirectory/store/staffDirectoryMiddleware";
import { AppDispatch, RootState } from "../../../../../redux/store";

const StaffDirectory = () => {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(5);
  const { staffs, getallroles,staffListdata } = useSelector((state: RootState) => ({
    staffs: state.edvanceReducers.staffDirectoryReducer.staffs,
    getteachersearch: [],
    getallroles: state.edvanceReducers.staffDirectoryReducer?.roles?.data,
    staffListdata: state.edvanceReducers.staffDirectoryReducer.staffListdata,
  }));
  console.log("staffListdata",staffListdata?.pagination)
  const [roleidShow, setroleidShow] = useState();
  const [searchShow, setsearchShow] = useState();
  const [tableShow, settableShow] = useState(false);
  const [viewType, setViewType] = useState("list");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (value: any) => {
    // dispatch(getSearchStaffDirectoryMiddleware({
    //   textSearch: value.search
    // }));
  };

  const formik = useFormik({
    initialValues: { search: "", classValue: "" },
    onSubmit: handleSubmit,
  });

  const getTableData = () => {
    //   dispatch(getAllTeacherdisableMiddleware(
    //     {
    //       payload: {
    //         status: true,
    //         roleid: "",
    //         term: "",
    //         rows: rows,
    //         pageno: page + 1,
    //       }
    //     }
    //   ))
  };

  useEffect(() => {
    dispatch(getAllRolesMiddleware());
  }, []);

  // useEffect(() => {
  //   getTableData()
  // }, [rows, page])
  return (
    <div className="staff__directory">
      <TabHeader
        getEditStaffDirectoryData={[]}
        tableShow={tableShow}
        formik={formik}
        settableShow={settableShow}
        handleSubmit={handleSubmit}
        viewType={viewType}
        setViewType={setViewType}
        getallroles={getallroles}
        setroleidShow={setroleidShow}
        setsearchShow={setsearchShow}
        totalstudent={staffs.length}
        rows={rows}
        page={page}
      />
      <div className="mt-5">
        {viewType === "list" ? (
          <ListView
            data={staffs}
            formik={formik}
            tableShow={tableShow}
            searchData={[]}
            roleidShow={roleidShow}
            searchShow={searchShow}
            setdataPage={setPage}
            setdataRows={setRows}
            fetchData={getTableData}
            tabledata={staffListdata}
          />
        ) : (
          <CardView
            data={staffs}
            roleidShow={roleidShow}
            searchShow={searchShow}
            setdataPage={setPage}
            setdataRows={setRows}
            fetchData={getTableData}
          />
        )}
      </div>
    </div>
  );
};

export default StaffDirectory;
