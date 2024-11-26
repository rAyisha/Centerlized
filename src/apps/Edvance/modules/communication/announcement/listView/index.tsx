import { useRef, useState } from "preact/hooks";
import "./index.scss";
import DataTable from "../../../../../../components/DataTable";
import SvgSortIcon from "../../../../../../assets/svgIcon/SvgSortIcon";
import SvgEye from "../../../../../../assets/svgIcon/SvgEye";
import Sider from "../../../../components/Sider";
import SvgEditIcon from "../../../../../../assets/svgIcon/SvgEditIcon";
import SvgDeleteIcon from "../../../../../../assets/svgIcon/SvgDeleteIcon";
import Message from "../messages";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import Feesremainderdialog from "./feesremainderdialog";
import { useDispatch, useSelector } from "react-redux";
import { announcementData } from "../mock";

const Announcementlistview = () => {
  const [viewPopupVisible, setViewPopupVisible] = useState(false);
  const [editPopupVisible, setEditPopupVisible] = useState(false);
  const [deletePopupVisible, setDeletePopupVisible] = useState(false);

  const toast = useRef(null);
  const columns = [
    {
      field: "title",
      header: "Announcement"
    },
    {
      field: "noticeDate",
      header: "Notice Date"
    },
    {
      field: "publishOn",
      header: "Publish Date"
    },
    {
      field: "createdBy",
      header: "Created By"
    },
  ]

  const handleView = () => {
    setViewPopupVisible(true);
  };

  const handleEdit = () => {
    setEditPopupVisible(true);
  };

  const accept = () => {
    setDeletePopupVisible(false);
    toast.current.show({
      severity: "success",
      
      detail: "You have delete",
      life: 3000,
    });
  };
  
  const reject = () => {
    setDeletePopupVisible(false);
    toast.current.show({
      severity: "warn",
      summary: "Rejected",
      detail: "You have rejected",
      life: 3000,
    });
  };
  const handleDelete = () => {
    setDeletePopupVisible(true)
    confirmDialog({
      message: 'Are you sure you want to delete?',
      defaultFocus: 'accept',
      accept: () => accept(),
      reject
    });
  };


  return (
    <div className="list__view__profile__details__announce">
      <Toast ref={toast} />
      <ConfirmDialog visible={deletePopupVisible} accept={accept} reject={reject} closable={false} />
      <DataTable
        value={announcementData}
        columns={columns}
        paginator
        showActions
        viewAccess
        editAccess
        deleteAccess
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Sider
        setVisible={setViewPopupVisible}
        visible={viewPopupVisible}
        header="Fees Reminder"
      >
        <Feesremainderdialog />
      </Sider>
      <Sider
        setVisible={setEditPopupVisible}
        visible={editPopupVisible}
        width="45vw"
        children={
          <Message setPopup={setEditPopupVisible}  />
        }
        header="Edit Message"
      />
    </div>
  );
};

export default Announcementlistview;
