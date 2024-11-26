import { createContext, FunctionComponent, RefObject } from "preact";
import "./index.scss";
import { useContext, useRef } from "preact/hooks";
import { Toast } from "primereact/toast";
import SvgCheckIcon from "../../assets/svgIcon/SvgCheckIcon";
import SvgErrorIcon from "../../assets/svgIcon/SvgErrorIcon";

interface ToastContextType {
  current: RefObject<Toast> | null;
  success: (message: string) => void;
  error: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider: FunctionComponent = ({ children }) => {
  const toast = useRef<Toast>(null);

  const success = (message: string) => {
    toast.current?.show({
      icon: <SvgCheckIcon />,
      severity: "info",
      detail: message,
      closable: false,
      life: 2000,
    });
  };

  const error = (message: string) => {
    toast.current?.show({
      icon: <SvgErrorIcon />,
      severity: "error",
      detail: message,
      closable: false,
      life: 2000,
    });
  };

  return (
    <ToastContext.Provider value={{ current: toast, success, error }}>
      <Toast ref={toast} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
