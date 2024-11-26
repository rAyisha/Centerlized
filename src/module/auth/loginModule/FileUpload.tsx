import { forwardRef } from 'preact/compat';
import { useImperativeHandle, useRef, useState } from 'preact/hooks';
import { Toast } from 'primereact/toast';
import { FileUpload, FileUploadProps, FileUploadSelectEvent, FileUploadUploadEvent } from 'primereact/fileupload';
import "./index.scss";

interface CustomFileUploadProps extends Partial<FileUploadProps> {
    toastMessage?: {
        severity?: 'success' | 'info', 
        summary: string; 
        detail: string;
    };
    handleSelect?: (e: FileUploadSelectEvent) => void;
}

const CustomFileUpload = forwardRef(({
    mode = 'basic',
    name = 'demo[]',
    url = '/api/upload',
    accept = '.png,.jpg,.jpeg',
    maxFileSize = 1000000,
    onUpload,
    handleSelect,
    toastMessage = { severity: 'info', summary: 'Success', detail: 'File Uploaded' },
    ...props
}: CustomFileUploadProps, ref: any) => {
    const toast = useRef<Toast>(null);
    const fileUploadRef = useRef<HTMLDivElement>(null);
    const [key, setKey] = useState(0);

    useImperativeHandle(ref, () => ({
        triggerFileSelect: () => {
            const input = fileUploadRef.current?.querySelector('input[type="file"]') as HTMLInputElement;
            if (input) {
                input.click();
            }
        },
        clear: () => {
            const input = fileUploadRef.current?.querySelector('input[type="file"]') as HTMLInputElement;
            if (input) {
                input.value = "";
                setKey((prevKey) => prevKey + 1); 
            }
        }
    }));

    const handleFileUpload = (e: FileUploadUploadEvent) => {
        console.log('File uploaded successfully!', e);
        onUpload?.(e);
        toast.current?.show({
            severity: toastMessage?.severity,
            summary: toastMessage?.summary,
            detail: toastMessage?.detail
        });
    };

    const handleFileSelect = (e: FileUploadSelectEvent) => {
        console.log('File selected:', e.files);
        handleSelect?.(e);
    };

    return (
        <div className="file_uploade" ref={fileUploadRef} key={key}>
            <Toast ref={toast} />
            <FileUpload
                mode={mode}
                name={name}
                url={url}
                accept={accept}
                maxFileSize={maxFileSize}
                onUpload={handleFileUpload}
                onSelect={handleFileSelect}
                {...props}
            />
        </div>
    );
});

export default CustomFileUpload;
