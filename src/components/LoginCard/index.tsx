import { FunctionComponent } from "preact";
import "./index.scss";

interface Props {
  className?: string;
}

const LoginCard: FunctionComponent<Props> = ({ children, className = "" }) => {
  return <div className={`login__custom__card ${className}`}>{children}</div>;
};

export default LoginCard;
