const SvgBackArrow = ({
  width = 32,
  height = 32,
  color = "#f5f5f5",
  secondcolor = "#6C757D",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <circle cx={16} cy={16} r={16} fill={color} />
    <path
      fill={secondcolor}
      d="M18 21.78a.5.5 0 0 1-.354-.147L13.3 17.287a1.827 1.827 0 0 1 0-2.574l4.347-4.346a.503.503 0 0 1 .707 0 .503.503 0 0 1 0 .706l-4.347 4.347a.82.82 0 0 0 0 1.16l4.347 4.347a.503.503 0 0 1 0 .706.52.52 0 0 1-.354.147"
    />
  </svg>
);
export default SvgBackArrow;