import "./index.scss";
import SvgApiLoader from "../../assets/svgIcon/SvgApiLoader";
function ApiLoader() {
  return (
    <div className="api__loader">
      <SvgApiLoader color="var(--base-theme-color)" />
    </div>
  );
}

export default ApiLoader;
