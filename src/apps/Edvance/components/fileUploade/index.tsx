import React from "react";
import "./index.scss";
import SvgDownload from "../../../../assets/svgIcon/SvgDownload";


interface FileDragUploadProps {
  label: string;
  star?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  multiple?: boolean;
  value: File[]; 
}

const FileDragUpload: React.FC<FileDragUploadProps> = ({
  label,
  star = false,
  onChange,
  multiple = false,
  value = []
}) => {

  console.log(value, "valuedata_01");

  return (
    <div className="student__file__upload__drag">
      <div className="student__file__uploade__drag__label mb-2">
        {label}{star && <span style={{ color: 'red' }}>*</span>}
      </div>

      {Array.isArray(value) && value.length === 0 ? (
        <div className="student__file__uploade">
          <label htmlFor="fileInput">
            <SvgDownload color="var(--base-theme-color)"/>
            <div className="student__file__uploade__drog">Drag & Drop a file here | </div>
            <div className="student__file__uploade__browse">Browse Files</div>
          </label>
          <input
            id="fileInput"
            type="file"
            accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
            onChange={onChange}
            multiple={multiple}
            style={{ display: 'none' }}
          />
        </div>
      ) : (
        multiple === false ? (
          <div className="student__file__uploade">
            <div>{value[0]?.name}</div>
          </div>
        ) : (
          value.map((data, index) => (
            <div className="student__file__uploade mt-2" key={index}>{data.name}</div>
          ))
        )
      )}
    </div>
  );
};

export default FileDragUpload;
