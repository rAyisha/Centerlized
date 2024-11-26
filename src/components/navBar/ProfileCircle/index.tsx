import { Image } from "primereact/image";
import "./index.scss";
import ConfirmDeleteComponent from "../../DeleteDialog";
import { useState } from "preact/hooks";
import SvgLogout from "../../../assets/svgIcon/SvgLogOutIcon";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { logOut } from "../../../module/auth/loginModule/store/authModuleReducers";
const profileCircle = () => {
  const [logoutPopUp, setLogoutPopUp] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>()
  const accept = () => {
    setLogoutPopUp(false);
    dispatch(logOut(null));
  }

  const reject = () => {
    setLogoutPopUp(false)
  }
  return (
    <div onClick={() => setLogoutPopUp(true)} className="nav__circle cursor-pointer profile__container">
      <Image
        src="https://i.ibb.co/qRkmn10/black-profile.png"
        alt=""
        className="image__area"
      />
      <ConfirmDeleteComponent
        visible={logoutPopUp}
        onHide={() => setLogoutPopUp(false)}
        message="Are you sure you want to logout?"
        accept={accept}
        reject={reject}
        icon={<SvgLogout color="var(--base-theme-color)" />}
      />

    </div>
  );
};

export default profileCircle;
