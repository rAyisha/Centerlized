import { useEffect, useRef, useState } from "preact/hooks";
import "./index.scss";
import InputField from "../../../../../../components/InputField";
import Button from "../../../../../../components/Button";
import SvgDocumentupload from "../../../../../../assets/svgIcon/SvgDocumentUpload";
import DropDownField from "../../../../../../components/DropDownField";
import DatePicker from "../../../../../../components/DatePicker";
import CustomAccordionTab from "../../../../../../components/AccordionTab";
import FileUpload from "../../../../../../components/FileUpload";
import { genderOptions } from "./mock";
import Sider from "../../../../components/Sider";
import ImportDetails from "./importDetails";
import Accordingdetails from "./accordingDetail";
import SvgBackArrow from "../../../../../../assets/svgIcon/SvgPrevIcon";
import { useNavigate, useParams } from "react-router-dom";
import { FormikProps, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import customHistory from "../../../../../../utility/customHistory";
import {
  getDesignationDropdownMiddleware,
  getDepartmentDropdownMiddleware,
  getStaffTypeDropdownMiddleware,
} from "../../store/staffMiddleware";
import {
  getAllContractMiddleware,
  getAllMaritialStatusMiddleware,
  getAllRolesMiddleware,
  getStafftypeDropdownMiddleWare,
  getTeacherByIdMiddleware,
  patchUpdateStaffByIdMiddleware,
  postTeacherMiddleware,
} from "../store/staffDirectoryMiddleware";
import { Toast } from "primereact/toast";
import Checkboxes from "../../../../../../components/CheckBox";
import {
  cityoption,
  countryoption,
  stateoption,
} from "../../../student/studentadmission/mock";
import { Divider } from "primereact/divider";
import SvgAddIcon from "../../../../../../assets/svgIcon/SvgAddIcon";
import SvgDeleteIcon from "../../../../../../assets/svgIcon/SvgDeleteIcon";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import { StaffFormFields } from "../store/staffDirectory.Types";
import { Panel } from "primereact/panel";
import { InputTextarea } from "primereact/inputtextarea";

const initialValues = {
  staffID: "STAFF1001",
  staffType: "",
  role: "",
  designation: "",
  department: "",
  firstname: "",
  lastname: "",
  fathername: "",
  mothername: "",
  gender: "",
  email: "",
  dob: undefined,
  doj: undefined,
  phone: "",
  emergencyContactNumber: "",
  maritalStatus: "",
  adharNumber: "",
  panNumber: "",
  currentcountry: "",
  currentstate: "",
  currentcity: "",
  currentAddressline1: "",
  currentAddressline2: "",
  currentPincode: "",
  permanentcountry: "",
  permanentstate: "",
  permanentcity: "",
  permanentAddressline1: "",
  permanentAddressline2: "",
  permanentPincode: "",
  Qualification: "",
  WorkExperience: "",
  note: "",
  epfNo: "",
  basicSalary: "",
  contractType: "",
  workShift: "",
  bankTitle: "",
  bankAccountNo: "",
  bankName: "",
  ifscCode: "",
  bankBranchName: "",
  file: "",
  resumefile: "",
  joiningletterfile: "",
  resignationletterfile: "",
  otherDocuments: "",
  qualifications: [{ collegeName: "", passedOutYear: "", stream: "" }],
  experiences: [{ schoolName: "", years: "", position: "", ctc: "" }],
};

const AddStaffDirectory = () => {
  const {
    staffDesignationData,
    staffTypeData,
    staffDepartmentData,
    maritialStatusData,
    contractData,
    rolesData,
  } = useSelector((state: RootState) => ({
    staffDesignationData:
      state.edvanceReducers.staffMasterReducer?.staffDesignationDropdown?.data
        ?.data,
    staffTypeData:
      state.edvanceReducers.staffMasterReducer?.staffTypeDropdown?.data?.data,
    staffDepartmentData:
      state.edvanceReducers.staffMasterReducer?.staffDepartmentDropdown?.data
        ?.data,
    maritialStatusData:
      state.edvanceReducers.staffDirectoryReducer?.maritalStatus?.data,
    contractData: state.edvanceReducers.staffDirectoryReducer?.contracts?.data,
    rolesData: state.edvanceReducers.staffDirectoryReducer?.roles?.data,
  }));

  const dispatch = useDispatch<AppDispatch>();  
  const { action, id } = useParams();
console.log("actionaction",action)

  const [visible, setVisible] = useState<boolean>(false);
  const [addressCheckbox, setAddressCheckbox] = useState<boolean>(false);
  const [Options, setOptions] = useState<any[]>([]);
  const [designation, setdesignation] = useState<any[]>([]);
  const [department, setdepartment] = useState<any[]>([]);
  const [levetOptionData, setLevelOptionData] = useState<any[]>([]);
  const [materitalDataOption, setMateritalDataOption] = useState<any[]>([]);
  const [contractType, setContractType] = useState<any[]>([]);
  const toast = useRef<any>(null);

  // const showtoast = () => {
  //   toast.current.showtoast({ severity: 'info', summary: 'Info', detail: 'Message Content' });
  // };
  // const navigate = useNavigate();

  const show = () => {
    setVisible(true);
  };

  const handleSubmit = (values: any) => {
    const convertToDateFormat = (dateString: any) => {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const dayStr = day < 10 ? "0" + day : day;
      const monthStr = month < 10 ? "0" + month : month;

      return `${monthStr}-${dayStr}-${year}`;
    };

    const postData = {
      MSDepartmentTypeMasterId: values?.department?.id || null,
      MSStaffTypeTypeMasterId: values?.staffType?.id || null,
      MSDesignationTypeMasterId: values?.designation?.id || null,
      MSMaritialStatusMasterId: values?.maritalStatus?.id || null,
      MSContractTypeMasterId: values?.contractType?.id || null,
      MSRoleId: values?.role?.id || null,
      firstName: values?.firstname || null,
      lastName: values?.lastname || null,
      fathersName: values?.fathername || null,
      mothersName: values?.mothername || null,
      email: values?.email || null,
      gender: values?.gender || null,
      DateOfBirth: convertToDateFormat(values?.dob) || null,
      DateOfJoining: convertToDateFormat(values?.doj) || null,
      phoneNo: values?.phone || null,
      emergencyContact: values?.emergencyContactNumber || null,
      currentcountry: values?.currentcountry || null,
      currentstate: values?.currentstate || null,
      currentcity: values?.currentcity || null,
      currentAddressline1: values?.currentAddressline1 || null,
      currentAddressline2: values?.currentAddressline2 || null,
      currentPincode: values?.currentPincode || null,
      permanentcountry: values?.permanentcountry || null,
      permanentstate: values?.permanentstate || null,
      permanentcity: values?.permanentcity || null,
      permanentAddressline1: values?.permanentAddressline1 || null,
      permanentAddressline2: values?.permanentAddressline2 || null,
      permanentPincode: values?.permanentPincode || null,
      qualification: values?.Qualification || null,
      workExperience: parseInt(values?.WorkExperience) || null,
      PAN: values?.panNumber || null,
      note: values?.note || null,
      EPF_No: values?.epfNo || null,
      basicSalary: parseInt(values?.basicSalary) || null,
      workShift: values?.workShift || null,
      bankAccountTitle: values?.bankTitle || null,
      bankAccountNumber: values?.bankAccountNo || null,
      sessionId: 1,
      bankName: values?.bankName || null,
      IFSC_CODE: values?.ifscCode || null,
      bankBranchName: values?.bankBranchName || null,
      resumeUrl: values?.resumefile || null,
      joiningLetterUrl: values?.joiningletterfile || null,
      resignationLetterUrl: values?.resignationletterfile || null,
      staffPictureUrl: values?.file || null,
    };

    if (action === "add") {
      dispatch(postTeacherMiddleware({ payload: postData })).then(
        (res: any) => {
          console.log(res, "success");
          if (res?.payload?.message === "Staff created successfully") {
            showToast("success", "Success", "Staff created successfully");
            formik.resetForm();
          } else {
            console.log(res, "description");
            showToast("warn", "warning", "error");
          }
        }
      );
    }
    // navigate("/humanresource/staffdirectory");
    else if (action === "edit") {
      dispatch(
        patchUpdateStaffByIdMiddleware({ payload: postData, ID: values.id })
      ).then((res) => {
        if (res?.payload?.message === "staff updated successfully") {
          showToast("success", "Success", "Staff Updated successfully");
        }
      });
    }
  };
  const showToast = (severity: string, summary: string, detail: string) => {
    toast.current.show({
      severity,
      summary,
      detail,
      life: 3000,
    });
  };

  const setFormikValues = (data: any) => {
    const leaveType = data?.gender;
    const role = data?.MS_Role;
    const designation = data?.MS_DesignationTypeMaster;
    const staffType = data?.MS_StaffTypeTypeMaster;
    const department = data?.MS_DepartmentTypeMaster;
    const maritalStatusData = data?.MS_MaritialStatusMaster;
    const dobString = data?.DateOfBirth;
    const dojString = data?.DateOfJoining;
    const contractType = data?.MS_ContractTypeMaster;
    const dob = dobString ? new Date(dobString) : null;
    const doj = dojString ? new Date(dojString) : null;

    const updatedValues: any = {
      id: data?.id,
      staffID: data?.staffId,
      role: role,
      designation: designation,
      department: department,
      staffType: staffType,
      firstname: data?.firstName,
      lastname: data?.lastName,
      fathername: data?.fathersName,
      mothername: data?.mothersName,
      gender: leaveType,
      email: data?.email,
      dob: dob,
      doj: doj,
      phone: data?.phoneNo,
      emergencyContactNumber: data?.emergencyContact,
      maritalStatus: maritalStatusData,
      Qualification: data?.qualification,
      WorkExperience: data?.workExperience,
      panNumber: data?.PAN,
      note: data?.note,
      epfNo: data?.EPF_No,
      basicSalary: data?.basicSalary,
      contractType: contractType,
      workShift: data?.workShift,
      bankTitle: data?.bankAccountTitle,
      bankAccountNo: data?.bankAccountNumber,
      bankName: data?.bankName,
      ifscCode: data?.IFSC_CODE,
      bankBranchName: data?.bankBranchName,
      file: data?.staffPictureUrl,
      resumefile: data?.resumeUrl,
      joiningletterfile: data?.joiningLetterUrl,
      resignationletterfile: data?.resignationLetterUrl,
      otherDocuments: data?.otherDocumentsUrl,
    };

    if (leaveType) {
      setLevelOptionData([{ label: leaveType, value: leaveType }]);
    }
    if (maritalStatusData) {
      formik.setValues({ ...formik.values, ...updatedValues });
      setMateritalDataOption([
        { id: maritalStatusData.id, name: maritalStatusData.name },
      ]);
    }
    if (role) {
      formik.setValues({ ...formik.values, ...updatedValues });
      setOptions([{ id: role.id, name: role.name }]);
    }
    if (designation) {
      formik.setValues({ ...formik.values, ...updatedValues });
      setdesignation([{ id: designation?.id, type: designation?.type }]);
    }
    if (department) {
      formik.setValues({ ...formik.values, ...updatedValues });
      setdepartment([{ id: department?.id, type: department?.type }]);
    }
    if (staffType) {
      formik.setValues({ ...formik.values, ...updatedValues });
      setdepartment([{ id: staffType?.id, type: staffType?.type }]);
    }
    if (contractType) {
      formik.setValues({ ...formik.values, ...updatedValues });
      setContractType([{ id: contractType?.id, type: contractType?.type }]);
    }
    formik.setValues({ ...formik.values, ...updatedValues });
  };

  useEffect(() => {
    dispatch(getDesignationDropdownMiddleware());
    dispatch(getDepartmentDropdownMiddleware());
    dispatch(getStafftypeDropdownMiddleWare());
    dispatch(getAllMaritialStatusMiddleware());
    dispatch(getAllContractMiddleware());
    dispatch(getAllRolesMiddleware());
    if (action === "edit") {
      dispatch(getTeacherByIdMiddleware({ payload: id })).then((res) =>
        setFormikValues(res?.payload?.data)
      );
    }
  }, []);
  const validate = (values: any) => {
    const errors: any = {};

    if (!values.department) {
      errors.department = "This field is required";
    }
    if (!values.staffType) {
      errors.staffType = "This field is required";
    }
    if (!values.role) {
      errors.role = "This field is required";
    }
    if (!values.designation) {
      errors.designation = "This field is required";
    }
    if (!values.firstname) {
      errors.firstname = "This field is required";
    }
    if (formik.values.lastname === values.firstname) {
      errors.lastname = "Name should not same";
    }
    if (!values.fathername) {
      errors.fathername = "This field is required";
    }
    if (!values.mothername) {
      errors.mothername = "This field is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email) {
      errors.email = "This field is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email address!";
    }

    if (!values.gender) {
      errors.gender = "This field is required";
    }
    if (!values.dob) {
      errors.dob = "This field is required";
    }
    if (!values.emergencyContactNumber) {
      errors.emergencyContactNumber = "This field is required";
    }
    const adharPattern = /^[2-9]\d{11}$/;
    if (!values.adharNumber) {
      errors.adharNumber = "This field is required";
    } else if (!adharPattern.test(values.adharNumber)) {
      errors.adharNumber =
        "Invalid Aadhaar format. Should be in the format of 12 numbers and not starts with 0 or 1";
    }
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!values.panNumber) {
      errors.panNumber = "PAN is required";
    } else if (!panPattern.test(values.panNumber)) {
      errors.panNumber =
        "Invalid PAN format. Should be in the format ABCDE1234F";
    }
    return errors;
  };

  const formik: FormikProps<StaffFormFields> = useFormik<StaffFormFields>({
    initialValues,
    validate,
    onSubmit: handleSubmit,
  });

  const handleNavigate = () => {
    customHistory.back();
  };
  const minDojDate = formik.values.dob
    ? new Date(
        formik.values.dob.getFullYear() + 20,
        formik.values.dob.getMonth(),
        formik.values.dob.getDate()
      )
    : undefined;

  const handleAddressCheckbox = () => {
    if (!addressCheckbox) {
      formik.setFieldValue("permanentcountry", formik.values.currentcountry);
      formik.setFieldValue("permanentstate", formik.values.currentstate);
      formik.setFieldValue("permanentcity", formik.values.currentcity);
      formik.setFieldValue(
        "permanentAddressline1",
        formik.values.currentAddressline1
      );
      formik.setFieldValue(
        "permanentAddressline2",
        formik.values.currentAddressline2
      );
      formik.setFieldValue("permanentPincode", formik.values.currentPincode);
    }
    setAddressCheckbox(!addressCheckbox);
  };

  const handleQualificationDetail = () => {
    const qualification = [
      ...formik.values.qualifications,
      { collegeName: "", passedOutYear: "", stream: "" }, // Add new school details
    ];
    formik.setFieldValue("qualifications", qualification); // Update form state with new entry
  };

  const handleDeleteQualification = (index: number) => {
    const filteredQualification = formik.values.qualifications.filter(
      (_, i) => i !== index
    ); // Remove the clicked index
    formik.setFieldValue("qualifications", filteredQualification); // Update form state after deletion
  };

  const handleExperienceDetail = () => {
    const experience = [
      ...formik.values.experiences,
      { schoolName: "", years: "", position: "", ctc: "" }, // Add new school details
    ];
    formik.setFieldValue("experiences", experience); // Update form state with new entry
  };

  const handleDeleteExperience = (index: number) => {
    const filteredExperience = formik.values.experiences.filter(
      (_, i) => i !== index
    ); // Remove the clicked index
    formik.setFieldValue("experiences", filteredExperience); // Update form state after deletion
  };

  useEffect(() => {
    const firstErrorField = Object.keys(formik.errors)[0];
    if (formik.isSubmitting && firstErrorField) {
      const errorElement = document.getElementById(firstErrorField);
      if (errorElement) {
        errorElement.querySelector("input")?.focus();
        errorElement.focus();
      }
    }
  }, [formik.isSubmitting, formik.errors]);

  return (
    <div className="student_staffadd">
      <Toast ref={toast} />
      <div className="student__header">
        <div className="student__header__title" onClick={handleNavigate}>
          <SvgBackArrow /> {action === "edit" ? "Edit Staff" : "Add Staff"}
        </div>
        <div className="icon__controller" 
        // onClick={toggleDownloadMenu}
        >
          {/* <SvgSvgdotsfade /> */}
        
        </div>
        {action === "add" && (
          <div className="student__header__btn">
            <Button
              label="Import Staff"
              icon={
                <SvgDocumentupload color="var(--base-text-inactive-color)" />
              }
              onClick={() => show()}
            />
          </div>
        )}
        
      </div>
      <div className="grid mt-6 jus">
        <div className="col-12 md:col-6 lg:col-2">
          <FileUpload
            label={"Staff Photo"}
            placeholder="Upload Photo"
            style={{ color: "var(--base-text-inactive-color)" }}
           
          />
        </div>
        <div>resdftg</div>
      </div>



      <div className="grid mt-1">
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            value={formik.values.staffID}
            onChange={formik.handleChange}
            label={"Staff ID"}
            name="staffID"
            required={true}
            placeholder={"Enter"}
            disabled
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <DropDownField
            label={"Department"}
            required={true}
            placeholder={"Select"}
            options={action === "add" ? staffDepartmentData : department}
            name="department"
            value={formik.values.department}
            optionLabel={"type"}
            onChange={(value) => formik.setFieldValue("department", value)}
            error={
              formik.touched.department && formik.errors.department
                ? formik.errors.department
                : ""
            }
            disabled={action === "edit" ? true : false}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <DropDownField
            label={"Staff Type"}
            required={true}
            placeholder={"Select"}
            options={action === "add" ? staffTypeData : []}
            name="staffType"
            value={formik.values.staffType}
            optionLabel={"type"}
            onChange={(value) => formik.setFieldValue("staffType", value)}
            error={
              formik.touched.staffType && formik.errors.staffType
                ? formik.errors.staffType
                : ""
            }
            disabled={action === "edit" ? true : false}
          />
        </div>
        {/* <div className="col-12 md:col-6 lg:col-4">
          <DropDownField
            label={"Roles"}
            required={true}
            placeholder={"Select"}
            options={action === "add" ? rolesData : Options}
            //options={Options}
            optionLabel={"name"}
            value={formik.values.role}
            onChange={(value) => formik.setFieldValue("role", value)}
            error={
              formik.touched.role && formik.errors.role
                ? formik.errors.role
                : ""
            }
            disabled={action === "edit" ? true : false}
          />
        </div> */}
        <div className="col-12 md:col-6 lg:col-4">
          <DropDownField
            label={"Designation"}
            required={true}
            placeholder={"Select"}
            options={action === "add" ? staffDesignationData : designation}
            optionLabel={"type"}
            value={formik.values.designation}
            onChange={(value) => formik.setFieldValue("designation", value)}
            error={
              formik.touched.designation && formik.errors.designation
                ? formik.errors.designation
                : ""
            }
            disabled={action === "edit" ? true : false}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            value={formik.values.firstname}
            onChange={formik.handleChange}
            label={"First Name"}
            name="firstname"
            required={true}
            placeholder={"Enter"}
            // ref={firstFieldRef}
            error={
              formik.touched.firstname && formik.errors.firstname
                ? formik.errors.firstname
                : ""
            }
            disabled={action === "edit" ? true : false}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            value={formik.values.lastname}
            onChange={formik.handleChange}
            label={"Last Name"}
            name="lastname"
            required={false}
            placeholder={"Enter"}
            error={
              formik.touched.lastname && formik.errors.lastname
                ? formik.errors.lastname
                : ""
            }
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            value={formik.values.fathername}
            onChange={formik.handleChange}
            label={"Father's Name"}
            name="fathername"
            required={true}
            placeholder={"Enter"}
            error={
              formik.touched.fathername && formik.errors.fathername
                ? formik.errors.fathername
                : ""
            }
            disabled={action === "edit" ? true : false}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            value={formik.values.mothername}
            onChange={formik.handleChange}
            label={"Mother's Name"}
            name="mothername"
            required={true}
            placeholder={"Enter"}
            error={
              formik.touched.mothername && formik.errors.mothername
                ? formik.errors.mothername
                : ""
            }
            disabled={action === "edit" ? true : false}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            label={"Email (Login Username)"}
            required={true}
            placeholder={"Enter"}
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
            disabled={action === "edit" ? true : false}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <DropDownField
            label={"Gender"}
            required={true}
            placeholder={"Select"}
            options={action === "edit" ? levetOptionData : genderOptions}
            value={formik.values.gender}
            onChange={(value) => formik.setFieldValue("gender", value)}
            error={
              formik.touched.gender && formik.errors.gender
                ? formik.errors.gender
                : ""
            }
            disabled={action === "edit" ? true : false}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <DatePicker
            label={"Date of Birth"}
            value={formik.values.dob}
            onChange={(value) => formik.setFieldValue("dob", new Date(value))}
            required={true}
            name="dob"
            placeholder="Select"
            error={
              formik.touched.dob && formik.errors.dob ? formik.errors.dob : ""
            }
            disabled={action === "edit" ? true : false}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <DatePicker
            label={"Date Of Joining"}
            value={formik.values.doj}
            onChange={(value) => formik.setFieldValue("doj", new Date(value))}
            minDate={minDojDate}
            required={false}
            placeholder="Select"
            error={
              formik.touched.doj && formik.errors.doj ? formik.errors.doj : ""
            }
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            value={formik.values.phone}
            onChange={formik.handleChange}
            label={"Contact Number"}
            name="phone"
            required={false}
            placeholder={"Enter"}
            type="number"
            error={
              formik.touched.phone && formik.errors.phone
                ? formik.errors.phone
                : ""
            }
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            label={"Emergency Contact Number"}
            required={true}
            placeholder={"Enter"}
            value={formik.values.emergencyContactNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.emergencyContactNumber &&
              formik.errors.emergencyContactNumber
                ? formik.errors.emergencyContactNumber
                : ""
            }
            type="number"
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <DropDownField
            label={"Marital Status"}
            required={false}
            placeholder={"Select"}
            options={
              action === "edit" ? materitalDataOption : maritialStatusData
            }
            optionLabel={"name"}
            value={formik.values.maritalStatus}
            onChange={(value) => formik.setFieldValue("maritalStatus", value)}
            error={
              formik.touched.maritalStatus && formik.errors.maritalStatus
                ? formik.errors.maritalStatus
                : ""
            }
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            label={"Aadhar Number"}
            required={true}
            placeholder={"Enter"}
            value={formik.values.adharNumber}
            onChange={formik.handleChange}
            name="adharNumber"
            error={
              formik.touched.adharNumber && formik.errors.adharNumber
                ? formik.errors.adharNumber
                : ""
            }
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            label={"PAN Number"}
            required={true}
            placeholder={"Enter"}
            value={formik.values.panNumber}
            onChange={formik.handleChange}
            name="panNumber"
            error={
              formik.touched.panNumber && formik.errors.panNumber
                ? formik.errors.panNumber
                : ""
            }
          />
        </div>
      </div>
      
      <Panel header="Health Details" toggleable className="mt-4 mb-4 ">
        <div className="grid mt-1">
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              label={"Blood Group"}
              // options={bloodGroupDropdownData}
              // name="bloodGroupId"
              // value={formik.values.bloodGroupId}
              onChange={formik.handleChange}
              required={false}
              placeholder="Select"
              optionLabel="name"
              optionValue="id"
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              label={"Height (Cm)"}
              name="height"
              // value={formik.values.height}
              // onChange={formik.handleChange}
              required={false}
              placeholder={"Enter"}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              label={"Weight (Kg)"}
              name="weight"
              // value={formik.values.weight}
              // onChange={formik.handleChange}
              required={false}
              placeholder={"Enter"}
            />
          </div>
        </div>
        <div className="grid mt-1">
          <div className="col-12 md:col-12 lg:col-12">
            <div className="student__file__uploade__label mb-2">
              Medical History
            </div>
            <div className="student__text__area">
              <InputTextarea
                autoResize
                rows={5}
                cols={30}
                placeholder="Enter"
                name="medicalHistory"
                // value={formik.values.medicalHistory}
                // onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
      </Panel>





      <div className="student__accordion__add__more p-2">
        <div className="student__sub__title">Student Address Details</div>
        <div className="col-12 md:col-6 lg:col-6 mt-4 mb-4">
          <Checkboxes
            label="If Permanent Address Is Current Address"
            onChange={handleAddressCheckbox}
            value={addressCheckbox}
          />
        </div>
        <div className="grid splitter_address">
          <div
            className="col-12 md:col-6 lg:col-5 "
            style={{ display: "grid", gap: 10 }}
          >
            <div className="student__sub__title">Current Address</div>
            <DropDownField
              label={"Country"}
              required={true}
              placeholder={"Select"}
              options={countryoption}
              optionLabel="label"
              value={formik.values.currentcountry}
              onChange={(value) =>
                formik.setFieldValue("currentcountry", value)
              }
            />
            <DropDownField
              label={"State"}
              required={true}
              placeholder={"Select"}
              options={stateoption}
              optionLabel="label"
              value={formik.values.currentstate}
              onChange={(value) => formik.setFieldValue("currentstate", value)}
            />
            <DropDownField
              label={"City"}
              required={true}
              placeholder={"Select"}
              options={cityoption}
              optionLabel="label"
              value={formik.values.currentcity}
              onChange={(value) => formik.setFieldValue("currentcity", value)}
            />
            <InputField
              label={`Address Line 1`}
              required={false}
              placeholder={"Enter"}
              value={formik.values.currentAddressline1}
              onChange={formik.handleChange("currentAddressline1")}
              // disabled={action === "add" || "edit" ? false : true}
            />
            <InputField
              label={`Address Line 2`}
              required={false}
              placeholder={"Enter"}
              value={formik.values.currentAddressline2}
              onChange={formik.handleChange("currentAddressline2")}
              // disabled={action === "add" || "edit" ? false : true}
            />
            <InputField
              label={`PinCode`}
              required={false}
              placeholder={"Enter"}
              value={formik.values.currentPincode}
              onChange={formik.handleChange("currentPincode")}
              // disabled={action === "add" || "edit" ? false : true}
            />
          </div>
          <div className="col-12 md:col-2 lg:col-1">
            <Divider layout="vertical" />
          </div>
          <div
            className="col-12 md:col-6 lg:col-5"
            style={{ display: "grid", gap: 10 }}
          >
            <div className="student__sub__title">Permanent Address</div>
            <DropDownField
              label={"Country"}
              required={true}
              placeholder={"Select"}
              options={countryoption}
              optionLabel="label"
              value={formik.values.permanentcountry}
              onChange={(value) =>
                formik.setFieldValue("permanentcountry", value)
              }
            />
            <DropDownField
              label={"State"}
              required={true}
              placeholder={"Select"}
              options={stateoption}
              optionLabel="label"
              value={formik.values.permanentstate}
              onChange={(value) =>
                formik.setFieldValue("permanentstate", value)
              }
            />
            <DropDownField
              label={"City"}
              required={true}
              placeholder={"Select"}
              options={cityoption}
              optionLabel="label"
              value={formik.values.permanentcity}
              onChange={(value) => formik.setFieldValue("permanentcity", value)}
            />
            <InputField
              label={`Address Line 1`}
              required={false}
              placeholder={"Enter"}
              value={formik.values.permanentAddressline1}
              onChange={formik.handleChange("permanentAddressline1")}
            />
            <InputField
              label={`Address Line 2`}
              required={false}
              placeholder={"Enter"}
              value={formik.values.permanentAddressline2}
              onChange={formik.handleChange("permanentAddressline2")}
            />
            <InputField
              label={`PinCode`}
              required={false}
              placeholder={"Enter"}
              value={formik.values.permanentPincode}
              onChange={formik.handleChange("permanentPincode")}
            />
          </div>
        </div>

        <div
          className="addicon_previusschool_lablecontainer"
          onClick={handleQualificationDetail}
        >
          {/* <div className="addicon_previusschool">
            <SvgAddIcon color="#fff" />
          </div> */}
          <Button
            icon={<SvgAddIcon color="var(--base-text-inactive-color)" />}
            // onClick={() => handleNewAdmission("add")}
            iconPos="left"
            className="export__butt__overall"
          />
          <div
            className="addicon_previusschool_lable"
            style={{ color: "var(--base-text-inactive-color)" }}
          >
            Qualifications
          </div>
        </div>

        {formik.values.qualifications?.map((college, index) => (
          <>
           <div
           className="col-12 md:col-6 lg:col-1 deleteicon_siblings"
           onClick={() => handleDeleteQualification(index)}
         >
           <SvgDeleteIcon />
         </div>
          <div className="grid mt-1" key={index}>
            <div className="col-12 md:col-6 lg:col-3">
              <InputField
                label={`College or University Name`}
                required={false}
                placeholder="Enter"
                value={college.collegeName}
                onChange={formik.handleChange}
                name={`qualifications[${index}].collegeName`} // Important for handling each field correctly in Formik
                disabled={false} // Update based on your action logic
              />
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <InputField
                label={`Passed out year`}
                required={false}
                placeholder="Enter"
                value={college.passedOutYear}
                onChange={formik.handleChange}
                name={`qualifications[${index}].passedOutYear`}
                disabled={false}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-3">
            <DropDownField
            options={[]}
            required={false}
            label="Degree"
            placeholder="Select"
          />
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <InputField
                label={`Stream `}
                required={false}
                placeholder="Enter"
                value={college.stream}
                onChange={formik.handleChange}
                name={`qualifications[${index}].stream`}
                disabled={false} // Update based on your action logic
              />
            </div>
           
          </div>
          </>
        ))}

        <div
          className="addicon_previusschool_lablecontainer"
          onClick={handleExperienceDetail}
        >
          {/* <div className="addicon_previusschool" title="Add Experience">
            <SvgAddIcon color="#fff" />
          </div> */}
          <Button
            icon={<SvgAddIcon color="var(--base-text-inactive-color)" />}
            // onClick={() => handleNewAdmission("add")}
            iconPos="left"
            className="export__butt__overall"
          />
          <div
            className="addicon_previusschool_lable"
            style={{ color: "var(--base-text-inactive-color)" }}
          >
            Work Experience
          </div>
        </div>

        {formik.values.experiences?.map((experience, index) => (
          <div className="grid mt-1" key={index}>
            <div className="col-12 md:col-6 lg:col-3">
              <InputField
                label={`School or Organization Name`}
                required={false}
                placeholder="Enter"
                value={experience.schoolName}
                onChange={formik.handleChange}
                name={`experiences[${index}].schoolName`} // Important for handling each field correctly in Formik
                disabled={false} // Update based on your action logic
              />
            </div>
            <div className="col-12 md:col-6 lg:col-2">
              <InputField
                label={`No. of Years`}
                required={false}
                placeholder="Enter"
                value={experience.years}
                onChange={formik.handleChange}
                name={`experiences[${index}].years`}
                disabled={false} // Update based on your action logic
              />
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <InputField
                label={`Position`}
                required={false}
                placeholder="Enter"
                value={experience.position}
                onChange={formik.handleChange}
                name={`experiences[${index}].position`}
                disabled={false} // Update based on your action logic
              />
            </div>
            <div className="col-12 md:col-6 lg:col-3">
              <InputField
                label={`Previous CTC`}
                required={false}
                placeholder="Enter"
                value={experience.ctc}
                onChange={formik.handleChange}
                name={`experiences[${index}].ctc`}
                disabled={false} // Update based on your action logic
              />
            </div>
            <div
              className="col-12 md:col-6 lg:col-1 deleteicon_siblings"
              onClick={() => handleDeleteExperience(index)}
            >
              <SvgDeleteIcon />
            </div>
          </div>
        ))}
      </div>
      <div className="grid my-2">
        <div className="col-12 md:col-6">
          <DropDownField
            options={[]}
            required={false}
            label="School Division"
            placeholder="Select"
          />
        </div>
        <div className="col-12 md:col-6">
          <DropDownField
            options={[]}
            required={false}
            label="Subject"
            placeholder="Select"
          />
        </div>
      </div>

      <div className="student__accordion mt-3">
        <CustomAccordionTab header="Add More Details" checktrue={false}>
          <Accordingdetails formik={formik} contractData={contractData} />
        </CustomAccordionTab>
        <div className="staff__accordion__content mt-4">
          <Button
            label={action === "edit" ? "Update" : "Save"}
            type="submit"
            onClick={() => formik.handleSubmit()}
          />
        </div>
      </div>

      <Sider
        setVisible={setVisible}
        visible={visible}
        children={<ImportDetails setVisible={setVisible} />}
      />
    </div>
  );
};

export default AddStaffDirectory;
