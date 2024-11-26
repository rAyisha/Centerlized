import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import SvgSearchIcon from "../../../assets/svgIcon/SvgSearchIcon";
import "./index.scss";
import useStateValue from "../../../contex/useStateValue";

const MobileSearchBar: FunctionComponent = () => {
  const [{ theme }] = useStateValue();
  const [isVisible, setIsVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleSearch = () => {
    setIsVisible(!isVisible);
    setSearchValue("");
  };

  const handleSearch = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="mobile__search">
      {/* Button to trigger search */}
      <button className="nav__circle search-trigger" onClick={toggleSearch}>
        <SvgSearchIcon color={theme?.baseTextColor} />
      </button>

      {/* Full-screen search modal */}
      {isVisible && (
        <div className="spotlight-search__overlay">
          <div className="spotlight-search__container">
            <button className="search-trigger" onClick={toggleSearch}>
              <SvgSearchIcon />
            </button>
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearch}
              className="spotlight-search__input"
            />
            <button className="close-btn" onClick={toggleSearch}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSearchBar;
