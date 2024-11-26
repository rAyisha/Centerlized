const SvgCalendar = ({ color = "#0047AB" }) => (
  <svg
    width={20}
    height={18}
    fill="none"

  >
    <path
      fill={color}
      d="M0 5.5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3z"
    />
    <path
      fill="#fff"
      d="M7 5h2v2H7zM3 9h2v2H3zM3 13h2v2H3zM7 13h2v2H7zM11 5h2v2h-2zM11 9h2v2h-2zM15 5h2v2h-2zM15 9h2v2h-2zM7 9h2v2H7z"
    />
    <path stroke={color} strokeLinecap="round" d="M5.5 4V1M14.5 4.5V1" />
    <path fill="#fff" d="M3 5h2v2H3z" />
  </svg>
);
export default SvgCalendar;