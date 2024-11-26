import { useRef, useState } from "preact/hooks";
import "./index.scss";
import { Image } from "primereact/image";
import SvgSvgdotsfade from "../../../../../../assets/svgIcon/SvgThreeDots";
import Sider from "../../../../components/Sider";
import StudentLoginDetails from "../LoginDetails";
import { OverlayPanel } from "primereact/overlaypanel";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { patchEnableDisableStudentMiddleware } from "../../store/studentMiddleware";
import DisableStudentPopUp from "../DisableStudent";
import { Toast } from "primereact/toast";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import { FunctionalComponent } from "preact";
import { StudentFormData } from "../../store/student.Types";

interface Props {
  mode?: "enabled" | "disabled",
  studentData: StudentFormData
}

const TabHeader: FunctionalComponent<Props> = ({ mode = "enabled", studentData }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { id } = useParams()
  const overlayRef = useRef<any>(null);
  const { companyID, branchID } = useSelector((state: RootState) => {
    return {
      companyID: state.dropdownDataReducers.companyID,
      branchID: state.dropdownDataReducers.branchID,
    }
  })
  const [visible, setVisible] = useState(false);
  const [visiblePop, setVisiblePop] = useState(false);
  const toggleDownloadMenu = (e: any) => {
    overlayRef.current?.toggle(e);
  };
  const toast = useRef<any>(null);
  const hadleShowLoginDetails = () => {
    setVisible(true);
  };
  const handleShowDisableDetails = () => {
    setVisiblePop(true);
  };

  const handleClickEnableDisable = async () => {
    try {
      const disableDateData = studentData?.disableDate;
      const date = new Date(disableDateData);
      const formattedDate = date
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .replace(/\//g, "-");
      const payload = { disableReasonId: 1, disableDate: formattedDate, note: "" }
      const options = { headers: { "company-id": companyID, "branch-id": branchID } }
      const res = await dispatch(patchEnableDisableStudentMiddleware({ id, payload, options }));

      if (res.meta.requestStatus === "fulfilled") {
        toast.current.show({ severity: 'success', summary: 'Success', detail: `${res?.payload?.message}`, life: 3000 });
        setTimeout(() => {
          navigate("/edvance/students/disablestudents");
        }, 2000)
      } else {
        toast.current.show({ severity: 'error', summary: 'Error', detail: `${res?.payload?.message} staff`, life: 3000 });
        console.error("find api failed:", res?.payload);
      }
    } catch (error: any) {

      console?.error("find An error occurred:", error.message);
    }
  };
  return (
    <div className="flex justify-content-between align-items-center disable__student__tab__overall__main__container">
      <Toast ref={toast} />
      <OverlayPanel ref={overlayRef} className="disable__menu__container">
        <div className="flex flex-column edit__content">
          <div
            onClick={() => hadleShowLoginDetails()}
            className="edit__content__caption"
          >
            Login details
          </div>
          <div
            onClick={
              mode === "enabled"
                ? () => handleShowDisableDetails()
                : handleClickEnableDisable
            }
            className="edit__content__caption"
          >
            {mode === "enabled" ? "Disable" : "Enable"}
          </div>
          <div className="edit__disable__content__caption">
            Send Login Credential
          </div>
        </div>
      </OverlayPanel>
      <Sider
        setVisible={setVisible}
        visible={visible}
        header="Login details"
      >
        <StudentLoginDetails />
      </Sider>
      <Sider
        setVisible={setVisiblePop}
        visible={visiblePop}
        header="Inactive Student"
      >
        <DisableStudentPopUp setStudentPopup={setVisiblePop} />
        {/* <DisableStudentPopUp /> */}
      </Sider>

      <div className="tab__overall__container flex">
        <div className="top__profile__header">
          <Image
            className="image__area"
            src="https://i.ibb.co/Zg23Tf7/Rectangle-6869-1.png"
            alt="Image"
          />
        </div>
        <div className="flex">
          <div>
            <div className="student__caption__name">
              {studentData?.firstName} {studentData?.lastName}
            </div>
            <div className="flex info__container__adjust">
              <div className="student__caption__info">
                <span>
                  Admission No: {studentData?.admissionNumber}
                </span>
                <span>Roll No: {studentData?.rollNumber}</span>
              </div>
              <div className="student__caption__info">
                <span>
                  Class: Class {studentData?.classId} (2024-25)
                </span>
                <span>Section: {studentData?.sectionId}</span>
              </div>
              {/* <div className="student__caption__info">
                <span>RTE: NO</span>
                <span>Gender: {studentData?.gender}</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="right__side__container flex">
        {/* <div>
          <Button
            label="Edit"
            icon={<SvgEdit color="#ffffff" />}
            onClick={() => handledit("edit")}
            iconPos="left"
            className="edit__butt__overall"
          />
        </div> */}
        <div className="icon__controller" onClick={toggleDownloadMenu}>
          <SvgSvgdotsfade />
        </div>
      </div>
    </div>
  );
};

export default TabHeader;
