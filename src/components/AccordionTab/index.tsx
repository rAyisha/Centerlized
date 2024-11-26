import { AccordionTab, Accordion } from "primereact/accordion";
import { Checkbox } from "primereact/checkbox";
import "./index.scss";
import { useState } from "preact/hooks";

interface CustomAccordionTabProps {
  header: string;
  children: React.ReactNode;
  checktrue: boolean;
  totalamount?: string | number;
  activeIndex?:number | null;
}

const CustomAccordionTab: React.FC<CustomAccordionTabProps> = ({
  header,
  children,
  checktrue,
  activeIndex=null,
}) => {
  // Defining the state with proper types
  const [checked, setChecked] = useState<boolean>(false);
  const [iconchecked, setIconChecked] = useState<boolean>(false);


  const handletabs = () => {
    setIconChecked(!iconchecked);
    // setChecked(e.checked); // This line commented out due to no event in function
  };

  return (
    <Accordion activeIndex={activeIndex}>
      <AccordionTab
        onClick={handletabs}
        header={
          <div className="accordion">
            <div className="accordion-header">
              {checktrue && (
                <Checkbox
                  className="accordion-checkbox"
                  // onChange={e => setChecked(e.checked)} // This line is commented for now, but can be used if needed
                  checked={iconchecked}
                />
              )}
              <span className="accordion-header-title">{header}</span>
            </div>
            <div className="accordion-icon">
              {iconchecked ? (
                <i className="pi pi-chevron-up"></i>
              ) : (
                <i className="pi pi-chevron-down"></i>
              )}
            </div>
          </div>
        }
      >
        {children}
      </AccordionTab>
    </Accordion>
  );
};

export default CustomAccordionTab;
