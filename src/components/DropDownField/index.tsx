import { FunctionComponent } from "preact";
import "./index.scss";
import { useState, useEffect, useMemo } from "preact/hooks";
import { memo } from "preact/compat";
import {
  Dropdown,
  DropdownChangeEvent,
  DropdownProps,
} from "primereact/dropdown";

interface FormDropdownProps {
  value?: string | number | boolean | null | undefined;
  onChange?: (e: DropdownChangeEvent) => void;
  name?: string;
  label?: string;
  required?: boolean;
  options?: DropdownProps["options"];
  placeholder?: string;
  optionLabel?: string;
  optionValue?: string;
  readOnly?: boolean;
  disabled?: boolean;
  hasNoneOption?: boolean;
  error?: string;
  eventBubbling?: boolean;
  type?: string;
}

const FormDropdownField: FunctionComponent<FormDropdownProps> = ({
  value,
  onChange = () => {},
  name,
  label,
  required = false,
  options = [],
  placeholder = "Select",
  optionLabel,
  optionValue,
  readOnly = false,
  disabled = false,
  hasNoneOption = false,
  error,
  eventBubbling = false,
  type = "normal",
}) => {
  const [dropdownValue, setDropdownValue] = useState<
    string | number | boolean | null | undefined
  >();

  const handleChange = (e: DropdownChangeEvent) => {
    if (eventBubbling) {
      e.stopPropagation();
    }
    setDropdownValue(e.value);
    if (optionValue) {
      const destructuredValue = e.value[optionValue];
      e = {
        ...e,
        target: { ...e.target, value: destructuredValue },
        value: destructuredValue,
      };
    }
    onChange(e);
  };

  const dropdownOptions = useMemo(() => {
    const noneOption = optionValue
      ? { [optionLabel as string]: "None", [optionValue]: null }
      : { label: "None", value: null };
    return hasNoneOption ? [noneOption, ...options] : options;
  }, [options, hasNoneOption]);

  useEffect(() => {
    let settingValue = value;
    if (optionValue) {
      settingValue = dropdownOptions?.find(
        (item) => item[optionValue] === value
      );
    }
    setDropdownValue(settingValue);
  }, [value]);

  return (
    <div className="dropdownfield__container">
      {label && (
        <div className="dropdownfield__label__container mb-2">
          <label
            className={`dropdownfield__label ${disabled ? "disabled" : ""} `}
          >
            {label}
          </label>

          {required && <div className="label__important">*</div>}
        </div>
      )}
      <div className={" dropdownfield__input"}>
        <Dropdown
          value={dropdownValue}
          options={dropdownOptions}
          onChange={handleChange}
          name={name}
          placeholder={placeholder}
          optionLabel={optionLabel}
          disabled={disabled || readOnly}
          className={`${readOnly ? "readonly" : ""} ${type}__dropdown ${
            error ? "invalid" : "" 
          }`}
        />
      </div>
      {error && <div className="error__view mt-2">{error}</div>}
    </div>
  );
};

export default memo(FormDropdownField);
export type { DropdownChangeEvent };