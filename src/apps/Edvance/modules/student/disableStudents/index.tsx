import "./index.scss";
import TabHeader from "./tabHeader";
import CardView from "./cardView";
import ListView from "./listView";
import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import ApiLoader from "../../../../../components/ApiLoader";

const DisableStudents: FunctionalComponent = () => {
  const [viewType, setViewType] = useState("list");
  const [loading, setLoading] = useState(false);

  return (
    <div className="student__details__view__directory">
      <TabHeader viewType={viewType} setViewType={setViewType} setLoading={setLoading} />
      <div className="mt-5">
        {loading ? <ApiLoader /> : viewType === "list" ? <ListView /> : <CardView />}
      </div>

    </div>
  );
};

export default DisableStudents;
