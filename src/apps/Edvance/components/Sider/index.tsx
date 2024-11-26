import { Dialog } from "primereact/dialog";
import "./index.scss";
import { FunctionalComponent, VNode } from "preact";

interface Props {
  setVisible?: (value: boolean) => void;
  visible: boolean;
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | undefined;
  children: VNode;
  header?: string;
  width?: string;
  closable?:boolean;
  dismissableMask?:boolean;
}

const Sider: FunctionalComponent<Props> = ({
  setVisible,
  visible,
  position = "right",
  children,
  header = "Import Staff",
  width = "40vw",
  closable=true,
  dismissableMask=true,
}) => {
  return (
    <Dialog
      header={header}
      visible={visible}
      position={position}
      dismissableMask={dismissableMask}
      style={{ width: width, borderRadius: "20px", overflow: "hidden" }}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
      draggable={false}
      resizable={false}
      className="overall__dialog_importdetails"
      closable={closable}
    >
      <div className="inneroverall__dialog_importdetails mt-2">{children}</div>
    </Dialog>
  );
};

export default Sider;
