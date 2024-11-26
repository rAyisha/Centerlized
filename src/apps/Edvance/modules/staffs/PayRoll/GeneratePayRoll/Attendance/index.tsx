import "./index.scss";
import { Accordion, AccordionTab } from "primereact/accordion";

const Attendance = () => {
  const accordianHeader = (header) => (
    <div className="accordian__header">
      <div>{header}</div>
      <span className="pi pi-chevron-down"></span>
    </div>
  );
  return (
    <div className="attendance__accordian">
      <Accordion>
        <AccordionTab header={() => accordianHeader("Attendance")}>
          <table>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>P</th>
                    <th>L</th>
                    <th>A</th>
                    <th>F</th>
                    <th>H</th>
                    <th>V</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>January</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>December</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>November</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </tbody>
          </table>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default Attendance;
