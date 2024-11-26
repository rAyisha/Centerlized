import { FunctionComponent } from "preact";

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const SvgPaginatorLastPage: FunctionComponent<Props> = ({
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
      fillRule="evenodd"
      d="M11.104.637a1.25 1.25 0 0 0-.136 1.762l6.803 7.937-6.803 7.936a1.25 1.25 0 1 0 1.898 1.627l7.5-8.75a1.25 1.25 0 0 0 0-1.627l-7.5-8.75a1.25 1.25 0 0 0-1.762-.135m-10 0a1.25 1.25 0 0 0-.136 1.762l6.803 7.937-6.803 7.936A1.25 1.25 0 0 0 2.866 19.9l7.5-8.75a1.25 1.25 0 0 0 0-1.627l-7.5-8.75A1.25 1.25 0 0 0 1.104.637"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPaginatorLastPage;
