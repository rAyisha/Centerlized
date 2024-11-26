import "./index.scss";
import BreadCrumbs from "../../../../../../components/BreadCrumbs";
// import { useParams } from "react-router-dom";

const InternalBreadcrumb = () => {
  // const { type } = useParams();
  const items = [
    {
      label: "home",
      path: "/"
    }
  ]
  // const handlelables = [{ label: type === "studentdetailsview" ? "student Details View" : "Disable Student", url: type === "studentdetailsview" ? "/studentsinformation/studentslist" : "/studentsinformation/disablestudent" }, "Student Details"];
  return (
    <div className="disable_breadcrum_controller">
      <div className="breadcrum_area">
        {/* <BreadCrumbs labels={handlelables} /> */}
        <BreadCrumbs data={["Edvance", "Student", "Student Detail"]} />
        <div className="underline_code"></div>
      </div>
    </div>
  );
};

export default InternalBreadcrumb;
