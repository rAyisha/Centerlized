import { FunctionalComponent } from "preact";
import { Sidebar } from "primereact/sidebar";
import "./index.scss";

interface DrawerProps {
  visible?: boolean;
  onHide?: any;
  header?: string;
  width?: string;
  className?: any;
}

const Drawer: FunctionalComponent<DrawerProps> = ({
  visible = false,
  onHide,
  children,
  header,
  width = "30rem",
  className,
}) => {
  return (
    <Sidebar
      visible={visible}
      onHide={onHide}
      position="right"
      header={header}
      width={width}
      className={className}
    >
      {children}
    </Sidebar>
  );
};

export default Drawer;
