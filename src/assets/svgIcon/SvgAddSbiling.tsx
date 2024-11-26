
import { FunctionalComponent } from "preact";

interface Props {
  width?: number;
  height?: number;
  color?: string;
  secondcolor?: string;
}

const SvgAddSibling:FunctionalComponent<Props> = ({width=113,height=24,color="#4360E4"}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
  >
    <path
      fill={color}
      d="M39.916 16.012h-4.074l-.7 1.988h-1.666l3.486-9.744h1.848L42.296 18h-1.68zm-.448-1.302-1.582-4.522-1.596 4.522zm3.812-.602q0-1.162.476-2.058a3.56 3.56 0 0 1 3.178-1.89q.755 0 1.484.336.741.322 1.176.868V7.64h1.61V18h-1.61v-1.162q-.393.56-1.092.924-.687.364-1.582.364a3.5 3.5 0 0 1-1.848-.504 3.74 3.74 0 0 1-1.316-1.428q-.476-.924-.476-2.086m6.314.028q0-.798-.336-1.386a2.26 2.26 0 0 0-.854-.896 2.25 2.25 0 0 0-1.148-.308q-.616 0-1.148.308-.532.294-.868.882-.322.574-.322 1.372t.322 1.4q.336.602.868.924.545.308 1.148.308.615 0 1.148-.308a2.26 2.26 0 0 0 .854-.896q.336-.602.336-1.4m3.174-.028q0-1.162.476-2.058a3.56 3.56 0 0 1 3.178-1.89q.756 0 1.484.336.742.322 1.176.868V7.64h1.61V18h-1.61v-1.162q-.392.56-1.092.924-.686.364-1.582.364a3.5 3.5 0 0 1-1.848-.504 3.74 3.74 0 0 1-1.316-1.428q-.476-.924-.476-2.086m6.314.028q0-.798-.336-1.386-.323-.588-.854-.896a2.25 2.25 0 0 0-1.148-.308q-.615 0-1.148.308-.532.294-.868.882-.322.574-.322 1.372t.322 1.4q.336.602.868.924.546.308 1.148.308.615 0 1.148-.308t.854-.896q.336-.602.336-1.4m10.549 3.962q-.98 0-1.764-.336-.784-.35-1.232-.98t-.448-1.47h1.708q.055.63.49 1.036.448.406 1.246.406.826 0 1.288-.392.462-.405.462-1.036 0-.49-.294-.798a1.85 1.85 0 0 0-.714-.476q-.42-.168-1.176-.364a12 12 0 0 1-1.554-.504 2.6 2.6 0 0 1-1.008-.812q-.42-.546-.42-1.456 0-.84.42-1.47t1.176-.966 1.75-.336q1.414 0 2.31.714.91.7 1.008 1.932h-1.764q-.042-.532-.504-.91t-1.218-.378q-.685 0-1.12.35t-.434 1.008q0 .448.266.742.28.28.7.448t1.148.364q.966.266 1.568.532.615.266 1.036.826.435.546.434 1.47 0 .742-.406 1.4-.392.658-1.162 1.064-.756.392-1.792.392m6.055-8.834a1 1 0 0 1-.728-.294 1 1 0 0 1-.294-.728q0-.434.294-.728a1 1 0 0 1 .728-.294q.42 0 .714.294a1 1 0 0 1 .294.728q0 .434-.294.728a.97.97 0 0 1-.714.294m.784 1.022V18h-1.596v-7.714zm3.692 1.148a3 3 0 0 1 1.106-.91 3.4 3.4 0 0 1 1.582-.364q1.021 0 1.848.49.825.49 1.302 1.4.476.896.476 2.058T86 16.194a3.6 3.6 0 0 1-1.316 1.428 3.45 3.45 0 0 1-1.834.504q-.897 0-1.596-.35a3.1 3.1 0 0 1-1.092-.896V18h-1.596V7.64h1.596zm4.69 2.674q0-.799-.336-1.372a2.14 2.14 0 0 0-.868-.882 2.25 2.25 0 0 0-1.148-.308q-.603 0-1.148.308a2.36 2.36 0 0 0-.868.896q-.322.588-.322 1.386t.322 1.4q.336.588.868.896.546.308 1.148.308.615 0 1.148-.308.546-.323.868-.924.336-.602.336-1.4M89.65 7.64V18h-1.596V7.64zm2.907 1.624a1 1 0 0 1-.728-.294 1 1 0 0 1-.294-.728q0-.434.294-.728a1 1 0 0 1 .728-.294q.42 0 .714.294a1 1 0 0 1 .294.728q0 .434-.294.728a.97.97 0 0 1-.714.294m.784 1.022V18h-1.596v-7.714zm5.988-.126q.91 0 1.624.378.727.378 1.134 1.12t.406 1.792V18h-1.582v-4.312q0-1.036-.518-1.582-.519-.56-1.414-.56-.897 0-1.428.56-.518.546-.518 1.582V18h-1.596v-7.714h1.596v.882q.391-.476.994-.742a3.25 3.25 0 0 1 1.302-.266m8.308 0q.895 0 1.582.364.699.35 1.092.882v-1.12h1.61v7.84q0 1.065-.448 1.89-.449.84-1.302 1.316-.84.476-2.016.476-1.569 0-2.604-.742a2.69 2.69 0 0 1-1.176-1.988h1.582q.182.601.77.966.602.378 1.428.378.966 0 1.554-.588.602-.588.602-1.708v-1.288q-.407.546-1.106.924-.687.364-1.568.364a3.5 3.5 0 0 1-1.848-.504 3.73 3.73 0 0 1-1.316-1.428q-.477-.924-.476-2.086 0-1.162.476-2.058a3.55 3.55 0 0 1 3.164-1.89m2.674 3.976q0-.798-.336-1.386-.323-.588-.854-.896a2.26 2.26 0 0 0-1.148-.308 2.25 2.25 0 0 0-1.148.308q-.532.294-.868.882-.322.574-.322 1.372t.322 1.4q.336.602.868.924a2.3 2.3 0 0 0 2.296 0q.531-.308.854-.896.336-.602.336-1.4M13 12.75c-3.17 0-5.75-2.58-5.75-5.75S9.83 1.25 13 1.25 18.75 3.83 18.75 7s-2.58 5.75-5.75 5.75m0-10A4.26 4.26 0 0 0 8.75 7 4.26 4.26 0 0 0 13 11.25 4.26 4.26 0 0 0 17.25 7 4.26 4.26 0 0 0 13 2.75M4.41 22.75c-.41 0-.75-.34-.75-.75 0-4.27 4.19-7.75 9.34-7.75 1.01 0 2 .13 2.96.4.4.11.63.52.52.92s-.52.63-.92.52c-.82-.23-1.68-.34-2.56-.34-4.32 0-7.84 2.8-7.84 6.25 0 .41-.34.75-.75.75"
    />
    <path
      fill={color}
      d="M19 22.75a4.7 4.7 0 0 1-3.17-1.23c-.35-.3-.66-.67-.9-1.08-.44-.72-.68-1.57-.68-2.44 0-1.25.48-2.42 1.34-3.31.9-.93 2.11-1.44 3.41-1.44 1.36 0 2.65.58 3.53 1.58A4.74 4.74 0 0 1 23.75 18c0 .38-.05.76-.15 1.12-.1.45-.29.92-.55 1.33-.83 1.42-2.39 2.3-4.05 2.3m0-8a3.241 3.241 0 0 0-2.78 4.92c.16.28.37.53.61.74.6.55 1.37.85 2.17.85 1.13 0 2.2-.6 2.78-1.57.17-.28.3-.6.37-.91.07-.26.1-.51.1-.77 0-.8-.3-1.57-.84-2.17-.6-.7-1.48-1.09-2.41-1.09"
    />
    <path
      fill={color}
      d="M20.5 18.73h-2.99c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.99c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
    <path
      fill={color}
      d="M19 20.26c-.41 0-.75-.34-.75-.75v-2.99c0-.41.34-.75.75-.75s.75.34.75.75v2.99c0 .42-.34.75-.75.75"
    />
  </svg>
);
export default SvgAddSibling;