import React, { useRef, useState } from "react";
import "./index.scss";
import { Image } from "primereact/image";
import { Button } from "primereact/button";

import { useNavigate, useParams } from "react-router-dom";
import DisableStaffPopUp from "../DisableStaff";
import { OverlayPanel } from "primereact/overlaypanel";
import { patchEnabledisableMiddleware } from "../../store/staffDirectoryMiddleware";
import SvgEditIcon from "../../../../../../../assets/svgIcon/SvgEditIcon";
import SvgThreeDots from "../../../../../../../assets/svgIcon/SvgThreeDots";
import Sider from "../../../../../components/Sider";

// Define the type for the getallteacherbyid prop
interface StaffDetails {
  id: string;
  staffPictureUrl: string;
  firstName: string;
  lastName: string;
  staffId: string;
  MS_Role: {
    name: string;
  };
  MS_DesignationTypeMaster: {
    type: string;
  };
  MS_DepartmentTypeMaster: {
    type: string;
  };
  status: boolean;
}

interface TabHeadersProps {
  getallteacherbyid: StaffDetails;
}

const TabHeaders: React.FC<TabHeadersProps> = ({ getallteacherbyid }) => {
  const [position, setPosition] = useState<string>("center");
  const [visiblePop, setVisiblePop] = useState<boolean>(false);
  const overlayRef = useRef<OverlayPanel>(null);
  const { type } = useParams();
  const navigate = useNavigate();

  console.log(getallteacherbyid, "statuscheck");

  const handleNewAdmission = (action: string) => {
    navigate(`/humanresource/staffdirectory/${action}/${getallteacherbyid.id}`);
  };

  const hadleShowDisableDetails = (position: string) => {
    setPosition(position);
    setVisiblePop(true);
  };

  const toggleDownloadMenu = (e: any) => {
    overlayRef.current?.toggle(e);
  };

  const handleEnable = () => {
    // Dispatch patchEnabledisableMiddleware when the button is clicked
    // dispatch(patchEnabledisableMiddleware(rowData?.id)).then((res) => {
    //     // Handle success or failure response
    // }).catch((error) => {
    //     console.error("Error updating staff data:", error);
    // });
  };

  return (
    <div className="flex justify-content-between align-items-center tab__overall__main__container__staff">
      <div className="tab__overall__container flex">
        <div className="top__profile__header">
          <Image
            className="image__area"
            src={getallteacherbyid?.staffPictureUrl}
            alt="Image"
          />
        </div>
        <div className="flex">
          <div>
            <div className="student__caption__name">
              {getallteacherbyid?.firstName} {getallteacherbyid?.lastName}
            </div>
            <div className="flex info__container__adjust">
              <div className="student__caption__info">
                <span>Staff ID : {getallteacherbyid?.staffId}</span>
                <span>Role : {getallteacherbyid?.MS_Role?.name} </span>
              </div>
              <div className="student__caption__info__two">
                <span>Designation : {getallteacherbyid?.MS_DesignationTypeMaster?.type} </span>
                <span>Department : {getallteacherbyid?.MS_DepartmentTypeMaster?.type} </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right__side__container flex">
        {getallteacherbyid?.status && (
          <div>
            <Button
              label="Edit"
              icon={<SvgEditIcon color="#ffffff" />}
              onClick={() => handleNewAdmission("edit")}
              iconPos="left"
              className="edit__butt__overall"
            />
          </div>
        )}
        <div className="icon__controller pr-3" onClick={toggleDownloadMenu}>
          <SvgThreeDots />
        </div>
      </div>

      {/* Overlay Panel */}
      <OverlayPanel ref={overlayRef} className="disable__menu__container">
        <div className="flex flex-column edit__content">
          <div
            onClick={handleEnable}
            className="edit__content__caption"
          >
            {getallteacherbyid?.status ? "Disable" : "Enable"}
          </div>
          <div className="edit__disable__content__caption">
            Send Login Credential
          </div>
        </div>
      </OverlayPanel>

      {/* <ImportDatasDialog
        setVisible={setVisiblePop}
        visible={visiblePop}
        setPosition={setPosition}
        position={position}
        header="Disable Staff"
      >
        <DisableStaffPopUp getDisablesingleData={[]} />
      </ImportDatasDialog> */}
      <Sider
        header={
       "Disable Staff"
        }
        setVisible={setVisiblePop}
        visible={visiblePop}
        // setPosition={setPosition}
        // position={position}
        children={
          <DisableStaffPopUp getDisablesingleData={[]} />
        }
      />
    </div>
  );
};

export default TabHeaders;
