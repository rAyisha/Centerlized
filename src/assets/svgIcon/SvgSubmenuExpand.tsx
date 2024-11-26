import { FunctionComponent } from "preact";

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const SvgSubmenuExpand: FunctionComponent<Props> = ({
  width = 12,
  height = 8,
  color = "#0047AB",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M6.467 4.886a.653.653 0 0 1-.934 0L.7.118a.393.393 0 0 0-.592.034A.49.49 0 0 0 .14.8l4.834 4.768c.584.576 1.47.576 2.054 0L11.86.8a.49.49 0 0 0 .031-.648.393.393 0 0 0-.59-.034z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSubmenuExpand;
