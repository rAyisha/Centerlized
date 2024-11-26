import { Image } from "primereact/image";
import { FunctionComponent } from "preact";
import MainLogo from "../../assets/images/main-logo.svg";
interface Props {
  logoImage?: any;
  className?: string;
}
const Logo: FunctionComponent<Props> = ({
  logoImage = MainLogo,
  className,
}) => {
  return <Image src={logoImage} alt="" className={className} />;
};

export default Logo;
