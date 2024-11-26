import { FunctionalComponent } from "preact";
import { ComponentChildren } from "preact";
import "./index.scss"
interface ChartCardProps {
  children: ComponentChildren;
}

const ChartCard: FunctionalComponent<ChartCardProps> = ({ children }) => {
  return <div className="chart__card__container">{children}</div>;
};

export default ChartCard;
