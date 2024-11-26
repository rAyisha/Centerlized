// src/components/LanguageSelector.tsx
import { useContext, useEffect } from "preact/hooks";
import LanguageContext from "./LanguageContext";
// import { useEffect } from "react";
import "./index.scss";
import DropDownField from "../components/DropDownField";
import { languageOptions } from "../utility/constant";
const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event: Event) => {
    const selectedLanguage = (event.target as HTMLSelectElement).value;
    // console.log(event, "find selectedLanguage");
    function family(font: string) {
      switch (font) {
        case "en":
          return "Poppins"; // English
        case "ta":
          return "Baamini"; // Tamil
        case "kn":
          return "Nudi"; // Kannada
        case "hi":
          return "Devanagari"; // Hindi
        default:
          return "Poppins";
      }
    }
    localStorage.setItem("Lang", family(selectedLanguage));
    localStorage.setItem("Lang-key",selectedLanguage);
    document.documentElement.setAttribute(
      "data-family",
      family(selectedLanguage)
    );
    setLanguage(selectedLanguage);
  };
  useEffect(() => {
    const previosLanguage = localStorage.getItem("Lang");
    if (previosLanguage) {
      document.documentElement.setAttribute("data-family", previosLanguage);
    } else {
      document.documentElement.setAttribute("data-family", "Poppins");
    }
  }, []);

  return (
    <DropDownField
      label=""
      value={language}
      onChange={handleLanguageChange}
      options={languageOptions}
      placeholder="Select Language"
    />
  );
};

export default LanguageSelector;
