import { FunctionComponent } from "preact";
import { memo } from "preact/compat";
import "./index.scss";
import { ButtonProps, Button as PrimeButton } from "primereact/button";
import { IconType } from "primereact/utils";

type Props = {
  label?: string;
  icon?: IconType<ButtonProps>;
  iconPos?: "top" | "bottom" | "left" | "right";
  outlined?: boolean;
  onClick?: (e: MouseEvent) => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Button: FunctionComponent<Props> = ({
  label,
  icon,
  iconPos,
  outlined = false,
  onClick = () => {},
  disabled = false,
  className,
  type
}) => {
  const buttonClass = `${className} ${icon && label ? 'has-two-children' : ''}`;
  return (
    <div className="common__button">
      <PrimeButton
        label={label}
        icon={icon}
        iconPos={iconPos}
        outlined={outlined}
        onClick={onClick}
        disabled={disabled}
        className={buttonClass}
        type={type}
      />
    </div>
  );
};

export default memo(Button);
