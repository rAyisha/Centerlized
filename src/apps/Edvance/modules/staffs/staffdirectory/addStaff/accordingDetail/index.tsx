import InputField from "../../../../../../../components/InputField";
import DropDownField from "../../../../../../../components/DropDownField";
import FileDragUpload from "../../../../../../../components/FileDragUpload";
import '../index.scss'
import { workShiftOptions } from "../mock";
import { documentOptions } from "../../../../student/studentadmission/mock";
import { Chip } from "primereact/chip";

const Accordingdetails = ({ formik, getallcontract }:any) => {

  return (
    <div className="accordin__layout">
      <div className="student__sub__title mt-4">Payroll</div>
      <div className="grid mt-2">
        <div className="col-12 md:col-6 lg:col-3">
          <InputField
            label={"UAN No."}
            placeholder={"Enter"}
            name="epfNo"
            value={formik.values.epfNo}
            onChange={formik.handleChange("epfNo")}
            error={formik.touched.epfNo && formik.errors.epfNo ? formik.errors.epfNo : null}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <InputField
            label={"PF No."}
            placeholder={"Enter"}
            name="epfNo"
            value={formik.values.epfNo}
            onChange={formik.handleChange("epfNo")}
            error={formik.touched.epfNo && formik.errors.epfNo ? formik.errors.epfNo : null}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <InputField
            label={"CTC"}
            placeholder={"Enter"}
            name="basicSalary"
            value={formik.values.basicSalary}
            onChange={formik.handleChange("basicSalary")}
            error={formik.touched.basicSalary && formik.errors.basicSalary ? formik.errors.basicSalary : null}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <DropDownField
            label={"Contract Type"}
            placeholder={"Select"}
            options={getallcontract}
            optionLabel={"type"}
            name="contractType"
            value={formik.values.contractType}
            onChange={(value) => formik.setFieldValue("contractType", value)}
            error={formik.touched.contractType && formik.errors.contractType ? formik.errors.contractType : null}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <DropDownField
            label={"Contract duration"}
            placeholder={"Select"}
            options={getallcontract}
            optionLabel={"type"}
            name="contractType"
            value={formik.values.contractType}
            onChange={(value) => formik.setFieldValue("contractType", value)}
            error={formik.touched.contractType && formik.errors.contractType ? formik.errors.contractType : null}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <DropDownField
            label={"Work Shift"}
            placeholder={"Select"}
            options={workShiftOptions}
            name="workShift"
            optionLabel={"label"}
            optionValue={"value"}
            value={formik.values.workShift}
            onChange={value=>formik.setFieldValue("workShift",value)}
            error={formik.touched.workShift && formik.errors.workShift ? formik.errors.workShift : null}
          />
        </div>
      </div>
     

      <div className="student__sub__title mt-4">Bank Account Details</div>
      <div className="grid mt-2">
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            label={"Account Title"}
            placeholder={"Enter"}
            name="bankTitle"
            value={formik.values.bankTitle}
            onChange={formik.handleChange("bankTitle")}
            error={formik.touched.bankTitle && formik.errors.bankTitle ? formik.errors.bankTitle : null}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            label={"Bank Account Number"}
            placeholder={"Enter"}
            name="bankAccountNo"
            value={formik.values.bankAccountNo}
            onChange={formik.handleChange("bankAccountNo")}
            error={formik.touched.bankAccountNo && formik.errors.bankAccountNo ? formik.errors.bankAccountNo : null}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            label={"Bank Name"}
            placeholder={"Enter"}
            name="bankName"
            value={formik.values.bankName}
            onChange={formik.handleChange("bankName")}
            error={formik.touched.bankName && formik.errors.bankName ? formik.errors.bankName : null}
          />
        </div>
      </div>
      <div className="grid mt-2">
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            label={"IFSC Code"}
            placeholder={"Enter"}
            name="ifscCode"
            value={formik.values.ifscCode}
            onChange={formik.handleChange("ifscCode")}
            error={formik.touched.ifscCode && formik.errors.ifscCode ? formik.errors.ifscCode : null}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            label={"Bank Branch Name"}
            placeholder={"Enter"}
            name="bankBranchName"
            value={formik.values.bankBranchName}
            onChange={formik.handleChange("bankBranchName")}
            error={formik.touched.bankBranchName && formik.errors.bankBranchName ? formik.errors.bankBranchName : null}
          />
        </div>
      </div>

      <div className="student__sub__title mt-4">Upload Documents</div>
      <div className="grid mt-3">
        <div className="col-12 md:col-6 lg:col-6">
          <DropDownField
            label={"Title"}
            required={true}
            placeholder={"Select"}
            options={documentOptions}
            optionLabel="label"
            optionValue="value"
            value={formik.values.title}
            onChange={(e) => formik.setFieldValue("title", e.value)}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-6">
          <FileDragUpload label={"Documents"} />
        </div>
        <div className="overall_container_siblings">
          <div className="col-12 md:col-12 lg:col-12  overall_siblings flex ">
            {["Adhar", "TC"].map((data) => (
              <div className="chip_sortable">
                <Chip label={data} removable />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordingdetails;
