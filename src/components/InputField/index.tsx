import { FunctionComponent } from "preact";
import "./index.scss";
import { ChangeEvent, memo, useState } from "preact/compat";
import "react-transliterate/dist/index.css";
import SvgEye from "../../assets/svgIcon/SvgEye";
// import SvgEyeclose from "../../assets/svgIcon/SvgCloseEye";
import SvgEyeopen from "../../assets/svgIcon/SvgEyeopen";
import SvgEyeclose from "../../assets/svgIcon/SvgEyeclose";
interface FormDropdownProps {
  value?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  error?: string;
  className?: any;
  inputMode?: string | undefined;
  type?: string;
  translate?: boolean;
}
const InputField: FunctionComponent<FormDropdownProps> = ({
  value,
  name = "",
  onChange = () => { },
  label,
  required = false,
  placeholder = "Enter",
  className = "",
  readOnly,
  invalid,
  disabled,
  error,
  inputMode,
  type = "normal",
  ref,
  translate = false
  
}) => {


  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };
  const inputType = name === "password" && isPasswordVisible ? "text" : inputMode || "text";
  return (
    <div className={`${className} inputfield__container`}>
      {label && (
        <div className="inputfield__label__container mb-2">
          <label className={`inputfield__label ${disabled ? "disabled" : ""}`}>
            {label}
          </label>
          {required === true && <div className="inputfield__important">*</div>}
        </div>
      )}
      <div className="overall_field_container">
        <input
          className={`${translate ? "lang__based" : ""} ${error ? "invalid" : ""
            }  input__controller ${type}__input`}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
        
          // type={inputMode ? inputMode : "text"}
          ref={ref}
          type={inputType}
          
        />
        {
          name === "password" && 
          <div className="icon_field_container"  onClick={handleTogglePasswordVisibility}>
         {isPasswordVisible ? <SvgEyeclose/>:<SvgEyeopen/>  } 
          </div>
        }
        
      </div>
      {error && <div className="error__view mt-2">{error}</div>}
    </div>
  );
};

export default memo(InputField);
