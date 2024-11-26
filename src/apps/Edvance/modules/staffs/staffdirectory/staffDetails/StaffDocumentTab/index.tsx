import React, { useEffect, useRef, useState } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useDispatch, useSelector } from "react-redux";

import "../index.scss";
import SvgDocumentupload from "../../../../../../../assets/svgIcon/SvgDocumentUpload";
import SvgDeleteIcon from "../../../../../../../assets/svgIcon/SvgDeleteIcon";
import PaginatorTemplate from "../../../../../components/PaginatorTemplate";
import EmptyTableIcon from "../../../../../components/EmptyTableIcon";
import FileDragUpload from "../../../../../components/fileUploade";
import Sider from "../../../../../components/Sider";
import FileUploadTemplate from "../../../../../../../components/FileUpload/FileUploadTemplate";
import DropDownField from "../../../../../../../components/DropDownField";

// Types for the document and staff data
interface DocumentData {
  id: string;
  name: string;
  document: string;
}

interface StaffDocumentTabProps {
  getallteacherbyid: {
    id: string;
  };
}

const StaffDocumentTab: React.FC<StaffDocumentTabProps> = ({
  getallteacherbyid,
}) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState<boolean>(false);
  const toast = useRef<Toast | null>(null);

  const { getalldocumentstaff } = useSelector((state: any) => ({
    getalldocumentstaff: state.staffDirectReducers?.getalldocumentstaff.data,
  }));

  // Fetch all documents by staff ID
  useEffect(() => {
    if (getallteacherbyid?.id) {
      // dispatch(getAllDocumentByStaffIdMiddleware({ payload: getallteacherbyid.id }));
    }
  }, [dispatch, getallteacherbyid?.id]);

  // Handle document upload
  const onUpload = () => {
    if (toast.current) {
      toast.current.show({
        severity: "info",
        summary: "Success",
        detail: "File Uploaded",
      });
    }
  };

  // Handle document deletion
  const handleDelete = (id: string) => {
    // dispatch(deleteDocumentMiddleware(id)).then(() =>
    //   dispatch(getAllDocumentByStaffIdMiddleware({ payload: getallteacherbyid.id }))
    // );
  };

  // Render status and actions for each row in the table
  const statusBodyTemplate = (rowData: DocumentData) => {
    return (
      <div className="action__icon__controllerr flex gap-3">
        <div>
          <SvgDocumentupload />
        </div>
        <div onClick={() => handleDelete(rowData.id)}>
          <SvgDeleteIcon />
        </div>
      </div>
    );
  };

  const isEmpty = getalldocumentstaff?.documentData?.length === 0;

  // Handle Save for the dialog
  const handleSave = () => {
    setVisible(false);
  };

  return (
    <div className="document__table__container">
      <Toast ref={toast}></Toast>
      <div className="button__container flex justify-content-end">
        <Button
          icon={<SvgDocumentupload />}
          iconPos="left"
          label="Upload Documents"
          className="button__area"
          onClick={() => setVisible(true)}
        />
      </div>

      <div className="table__main__container">
        <DataTable
          value={getalldocumentstaff?.documentData}
          removableSort
          paginator
          rows={5}
          paginatorTemplate={PaginatorTemplate}
          scrollHeight="40vh"
          scrollable
          emptyMessage={isEmpty ? <EmptyTableIcon /> : null}
        >
          <Column
            field="name"
            header={<div className="column__header">Title</div>}
          />
          <Column
            field="name"
            header={<div className="column__header">File name</div>}
          />
          <Column
            body={statusBodyTemplate}
            field="action"
            header={<div className="column__action__header">Action</div>}
          />
        </DataTable>
      </div>

      <Dialog
        header="Upload"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      ></Dialog>
      <Sider
        header="Upload"
        visible={visible}
        setVisible={() => setVisible(false)}
        // setPosition={setPosition}
        // position={position}
        children={
          <>
            <div className="grid mt-6">
              <div className="col-12 md:col-6 lg:col-6">
                {/* <FormDropdown
                  label={"Title"}
                  Start={true}
                  placeholder={"Select"}
                  // Add additional dropdown options and handlers here if needed
                /> */}
                <DropDownField label={"Title"} placeholder={"Select"} />
              </div>
              <div className="col-12 md:col-6 lg:col-6">
                <FileUploadTemplate label={"Documents"} />
              </div>
            </div>
            <div className="dialog-footer flex justify-content-end mt-4">
              <Button
                label="Save"
                className="p-button-primary"
                onClick={handleSave}
              />
            </div>
          </>
        }
      />
    </div>
  );
};

export default StaffDocumentTab;
