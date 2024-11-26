import BreadCrumbs from "../../../../../../../components/BreadCrumbs";

const BreadCrumb = () => {
  return (
    <div className="breadcrums_layout">
      <BreadCrumbs data={["Student Information", "Student History"]} />
    </div>
  );
};

export default BreadCrumb;