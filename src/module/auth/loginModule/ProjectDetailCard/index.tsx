import { Image } from "primereact/image";
import { projectdetails } from "./project-details-mock";
import "./index.scss";
import { FunctionalComponent } from "preact";
import Button from "../../../../components/Button";
interface Props {
  startPoint: number;
  endPoint: number;
  place: string;
}
const ProjectDetailCard: FunctionalComponent<Props> = ({
  startPoint = 0,
  endPoint = 1,
  place,
}) => {
  return (
    <div className={`card__items__container__${place}`}>
      {projectdetails
        ?.slice(startPoint, endPoint)
        ?.map((item: any, index: number) => {
          return (
            <div key={index} className="project__card">
              <div className="card__items">
                <div className="image__controller">
                  <Image src={item?.logo} alt="" />
                </div>
                <div className="item__caption">{item?.caption}</div>
                <div className="button__controller">
                  <Button label="Know more" className="custom__button"/>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProjectDetailCard;
