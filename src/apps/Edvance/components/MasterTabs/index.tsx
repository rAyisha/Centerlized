import { FunctionComponent } from "preact";
import { memo } from "preact/compat";
import "./index.scss";

import { useNavigate } from "react-router-dom";
import SvgArrowCircle from "../../../../assets/svgIcon/SvgArrowCircle";

type Props = {
  TabName?: string;
  TabButtonName?: string;
  path?: string;
  tabsData?: any[];
};

const MasterTabs: FunctionComponent<Props> = ({
  TabName,
  TabButtonName,
  path,
  tabsData = [],
}) => {
  const navigate = useNavigate();
  const handleClick = (card: any) => {
    navigate(card?.path);
  };
  const renderCards = () => {
    return tabsData.map((card, index) => (
      <div className="col-12 md:col-6 lg:col-4" key={index}>
        <div className="student__master__card">
          <div className="student__master__card__title">{card.title}</div>

          <div
            className="student__master__card__svg"
            onClick={() => handleClick(card)}
          >
            <SvgArrowCircle
              color="var(--base-color)"
              secondcolor="var(--base-text-inactive-color)"
            />
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div className="mater_tab_button">
      <div className="student__master__header__title">{TabName}</div>
      <hr />
      <div className="grid mt-3">{renderCards()}</div>
    </div>
  );
};

export default memo(MasterTabs);
