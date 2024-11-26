import EdvanceChart from "../EdvanceChart";
import RovyChart from "../RovyChart";
import VlookChart from "../VlookChart";
import ZenixChart from "../ZenixChart";

const TimeSheet = () => {
  return (
    <div className="grid">
      <div className="col-12 md:col-12 lg:col-6 xl:col-8">
        <VlookChart />
      </div>
      <div className="col-12 md:col-12 lg:col-6 xl:col-4">
        <ZenixChart />
      </div>
      <div className="col-12 md:col-12 lg:col-4 xl:col-4">
        <RovyChart />
      </div>
      <div className="col-12 md:col-12 lg:col-8 xl:col-8">
        <EdvanceChart />
      </div>
    </div>
  );
};

export default TimeSheet;
