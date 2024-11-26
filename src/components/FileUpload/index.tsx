import { forwardRef } from "preact/compat";
import { useRef, useState, useImperativeHandle } from "preact/hooks";
import { Toast } from "primereact/toast";
import {
  FileUpload,
  FileUploadProps,
  FileUploadSelectEvent,
  FileUploadUploadEvent,
} from "primereact/fileupload";
import "./index.scss";

interface CustomFileUploadProps extends Partial<FileUploadProps> {
  toastMessage?: {
    severity?: "success" | "info";
    summary: string;
    detail: string;
  };
  label?: string;
  required?: boolean;
  disabled?: boolean;
  handleSelect?: (e: FileUploadSelectEvent) => void;
  placeholder?: string
}

const CustomFileUpload = forwardRef(
  (
    {
      label = "",
      required,
      disabled,
      mode = "basic",
      name = "demo[]",
      url = "/api/upload",
      accept = ".png,.jpg,.jpeg",
      maxFileSize = 1000000,
      onUpload,
      handleSelect,
      placeholder = "Upload Wepsite Logo",
      toastMessage = {
        severity: "info",
        summary: "Success",
        detail: "File Uploaded",
      },
      ...props
    }: CustomFileUploadProps,
    ref: any
  ) => {
    const toast = useRef<Toast>(null);
    const fileUploadRef = useRef<HTMLDivElement>(null);
    const [key, setKey] = useState(0);

    useImperativeHandle(ref, () => ({
      triggerFileSelect: () => {
        const input = fileUploadRef.current?.querySelector(
          'input[type="file"]'
        ) as HTMLInputElement;
        if (input) {
          input.click();
        }
      },
      clear: () => {
        const input = fileUploadRef.current?.querySelector(
          'input[type="file"]'
        ) as HTMLInputElement;
        if (input) {
          input.value = "";
          setKey((prevKey) => prevKey + 1);
        }
      },
    }));

    const handleFileUpload = (e: FileUploadUploadEvent) => {
      onUpload?.(e);
      toast.current?.show({
        severity: toastMessage?.severity,
        summary: toastMessage?.summary,
        detail: toastMessage?.detail,
      });
    };

    const handleFileSelect = (e: FileUploadSelectEvent) => {
      handleSelect?.(e);
    };

    return (
      <div className="file__upload__container" ref={fileUploadRef} key={key}>
        {label && (
          <div className="inputfield__label__container mb-2">
            <label
              className={`inputfield__label ${disabled ? "disabled" : ""}`}
            >
              {label}
            </label>
            {required === true && (
              <div className="inputfield__important">*</div>
            )}
          </div>
        )}
        <Toast ref={toast} />
        <FileUpload
          emptyTemplate={
            <p className="m-0">Drag and drop files to here to upload.</p>
          }
          chooseLabel={placeholder}
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
  }
);

export default CustomFileUpload;

// import { FileUpload } from "primereact/fileupload";

// export default function CustomFileUpload() {
//   return (
//     <div className="card">
//       <FileUpload
//         name="demo[]"
//         // url={"/api/upload"}
//         multiple
//         accept="image/*"
//         maxFileSize={1000000}
//         emptyTemplate={
//           <p className="m-0">Drag and drop files to here to upload.</p>
//         }
//         onSelect={(e) => console.log(e, "find files")}
//       />
//     </div>
//   );
// }
