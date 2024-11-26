import "./index.scss";
import { InputText } from "primereact/inputtext";
import ExportButton from "../../../../components/ExportButton";
import Button from "../../../../../../components/Button";
import SvgAddIcon from "../../../../../../assets/svgIcon/SvgAddIcon";
// import { Button } from "primereact/button";

const TabHeader = ({ title, buttonLabel, buttonClick, formik }:any) => {
  return (
    <div className="tab_header">
      <div className="tab_header_title">{title}</div>
      <div className="tab_inputs_layout mt-4">
        <div className="dropdown_layout">
          <div className="tab_header_search">
            <span className="p-input-icon-left w-full">
              <i className="pi pi-search" />
              <InputText value={formik?.values?.search} onChange={formik?.handleChange("search")} placeholder="Search" />
            </span>
          </div>
        </div>
        <div className="tab_header_buttons_layout">
          <ExportButton />
          <Button 
          
          icon={<SvgAddIcon color="var(--base-text-inactive-color)" />}
          // onClick={() => handleNewAdmission("add")}
          iconPos="left"
          className="export__butt__overall"
          label={buttonLabel} onClick={() => buttonClick()} />
        </div>
      </div>
    </div>
  );
};

export default TabHeader;
