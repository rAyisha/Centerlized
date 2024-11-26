
import { useEffect, useRef } from "preact/hooks";
import { Dispatch, SetStateAction } from "preact/compat";
import DatePicker from "../../../../../../components/DatePicker";
import { InputTextarea } from "primereact/inputtextarea";
import './index.scss'
import { useDispatch, useSelector } from "react-redux";
import { getDisableReasonsDropdownMiddleWare, patchEnableDisableStudentMiddleware } from "../../store/studentMiddleware";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import DropDownField from "../../../../../../components/DropDownField";
import { useNavigate, useParams } from "react-router-dom";
import { Toast } from "primereact/toast";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import { StudentFormData } from "../../store/student.Types";
import { FunctionalComponent } from "preact";

interface Props {
  setStudentPopup: Dispatch<SetStateAction<boolean>>
}

const DisableStudentPopUp: FunctionalComponent<Props> = ({ setStudentPopup }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const toast = useRef<any>(null);
  const { companyID, branchID, disableReasonsData } = useSelector((state: RootState) => {
    return {
      companyID: state.dropdownDataReducers.companyID,
      branchID: state.dropdownDataReducers.branchID,
      disableReasonsData: state.edvanceReducers.studentReducers.disableReasonsData,
    };
  });
  const dispatch = useDispatch<AppDispatch>()
  const initalvalue = {
    disableReasonId: null,
    disableDate: new Date(),
    note: ""
  }

  const validate = () => {
    const errors: any = {};
    if (!formik.values.disableReasonId) {
      errors.disableReasonId = "Disable Reason is Required"
    }
    return errors;
  }

  const handleClickEnableDisable = async () => {
    const disableDateData = formik?.values?.disableDate;
    const date = new Date(disableDateData);
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '-');
    try {
      const payload = { disableReasonId: formik?.values?.disableReasonId, disableDate: formattedDate, note: formik.values.note }
      const options = { headers: { "company-id": companyID, "branch-id": branchID } }
      const res = await dispatch(patchEnableDisableStudentMiddleware({ id, payload, options }));
      if (res.meta.requestStatus === "fulfilled") {
        toast.current.show({ severity: 'success', summary: 'Success', detail: `${res?.payload?.message}`, life: 3000 });
        setTimeout(() => {
          navigate("/edvance/students/liststudents");
        }, 2000)
      } else {
        toast.current.show({ severity: 'error', summary: 'Error', detail: `${res?.payload?.message} staff`, life: 3000 });
        console.error("find api failed:", res?.payload?.response);
      }

    } catch (error: any) {
      console?.error("find An error occurred:", error.message);
    }
  }

  const formik = useFormik({
    initialValues: initalvalue,
    validate,
    onSubmit: () => {
      handleClickEnableDisable()
    }
  })

  useEffect(() => {
    dispatch(getDisableReasonsDropdownMiddleWare({ headers: { "company-id": companyID, "branch-id": branchID } }))
  }, [companyID, branchID])
  return (
    <div>
      <Toast ref={toast} />
      <div className="disable-student-container">
        <DropDownField
          label="Reason"
          name="disableReasonId"
          required={true}
          options={disableReasonsData}
          value={formik.values.disableReasonId}
          onChange={formik.handleChange}
          optionLabel="name"
          optionValue="id"
        />

        <DatePicker
          label="Date"
          required={false}
          name="disableDate"
          value={formik.values.disableDate}
          onChange={formik.handleChange}
        />
        <div>
          <div className="text-area-label">Remarks</div>
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
          <Button
            label=""
            className="cancel__button__area__popup"
            onClick={() => setStudentPopup(false)}
          >
            Cancel
          </Button>

          <Button className="submit__button__area__popup" onClick={formik.handleSubmit} disabled={!formik.values.disableReasonId}>
            Save
          </Button>

        </div>
      </div>
    </div>
  );
};

export default DisableStudentPopUp;

