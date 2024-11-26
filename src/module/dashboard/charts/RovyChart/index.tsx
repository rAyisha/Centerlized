import ChartCard from "../../../../components/ChartCard";
import "./index.scss";
const RovyChart = () => {
  return (
    <ChartCard>
      <div className="rovy__chart__container mobile__chart__container">
        <div className="rovy__title">Rovy</div>
        <div className="chart__container">
          <div className="chart__area">
            <div className="parent__circle">
              <div className="vehicle__circle">
                <div className="vehicle__circle__count">320</div>
              </div>
              <div className="active__circle">
                <div className="active__circle__count">300</div>
              </div>
              <div className="inactive__circle">
                <div className="inactive__circle__count">20</div>
              </div>
            </div>
          </div>
          <div className="chart__caption">
            <div className="caption__area">
              <div className="small__circle vehicle__indicator"></div>
              <div className="caption__text">Vehicles</div>
            </div>
            <div className="caption__area">
              <div className="small__circle active__indicator"></div>
              <div className="caption__text">Active</div>
            </div>
            <div className="caption__area">
              <div className="small__circle inactive__indicator"></div>
              <div className="caption__text">Inactive</div>
            </div>
          </div>
        </div>
      </div>
    </ChartCard>
  );
};

export default RovyChart;
