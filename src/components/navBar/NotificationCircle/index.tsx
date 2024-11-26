import SvgNotificationIcon from "../../../assets/svgIcon/SvgNotificationIcon";
import useStateValue from "../../../contex/useStateValue";

const NotificationCircle = () => {
  const [{ theme }] = useStateValue();
  return (
    <div className="nav__circle cursor-pointer" onClick={() => {}}>
      <SvgNotificationIcon color={theme?.baseTextColor}/>
    </div>
  );
};

export default NotificationCircle;
