import React, { useRef, useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import "../index.scss";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Toast } from "primereact/toast";
import DatePicker from "../../../../../../components/DatePicker";
import { studenttypedata } from "../../staffdirectory/tabHeader/mock";
import DropDownField from "../../../../../../components/DropDownField";
import FileDragUpload from "../../../../../../components/FileDragUpload";
import { AppDispatch } from "../../../../../../redux/store";
import { patchOneLeave, postApplyLeave } from "../store/applyLeaveMiddleware";
import Button from "../../../../../../components/Button";

interface LeaveRequestProps {
  setVisible: any;
  action: string;
  applyleavefunc: any;
  getoneleavedata: any;
}

interface FormValues {
  applyleave: Date;
  AvailableLeave: any;
  LeaveFromDate: Date;
  LeaveToDate: Date;
  Reason: string;
}

const initialValues: FormValues = {
  applyleave: new Date(),
  AvailableLeave: "",
  LeaveFromDate: new Date(),
  LeaveToDate: new Date(),
  Reason: "",
};

const AddLeaveRequest: React.FC<LeaveRequestProps> = ({
  setVisible,
  action,
  applyleavefunc,
  getoneleavedata,
}) => {
  const toast = useRef<Toast>(null);
  const dispatch: AppDispatch = useDispatch();
  const handleSubmit = (values: FormValues) => {
    if (action === "add") {
      setVisible(false);
      dispatch(
        postApplyLeave({
          payload: {
            fromDate: values.LeaveFromDate,
            toDate: values.LeaveToDate,
            applyDate: values.applyleave,
            reason: values.Reason,
            supportDocs: "www.google.com",
            MSLeaveTypeId: values.AvailableLeave?.id,
            MSSessionId: 2,
          },
        })
      ).then((res: any) => {
        if (res?.meta?.requestStatus === "fulfilled") {
          toast.current?.show({
            severity: "success",
            summary: "Success",
            detail: `${res?.payload?.message}`,
            life: 3000,
          });
          setTimeout(() => {
            setVisible(false);
            dispatch(applyleavefunc());
          }, 2000);
        } else {
          toast.current?.show({
            severity: "error",
            summary: "Error",
            detail: `${res?.payload?.message}`,
            life: 3000,
          });
        }
      });
    } else if (action === "edit") {
      dispatch(
        patchOneLeave({
          id: getoneleavedata?.id,
          payload: {
            applyDate: formik.values?.applyleave,
            MSLeaveTypeId: formik.values?.AvailableLeave?.id,
            fromDate: formik.values?.LeaveFromDate,
            toDate: formik.values?.LeaveToDate,
            reason: formik.values?.Reason,
            MSSessionId: 2,
          },
        })
      ).then((res) => {
        if (res?.meta?.requestStatus === "fulfilled") {
          console.log("checksec");
          toast.current.show({
            severity: "success",
            summary: "Success",
            detail: `${res?.payload?.message}`,
            life: 3000,
          });
          setTimeout(() => {
            setVisible(false);
            applyleavefunc();
          }, 2000);
        } else {
          toast.current.show({
            severity: "error",
            summary: "error",
            detail: `${res?.payload?.message}`,
            life: 3000,
          });
        }
      });
    }
  };

  const validate = (values: FormValues) => {
    const errors: Partial<Record<keyof FormValues, string>> = {};
    if (!values.applyleave) {
      errors.applyleave = "Apply date is required";
    }
    if (!values.AvailableLeave) {
      errors.AvailableLeave = "Available Leave is required";
    }
    if (!values.LeaveFromDate) {
      errors.LeaveFromDate = "Leave From Date is required";
    }
    if (!values.LeaveToDate) {
      errors.LeaveToDate = "Leave To Date is required";
    }
    return errors;
  };

  const formik = useFormik<FormValues>({
    initialValues,
    validate,
    onSubmit: handleSubmit,
  });

  return (
    <div className="add__leave__request">
      <Toast ref={toast} />
      <div className="grid mt-1">
        <div className="col-12">
          <DatePicker
            label={"Apply Date"}
            value={formik.values.applyleave}
            onChange={(value) =>
              formik.setFieldValue("applyleave", new Date(value))
            }
            required={true}
            name="applyleave"
            placeholder="Select"
            error={
              formik.touched.applyleave && formik.errors.applyleave
                ? formik.errors.applyleave
                : ""
            }
            disabled={action === "view" ? true : false}
          />
        </div>
      </div>
      <div className="grid mt-1">
        <div className="col-12">
          <DropDownField
            label="Available Leave"
            required={true}
            placeholder="Select"
            options={studenttypedata}
            optionLabel="name"
            optionValue="id"
            value={formik.values.AvailableLeave}
            name="department"
            onChange={formik.handleChange}
            error={
              formik.touched.AvailableLeave && formik.errors.AvailableLeave
                ? (formik.errors.AvailableLeave as string)
                : ""
            }
            disabled={action === "view" ? true : false}
          />
        </div>
      </div>
      <div className="grid mt-1">
        <div className="col-12">
          <DatePicker
            label={"Leave From Date"}
            value={formik.values.LeaveFromDate}
            onChange={(value) =>
              formik.setFieldValue("LeaveFromDate", new Date(value))
            }
            required={true}
            name="LeaveFromDate"
            placeholder="Select"
            error={
              formik.touched.LeaveFromDate && formik.errors.LeaveFromDate
                ? formik.errors.LeaveFromDate
                : ""
            }
            disabled={action === "view" ? true : false}
          />
        </div>
      </div>
      <div className="grid mt-1">
        <div className="col-12">
          <DatePicker
            label={"Leave To Date"}
            value={formik.values.LeaveToDate}
            onChange={(value) =>
              formik.setFieldValue("LeaveToDate", new Date(value))
            }
            required={true}
            name="LeaveToDate"
            placeholder="Select"
            error={
              formik.touched.LeaveToDate && formik.errors.LeaveToDate
                ? formik.errors.LeaveToDate
                : ""
            }
            disabled={action === "view" ? true : false}
          />
        </div>
      </div>
      <div className="grid mt-1">
        <div className="col-12">
          <div className="student__file__uploade__label mb-2">Reason</div>
          <div className="student__text__area">
            <InputTextarea
              autoResize
              rows={5}
              cols={30}
              placeholder="Enter"
              value={formik.values.Reason}
              onChange={(e:any) => formik.setFieldValue("Reason", e.currentTarget.value)}
            />
            {formik.errors.Reason && formik.touched.Reason ? (
              <div className="error">{formik.errors.Reason}</div>
            ) : null}
          </div>
        </div>
      </div>
      <FileDragUpload label="Attach Document" />
      {action !== "view" && (
        <div className="btn__container mt-5">
          <div className=" btn__cancel">
            <Button
              label={"Cancel"}
              onClick={() => {
                setVisible(false);
              }}
              type="submit"
              outlined={true}
              disabled={!formik.isValid}
            />
          </div>

          <div className=" btn__save">
            <Button
              label={action === "add" ? "Save" : "Update"}
              onClick={() => {
                formik.handleSubmit();
              }}
              type="submit"
              disabled={!formik.isValid}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddLeaveRequest;
