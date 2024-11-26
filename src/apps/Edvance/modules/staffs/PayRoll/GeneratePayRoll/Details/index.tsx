import "./index.scss";
import { Accordion, AccordionTab } from "primereact/accordion";

const Details: React.FC = () => {
  const accordionHeader = (header: string) => (
    <div className="accordion__header">
      <div>{header}</div>
      <span className="pi pi-chevron-down"></span>
    </div>
  );

  return (
    <div className="details__accordion">
      <Accordion>
        <AccordionTab header={() => accordionHeader("Details")}>
          <div className="grid">
            <div className="col-6">
              <span className="field__name">Phone Number:</span>
              <span className="field__value">9522369875</span>
            </div>
            <div className="col-6">
              <span className="field__name">Email ID:</span>
              <span className="field__value">joeblack@gmail.com</span>
            </div>
            <div className="col-6">
              <span className="field__name">EPF Number:</span>
              <span className="field__value">5454541</span>
            </div>
            <div className="col-6">
              <span className="field__name">Role:</span>
              <span className="field__value">Teacher</span>
            </div>
            <div className="col-6">
              <span className="field__name">Department:</span>
              <span className="field__value">Maths</span>
            </div>
            <div className="col-6">
              <span className="field__name">Designation:</span>
              <span className="field__value">Faculty</span>
            </div>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default Details;
