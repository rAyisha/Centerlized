import { FunctionalComponent, h } from "preact";
import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";
import SvgDeleteIcon from "../../../../../../assets/svgIcon/SvgDeleteIcon";
import InputField from "../../../../../../components/InputField";
import SvgCalculator from "../../../../../../assets/svgIcon/SvgCalculator";
import Attendance from "./Attendance";

interface GeneratePayrollProps {
  actionName: string;
}

const GeneratePayroll: FunctionalComponent<GeneratePayrollProps> = ({
  actionName,
}) => {
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

  const addEarning = () => {
    setEarningList([...earningList, { name: "", amount: "00.000" }]);
  };

  const addDeduction = () => {
    setDeductionsList([...deductionsList, { name: "", amount: "00.000" }]);
  };

  return (
    <div className="generate__payroll">
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
          <div className="staff__name">EPF Number: 5454541</div>
          <div className="staff__id">Designation: Faculty</div>
          <div className="staff__id">Department: Academic</div>
          <div className="staff__id">Role: Teacher</div>
        </div>
      </div>

      <Attendance />

      <div className="input__group__layout">
        <div className="input__border">
          <div className="input__group__layout__header title__border">
            <span>Earnings</span>
            <span className="pi pi-plus" onClick={addEarning}></span>
          </div>
          {earningList.map((item, index) => (
            <div className="flex p-2 gap-2" key={index}>
              <div className="p-inputgroup">
                <InputText
                  value={item.name}
                  onChange={(e: any) => {
                    const newEarnings = [...earningList];
                    newEarnings[index].name = e.target.value;
                    setEarningList(newEarnings);
                  }}
                />
                <div className="p-inputgroup-addon">
                  <InputText
                    value={item.amount}
                    onChange={(e: any) => {
                      const newEarnings = [...earningList];
                      newEarnings[index].amount = e.target.value;
                      setEarningList(newEarnings);
                    }}
                  />
                </div>
              </div>
              <div className="flex align-items-center">
                {earningList.length - 1 === index ? (
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      const newEarnings = earningList.filter(
                        (_, i) => i !== index
                      );
                      setEarningList(newEarnings);
                    }}
                  >
                    <SvgDeleteIcon color="#263446" />
                  </div>
                ) : (
                  <SvgDeleteIcon color="#ffffff" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="input__group__layout">
        <div className="input__border">
          <div className="input__group__layout__header title__border">
            <span>Deductions</span>
            <span className="pi pi-plus" onClick={addDeduction}></span>
          </div>
          {deductionsList.map((item, index) => (
            <div className="flex p-2 gap-2" key={index}>
              <div className="p-inputgroup">
                <InputText
                  value={item.name}
                  onChange={(e: any) => {
                    const newDeductions = [...deductionsList];
                    newDeductions[index].name = e.target.value;
                    setDeductionsList(newDeductions);
                  }}
                />
                <div className="p-inputgroup-addon">
                  <InputText
                    value={item.amount}
                    onChange={(e: any) => {
                      const newDeductions = [...deductionsList];
                      newDeductions[index].amount = e.target.value;
                      setDeductionsList(newDeductions);
                    }}
                  />
                </div>
              </div>
              <div className="flex align-items-center">
                {deductionsList.length - 1 === index ? (
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      const newDeductions = deductionsList.filter(
                        (_, i) => i !== index
                      );
                      setDeductionsList(newDeductions);
                    }}
                  >
                    <SvgDeleteIcon color="#263446" />
                  </div>
                ) : (
                  <SvgDeleteIcon color="#ffffff" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="mt-3" />
      <div className="flex justify-content-between">
        <div className="calculation__title text-center">Payroll Summary</div>
        <Button
          className="flex gap-2"
          label="Calculate"
          icon={<SvgCalculator />}
          outlined
        />
      </div>

      <InputField className="basic__salary" label="Basic Salary" />
      <InputField className="earning" label="Earning" />
      <InputField className="deduction" label="Deduction" />
      <InputField className="grossSalary" label="Gross Salary" />
      <InputField className="tax" label="Tax" />
      <InputField className="netSalary" label="Net Salary" />

      <div className="flex justify-content-end mt-5">
        <div className="flex gap-2">
          <Button label="Cancel" outlined />
          <Button label={actionName === "add" ? "Save" : "Update"} />
        </div>
      </div>
    </div>
  );
};

export default GeneratePayroll;
