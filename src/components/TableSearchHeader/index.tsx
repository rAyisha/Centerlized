import { FunctionComponent } from "preact";
import "./index.scss";
// import SvgSearchIcon from "../../assets/icons/SvgSearchIcon";
import { useEffect, useState } from "preact/hooks";
import Button from "../Button";
import SvgSearchIcon from "../../assets/svgIcon/SvgSearchIcon";
import SvgAddIcon from "../../assets/svgIcon/SvgAddIcon";
import SvgSubmenuExpand from "../../assets/svgIcon/SvgSubmenuExpand";

type Props = {
  title?: string;
  buttonType?: "Add" | "Create";
  searchValue?: string;
  onButtonClick?: () => void;
  onSearch?: (value: string) => void;
  className?: string;
  addButton?: boolean;
  exportButton?: boolean;
  searchButton?: boolean;
};

const TableSearchHeader: FunctionComponent<Props> = ({
  title = "",
  buttonType,
  searchValue = "",
  onButtonClick = () => { },
  onSearch = () => { },
  className = "",
  addButton = false,
  exportButton = false,
  searchButton = true,
}) => {
  const [value, setValue] = useState(searchValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(value);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return (
    <div className={`table__search__layout grid ${className}`}>
      <div className="header__title col-12 lg:col-6">{title}</div>
      <div className="search__export__layout col-12 lg:col-6">
        {searchButton && (
          <div className="search__view">
            <SvgSearchIcon />
            <input
              placeholder="Search"
              value={value}
              onChange={(e) => setValue(e.currentTarget.value)}
            />
          </div>
        )}
        {addButton && (
          <Button
            label={buttonType}
            icon={<SvgAddIcon color="var(--base-theme-icon-color)" />}
            onClick={onButtonClick}
          />
        )}
        {exportButton && (
          <div className="export__view">
            Export
            <span className="divider"></span>
            <SvgSubmenuExpand />
          </div>
        )}
      </div>
    </div>
  );
};

export default TableSearchHeader;
