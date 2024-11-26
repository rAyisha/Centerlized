import * as React from "react";
const SvgArrowCircle = ({
  width = 40,
  height = 40,
  color = "#263446",
  secondcolor = "#4360E4",
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none">
    <circle cx={20} cy={20} r={20} fill={color} />
    <path fill={color} d="M32 8v24H8V8z" />
    <path
      fill={secondcolor}
      fillRule="evenodd"
      d="M9.5 20a.75.75 0 0 0 .75.75h17.69l-4.72 4.719a.75.75 0 0 0 1.061 1.062l6-6a.75.75 0 0 0 0-1.062l-6-6a.75.75 0 0 0-1.062 0 .75.75 0 0 0 0 1.062l4.72 4.719H10.25a.75.75 0 0 0-.75.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowCircle;
