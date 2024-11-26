import { FunctionComponent } from "preact";

interface Props {
  color?: string;
}

const SvgTimeIcon: FunctionComponent<Props> = ({ color = "#0047AB" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none">
    <path
      fill={color}
      d="M13.5 7a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0M7 3.344a.406.406 0 1 0-.812 0v4.469a.4.4 0 0 0 .204.352L9.236 9.79a.406.406 0 0 0 .403-.705L7 7.577z"
    />
  </svg>
);
export default SvgTimeIcon;
