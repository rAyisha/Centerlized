import "./index.scss";
import { Avatar } from "primereact/avatar";

import { useState } from "react";
import InputField from "../../../../../../components/InputField";

const ViewPayroll: React.FC = () => {
  const [earningList, setEarningList] = useState<
    { name: string; amount: string }[]
  >([
    {
      name: "",
      amount: "00.000",
    },
  ]);
  const [deductionsList, setDeductionsList] = useState<
    { name: string; amount: string }[]
  >([
    {
      name: "",
      amount: "00.000",
    },
  ]);

  return (
    <div className="view__payroll">
      <div className="profile__layout">
        <Avatar
          image="https://i.ibb.co/DpVFR3d/staff.png"
          size="xlarge"
          shape="circle"
          className="avatar__controller"
        />
        <div className="generate__payrole__card__left__details card__right__border pr-3">
          <div className="staff__name">Joe Black</div>
          <div className="staff__id">Staff ID: SID001</div>
          <div className="staff__id">Email: estherjhon@example.com</div>
          <div className="staff__id">Phone: 9876543210</div>
        </div>
        <div className="generate__payrole__card__left__details">
          <div className="staff__name">EPF Number: 5454541 </div>
          <div className="staff__id">Designation: Faculty</div>
          <div className="staff__id">Department: Academic</div>
          <div className="staff__id">Role: Teacher</div>
        </div>
      </div>

      <div className="grid m-0">
        <div className="col-12 border__container">
          <div className="border__label">
            <span>Earnings</span>
          </div>
          {/* <FormInputs
            className="earning"
            label="Allowance"
            disabled
            value="0.00"
          /> */}
          <InputField
            className="earning"
            label="Allowance"
            disabled
            value="0.00"
            // value={formik.values.Allowance}
            // onChange={formik.handleChange}
            // label={"Phone"}
            // name="phone"
            // required={false}
            // placeholder={"Enter"}
            // type="number"
            // error={
            //   formik.touched.Allowance && formik.errors.Allowance
            //     ? formik.errors.Allowance
            //     : ""
            // }
          />
          <div className="border__label mt-3 flex justify-content-between">
            <span>Total Earnings</span>
            <span>3,000.00</span>
          </div>
        </div>
        <div className="col-12 border__container">
          <div className="border__label">
            <span>Deduction</span>
          </div>
          <InputField className="deduction" label="PF" disabled value="0.00" />
          <div className="border__label mt-3 flex justify-content-between">
            <span>Total Deduction</span>
            <span>3,000.00</span>
          </div>
        </div>
      </div>
      <InputField
        className="basic__salary"
        // labelclassName="label__left"
        label="Basic Salary"
        disabled
        value="20000"
      />
      <InputField
        className="grossSalary"
        // labelclassName="label__left"
        label="Gross Salary"
        disabled
        value="0.00"
      />
      <InputField
        className="tax"
        // labelclassName="label__left"
        label="Tax"
        disabled
        value="0.00"
      />
      <InputField
        className="netSalary"
        // labelclassName="label__left"
        label="Net Salary"
        disabled
        value="0.00"
      />
    </div>
  );
};

export default ViewPayroll;
