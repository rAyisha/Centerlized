import { useState } from "preact/hooks";
import CheckBoxGroup from "../../../../../../components/CheckBoxGroup";
import { ListBox } from "primereact/listbox";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import DatePicker from "../../../../../../components/DatePicker";
import SvgDeleteIcon from "../../../../../../assets/svgIcon/SvgDeleteIcon";
import SvgCalendar from "../../../../../../assets/svgIcon/SvgCalendar";

const Individual = ({formik}:any) => {
  console.log(formik,"formikformik");
  const [selectedOption, setSelectedOption] = useState("A");
  const [selectedCity, setSelectedCity] = useState(null);
  console.log(selectedOption, "selectedOption...");
  const options = [{ label: "Send Now", value: true }, { label: "Schedule", value: true }];
  const handleSelectOption = (selected) => {
    setSelectedOption(selected);
  };
  const Template = (option) => {
    return (
      <div className="template_overall">
        <div>{option.name}</div>
        {/* <img
          alt={option.name}
          src="https://i.ibb.co/3rtFNHh/No-Data-Found.png"
          className={`flag flag-${option.code.toLowerCase()}`}
          style={{ width: "1.25rem" }}
        /> */}
        <SvgDeleteIcon />
      </div>
    );
  };
  const cities = [
    { name: " Edward Thomas(18001) (Student)", code: "NY" },
    // { name: "Rome", code: "RM" },
  ];
  return (
    <div className="w-full">
      <div className="form__inputs__label__container">
        <label className="form__inputs__text">Message To</label>
        <div className="label__important">*</div>
      </div>
      <div className="w-full">
        <div className="custom_box_design">
          <div className="drop_container">
            {/* <FormDropdown placeholder="Select" /> */}
            <Dropdown
              value={selectedCity}
              //   onChange={(e) => setSelectedCity(e.value)}
              options={[]}
              optionLabel="name"
              placeholder="Select"
              className="w-full"
            />
          </div>

          <Button label="Add" />
        </div>
      </div>

      <div className="w-full">
        <ListBox
          filter
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={cities}
          optionLabel="name"
          className="w-full list_box_container"
          itemTemplate={Template}
        />
      </div>
      <div className="radiobutton__overall mt-2">
        <CheckBoxGroup
          label=""
          options={options}
          value={[selectedOption]}
          onChange={handleSelectOption}
        />
        {selectedOption === "Schedule" && (
          <DatePicker label="" icon={<SvgCalendar />} timeOnly required={false} />
        )}
      </div>
      <div className="buttons_layout">
        <Button label="Cancel" outlined />
        <Button label="Submit" onSubmit={formik?.handleSubmit}/>
      </div>
    </div>
  );
};

export default Individual;
