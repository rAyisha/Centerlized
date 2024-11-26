import { FunctionComponent } from "preact";
import "./index.scss";
import { Checkbox } from "primereact/checkbox";

interface Props {
  label?: string;
  value?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  type?: "checkbox" | "radio";
  refLabel?: string;
  inputId?: number | string;
}

const CheckBox: FunctionComponent<Props> = ({
  label = "",
  value,
  onChange = () => { },
  disabled = false,
  type = "checkbox",
  refLabel = label,
  inputId = ""
}) => {
  return (
    <div className="checkbox__component">
      <div className="flex align-items-center gap-2">
        {type === "radio" ? (
          <input
            type="radio"
            checked={value}
            id={`${refLabel}${inputId}`}
            onClick={() => onChange(!value)}
            disabled={disabled}
          />
        ) : (
          <Checkbox
            checked={value}
            inputId={`${refLabel}${inputId}`}
            onChange={(e) => onChange(e.checked)}
            disabled={disabled}
          />
        )}
        <label htmlFor={`${refLabel}${inputId}`} className="checkbox__label">{label}</label>
      </div>
    </div>
  );
};

export default CheckBox;