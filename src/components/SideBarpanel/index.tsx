import { Sidebar } from "primereact/sidebar";
import SidebarDemo from "../sideBar";
import { FunctionalComponent } from "preact";
interface Props {
  sidebarPanel: boolean;
  setSidebarPanel: (sidebarPanel: boolean) => void;
}

const SideBarpanel: FunctionalComponent<Props> = ({
  sidebarPanel,
  setSidebarPanel,
}) => {
  return (
    <div className="card flex justify-content-center">
      <Sidebar
        visible={sidebarPanel}
        onHide={() => setSidebarPanel(false)}
        content={() => (
          <div className="min-h-screen flex relative lg:static surface-ground">
            <div
              id="app-sidebar-2"
              className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
              style={{ width: "100%" }}
            >
              <div className="flex flex-column h-full">
                <SidebarDemo />
              </div>
            </div>
          </div>
        )}
      ></Sidebar>
    </div>
  );
};
export default SideBarpanel;
