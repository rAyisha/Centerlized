import * as React from "react";
const SvgNextarrow = ({color="#fff"}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    // {...props}
  >
    <path
      fill={color}
      d="M21.198 10.047 3.328 3.928c-.895-.307-1.676.687-1.167 1.485L6.371 12 2.4 18.216c-.533.834.34 1.852 1.245 1.453l17.631-7.761c.834-.367.783-1.566-.079-1.861"
      opacity={0.9}
    />
  </svg>
);
export default SvgNextarrow;