import React, { useState, useRef } from "react";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { Column } from "primereact/column";

import "./index.scss";

import EmptyTableIcon from "../../../../components/EmptyTableIcon";
import { useDispatch } from "react-redux";
import Button from "../../../../../../components/Button";
import DataTable from "../../../../../../components/DataTable";
import CheckBox from "../../../../../../components/CheckBox";

interface Student {
  id: number;
  admissionNumber: string;
  studentName: string;
  currentResult?: string;
  nextSessionStatus?: string;
}

interface TableDataProps {
  tabledata: Student[];
  formik: any; // Replace with appropriate type if known
}

const TableData: React.FC<TableDataProps> = ({ tabledata, formik }) => {
  const toast = useRef<Toast>(null);
  const dispatch = useDispatch();

  const [selectedRows, setSelectedRows] = useState<Student[]>([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: string;
  }>({});
  const [selectedSessions, setSelectedSessions] = useState<{
    [key: number]: string;
  }>({});

  const closePopup = () => {
    setPopupVisible(false);
  };

  const acceptPopup = () => {
    handlePromoteStudent();
  };

  const handlePromoteStudent = async () => {
    const existingArray = selectedRows.map((student) => ({
      studentId: student.id,
      result: selectedOptions[student.id] === "Fail" ? "fail" : "pass",
      status: selectedSessions[student.id] === "Retain" ? "leave" : "continue",
    }));

    const bodyData = {
      currentSessionId: 15,
      currentClassId: formik.values?.class.id,
      currentSectionId: formik.values?.section.id,
      toSessionId: formik.values?.session.id,
      toClassId: formik.values?.classpromoted.id,
      toSectionId: formik.values?.sectionpromoted.id,
      studentList: existingArray,
    };

    // try {
    //   const res = await dispatch(postPromoteStudentSessionMiddleWare(bodyData));

    //   if (res.meta.requestStatus === "fulfilled") {
    //     toast.current.show({
    //       severity: "success",
    //       summary: "Confirmed",
    //       detail: "Students promoted successfully",
    //       life: 3000,
    //     });
    //     formik.handleSubmit();
    //   } else {
    //     console.error("API call failed:", res?.payload?.response);
    //   }
    // } catch (error) {
    //   console.error("An error occurred:", error.message);
    // }
  };

  const handleSelectOption = (rowId: number, option: string) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [rowId]: option,
    }));
  };

  const handleSelectSession = (rowId: number, option: string) => {
    setSelectedSessions((prevState) => ({
      ...prevState,
      [rowId]: option,
    }));
  };

  const optionsResultTemplate = ["Pass", "Fail"];
  const optionsSessionTemplate = ["Continue", "Retain"];

  const StatusResultTemplate = ({ rowData }: { rowData: Student }) => (
    // <CheckBox
    //   options={optionsResultTemplate}
    //   selectedOption={selectedOptions[rowData.id] || "Pass"}
    //   onSelectOption={(option) => handleSelectOption(rowData.id, option)}
    // />
    <CheckBox
      label="Pass" 
    //   value={selectedOptions[rowData.id] === "Pass"}
    //   onChange={(checked) => {
    //     handleSelectOption(rowData.id, checked ? "Pass" : "Fail"); // Assuming two options
    //   }}
      type="radio" // Set type to radio if this is part of a group
    />
  );

  const StatusSessionTemplate = ({ rowData }: { rowData: Student }) => (
    // <CheckBox
    //   options={optionsSessionTemplate}
    //   selectedOption={selectedSessions[rowData.id] || "Continue"}
    //   onSelectOption={(option) => handleSelectSession(rowData.id, option)}
    // />
    <CheckBox
    //   label="Continue" 
    //   value={selectedSessions[rowData.id] === "Continue"}
    //   onChange={(checked) => {
    //     handleSelectSession(rowData.id, checked ? "Continue" : "Retain"); // Assuming two options
    //   }}
      type="radio" // Set type to radio for session selection
    />
  );

  const handleChange = (e: any) => {
    setSelectedRows(e.value);
  };
  const DataValue = [
    {
      phoneNumber: "1234567890",
      studentName: "Alice Johnson",
      currentResult: "Pass",
      nextSessionStatus: "Continue",
    },
    {
      phoneNumber: "0987654321",
      studentName: "Bob Smith",
      currentResult: "Fail",
      nextSessionStatus: "Retain",
    },
    {
      phoneNumber: "4567891230",
      studentName: "Charlie Brown",
      currentResult: "Pass",
      nextSessionStatus: "Continue",
    },
    {
      phoneNumber: "7890123456",
      studentName: "David Wilson",
      currentResult: "Pass",
      nextSessionStatus: "Continue",
    },
    {
      phoneNumber: "3216549870",
      studentName: "Eva Adams",
      currentResult: "Fail",
      nextSessionStatus: "Leave",
    },
  ];

  const columns = [
    {
      field: "phoneNumber",
      header: "Admission No",
    },
    {
      header: "Student Name",
    },
    {
      header: "Current Result",
      body: StatusResultTemplate,
    },
    {
      header: "Next Session Status",
      body: StatusSessionTemplate,
    },
  ];
  return (
    <div className="promoted__student__table__container">
      <Toast ref={toast} />
      <ConfirmDialog
        visible={popupVisible}
        message="Are you sure you want to promote the selected students?"
        closable={false}
        reject={closePopup}
        accept={acceptPopup}
      />
      <div className="table__main__container">
        <DataTable
          value={DataValue}
          columns={columns}
          paginator
          lazy={false}
          selectionMode="multiple" 
          selection={selectedRows}
          onSelectionChange={(e) => setSelectedRows(e.value)}
        />
      </div>
      <div className="button__container flex justify-content-end">
        <Button
          disabled={selectedRows.length === 0}
          label="Promote"
          onClick={() => setPopupVisible(true)}
          className="export__butt__overall"
        />
      </div>
    </div>
  );
};

export default TableData;
