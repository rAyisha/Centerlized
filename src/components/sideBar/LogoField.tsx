import { Image } from "primereact/image";
import Logo from "../../assets/images/Logo.png";

const LogoField = () => {
  return (
    <div className="logo__controller">
      <Image src={Logo} alt="" width="100%" className="sidebar_logo__image" />
    </div>
  );
};

export default LogoField;
