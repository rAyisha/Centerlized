import { FunctionalComponent } from "preact";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const SvgDownload: FunctionalComponent<Props> = ({
  width = 24,
  height = 24,
  color = "#4360E4",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 11v6l2-2M9 17l-2-2"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 10h-4c-3 0-4-1-4-4V2l8 8Z"
    />
  </svg>
);
export default SvgDownload;
