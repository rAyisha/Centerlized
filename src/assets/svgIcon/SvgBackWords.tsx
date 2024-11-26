import * as React from "preact";
const SvgBackwards = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.852 3.725 1.65-2.058M4.59 6.5c-.925 1.233-1.5 2.758-1.5 4.425a7.408 7.408 0 1 0 7.408-7.408c-.566 0-1.116.075-1.65.2"
    />
  </svg>
);
export default SvgBackwards;