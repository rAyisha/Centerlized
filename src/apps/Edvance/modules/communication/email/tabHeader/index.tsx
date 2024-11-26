import { FunctionalComponent } from "preact";
import { useState } from "preact/compat";
import "./index.scss";
import SvgAddIcon from "../../../../../../assets/svgIcon/SvgAddIcon";
import InputField from "../../../../../../components/InputField";
import Button from "../../../../../../components/Button";
import ExportButton from "../../../../components/ExportButton";

const TabHeader = ({setModalVisible}) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="overall__profile__tab__header">
      <div className="profile__tab__headertxt mb-4">Email List</div>
      <div className="tab__header">
        <div className="dropdown__layout">
          <div className="tab__header__search">
            <div className="p-input-icon-left w-full">
              <i className="pi pi-search" />
              <InputField
                placeholder="Search"
                value={searchValue}
                onChange={e => setSearchValue(e.currentTarget.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex align-items-center gap-3">
          <ExportButton />
          <Button
            label="Compose"
            icon={<SvgAddIcon color="var(--base-text-inactive-color)" />}
            onClick={() => setModalVisible(true)}
            iconPos="left"
            className="export__butt__overall"
          />
        </div>
      </div>
    </div>
  );
};

export default TabHeader;
