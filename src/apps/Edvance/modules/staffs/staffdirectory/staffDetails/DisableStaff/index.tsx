import React, { useEffect, useRef, useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";
import DropDownField from "../../../../../../../components/DropDownField";
import DatePicker from "../../../../../../../components/DatePicker";

// Define types for the data and props
interface DisableReason {
  id: string;
  name: string;
}

interface GetDisableDropdownDataResponse {
  data: DisableReason[];
}

interface GetDisablesingleData {
  id: string;
}

interface DisableStaffPopUpProps {
  getDisablesingleData: GetDisablesingleData;
}

const DisableStaffPopUp: React.FC<DisableStaffPopUpProps> = ({
  getDisablesingleData,
}) => {
  const navigate = useNavigate();
  const toast = useRef<Toast>(null);
  const dispatch = useDispatch();

  const { getDisableDropdownData } = useSelector((state: any) => ({
    getDisableDropdownData:
      state.studentDetailsReducers?.getDisableDropdownData?.data?.data || [],
  }));

  console.log(getDisablesingleData?.id, "getDisablesingleData");

  const initialValues = {
    disableReason: "",
    disableDate: new Date(),
    note: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: () => {},
  });

  const disableDateData = formik?.values?.disableDate;
  const date = new Date(disableDateData);
  const formattedDate = date
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-");

  console.log(formattedDate, "disableReasondisableReasondisableReason");

  const handleClickEnableDisable = async () => {
    const id = getDisablesingleData?.id;
    const disableDateData = formik?.values?.disableDate;
    const date = new Date(disableDateData);
    const formattedDate = date
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "-");

    // try {
    //   const res =
    //   await
    //   dispatch(patchDisableMiddleWare({
    //     id,
    //     disableReasonId: formik?.values?.disableReason?.id,
    //     disableDate: formattedDate,
    //   }));

    //   if (res.meta.requestStatus === "fulfilled") {
    //     toast.current?.show({
    //       severity: 'success',
    //       summary: 'Success',
    //       detail: `${res?.payload?.data?.message}`,
    //       life: 3000,
    //     });
    //     setTimeout(() => {
    //       navigate("/studentsinformation/studentslist");
    //     }, 2000);
    //   } else {
    //     toast.current?.show({
    //       severity: 'error',
    //       summary: 'Error',
    //       detail: `${res?.payload?.data?.message} staff`,
    //       life: 3000,
    //     });
    //     console.error("API failed:", res?.payload?.response);
    //   }
    // } catch (error) {
    //   console.error("An error occurred:", error.message);
    // }
  };

  // useEffect(() => {
  //   dispatch(getDisableReasonAllDropdownDataMiddleware());
  // }, [dispatch]);

  return (
    <div>
      <Toast ref={toast} />
      <div className="disable-student-container">
        <DropDownField
          label="Reason"
          name="name"
          options={getDisableDropdownData}
          value={formik.values.disableReason}
          onChange={(label) => formik.setFieldValue("disableReason", label)}
          optionLabel="name"
        />

        <DatePicker
          label="Date"
          disabled
          value={formik.values.disableDate}
          onChange={(value) => formik.setFieldValue("disableDate", value)}
        />

        <div>
          <div className="text-area-label">Note</div>
          <InputTextarea
            className="text-area-container"
            autoResize
            value={formik?.values?.note}
            onChange={formik?.handleChange("note")}
            rows={5}
            cols={30}
          />
        </div>

        <div className="button_area flex justify-content-end gap-2">
          <Button label="" className="cancel__button__area__popup">
            Cancel
          </Button>

          <Button
            className="submit__button__area__popup"
            onClick={handleClickEnableDisable}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DisableStaffPopUp;
