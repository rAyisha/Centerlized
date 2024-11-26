import StudentTabs from "./studentTabs";
import TabHeader from "./TabHeader";
import InternalBreadcrumb from "./BreadCrumb";
import { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../redux/store";
import { getStudentByIdMiddleware } from "../store/studentMiddleware";
import { fetchIp } from "../../../../../utility/getIpAddress";
import { useParams } from "react-router-dom";

interface Props {
  mode?: "enabled" | "disabled"
}

const StudentDetailView: FunctionalComponent<Props> = ({ mode = "enabled" }) => {
  const dispatch = useDispatch<AppDispatch>()
  const { id } = useParams()
  const [studentData, setStudentData] = useState<any>({})
  const { companyID, branchID } = useSelector((state: RootState) => {
    return {
      companyID: state.dropdownDataReducers.companyID,
      branchID: state.dropdownDataReducers.branchID,
    }
  })
  const fetchStudentData = async () => {
    const ip = await fetchIp()
    const res = await dispatch(getStudentByIdMiddleware({ headers: { "company-id": companyID, "branch-id": branchID, ip }, id: Number(id) }))
    setStudentData(res.payload)
  }
  useEffect(() => {
    if (id) {
      fetchStudentData()
    }
  }, [id])
  return (
    <div>
      <InternalBreadcrumb />
      <TabHeader mode={mode} studentData={studentData} />
      <StudentTabs studentData={studentData} />
    </div>
  );
};

export default StudentDetailView;
