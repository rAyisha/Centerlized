import { FunctionComponent } from "preact";

interface Props {
  color?: string;
}

const SvgCheckIcon: FunctionComponent<Props> = ({ color = "#0074AB" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={15} fill="none">
    <path
      fill={color}
      d="M19.535.479a1.553 1.553 0 0 0-2.243 0L7.196 10.884 2.708 6.259a1.553 1.553 0 0 0-2.243 0 1.67 1.67 0 0 0 0 2.312l5.609 5.78c.31.32.715.48 1.121.48s.813-.16 1.122-.48l11.218-11.56a1.67 1.67 0 0 0 0-2.312"
    />
  </svg>
);
export default SvgCheckIcon;
