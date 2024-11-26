import { Button } from "primereact/button";
// import InputField from "../../../../components/InputField";
import "./index.scss";
// import FileDragUpload from "../../../../components/FileDrag";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../../../../components/InputField";
import FileDragUpload from "../../../../../../components/FileDragUpload";
// import { getAdmissionNoData, getSingleAlumini, getmanagealumini, patchManageAlumini, putAlumniDetailsMiddleware } from "../../store/alumniMiddleware";
//  import InputField from "../../../../../components/InputField";
// import FileDragUpload from "../../../../../components/FileDragUpload";

const AddModal = ({ setVisible, data, actionName, formikValue,searchValue, admissionNo, setAdmissionNo }) => {
  const dispatch = useDispatch();

  const setFormikValues = (res) => {
    console.log(res, "datasssss")
    const updatedValues = {
      number: res?.currentPhone || "",
      email: res?.currentEmail || "",
      occupation: res?.occupation || "",
      address: res?.address || "",
    };
    formik.setValues({ ...formik.values, ...updatedValues });

  };

  // const validate = (values) => {
  //   const errors = {};

  //   if (!values.number) {
  //     errors.number = "Phone Number is Required";
  //   }

  //   return errors;
  // };
  const formik = useFormik({
    initialValues: {
      number: "",
      email: "",
      occupation: "",
      address: "",
    },
    // validate,
    onSubmit: () => {
     
      // dispatch(patchManageAlumini({
      //   id: data?.id,
      //   payload: {
      //     "currentEmail": formik.values?.email,
      //     "currentPhone": formik.values?.number,
      //     // "currentPhoto": "https://google.com",
      //     "occupation": formik.values?.occupation,
      //     "address": formik.values?.address
      //   }
      // })).then((res) => {
      //   dispatch(getAdmissionNoData({ admissionNo }))
      //   dispatch(getmanagealumini(
      //     {
      //       payload: {

      //         search: searchValue,
      //         classId: formik.values?.class?.id,
      //         sectionId: formik.values?.section?.id,
      //         sessionId: formik.values?.session?.id
      //       }
      //     }
      //   )

      //   )
      // }

      // )
      // console.log(formik.values, "addvalues")
      setVisible(false);
    },
  });

  // useEffect(() => {
  //   dispatch(getSingleAlumini(data?.id)).then((res) => setFormikValues(res?.payload?.data))
  // }, [])

  // useEffect(() => {
  //   console.log("=====>", data);
  //   if (data) {
  //     formik.values = data;
  //   }
  // }, [data]);
  return (
    <div className="alumni_manage_modal">
      <div className="form_container">
        <InputField
          label="Current Phone"
          // Start={true}
          name="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={
            formik.touched.number && formik.errors.number
              ? formik.errors.number
              : null
          }
        />
        <InputField
          label="Current Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <InputField
          label="Occupation"
          name="occupation"
          value={formik.values.occupation}
          onChange={formik.handleChange}
        />
        <InputField
          label="Address"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
        />
        <FileDragUpload label="Current Photo" />
      </div>
      {actionName !== "view" &&
        <div className="buttons_layout flex justify-content-end">
          <Button label="Cancel" outlined onClick={() => setVisible(false)} />
          <Button label="Update" onClick={formik.handleSubmit} />
        </div>
      }
    </div>
  );
};

export default AddModal;
