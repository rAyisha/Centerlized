import { useState } from "preact/hooks";
import DropDwonForm from "../../../../../../components/DropDownField";
import CheckBoxGroup from "../../../../../../components/CheckBoxGroup";
import { Button } from "primereact/button";

const ClassTabScreen = ({formik}:any) => {
  console.log(formik,"formikformik");
  const [selectedOption, setSelectedOption] = useState("A");

  console.log(selectedOption, "selectedOption...");
  const options = [{ label: "Send Now", value: true }, { label: "Schedule", value: true }];
  const sectionOptions = [{ label: "A", value: true }, { label: "B", value: true }, { label: "C", value: true }, { label: "D", value: true }]
  const handleSelectOption = (selected) => {
    setSelectedOption(selected);
  };
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="lable__message">
          Message To<span className="span__start">*</span>
        </div>
        <div className="grid align-items-center">
          <div className="col-6">
            <DropDwonForm label="Class" required={true} />
          </div>
          <div className="col-6">
            <div className="lable__message">Section</div>

            <div className="checkbox_controller checkbox__controller__border ">
              <CheckBoxGroup value={[]} options={sectionOptions} />
            </div>
          </div>
        </div>
        <div>
          <CheckBoxGroup
            label=""
            options={options}
            value={[selectedOption]}
            onChange={handleSelectOption}
          />
        </div>
      </div>
      <div className="buttons_layout">
        <Button label="Cancel" outlined />
        <Button label="Submit"  onSubmit={formik?.handleSubmit}/>
      </div>
    </div>
  );
};

export default ClassTabScreen;
