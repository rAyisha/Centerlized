import { useEffect, useState } from "preact/hooks";
import SvgToggleIcon from "../../../assets/svgIcon/SvgToggleIcon";
import SideBarpanel from "../../SideBarpanel";
import useStateValue from "../../../contex/useStateValue";
const SideBarToggle = () => {
  const [{ theme }] = useStateValue();
  const [sidebarPanel, setSidebarPanel] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleSidebarPanel = () => {
    setSidebarPanel(!sidebarPanel);
  };
  const handleMainSidebar = () => {
    const sidebarElement = document.querySelector(".sidebar_container");
    const mainContentElement = document.querySelector(".main__content");
    const fullLogo = document.querySelector(".full__image__controller");
    const halfLogo = document.querySelector(".half__image__controller");
    // const sidebarList = document.querySelector(".sidebar__list");
    const sidebarTitles = document.querySelectorAll(".menu__title");

    if (
      sidebarElement &&
      mainContentElement &&
      fullLogo &&
      halfLogo &&
      sidebarTitles.length > 0
    ) {
      sidebarElement.classList.toggle("collapsed");
      mainContentElement.classList.toggle("collapsed");
      fullLogo.classList.toggle("collapsed");
      halfLogo.classList.toggle("collapsed");
      sidebarTitles.forEach((title) => {
        title.classList.toggle("collapsed");
      });
      setTimeout(() => {
        sidebarElement.classList.toggle("delaycollapsed");
      }, 300);
    } else {
      console.error("Sidebar element not found.");
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      const screenWidth = window.innerWidth;
      if (screenWidth < 1200) {
        const sidebarElement = document.querySelector(".sidebar_container");
        if (sidebarElement && !sidebarElement.classList.contains("collapsed")) {
          handleMainSidebar();
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (screenWidth < 1200) {
      const sidebarElement = document.querySelector(".sidebar_container");
      if (sidebarElement && !sidebarElement.classList.contains("collapsed")) {
        handleMainSidebar();
      }
    }
  }, []);

  const toggleSidebar = () => {
    if (screenWidth < 1200) {
      handleSidebarPanel();
    } else {
      handleMainSidebar();
    }
  };

  return (
    <div onClick={toggleSidebar} className="p-2 flex align-items-center">
      <SvgToggleIcon color={theme?.baseTextColor} />
      <SideBarpanel
        sidebarPanel={sidebarPanel}
        setSidebarPanel={setSidebarPanel}
      />
    </div>
  );
};

export default SideBarToggle;
