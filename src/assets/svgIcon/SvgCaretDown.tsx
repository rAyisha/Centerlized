import { FunctionalComponent } from "preact";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const SvgCaretDown: FunctionalComponent<Props> = ({
  width = 8,
  height = 5,
  color = "#80889E",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <path
      fill={color}
      d="M7.796.172H.204a.16.16 0 0 0-.118.056.3.3 0 0 0-.074.148.5.5 0 0 0-.004.185c.011.061.035.115.068.154l3.797 4.218A.17.17 0 0 0 4 5a.17.17 0 0 0 .127-.067L7.924.715a.34.34 0 0 0 .068-.154.5.5 0 0 0-.004-.185.3.3 0 0 0-.074-.148.16.16 0 0 0-.118-.056"
    />
  </svg>
);
export default SvgCaretDown;
