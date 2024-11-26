import { h } from "preact";
import { ConfirmDialog } from "primereact/confirmdialog";

interface ConfirmDialogProps {
    visible: boolean;
    onHide: () => void;
    message?: string;
    header?: string;
    icon?: any;
    accept: () => void;
    reject: () => void;
    style?: h.JSX.CSSProperties;
    breakpoints?: { [key: string]: string };
    rejectLabel?: string | undefined;
    acceptLabel?: string | undefined;
    closable?: boolean;
}

const ConfirmDeleteComponent = ({
    visible,
    onHide,
    message = "Are you sure you want to proceed?",
    header = "Confirmation",
    icon = "pi pi-exclamation-triangle",
    accept,
    reject,
    rejectLabel = "No",
    acceptLabel = "Yes",
    closable = true
}: ConfirmDialogProps) => {
    return (
        <ConfirmDialog
            visible={visible}
            onHide={onHide}
            message={message}
            header={header}
            icon={icon}
            accept={accept}
            reject={reject}
            draggable={false}
            rejectLabel={rejectLabel}
            acceptLabel={acceptLabel}
            closable={closable}
        />
    );
};

export default ConfirmDeleteComponent;
