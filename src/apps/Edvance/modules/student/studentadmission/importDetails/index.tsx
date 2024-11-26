import { FunctionalComponent } from "preact";
import { Dispatch, SetStateAction } from "preact/compat";
import { Button } from "primereact/button";
import "./index.scss";
import SvgDownload from "../../../../../../assets/svgIcon/SvgDownload";
import FileDragUpload from "../../../../../../components/FileDragUpload";

interface Props {
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const ImportDetails: FunctionalComponent<Props> = ({ setVisible }) => {
  return (
    <div className="student__overall__importdetail__children">
      <div className="overallbutton__importdetail__children">
        <div className="button__importdetail__innerchildren">
          <div className="button__importdetail__children">
            Download Sample Import File
          </div>
          <SvgDownload color={undefined} />
        </div>
      </div>

      <div className="grid mt-2">
        <div className="col-12 md:col-12 lg:col-12">
          <FileDragUpload
            label={"Select CSV File "}
            required={true}
            onChange={undefined}
          />
        </div>
      </div>

      <div className="grid mt-1">
        <div className="col-12 md:col-12 lg:col-12">
          <div className="heading__notes__overall mb-4">Notes:</div>
          <div className="notes__container mb-2 ">
            1.Your CSV data should be in the format below. The first line of
            your CSV file should be the column headers as in the table example.
            Also make sure that your file is UTF-8 to avoid unnecessary encoding
            problems.
          </div>
          <div className="notes__container mb-2">
            2.If the column you are trying to import is date make sure that is
            formatted in format Y-m-d (2018-06-06).
          </div>
          <div className="notes__container mb-2">
            3.Duplicate Admission Number (unique) rows will not be imported.
          </div>
          <div className="notes__container mb-2">
            4.For student Gender use Male, Female value.
          </div>
          <div className="notes__container mb-2">
            5.For student Blood Group use O+, A+, B+, AB+, O-, A-, B-, AB-
            value.
          </div>
          <div className="notes__container mb-2">
            6.For RTE use Yes, No value.
          </div>
          <div className="notes__container mb-2">
            7.For If Guardian Is user father, mother, other value.
          </div>
          <div className="notes__container mb-2">
            8.Category name comes from other table so for category, enter
            Category Id (Category Id can be found on category page ).
          </div>
          <div className="notes__container mb-2">
            9.Student house comes from other table so for student house, enter
            Student House Id (Student House Id can be found on student house
            page ).
          </div>
        </div>
      </div>

      <div className="cancelbutton__overall">
        <Button
          label="Cancel"
          outlined
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
