
import "./index.scss";
import FileDragUpload from "../../../../../../../components/FileDragUpload";
import SvgDocumentDownload from "../../../../../../../assets/svgIcon/SvgDownload";
import Button from "../../../../../../../components/Button";

const ImportDetails = ({ setVisible }:any) => {
  return (
    <div className="overall__importdetail__children">
      <div className="overallbutton__importdetail__children">
        <div className="button__importdetail__innerchildren">
          <div className="button__importdetail__children">
            Download Sample Import File
          </div>
          <SvgDocumentDownload color={undefined} />
        </div>
      </div>

      <div className="grid mt-1">
        <div className="col-12 md:col-12 lg:col-12">
          <FileDragUpload
            label={"Select CSV File "}
            required={true}
            onChange={() => {}}
          />
        </div>
      </div>
      {/* notes */}

      <div className="grid mt-1">
        <div className="col-12 md:col-12 lg:col-12">
          <div className="heading__notes__overall mb-4">Notes:</div>
          <div className="notes__container mb-2 ">
            1.Your CSV data should be in the format below. The first line of
            your CSV file should be the column headers as in the table example.
            Also make sure that your file is UTF-8 to avoid unnecessary encoding
            problems.
          </div>
          <div className="notes__container">
            2. If the column you are trying to import is date make sure that is
            formatted in format Y-m-d (2018-06-06).
          </div>
        </div>
      </div>

      <div className="cancelbutton__overall">
        <Button
          label="Cancel"
          outlined={true}
          className="cancelbutton__overalloutline"
          onClick={() => setVisible(false)}
        />
        <Button
          label="Submit"
          className="cancelbutton__overalloutline"
          onClick={() => setVisible(false)}
        />
      </div>
    </div>
  );
};

export default ImportDetails;
