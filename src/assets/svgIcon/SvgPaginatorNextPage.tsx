import { FunctionComponent } from "preact";

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const SvgPaginatorNextPage: FunctionComponent<Props> = ({
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
      d="M5.683 7.5.24 1.548A.897.897 0 0 1 .349.226a1.047 1.047 0 0 1 1.41.102l6 6.562a.893.893 0 0 1 0 1.22l-6 6.563c-.36.393-.99.438-1.41.101a.897.897 0 0 1-.108-1.321z"
    />
  </svg>
);
export default SvgPaginatorNextPage;
