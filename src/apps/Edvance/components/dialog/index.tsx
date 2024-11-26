import React, { ReactNode } from "react";
import { Dialog } from 'primereact/dialog';

interface CustomDialogProps {
  header: string;
  children: ReactNode;
  buttonLabel?: string;
  dialogWidth?: string;
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const DialogBox: React.FC<CustomDialogProps> = ({ 
  header, 
  children, 
  dialogWidth = '50vw',
  visible,
  setVisible
}) => {

  return (
    <div className="card flex justify-content-center">
      <Dialog 
        header={header} 
        visible={visible} 
        style={{ width: dialogWidth }} 
        onHide={() => setVisible(false)}
      >
        {children}
      </Dialog>
    </div>
  );
};

export default DialogBox;
