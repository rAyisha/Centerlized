import { FunctionalComponent } from "preact";

interface Props {
  width?: number;
  height?: number;
  color?: string;
  secondcolor?: string;
}

const SvgThreeDots:FunctionalComponent<Props> = ({
  width = 17,
  height = 16,
  color = "#AEB3C1",
  secondcolor = "#fff",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <g fill={color} clipPath="url(#ThreeDots_svg__a)">
      <path d="M10.5 13.333a2 2 0 1 0-4 0 2 2 0 0 0 4 0M10.5 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0M10.5 2.667a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
    </g>
    <defs>
      <clipPath id="ThreeDots_svg__a">
        <path fill={secondcolor} d="M.5 16V0h16v16z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgThreeDots;
