import "./index.scss";
import { Checkbox } from "primereact/checkbox";

const SectionsInputs = ({ sections, onSectionChange }) => {
  return (
    <div className="sections_inputs">
      <div className="label_container">
        <label className="inputs_text">Section</label>
        <div className="required">*</div>
      </div>
      <div className="flex gap-6">
        <div className="flex align-items-center">
          <Checkbox
            inputId="A"
            value="A"
            onChange={onSectionChange}
            checked={sections?.includes("A")}
          />
          <label htmlFor="A" className="ml-2">
            A
          </label>
        </div>
        <div className="flex align-items-center">
          <Checkbox
            inputId="B"
            value="B"
            onChange={onSectionChange}
            checked={sections?.includes("B")}
          />
          <label htmlFor="B" className="ml-2">
            B
          </label>
        </div>
        <div className="flex align-items-center">
          <Checkbox
            inputId="C"
            value="C"
            onChange={onSectionChange}
            checked={sections?.includes("C")}
          />
          <label htmlFor="C" className="ml-2">
            C
          </label>
        </div>
        <div className="flex align-items-center">
          <Checkbox
            inputId="D"
            value="D"
            onChange={onSectionChange}
            checked={sections?.includes("D")}
          />
          <label htmlFor="D" className="ml-2">
            D
          </label>
        </div>
      </div>
    </div>
  );
};

export default SectionsInputs;
