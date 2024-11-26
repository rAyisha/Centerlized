import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.scss";
import { TOKEN } from "../../utility/constant";
import NavBar from "../../components/navBar";
import "../../utility/them.scss";
import Sidebar from "../../components/sideBar";

const ProtectedLayout = () => {

  const Auth = () => {
    const user = Cookies.get(TOKEN);
    return !!user;
  };

  // log out automatially after 1 hour
  // useEffect(() => {
  // const AUTO_LOGOUT_TIMEOUT = 60 * 60 * 1000;
  //   if (token) {
  //     const autoLogOutTime = setTimeout(() => {
  //       dispatch(logOut(null));
  //     }, AUTO_LOGOUT_TIMEOUT);
  //     return () => clearTimeout(autoLogOutTime);
  //   }
  // }, []);

  return (
    <div className="protected__layout__container">
      <div className="sidebar_container">
        <Sidebar />
      </div>
      <div className="main__content">
        <div className="protected__layout__header">
          <NavBar />
        </div>
        {Auth() ? (
          <div className="protected__layout__content__space">
            <Outlet />
          </div>
        ) : (
          <Navigate to="login" replace />

        )}
      </div>
    </div>
  );
};

export default ProtectedLayout;
