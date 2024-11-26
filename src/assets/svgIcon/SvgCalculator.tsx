import * as React from "react";
const SvgCalculator = ({ width = 24, height = 24, color = "#4360E4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <path
      fill={color}
      d="M14 22.75h-4c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h4c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-4-20C5.39 2.75 3.75 4.39 3.75 9v6c0 4.61 1.64 6.25 6.25 6.25h4c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
    />
    <path
      fill={color}
      d="M15 10.83H9c-1.24 0-2.25-1.01-2.25-2.25v-1c0-1.24 1.01-2.25 2.25-2.25h6c1.24 0 2.25 1.01 2.25 2.25v1c0 1.24-1.01 2.25-2.25 2.25m-6-4c-.41 0-.75.34-.75.75v1c0 .41.34.75.75.75h6c.41 0 .75-.34.75-.75v-1c0-.41-.34-.75-.75-.75zM8.15 14.92c-.13 0-.26-.03-.38-.08a1 1 0 0 1-.32-.21 1 1 0 0 1-.29-.71.99.99 0 0 1 .29-.71c.04-.04.09-.09.15-.12.05-.04.11-.07.17-.09a.998.998 0 0 1 1.31.54c.05.12.08.25.08.38a1 1 0 0 1-.3.71 1 1 0 0 1-.71.29M12.16 14.92a.99.99 0 0 1-1-1 .99.99 0 0 1 .29-.71c.04-.04.09-.09.15-.12.05-.04.11-.07.17-.09a.972.972 0 0 1 .77 0c.12.05.23.12.32.21.09.1.17.2.22.33.05.12.08.25.08.38a1 1 0 0 1-.3.71c-.19.19-.44.29-.7.29M16.15 14.92c-.13 0-.26-.03-.38-.08a1 1 0 0 1-.54-.54 1 1 0 0 1-.07-.38.99.99 0 0 1 .29-.71c.37-.37 1.04-.37 1.41 0 .19.19.3.45.3.71a1 1 0 0 1-.3.71c-.18.18-.43.29-.71.29M8.16 18.92a1 1 0 0 1-.71-.29 1 1 0 0 1-.3-.71 1.02 1.02 0 0 1 .45-.83c.05-.04.11-.07.17-.09.06-.03.13-.05.19-.06a1.02 1.02 0 0 1 1.03.42l.09.18.06.18c.01.07.02.13.02.2a1 1 0 0 1-.3.71c-.19.19-.44.29-.7.29M12.16 18.92a1 1 0 0 1-.71-.29 1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.23-.23.58-.33.9-.27.06.01.13.03.19.06.06.02.12.05.17.09.05.03.1.08.15.12.19.19.29.45.29.71a.99.99 0 0 1-.99 1M16.15 18.92a.99.99 0 0 1-.99-1c0-.26.1-.52.29-.71.09-.09.2-.16.32-.21.37-.15.82-.07 1.09.21.19.19.29.45.29.71 0 .27-.1.52-.29.71-.09.09-.2.16-.32.21s-.25.08-.39.08"
    />
  </svg>
);
export default SvgCalculator;
