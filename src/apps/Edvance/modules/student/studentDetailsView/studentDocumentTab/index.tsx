import { useState } from "preact/hooks";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { documentTable } from "../mock";
import "./index.scss";
import Button from "../../../../../../components/Button";
import PaginatorTemplate from "../../../../components/PaginatorTemplate";
import SvgDocumentUpload from "../../../../../../assets/svgIcon/SvgDocumentUpload";
import SvgDelete from "../../../../../../assets/svgIcon/SvgDeleteIcon";
import { Dialog } from "primereact/dialog";
import DropDownField from "../../../../../../components/DropDownField";
import FileDragUpload from "../../../../../../components/FileDragUpload";
import SvgDownload from "../../../../../../assets/svgIcon/SvgDownload";

const StudentDocumentTab = () => {
  const [visible, setVisible] = useState(false);

  const HeaderTemplate = ({ field }: any) => (
    <div className="column__header">{field}</div>
  );

  const HeaderActionTemplate = ({ field }: any) => (
    <div className="column__action__header">{field}</div>
  );

  const statusBodyTemplate = () => {
    return (
      <div className="flex gap-3">
        <div className="flex align-items-center cursor-pointer">
          <SvgDownload color="#292D32" />
        </div>
        <div className="flex align-items-center cursor-pointer">
          <SvgDelete />
        </div>
      </div>
    );
  };

  const handleSave = () => {
    setVisible(false);
  };

  return (
    <div className="disable__student__document__table__container">
      <div className="button__container flex justify-content-end">
        <Button
          icon={<SvgDocumentUpload color="var(--base-text-inactive-color)" />}
          iconPos="left"
          label="Upload Documents"
          className="button__area"
          onClick={() => setVisible(true)}
        />
      </div>
      <div className="table__main__container">
        <DataTable
          value={documentTable}
          removableSort
          paginator
          rows={5}
          paginatorTemplate={PaginatorTemplate}
          scrollHeight="40vh"
          scrollable
        >
          <Column field="title" header={<HeaderTemplate field="Title" />} />
          <Column
            field="fileName"
            header={<HeaderTemplate field="File name" />}
          />
          <Column
            body={statusBodyTemplate}
            field="action"
            header={<HeaderActionTemplate field="Action" />}
          />
        </DataTable>
      </div>

      <Dialog
        header="Upload"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="grid mt-6">
          <div className="col-12 md:col-6 lg:col-6">
            <DropDownField
              label={"Title"}
              required={true}
              placeholder={"Select"}
            // option={documentOptions}
            // optionLabel="label"
            // optionValue="value"
            // value={formik.values.title}
            // onChange={(e) => formik.setFieldValue("title", e.value)}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-6">
            <FileDragUpload label={"Documents"} />
          </div>
        </div>
        <div className="dialog-footer flex justify-content-end mt-4">
          <Button label="Save" className="p-button-primary" onClick={handleSave} />
        </div>
      </Dialog>
    </div>
  );
};

export default StudentDocumentTab;
