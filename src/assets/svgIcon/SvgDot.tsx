import * as React from "react";
const SvgDot = ({color="#fff"}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    // {...props}
  >
    <circle cx={12} cy={12} r={6} fill={color} opacity={0.9} />
  </svg>
);
export default SvgDot;