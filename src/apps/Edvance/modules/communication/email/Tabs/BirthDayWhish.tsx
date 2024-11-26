import { useState } from "preact/hooks";
import { InputTextarea } from "primereact/inputtextarea";
import CheckBoxGroup from "../../../../../../components/CheckBoxGroup";
import { Button } from "primereact/button";

const BirthDayWhish = ({formik}:any) => {
  console.log(formik,"formikformik");
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("A");

  console.log(selectedOption, "selectedOption...");
  const options = [{ label: "Send Now", value: true }, { label: "Schedule", value: true }];
  const handleSelectOption = (selected) => {
    setSelectedOption(selected);
  };
  return (
    <div className="w-full">
      <div className="form__inputs__label__container">
        <label className="form__inputs__text">Message To</label>
        <div className="label__important">*</div>
      </div>

      <InputTextarea
        className="w-full"
        autoResize
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        rows={5}
        cols={30}
      />
      <div>
        <CheckBoxGroup
          label=""
          options={options}
          value={[selectedOption]}
          onChange={handleSelectOption}
        />
      </div>
      <div className="buttons_layout">
        <Button label="Cancel" outlined />
        <Button label="Send" onSubmit={formik?.handleSubmit}/>
      </div>
    </div>
  );
};

export default BirthDayWhish;
