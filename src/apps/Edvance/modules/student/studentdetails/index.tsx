import "./index.scss";
import TabHeader from "./tabHeader";
import CardView from "./cardView";
import ListView from "./listView";
import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import ApiLoader from "../../../../../components/ApiLoader";

const StudentDetails: FunctionalComponent = () => {
  const [viewType, setViewType] = useState("list");
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  return (
    <div className="student__details__view__directory">
      <TabHeader viewType={viewType} setViewType={setViewType} setLoading={setLoading} deleteId={deleteId} setDeleteId={setDeleteId} />
      <div className="mt-5">
        {loading ? <ApiLoader /> : viewType === "list" ? <ListView setDeleteId={setDeleteId} /> : <CardView setDeleteId={setDeleteId} />}
      </div>

    </div>
  );
};

export default StudentDetails;
