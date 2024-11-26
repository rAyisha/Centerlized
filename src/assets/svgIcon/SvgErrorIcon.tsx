import { FunctionComponent } from "preact";

interface Props {
  color?: string;
}

const SvgErrorIcon: FunctionComponent<Props> = ({ color = "#C60000" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none">
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 1 1 13M1 1l12 12"
    />
  </svg>
);
export default SvgErrorIcon;
