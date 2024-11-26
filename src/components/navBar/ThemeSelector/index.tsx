import { useEffect, useRef } from "preact/hooks";
import SvgThemeIcon from "../../../assets/svgIcon/SvgThemeIcon";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import "./index.scss";
import useStateValue from "../../../contex/useStateValue";
import { actionTypes } from "../../../contex/actionTypes";
const ThemeSelector = () => {
  const [{ theme }, dispatch] = useStateValue();
  const menuTheme = useRef<any>(null);
  const toast = useRef(null);

  const handleThemeSetup = () => {
    const previosTheme = localStorage.getItem("Theme");
    const themeName = previosTheme || "normal";
    if (themeName) {
      document.documentElement.setAttribute("data-theme", themeName);
      const root = document.documentElement;
      const styles = getComputedStyle(root);
      const inactiveColor = styles.getPropertyValue("--inactive-color").trim();
      const activeColor = styles.getPropertyValue("--active-color").trim();
      const overallColor = styles.getPropertyValue("--overall-color").trim();
      const totalColor = styles.getPropertyValue("--total-color").trim();
      const barBaseColor = styles.getPropertyValue("--bar-base-color").trim();
      const barTopColor = styles.getPropertyValue("--bar-top-color").trim();
      const barBottomColor = styles
        .getPropertyValue("--bar-bottom-color")
        .trim();
      const baseTextColor = styles.getPropertyValue("--base-text-color").trim();
      const baseTextInactiveColor = styles
        .getPropertyValue("--base-text-inactive-color")
        .trim();
      dispatch({
        type: actionTypes.THEME_SETUP,
        payload: {
          name: themeName,
          overallColor: overallColor,
          totalColor: totalColor,
          inactiveColor: inactiveColor,
          activeColor: activeColor,
          barBaseColor: barBaseColor,
          barTopColor: barTopColor,
          barBottomColor: barBottomColor,
          baseTextColor: baseTextColor,
          baseTextInactiveColor:baseTextInactiveColor,
        },
      });
    }
  };
  useEffect(() => {
    handleThemeSetup();
  }, []);

  const handleChange = (value: string) => {
    const themeName = value.toLowerCase();
    localStorage.setItem("Theme", themeName);
    handleThemeSetup();
  };
  const themeOptions: any = [
    {
      label: "",
      items: [
        {
          label: (
            <div
              className="color__picker"
              style={{ backgroundColor: "#4169E1" }}
            ></div>
          ),
          command: () => {
            handleChange("RoyalBlue");
          },
        },
        {
          label: (
            <div
              className="color__picker"
              style={{ backgroundColor: "#3D3061" }}
            ></div>
          ),
          command: () => {
            handleChange("Jacarta");
          },
        },
        {
          label: (
            <div
              className="color__picker"
              style={{ backgroundColor: "#EFEFFF" }}
            ></div>
          ),
          command: () => {
            handleChange("TitanWhite");
          },
        },
        {
          label: (
            <div
              className="color__picker"
              style={{ backgroundColor: "#F1FFEF" }}
            ></div>
          ),
          command: () => {
            handleChange("SugarCane");
          },
        },
      ],
    },
  ];
  useEffect(() => {
    const Name = localStorage.getItem("Theme");
    if (Name) {
      document.documentElement.setAttribute("data-theme", Name);
    }
  }, []);
  return (
    <div
      className="nav__circle cursor-pointer theme__control"
      aria-controls="popup_menu_theme"
      aria-haspopup
      onClick={(event) => menuTheme.current?.toggle(event)}
    >
      <Toast ref={toast}></Toast>
      <SvgThemeIcon color={theme?.baseTextColor} />
      <Menu
        model={themeOptions}
        popup
        ref={menuTheme}
        id="popup_menu_theme"
        className="theme__picker__menu"
      />
    </div>
  );
};

export default ThemeSelector;
