import { FunctionComponent } from "preact";
import "./index.scss";
import { useEffect, useState } from "preact/hooks";
import SvgSearchIcon from "../../assets/svgIcon/SvgSearchIcon";

type Props = {
  searchValue?: string;
  onSearch?: (value: string) => void;
  className?: string;
};

const SearchBar: FunctionComponent<Props> = ({
  searchValue = "",
  onSearch = () => {},
  className = "",
}) => {
  const [value, setValue] = useState(searchValue);
  const [isExpanded, setIsExpanded] = useState(false); // For mobile view

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(value);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  // Handle expanding/collapsing on mobile view
  const toggleSearchBar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`search__layout ${className}`}>
      <div className={`search__export__layout ${isExpanded ? 'expanded' : ''}`}>
        <div className={`search__view ${isExpanded ? 'active' : ''}`}>
          <input
            placeholder="Search"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            className={`search__input ${isExpanded ? 'visible' : ''}`}
          />
          <div className="search__icon" onClick={toggleSearchBar}>
            <SvgSearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
