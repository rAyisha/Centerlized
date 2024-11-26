import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import "./index.scss";
import logo from "../../assets/images/Logo.png";
import haflogo from "../../assets/images/half-logo.png";
import SvgZenixIcon from "../../assets/svgIcon/SvgZenixIcon";
import useStateValue from "../../contex/useStateValue";
import { useContext, useEffect, useState } from "preact/hooks";
import { Tooltip } from 'primereact/tooltip';
import { useDispatch, useSelector } from "react-redux";
import { getModuleAccessMiddleware, getSideBarListMiddleware } from "./store/SideBarMiddleware";
import { AppDispatch } from "../../redux/store";
import SvgNextarrow from "../../assets/svgIcon/SvgNextArrow";
import SvgDot from "../../assets/svgIcon/SvgDot";
import LanguageContext from "../../config/LanguageContext";

interface SidebarMenuProps {
  menuData: any[]
}

interface MenuItem {
  id: number;
  name: string;
  route: string;
}

const SidebarMenu: preact.FunctionalComponent<SidebarMenuProps> = ({ menuData = [] }) => {
  const [{ theme }] = useStateValue();
  const location = useLocation();
  const { translations } = useContext(LanguageContext);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [activeSubMenuId, setActiveSubMenuId] = useState<null | number>(
    null
  );

  const onMenuClick = (item: MenuItem) => {
    navigate(item.route)
    dispatch(getModuleAccessMiddleware(item.id))
  }
  const ShowIcon = (index: string, path: string) => {
    switch (index) {
      case "1":
        return (
          <SvgDot
            color={
              path === location.pathname
                ? theme?.baseTextColor
                : theme?.baseTextInactiveColor
            }
          />
        );
      // case "29":
      //   return (
      //     <SvgNextarrow 
      //     color={
      //       path === location.pathname
      //         ? theme?.baseTextColor
      //         : theme?.baseTextInactiveColor
      //     }
      //     />
      //   );
      case "29":
        return (
          <SvgDot
            color={
              path === location.pathname
                ? theme?.baseTextColor
                : theme?.baseTextInactiveColor
            }
          />
        );
      case "3":
        return (
          <SvgDot
            color={
              path === location.pathname
                ? theme?.baseTextColor
                : theme?.baseTextInactiveColor
            }
          />
        );
      case "6":
        return (
          <SvgDot
            color={
              path === location.pathname
                ? theme?.baseTextColor
                : theme?.baseTextInactiveColor
            }
          />
        );
      case "5":
        return (
          <SvgZenixIcon
            color={
              path === location.pathname
                ? theme?.baseTextColor
                : theme?.baseTextInactiveColor
            }
          />
        );
      default:
        return (
          <SvgDot
            color={
              path === location.pathname
                ? theme?.baseTextColor
                : theme?.baseTextInactiveColor
            }
          />
        );
    }
  };

  const handleSubmenu = (id: number) => {
    if (activeSubMenuId != id) {
      setActiveSubMenuId(id);
    } else {
      setActiveSubMenuId(null);
    }
  };
  // console.log("item?.id",menuData?[0].route)

  const getActiveSubMenuId = (data: any[]) => {
    for (let item of data) {
      if (item.route === location.pathname) {
        dispatch(getModuleAccessMiddleware(item.id))
        return item.id;
      }
      if (item.children) {
        const childId = getActiveSubMenuId(item.children)
        if (childId) {
          return item.id
        }
      }
    }
    return null
  }

  useEffect(() => {
    const id = getActiveSubMenuId(menuData)
    if (id) {
      setActiveSubMenuId(id)
    }
  }, [menuData])
  return (
    <div className="sidebar__list">
      <div className="main__menu__list">
        {menuData?.map((item: any) => {
          if (!item?.children) {
            return (
              <div
                key={item.id}
                className={`menu__list cursor-pointer ${location.pathname === item.route
                  ? "active__menu"
                  : "inactive__menu"
                  }`}
                onClick={() => onMenuClick(item)}
              >
                <div className="icon__controller">
                  {ShowIcon(item?.id.toString(), item.route)}
                </div>
                <div className="menu__title">{translations?.SIDEBAR_NAMES?.[item?.name] || item?.name}</div>
              </div>
            );
          } else {
            return (
              <div className="submenu__container">
                <div
                  key={item.id}
                  className={`menu__list cursor-pointer ${location.pathname === item.route
                    ? "active__menu"
                    : "inactive__menu"
                    }`}
                  onClick={() => handleSubmenu(item?.id)}
                >
                  <div
                    className={`icon__controller ${activeSubMenuId === item?.id ? "icon_down" : ""
                      }`}
                  >
                    {/* {ShowIcon(index, item?.title)} */}
                    {/* ➤ */}
                    <SvgNextarrow
                      color={
                        item.route === location.pathname
                          ? theme?.baseTextColor
                          : theme?.baseTextInactiveColor
                      }
                    />
                  </div>
                  <div className="menu__title">{translations?.SIDEBAR_NAMES?.[item?.name] || item?.name}</div>
                </div>
                {activeSubMenuId === item?.id && (
                  // <>
                  //   {item?.children?.map((item: any) => {
                  //     return (
                  //         <Link
                  //           key={item.id}
                  //           to={item.pathRoute}
                  //           className={`menu__list cursor-pointer ${location.pathname === item.route
                  //               ? "active__menu"
                  //               : "inactive__menu"
                  //             }`}
                  //         >
                  //           <div className="icon__controller">
                  //             {ShowIcon(item?.id, item.route)}
                  //           </div>
                  //           <div className="menu__title">{item?.name}</div>
                  //         </Link>

                  //       );
                  //   })}
                  // </>
                  <SidebarMenu menuData={item.children} />
                )}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

const Sidebar: preact.FunctionalComponent = () => {
  const dispatch = useDispatch<AppDispatch>();


  const { sideBarList } = useSelector((state: any) => {
    return {
      sideBarList: state.sideBarReducers?.sideBarList?.data,
    };
  });




  const ApiFeatch = () => {
    dispatch(getSideBarListMiddleware())
  }

  useEffect(() => {
    ApiFeatch()
  }, [])


  return (
    <div className="sidebar__sub__container">
      <Tooltip target=".menu__list" position="right" />
      <div className="logo__container">
        <div className="full__image__controller">
          <Logo logoImage={logo} />
        </div>
        <div className="half__image__controller">
          <Logo logoImage={haflogo} />
        </div>
      </div>
      <div className="sidebar__menu__controller">
        <SidebarMenu menuData={sideBarList} />
      </div>
    </div>
  );
};

export default Sidebar;
