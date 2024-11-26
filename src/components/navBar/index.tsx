// import SearchBar from "../SearchBar";
import Options from "./DropDown";
import "./index.scss";
import NotificationCircle from "./NotificationCircle";
import ThemeSelector from "./ThemeSelector";
import SideBarToggle from "./Toggle";
import ProfileCircle from "./ProfileCircle";
import MobileDropDown from "./MobileDropDown";
// import MobileSearchBar from "./MobileSearchBar";
import LanguageSelector from "../../config/LanguageSelector";
const NavBar = () => {
  return (
    <div className="navbar__main__container">
      <div className="nav__left">
        <SideBarToggle />
        <div className="desktop__options">
          <Options />
        </div>
        <MobileDropDown />
      </div>
      <div className="nav__right">
        <LanguageSelector/>
        {/* <div className="desktop__search">
          <SearchBar />
        </div>
        <MobileSearchBar /> */}
        <ThemeSelector />
        <NotificationCircle />
        <ProfileCircle />
      </div>
    </div>
  );
};

export default NavBar;
