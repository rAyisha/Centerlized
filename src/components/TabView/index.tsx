import { TabView, TabPanel } from "primereact/tabview";
import React from "react";
import "./index.scss";
interface Tab {
  title: string;
  content: React.ReactNode;
}

interface TabViewComponentProps {
  tabs: Tab[];
  scrollable?: boolean;
  activeIndex?: number;
}

const TabViewComponent: React.FC<TabViewComponentProps> = ({
  tabs,
  scrollable = true,
  activeIndex = 0
}) => {
  return (
    <TabView scrollable={scrollable} activeIndex={activeIndex}>
      {tabs.map((tab) => (
        <TabPanel key={tab.title} header={tab.title}>
          <p className="m-0">{tab.content}</p>
        </TabPanel>
      ))}
    </TabView>
  );
};

export default TabViewComponent;
