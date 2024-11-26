import { FunctionComponent } from "preact";

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const SvgPaginatorPrevPage: FunctionComponent<Props> = ({
  width = 8,
  height = 15,
  color = "#686868",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <path
      fill={color}
      d="M7.274 13.453a.937.937 0 1 1-1.424 1.22L.225 8.11a.94.94 0 0 1 0-1.22L5.85.327a.938.938 0 0 1 1.424 1.22L2.172 7.5z"
    />
  </svg>
);
export default SvgPaginatorPrevPage;
