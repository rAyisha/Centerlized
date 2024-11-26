import "./index.scss";
import SvgThreeDots from "../../../../assets/svgIcon/SvgThreeDots";
import { OverlayPanel } from "primereact/overlaypanel";
import { useEffect, useRef, useState } from "preact/hooks";
import { useOverlayScrollListener } from "primereact/hooks";

const MoreButton = ({
  ref,
  icon = <SvgThreeDots />,
  menuOptions = [],
  rowData = null,
}:any) => {
  const menuRef = ref || useRef(null);
  const buttonRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const toggleMenu = (e:any) => {
    e.stopPropagation();
    setVisible((prevVisible) => !prevVisible);
    menuRef.current?.toggle(e);
  };

  const hideMenu = () => {
    setVisible(false);
    menuRef.current?.hide();
  };

  const menuClick = (e:any, onClick:any) => {
    e.stopPropagation();
    onClick(rowData);
    hideMenu();
  };

  const [bindOverlayScrollListener, unbindOverlayScrollListener] = useOverlayScrollListener({
    target: buttonRef.current,
    listener: hideMenu,
    options: { passive: true },
    when: visible,
  });

  useEffect(() => {
    if (visible) {
      bindOverlayScrollListener();
    } else {
      unbindOverlayScrollListener();
    }
    return () => {
      unbindOverlayScrollListener();
    };
  }, [visible, bindOverlayScrollListener, unbindOverlayScrollListener]);

  return (
    <div className="menu_icon z-5 cursor-pointer overlay__panel__container">
      <span onClick={toggleMenu} ref={buttonRef}>
        {icon}
      </span>
      <OverlayPanel ref={menuRef} dismissable={true}>
        <div className="flex flex-column gap-3">
          {menuOptions.map((item:any, index:number) => (
            <div
              key={index}
              className={item?.disabled ? "overly__button__disabled" : "cursor-pointer"}
              onClick={(e) => menuClick(e, item.onClick)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </OverlayPanel>
    </div>
  );
};

export default MoreButton;
