import { FunctionalComponent } from "preact";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const SvgCaretUp: FunctionalComponent<Props> = ({
  width = 8,
  height = 5,
  color = "#80889E",
}) => (
  <svg width={width} height={height} fill="none">
    <path
      fill={color}
      d="M7.796 4.793H.204a.16.16 0 0 1-.118-.056.3.3 0 0 1-.074-.148.5.5 0 0 1-.004-.185.34.34 0 0 1 .068-.154L3.87.067A.17.17 0 0 1 3.996 0q.072.001.128.067l3.8 4.183q.05.061.068.154c.012.061.01.126-.004.185a.3.3 0 0 1-.074.148.16.16 0 0 1-.118.056"
    />
  </svg>
);
export default SvgCaretUp;
