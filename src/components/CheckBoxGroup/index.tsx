import { FunctionComponent } from "preact";
import "./index.scss";
import { Checkbox } from "primereact/checkbox";

interface OptionType {
  label: string;
  value: any;
  readOnly?: boolean;
  disabled?: boolean;
}

interface Props {
  label?: string;
  options: OptionType[];
  value: any[];
  onChange?: (values: any[]) => void;
  disabled?: boolean;
  type?: "checkbox" | "radio";
  gap?: number;
  refLabel?: string;
}

const CheckBoxGroup: FunctionComponent<Props> = ({
  label,
  options,
  value = [],
  onChange = () => {},
  disabled = false,
  type = "checkbox",
  gap = 3,
  refLabel = "",
}) => {
  const toggleCheckbox = (toggledValue: any) => {
    const updatedValues = value.includes(toggledValue)
      ? value.filter((item) => item !== toggledValue)
      : [...value, toggledValue];
    onChange(updatedValues);
  };

  return (
    <div className="checkbox__group__component">
      {label && <div className="checkbox__group__label">{label}</div>}
      <div className={`flex flex-wrap gap-${gap}`}>
        {options?.map((item, index) => (
          <div className={`flex align-items-center gap-2`} key={index}>
            {type === "radio" ? (
              <input
                type="radio"
                checked={value.includes(item.value)}
                id={`${refLabel}_${item.value}`}
                onClick={() => toggleCheckbox(item.value)}
                disabled={disabled || item.disabled}
              />
            ) : (
              <Checkbox
                checked={value.includes(item.value)}
                inputId={`${refLabel}_${item.value}`}
                onChange={() => toggleCheckbox(item.value)}
                disabled={disabled || item.disabled}
              />
            )}
            <label htmlFor={`${refLabel}_${item.value}`}>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxGroup;
