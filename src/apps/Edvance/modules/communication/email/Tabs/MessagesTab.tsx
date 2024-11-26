import { useState } from "preact/hooks";
import Checkboxes from "../../../../../../components/CheckBox";
import CheckBoxGroup from "../../../../../../components/CheckBoxGroup";
import { Button } from "primereact/button";

const MessagesTab = ({ formik }: any) => {
  console.log(formik,"formikformik");
  const [selectedOption, setSelectedOption] = useState("A");

  console.log(selectedOption, "selectedOption...");
  const options = [
    { label: "Send Now", value: true },
    { label: "Schedule", value: true },
  ];
  const handleSelectOption = (selected) => {
    setSelectedOption(selected);
  };
  return (
    <div>
      <div className="form__inputs__label__container">
        <label className="form__inputs__text">Message To</label>
      </div>
      <div className="checkbox_controller">
        <Checkboxes label="Admin" />
        <Checkboxes label="Teacher" />
        <Checkboxes label="Accountant" />
        <Checkboxes label="Super Admin" />
        <Checkboxes label="Student" />
        <Checkboxes label="Parent" />
      </div>
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
        <Button label="Submit" onSubmit={formik?.handleSubmit}/>
      </div>
    </div>
  );
};

export default MessagesTab;
