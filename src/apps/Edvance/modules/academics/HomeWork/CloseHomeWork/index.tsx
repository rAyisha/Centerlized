import { FunctionalComponent } from "preact";
import { InputText } from "primereact/inputtext";
import ExportButton from "../../../../components/ExportButton";
import "./index.scss";
import CloseHomeWorkTable from "./CloseHomeWorkTable";

interface CloseHomeWorkProps {
  tablevisible: any; 
  formik: {
    values: {
      searchData: string;
    };
    handleChange: (field: string) => (e: Event) => void;
  };
}

const CloseHomeWork: FunctionalComponent<CloseHomeWorkProps> = ({ tablevisible, formik }) => {
  return (
    <div className="close__home__work">
      <div className="tab__header mt-4 mb-4">
        <div className="dropdown__layout">
          <div className="tab__header__search">
            <span className="p-input-icon-left w-full">
              <i className="pi pi-search" />
              <InputText
                placeholder="Search"
                value={formik.values.searchData}
                onChange={formik.handleChange("searchData")}
              />
            </span>
          </div>
        </div>
        <div className="tab__header__buttons__layout">
          <ExportButton />
        </div>
      </div>
      <CloseHomeWorkTable tablevisible={tablevisible} />
    </div>
  );
};

export default CloseHomeWork;
