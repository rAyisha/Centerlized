import React from "react";
import { Dropdown } from "primereact/dropdown";
import { useLanguage } from "./LanguageContext";

const LangSwitch = () => {
  const { switchLanguage, language }: any = useLanguage();

  // Language options for the dropdown
  const languageOptions = [
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" },
    // { label: 'Filipino', value: 'ph' },
    // {label:'Arabic',value:'ar'},
    // {label:'Tamil',value:'ta'},
    // {label:'Malayalam',value:'ml'},
    // {label:'Kannada',value:'kn'},
    // {label:'Telugu',value:'te'},
    // {label:'Odia',value:'or'},
    // {label:'Hindi',value:'hi'},
  ];

  const handleLanguageChange = (e) => {
    switchLanguage(e.value); // Switch to the selected language
  };

  return (
    <Dropdown
      value={language}
      options={languageOptions}
      onChange={handleLanguageChange}
      placeholder="Select Language"
      optionLabel="label"
      style={{ width: "12rem" }} // Optional styling for the dropdown width
    />
  );
};

export default LangSwitch;
