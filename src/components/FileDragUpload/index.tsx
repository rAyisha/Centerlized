import "./index.scss";
import { FunctionalComponent } from "preact";
import SvgDocumentupload from "../../assets/svgIcon/SvgDocumentUpload";

interface Props {
  label?: string;
  required?: boolean;
  onChange?: (e: any) => void;
  multiple?: boolean;
  value?: any[];
}

const FileDragUpload: FunctionalComponent<Props> = ({
  label,
  required,
  onChange,
  multiple = false,
  value = [],
}) => {
  return (
    <div className="student__file__upload__drag">
      <div className="student__file__uploade__drag__label mb-2">
        {label}
        {required && <span style={{ color: "red" }}>*</span>}
      </div>

      {Array.isArray(value) && value?.length === 0 ? (
        <>
          <div className="student__file__uploade">
            <label htmlFor="fileInput">
              <SvgDocumentupload color="#727b91" />
              <div className="student__file__uploade__drog">
                Drag & Drop a file here |{" "}
              </div>
              <div className="student__file__uploade__browse">Browse Files</div>
            </label>
            <input
              id="fileInput"
              type="file"
              accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
              onChange={onChange}
              multiple={multiple}
              style={{ display: "none" }}
            />
          </div>
        </>
      ) : multiple === false ? (
        <div className="student__file__uploade">
          <div>{value[0]?.name}</div>
        </div>
      ) : (
        value.map((data) => (
          <div className="student__file__uploade mt-2">{data.name}</div>
        ))
      )}
    </div>
  );
};

export default FileDragUpload;
