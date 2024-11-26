import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Calendar } from "primereact/calendar";
import "./index.scss";
import SvgTimeIcon from "../../assets/svgIcon/SvgTimeIcon";
import SvgCalendar from "../../assets/svgIcon/SvgCalendar";

interface DatePickerProps {
  value?: any;
  onChange?: (value: any) => void;
  name?: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  showIcon?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  icon?: any;
  timeOnly?: any;
  className?: any;
  error?: any;
  type?: string;
  minDate?: Date;
  maxDate?: Date;
}
const DatePicker: FunctionComponent<DatePickerProps> = ({
  value,
  onChange,
  name,
  label,
  required,
  placeholder = "Select",
  showIcon = true,
  timeOnly = false,
  icon = timeOnly ? <SvgTimeIcon /> : <SvgCalendar color="var(--base-theme-color)" />,
  disabled = false,
  readOnly = false,
  className,
  error,
  type = "normal",
  maxDate,
  minDate,
}) => {
  const [date, setDate] = useState<Date | null>(null);

  const dateToString = (date: Date) => {
    const specificDate = new Date(date);
    const year = specificDate.getFullYear();
    const month = ("0" + (specificDate.getMonth() + 1)).slice(-2);
    const day = ("0" + specificDate.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  };

  const timeToString = (date: Date) => {
    const specificTime = new Date(date).toLocaleTimeString().split(" ")[0];
    const hour = ("0" + specificTime.split(":")[0]).slice(-2);
    const minute = ("0" + specificTime.split(":")[1]).slice(-2);

    return `${hour}:${minute}:00`;
  };

  const stringToTime = (time: string | null) => {
    if (typeof time !== "string" || time === "") {
      return null;
    }

    const [hours, minutes, seconds] = time.split(":").map(Number);
    const today = new Date(0, 0, 0, hours, minutes, seconds);

    return today;
  };

  const stringToDate = (date: string | Date | null) => {
    return date instanceof Date ? date : typeof date === "string" && date !== "" ? new Date(date) : null;
  };

  const handleTimeChange = (e: any) => {
    setDate(e.value);
    if (onChange) {
      const formatedDate = timeOnly
        ? timeToString(e.value)
        : dateToString(e.value);
      const formatedEvent = {
        ...e,
        value: formatedDate,
        target: { ...e.target, value: formatedDate },
      };
      onChange(formatedEvent);
    }
  };

  useEffect(() => {
    if (timeOnly) {
      setDate(stringToTime(value));
    } else {
      setDate(stringToDate(value));
    }
  }, [value]);

  return (
    <div className="calender__container">
      <div className="calender__label__container">
        {label && (
          <label className={`calender__label__text mb-2 ${disabled ? "disabled" : ""}`}>{label}</label>
        )}
        {required === true && <div className="label__important">*</div>}
      </div>
      <div className="calender__input">
        <Calendar
          id="buttondisplay"
          name={name}
          value={date}
          onChange={handleTimeChange}
          placeholder={placeholder}
          showIcon={true}
          icon={showIcon && icon}
          disabled={disabled || readOnly}
          timeOnly={timeOnly}
          className={`${readOnly ? "readonly" : ""
            } ${className} ${type}__datepicker ${error ? "invalid" : ""}`}
          showOnFocus={!readOnly}
          minDate={minDate}
          maxDate={maxDate}
        />
      </div>
      {error && <div className="error__view mt-2">{error}</div>}
    </div>
  );
};

export default DatePicker;
