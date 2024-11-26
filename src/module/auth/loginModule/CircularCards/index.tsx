import { Carousel } from "primereact/carousel";
import ProjectDetailCard from "../ProjectDetailCard";
import "./index.scss";
import SvgPrevIcon from "../../../../assets/svgIcon/SvgPrevIcon";
import SvgNextIcon from "../../../../assets/svgIcon/SvgNextIcon";

export default function CircularDemo() {
  const productTemplate = () => {
    return (
      <div className="grid m-0 carousel__container">
        <div className="col-12 md:col-6">
          <div className="grid m-0 gap-3 h-full">
            <div className="col-12 p-0">
              <ProjectDetailCard startPoint={0} endPoint={1} place="left" />
            </div>
            <div className="col-12 p-0">
              <ProjectDetailCard startPoint={1} endPoint={2} place="left" />
            </div>
            <div className="col-12 p-0">
              <ProjectDetailCard startPoint={2} endPoint={3} place="left" />
            </div>
          </div>
        </div>
        <div className="col-12 md:col-6">
          <div className="grid m-0 gap-3 h-full">
            <div className="col-12 p-0 flex">
              <ProjectDetailCard startPoint={3} endPoint={4} place="right" />
            </div>
            <div className="col-12 p-0 flex">
              <ProjectDetailCard startPoint={4} endPoint={5} place="right" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Carousel
      value={Array(3).fill(null)}
      numVisible={1}
      numScroll={1}
      className="custom__carousel"
      circular
      itemTemplate={productTemplate}
      prevIcon={<SvgPrevIcon />}
      nextIcon={<SvgNextIcon />}
    />
  );
}
