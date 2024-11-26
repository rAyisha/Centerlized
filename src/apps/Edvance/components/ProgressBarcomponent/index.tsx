import React from "react";
import "./index.scss";
import { ProgressBar } from "primereact/progressbar";
import SvgThreeDots from "../../../../assets/svgIcon/SvgThreeDots";


const ProgressBarcomponet = ({color="red",label="English (210)",value=10}) => {
  return (
    <div className="progress__bar__layout">
      <div className="progress__bar__layout__label ">
        <SvgThreeDots color={color}/>
        <span style={{color:color}}>{label}</span>
      </div>
      <ProgressBar value={value} className="blue-progress mt-2"  style={{ '--progress-bar-color': color }}></ProgressBar>
    </div>
  );
};

export default ProgressBarcomponet;
