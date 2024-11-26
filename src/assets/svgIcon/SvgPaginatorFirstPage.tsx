import { FunctionComponent } from "preact";

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const SvgPaginatorFirstPage: FunctionComponent<Props> = ({
  width = 21,
  height = 21,
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
      d="M19.053 18.272c.42.525.362 1.314-.127 1.763-.489.45-1.225.389-1.645-.136l-7-8.75a1.32 1.32 0 0 1 0-1.627l7-8.75a1.114 1.114 0 0 1 1.645-.135c.49.45.546 1.238.127 1.762l-6.35 7.937zm-9.334 0c.42.525.363 1.314-.126 1.763-.49.45-1.226.389-1.645-.136l-7-8.75a1.32 1.32 0 0 1 0-1.627l7-8.75A1.114 1.114 0 0 1 9.593.637c.49.45.546 1.238.126 1.762L3.37 10.336z"
    />
  </svg>
);
export default SvgPaginatorFirstPage;
