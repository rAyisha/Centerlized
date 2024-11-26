import { useEffect, useMemo, useState } from "preact/hooks";
import "./index.scss";
import InputField from "../../../../../components/InputField";
import Button from "../../../../../components/Button";
import DropDownField, { DropdownChangeEvent } from "../../../../../components/DropDownField";
import DatePicker from "../../../../../components/DatePicker";
import SvgAddSibling from "../../../../../assets/svgIcon/SvgAddSbiling";
import { InputTextarea } from "primereact/inputtextarea";
import AccordionTab from "../../../../../components/AccordionTab";
import FileUpload from "../../../../../components/FileUpload";
import {
  guardianOptions,
  documentOptions,
} from "./mock";
import CheckBox from "../../../../../components/CheckBox";
import FileDragUpload from "../../../../../components/FileDragUpload";
import Sider from "../../../components/Sider";
import ImportDetails from "./importDetails/index";
import AddSibilingDetails from "./AddSibiling";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FormikProps, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Chip } from "primereact/chip";
import Checkbox from "../../../../../components/CheckBox";
import SvgAddIcon from "../../../../../assets/svgIcon/SvgAddIcon";
import SvgDeleteIcon from "../../../../../assets/svgIcon/SvgDeleteIcon";
import { Panel } from "primereact/panel";
import { Fieldset } from "primereact/fieldset";
import { Divider } from "primereact/divider";
import { AppDispatch, RootState } from "../../../../../redux/store";
import SvgDocumentupload from "../../../../../assets/svgIcon/SvgDocumentUpload";
import SvgBackArrow from "../../../../../assets/svgIcon/SvgBackArrow";
import { SiblingData, StudentFormData } from "../store/student.Types";
import { getClassDropdownMiddleWare, getSchoolDivisionDropdownMiddleWare, getSectionDropdownMiddleWare, getGenderDropdownMiddleWare, getReligionDropdownMiddleWare, getCategoryDropdownMiddleWare, getHouseDropdownMiddleWare, getBloodGroupDropdownMiddleWare, postStudentMiddleware, getStudentByIdMiddleware, patchStudentMiddleware } from "../store/studentMiddleware";
import { getCityMiddleWare, getCountryMiddleWare, getStatesMiddleWare } from "../../../../../module/CentralModule/CommonStore/commonMiddleware";
import axios from "axios";
import { useToast } from "../../../../../components/Toast";
import ApiLoader from "../../../../../components/ApiLoader";

const initialValue: StudentFormData = {
  classId: null,
  sectionId: null,
  schoolDivisionId: null,
  firstName: "",
  lastName: "",
  genderId: null,
  religionId: null,
  categoryId: null,
  caste: "",
  email: "",
  mobileNumber: "",
  dateOfBirth: "",
  admissionDate: "",
  houseId: null,
  siblingIds: [],
  fatherName: null,
  fatherEmail: null,
  fatherPhone: null,
  fatherOccupation: null,
  fatherProfile: null,
  motherName: null,
  motherEmail: null,
  motherPhone: null,
  motherOccupation: null,
  motherProfile: null,
  guardianName: null,
  guardianEmail: null,
  guardianPhone: null,
  guardianOccupation: null,
  guardianProfile: null,
  bloodGroupId: null,
  height: "",
  weight: "",
  medicalHistory: "",
  currentAddress: {
    countryId: null,
    stateId: null,
    cityId: null,
    line1: "",
    line2: "",
    pincode: ""
  },
  permanentAddress: {
    countryId: null,
    stateId: null,
    cityId: null,
    line1: "",
    line2: "",
    pincode: ""
  },
  previousSchoolDetails: [],
  documentDetails: [],
};

const StudentsAdmission = () => {
  const { id } = useParams();
  const location = useLocation()
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const toast = useToast()
  const [loading, setLoading] = useState(false)
  const [countryOptions, setCountryOptions] = useState([])
  const [stateOptions, setStateOptions] = useState({
    current: [],
    permanent: []
  })
  const [cityOptions, setCityOptions] = useState({
    current: [],
    permanent: []
  })
  const { companyID, branchID, yearID, sessionID, classDropdownData, sectionDropdownData, schoolDivisionDropdownData, genderDropdownData, religionDropdownData, categoryDropdownData, houseDropdownData, bloodGroupDropdownData } = useSelector((state: RootState) => {
    return {
      companyID: state.dropdownDataReducers.companyID,
      branchID: state.dropdownDataReducers.branchID,
      yearID: state.dropdownDataReducers.yearID,
      sessionID: state.dropdownDataReducers.sessionID,
      classDropdownData: state.edvanceReducers.studentReducers.classDropdownData,
      sectionDropdownData: state.edvanceReducers.studentReducers.sectionDropdownData,
      schoolDivisionDropdownData: state.edvanceReducers.studentReducers.schoolDivisionDropdownData,
      genderDropdownData: state.edvanceReducers.studentReducers.genderDropdownData,
      religionDropdownData: state.edvanceReducers.studentReducers.religionDropdownData,
      categoryDropdownData: state.edvanceReducers.studentReducers.categoryDropdownData,
      houseDropdownData: state.edvanceReducers.studentReducers.houseDropdownData,
      bloodGroupDropdownData: state.edvanceReducers.studentReducers.bloodGroupDropdownData,
    };
  })

  const [importPopup, setImportPopup] = useState(false)
  const [addSiblingPopup, setAddSiblingPopup] = useState(false)
  const [siblingData, setSiblingData] = useState<SiblingData[]>([])
  const [documentName, setDocumentName] = useState("")

  const handleNavigate = () => {
    navigate(-1);
  };

  const isAdmissionPage = useMemo(() => location.pathname === "/edvance/students/studentAdmission", [location.pathname])

  const validDataFormats = (values: StudentFormData) => {
    const emailPattern = /^[a-zA-Z0-9_%-.+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const mobilePattern = /^[0-9]{10}$/
    const heightWeightPattern = /^\d+(\.\d+)?$/
    const pincodePattern = /^\d{6}$/

    const errors: any = {}

    if (values.email && !emailPattern.test(values.email)) {
      errors.email = "Email is not valid"
    }
    if (values.mobileNumber && !mobilePattern.test(values.mobileNumber)) {
      errors.mobileNumber = "Mobile Number is not valid"
    }
    if (values.fatherPhone && !mobilePattern.test(values.fatherPhone)) {
      errors.fatherPhone = "Father Number is not valid"
    }
    if (values.fatherEmail && !emailPattern.test(values.fatherEmail)) {
      errors.fatherEmail = "Father Email is not valid"
    }
    if (values.motherPhone && !mobilePattern.test(values.motherPhone)) {
      errors.motherPhone = "Mother Number is not valid"
    }
    if (values.motherEmail && !emailPattern.test(values.motherEmail)) {
      errors.motherEmail = "Mother Email is not valid"
    }
    if (values.guardianPhone && !mobilePattern.test(values.guardianPhone)) {
      errors.guardianPhone = "Guardian Number is not valid"
    }
    if (values.guardianEmail && !emailPattern.test(values.guardianEmail)) {
      errors.guardianEmail = "Guardian Email is not valid"
    }
    if (values.height && !heightWeightPattern.test(values.height)) {
      errors.height = "Height is not valid"
    }
    if (values.weight && !heightWeightPattern.test(values.weight)) {
      errors.weight = "Weight is not valid"
    }
    if (values.currentAddress.pincode && !pincodePattern.test(values.currentAddress.pincode)) {
      errors['currentAddress.pincode'] = "Pincode is not valid"
    }
    if (values.permanentAddress.pincode && !pincodePattern.test(values.permanentAddress.pincode)) {
      errors['permanentAddress.pincode'] = "Pincode is not valid"
    }

    return errors;

  }

  const validate = (values: StudentFormData) => {
    const errors: any = {}
    if (!values.classId) {
      errors.classId = "Class is required"
    }
    if (!values.schoolDivisionId) {
      errors.schoolDivisionId = "School Division is required"
    }
    if (!values.firstName) {
      errors.firstName = "Firstname is required"
    }
    if (!values.lastName) {
      errors.lastName = "Lastname is required"
    }
    if (!values.genderId) {
      errors.genderId = "Gender is required"
    }
    if (!values.dateOfBirth) {
      errors.dateOfBirth = "Date of birth is required"
    }
    if (!values.admissionDate) {
      errors.admissionDate = "Admission date is required"
    }
    if (!values.primary) {
      errors.primary = "Legal Guardian must me selected"
    }
    if (!values.currentAddress.countryId) {
      errors.currentAddress = { ...errors.currentAddress, countryId: "Current Country is required" }
    }
    if (!values.currentAddress.stateId) {
      errors.currentAddress = { ...errors.currentAddress, stateId: "Current State is required" }
    }
    if (!values.currentAddress.cityId) {
      errors.currentAddress = { ...errors.currentAddress, cityId: "Current City is required" }
    }
    if (!values.currentAddress.pincode) {
      errors.currentAddress = { ...errors.currentAddress, pincode: "Permanent Pincode is required" }
    }
    if (!values.permanentAddress.countryId) {
      errors.permanentAddress = { ...errors.permanentAddress, countryId: "Permanent Country is required" }
    }
    if (!values.permanentAddress.stateId) {
      errors.permanentAddress = { ...errors.permanentAddress, stateId: "Permanent State is required" }
    }
    if (!values.permanentAddress.cityId) {
      errors.currentAddress = { ...errors.permanentAddress, cityId: "Permanent City is required" }
    }
    if (!values.permanentAddress.pincode) {
      errors.permanentAddress = { ...errors.permanentAddress, countryId: "Permanent Pincode is required" }
    }
    if (values.fatherName === "") {
      errors.fatherName = "Father Name cannot be empty"
    }
    if (values.fatherPhone === "") {
      errors.fatherPhone = "Father Phone cannot be empty"
    }
    if (values.fatherOccupation === "") {
      errors.fatherOccupation = "Father Occupation cannot be empty"
    }
    if (values.motherName === "") {
      errors.motherName = "Mother Name cannot be empty"
    }
    if (values.motherPhone === "") {
      errors.motherPhone = "Mother Phone cannot be empty"
    }
    if (values.motherOccupation === "") {
      errors.motherOccupation = "Mother Occupation cannot be empty"
    }
    if (values.guardianName === "") {
      errors.guardianName = "Guardian Name cannot be empty"
    }
    if (values.guardianPhone === "") {
      errors.guardianPhone = "Guardian Phone cannot be empty"
    }
    if (values.guardianOccupation === "") {
      errors.guardianOccupation = "Guardian Occupation cannot be empty"
    }
    const invalidPrevSchoolDetails = values.previousSchoolDetails?.some(school => Object.values(school).some(value => value === ""))
    if (invalidPrevSchoolDetails) {
      errors.previousSchoolDetails = "School Detail cannot be empty"
    }

    return errors
  };

  const onSubmit = async (values: StudentFormData) => {
    const validationErrors = validDataFormats(values)
    if (Object.keys(validationErrors).length === 0)
      try {
        const ipResponse = await axios.get("https://api.ipify.org?format=json")
        const ip = ipResponse.data.ip
        let res = null;
        if (isAdmissionPage) {
          res = await dispatch(postStudentMiddleware({ payload: values, options: { headers: { "company-id": companyID, "branch-id": branchID, "year-id": yearID, ip } } }))
        } else {
          res = await dispatch(patchStudentMiddleware({ id, payload: values, options: { headers: { "company-id": companyID, "branch-id": branchID, "year-id": yearID, ip } } }))
        }
        if (res.meta.requestStatus === "fulfilled") {
          toast.success("Student Added Successfuly")
          formik.resetForm();
          navigate(-1)
        } else {
          const errorMessage = res.payload.errorDescription[0]
          toast.error(errorMessage)
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went Wrong")
      } else {
      formik.setErrors(validationErrors)
      document.getElementsByName(Object.keys(validationErrors)[0])[0].focus()
    }
  };

  const formik: FormikProps<StudentFormData> = useFormik<StudentFormData>({
    initialValues: initialValue,
    validate,
    onSubmit,
  });

  const show = () => {
    setImportPopup(true);
  };

  const addSibilingshow = () => {
    setAddSiblingPopup(true);
  };

  const handleChangeClass = (e: DropdownChangeEvent) => {
    formik.setFieldValue("classId", e.value);
    try {
      dispatch(getSectionDropdownMiddleWare({ headers: { "company-id": companyID, "branch-id": branchID } }));
    } catch (error) {
      console.log(error);
    }
  };

  const addSiblingData = (sibling: SiblingData) => {
    formik.setFieldValue("siblingIds", formik.values.siblingIds ? [...formik.values.siblingIds, sibling.id] : [sibling.id])
    setSiblingData(prev => [...prev, sibling])
  }

  const deleteSibling = (id: number) => {
    formik.setFieldValue("siblingIds", formik.values.siblingIds.filter(item => item !== id))
  }

  const guardianAddVisible = useMemo(() => formik.values.primary && formik.values[`${formik.values.primary}Name`] === null, [formik.values])

  const addGuardian = () => {
    const newFields = {
      [`${formik.values.primary}Name`]: "",
      [`${formik.values.primary}Email`]: "",
      [`${formik.values.primary}Phone`]: "",
      [`${formik.values.primary}Occupation`]: "",
      [`${formik.values.primary}Profile`]: "",
    }
    formik.setValues({ ...formik.values, ...newFields })
  }
  const deleteGuardian = (type: string) => {
    const newFields = {
      [`${type}Name`]: null,
      [`${type}Email`]: null,
      [`${type}Phone`]: null,
      [`${type}Occupation`]: null,
      [`${type}Profile`]: null,
    }
    formik.setValues({ ...formik.values, ...newFields })
  }

  const handleCountryChange = (e: DropdownChangeEvent, type: "current" | "permanent") => {
    formik.setFieldValue(`[${type}Address].countryId`, e.value)
    dispatch(getStatesMiddleWare({ id: e.value })).then(({ payload }) => {
      setStateOptions(prev => ({ ...prev, [type]: payload.data }))
    }).catch(err => { console.log(err) })
  }

  const handleStateChange = (e: DropdownChangeEvent, type: "current" | "permanent") => {
    formik.setFieldValue(`[${type}Address].stateId`, e.value)
    dispatch(getCityMiddleWare({ id: e.value })).then(({ payload }) => {
      setCityOptions(prev => ({ ...prev, [type]: payload.data }))
    }).catch(err => { console.log(err) })
  }

  const handleCityChange = (e: DropdownChangeEvent, type: "current" | "permanent") => {
    formik.setFieldValue(`[${type}Address].cityId`, e.value)
  }

  const makeSameAddress = () => {
    setStateOptions(prev => ({ ...prev, permanent: prev.current }))
    setCityOptions(prev => ({ ...prev, permanent: prev.current }))
    formik.setFieldValue("permanentAddress", formik.values.currentAddress)
  }


  const isCurrentAddressValid = useMemo(() => {
    return formik.values.currentAddress.countryId && formik.values.currentAddress.stateId && formik.values.currentAddress.cityId && formik.values.currentAddress.pincode
  }, [formik.values.currentAddress])

  const isSameAddress = useMemo(() => isCurrentAddressValid && JSON.stringify(formik.values.currentAddress) === JSON.stringify(formik.values.permanentAddress
  ), [formik.values.currentAddress, formik.values.permanentAddress])

  const addSchoolInformation = () => {
    const newFields = {
      name: "",
      year: "",
      location: ""
    }
    formik.setFieldValue("previousSchoolDetails", formik.values.previousSchoolDetails ? [...formik.values.previousSchoolDetails, newFields] : [newFields])
  }

  const deleteSchoolInformation = (deleteIndex: number) => {
    formik.setFieldValue("previousSchoolDetails", formik.values.previousSchoolDetails.filter((_, index) => index !== deleteIndex))
  }

  const uploadFile = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const name = e.target.files[0].name
      const newField = {
        typeId: formik.values.documentDetails.length + 1,
        name: documentName,
        url: name
      }
      formik.setFieldValue("documentDetails", [...formik.values.documentDetails, newField])
    }
    setDocumentName("")
  }

  const fetchStudentsDetail = async () => {
    try {
      const res = await dispatch(getStudentByIdMiddleware({ headers: { "company-id": companyID, "branch-id": branchID, "year-id": yearID }, id: Number(id) }))
      const { companyId, branchId, ipAddress, year, createdOn, createdBy, deletedBy, deletedOn, updatedBy, updatedOn, isDeleted, isDisabled, disableDate, disableNote, disableReasonId, ...rest } = res.payload
      const { currentCityId, currentStateId, currentCountryId, currentLine1, currentLine2, currentPincode, permanentCityId, permanentStateId, permanentCountryId, permanentLine1, permanentLine2, permanentPincode, ...updateValues } = rest
      const address = {
        currentAddress: {
          countryId: currentCountryId,
          stateId: currentStateId,
          cityId: currentCityId,
          line1: currentLine1,
          line2: currentLine2,
          pincode: currentPincode,
        },
        permanentAddress: {
          countryId: permanentCountryId,
          stateId: permanentStateId,
          cityId: permanentCityId,
          line1: permanentLine1,
          line2: permanentLine2,
          pincode: permanentPincode,
        },
      }
      const newValues = { ...updateValues, ...address }
      await dispatch(getSectionDropdownMiddleWare({ headers: { "company-id": companyID, "branch-id": branchID, "year-id": yearID } }))
      const [{ payload: { data: currentStateOptions } }, { payload: { data: permanentStateOptions } }] = await Promise.all([
        dispatch(getStatesMiddleWare({ id: currentCountryId })),
        dispatch(getStatesMiddleWare({ id: permanentCountryId })),
      ])
      setStateOptions({ current: currentStateOptions, permanent: permanentStateOptions })
      const [{ payload: { data: currentCityOptions } }, { payload: { data: permanentCityOptions } }] = await Promise.all([
        dispatch(getCityMiddleWare({ id: currentStateId })),
        dispatch(getCityMiddleWare({ id: permanentStateId }))
      ])
      setCityOptions({ current: currentCityOptions, permanent: permanentCityOptions })
      formik.setValues(newValues)
      formik.validateForm(newValues)
    } catch (error) {
      console.log("payload error", error);
    }
  }

  const getAllDropdownsData = async () => {
    const headers = {
      "company-id": companyID, "branch-id": branchID, "year-id": yearID
    }
    formik.setFieldValue("sessionId", sessionID)
    setLoading(true);
    try {
      await Promise.all([
        dispatch(getClassDropdownMiddleWare({ headers })),
        dispatch(getSchoolDivisionDropdownMiddleWare({ headers })),
        dispatch(getGenderDropdownMiddleWare({ headers })),
        dispatch(getReligionDropdownMiddleWare({ headers })),
        dispatch(getCategoryDropdownMiddleWare({ headers })),
        dispatch(getHouseDropdownMiddleWare({ headers })),
        dispatch(getBloodGroupDropdownMiddleWare({ headers })),
        dispatch(getCountryMiddleWare()).then(({ payload }) => setCountryOptions(payload.data)).catch(err => console.log(err))
      ])
      if (id) {
        await fetchStudentsDetail()
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    getAllDropdownsData()
  }, [companyID, branchID, yearID, sessionID])

  if (loading) {
    return <ApiLoader />
  }

  return (
    <div className="student">
      <div className="student__header">
        <div className="student__header__title">
          <span
            className="student__header__title__icon"
            onClick={handleNavigate}
          >
            <SvgBackArrow />
          </span>
          <div className="student__header__text">
            {isAdmissionPage
              ? "Student Admission"
              : "Edit Student Information"}
          </div>
        </div>
        {isAdmissionPage && (
          <div className="student__header__btn">
            <Button
              label="Import Student"
              icon={<SvgDocumentupload color="var(--base-text-inactive-color)" />}
              onClick={show}
            />
          </div>
        )}
      </div>
      <div className="grid mt-1">
        <div className="col-12 md:col-6 lg:col-2">
          <FileUpload label="Student Photo" placeholder="Upload Photo" handleSelect={e => formik.setFieldValue("studentPhoto", e.files[0].name)} />
        </div>
      </div>
      <div className="grid mt-1">
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            label={"Admission No"}
            required={false}
            placeholder=""
            value={formik.values.admissionNumber}
            name="admissionNo"
            readOnly
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <DropDownField
            label={"Class"}
            required={true}
            placeholder={"Select"}
            options={classDropdownData}
            name="classId"
            optionLabel="name"
            optionValue="id"
            value={formik.values.classId}
            onChange={handleChangeClass}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <DropDownField
            label={"Section"}
            required={false}
            placeholder={"Select"}
            options={sectionDropdownData}
            name="sectionId"
            optionLabel="name"
            optionValue="id"
            value={formik.values.sectionId}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <DropDownField
            options={schoolDivisionDropdownData}
            label="School Division"
            placeholder="Select"
            required={true}
            name="schoolDivisionId"
            optionLabel="name"
            optionValue="id"
            value={formik.values.schoolDivisionId}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            label={"First Name"}
            required={true}
            placeholder={"Enter"}
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            label={"Last Name"}
            required={true}
            placeholder={"Enter"}
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <DropDownField
            label={"Gender"}
            required={true}
            placeholder={"Enter"}
            options={genderDropdownData}
            name="genderId"
            optionLabel="name"
            optionValue="id"
            value={formik.values.genderId}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <DropDownField
            label={"Religion"}
            required={false}
            placeholder={"Select"}
            options={religionDropdownData}
            name="religionId"
            optionLabel="name"
            optionValue="id"
            value={formik.values.religionId}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <DropDownField
            label={"Category"}
            required={false}
            placeholder={"Select"}
            options={categoryDropdownData}
            name="categoryId"
            optionLabel="name"
            optionValue="id"
            value={formik.values.categoryId}
            onChange={formik.handleChange}
          />
        </div>

        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            label={"Caste"}
            name="caste"
            value={formik.values.caste}
            onChange={formik.handleChange("caste")}
            required={false}
            placeholder={"Enter"}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            label={"Email"}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required={false}
            placeholder={"Enter"}
            error={formik.errors.email}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <InputField
            label={"Mobile Number"}
            required={false}
            placeholder={"Enter"}
            name="mobileNumber"
            value={formik.values.mobileNumber}
            onChange={formik.handleChange}
            error={formik.errors.mobileNumber}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <DatePicker
            label={"Date of birth"}
            required={true}
            value={formik.values.dateOfBirth}
            name="dateOfBirth"
            onChange={formik.handleChange}
            maxDate={new Date()}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <DatePicker
            label={"Admission Date"}
            required={true}
            value={formik.values.admissionDate}
            name="admissionDate"
            onChange={formik.handleChange}
            maxDate={new Date()}
          />
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <DropDownField
            label={"House"}
            required={false}
            placeholder={"Select"}
            options={houseDropdownData}
            name="houseId"
            optionLabel="name"
            optionValue="id"
            value={formik.values.houseId}
            onChange={formik.handleChange}
          />
        </div>
      </div>

      <div className="grid mx-0 mt-3">
        <div className="col-12 md:col-2 lg:col-2">
          <div className="student__sibiling" onClick={addSibilingshow}>
            <SvgAddSibling color="var(--base-theme-color)" />
          </div>
        </div>
        <div className="col-12 md:col-10 lg:col-10 flex overall_siblings">
          {siblingData.map((item) => (
            <div key={item.id}>
              <Chip label={item.name} removable onRemove={() => deleteSibling(item.id)} />
            </div>
          ))}
        </div>
      </div>

      <div className="grid">
        <div className="col-12 md:col-6 lg:col-4">
          <DropDownField
            label={"Legal Guardian"}
            required={true}
            placeholder={"Select"}
            options={guardianOptions}
            name="primary"
            value={formik.values.primary}
            onChange={formik.handleChange}
          />
        </div>
        {guardianAddVisible && <div
          className="addicon_previusschool_lablecontainer"
          onClick={addGuardian}
        >
          <div className="addicon_previusschool mt-5">
            <SvgAddIcon color="#fff" />
          </div>
        </div>}

      </div>
      {guardianOptions.filter((item) => formik.values[`${item.value}Name`] !== null).map((item: any, index: number) => (
        <Fieldset
          key={index}
          legend={`${item.label} Details`}
          className="fieldset_parants"
          toggleable
        >
          <div
            className="icon_showerdeatails"
            onClick={() => deleteGuardian(item.value)}
          >
            <SvgDeleteIcon />
          </div>
          <div className="grid mt-1">
            <div className="col-12 md:col-6 lg:col-4">
              <InputField
                label={`Name`}
                required={true}
                placeholder={"Enter"}
                name={`${item.value}Name`}
                value={formik.values[`${item.value}Name`]}
                onChange={formik.handleChange}
                error={formik.touched[`${item.value}Name`] && formik.errors[`${item.value}Name`]}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-4">
              <InputField
                label={`Phone`}
                required={true}
                placeholder={"Enter"}
                name={`${item.value}Phone`}
                value={formik.values[`${item.value}Phone`]}
                onChange={formik.handleChange}
                error={formik.touched[`${item.value}Phone`] && formik.errors[`${item.value}Phone`]}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-4">
              <InputField
                label={`Occupation`}
                required={true}
                placeholder={"Enter"}
                name={`${item.value}Occupation`}
                value={formik.values[`${item.value}Occupation`]}
                onChange={formik.handleChange}
                error={formik.touched[`${item.value}Occupation`] && formik.errors[`${item.value}Occupation`]}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-5">
              <InputField
                label={`Email`}
                required={false}
                placeholder={"Enter"}
                name={`${item.value}Email`}
                value={formik.values[`${item.value}Email`]}
                onChange={formik.handleChange}
                error={formik.errors[`${item.value}Email`]}
              />
            </div>
            <div className="col-12 md:col-6 lg:col-6">
              <FileDragUpload label={"Profile"} onChange={e => formik.setFieldValue(`${item.value}Profile`, e.target.files[0].name)} />
            </div>
          </div>

          <div className="flex align-items-center justify-content-start mt-2">
            <Checkbox
              onChange={() => formik.setFieldValue("primary", item.value)}
              label="Primary"
              value={formik.values.primary === item.value}
            />
          </div>
        </Fieldset>
      ))}

      <Panel header="Health Details" toggleable className="mt-4 ">
        <div className="grid mt-1">
          <div className="col-12 md:col-6 lg:col-4">
            <DropDownField
              label={"Blood Group"}
              options={bloodGroupDropdownData}
              name="bloodGroupId"
              value={formik.values.bloodGroupId}
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
              value={formik.values.height}
              onChange={formik.handleChange}
              required={false}
              placeholder={"Enter"}
              error={formik.errors.height}
            />
          </div>
          <div className="col-12 md:col-6 lg:col-4">
            <InputField
              label={"Weight (Kg)"}
              name="weight"
              value={formik.values.weight}
              onChange={formik.handleChange}
              required={false}
              placeholder={"Enter"}
              error={formik.errors.weight}
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
                value={formik.values.medicalHistory}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
      </Panel>

      <div className="student__accordion mt-3">
        <AccordionTab header="Add More Details" checktrue={false}>
          <div className="student__accordion__add__more">
            <div className="student__sub__title">Student Address Details</div>
            <div className="col-12 md:col-6 lg:col-6 mt-4 mb-4">
              <CheckBox
                label="If Permanent Address Is Current Address"
                onChange={makeSameAddress}
                value={isSameAddress}
                disabled={!isCurrentAddressValid}
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
                  options={countryOptions}
                  value={formik.values.currentAddress.countryId}
                  onChange={e => handleCountryChange(e, "current")}
                  optionLabel="name"
                  optionValue="id"
                />
                <DropDownField
                  label={"State"}
                  required={true}
                  placeholder={"Select"}
                  options={stateOptions.current}
                  value={formik.values.currentAddress.stateId}
                  onChange={e => handleStateChange(e, "current")}
                  optionLabel="name"
                  optionValue="id"
                />
                <DropDownField
                  label={"City"}
                  required={true}
                  placeholder={"Select"}
                  options={cityOptions.current}
                  value={formik.values.currentAddress.cityId}
                  onChange={e => handleCityChange(e, "current")}
                  optionLabel="name"
                  optionValue="id"
                />
                <InputField
                  label={`Address Line 1`}
                  required={true}
                  placeholder={"Enter"}
                  name="currentAddress.line1"
                  value={formik.values.currentAddress.line1}
                  onChange={formik.handleChange}
                />
                <InputField
                  label={`Address Line 2`}
                  required={false}
                  placeholder={"Enter"}
                  name="currentAddress.line2"
                  value={formik.values.currentAddress.line2}
                  onChange={formik.handleChange}
                />
                <InputField
                  label={`PinCode`}
                  required={true}
                  placeholder={"Enter"}
                  name="currentAddress.pincode"
                  value={formik.values.currentAddress.pincode}
                  onChange={formik.handleChange}
                  error={formik.errors["currentAddress.pincode"]}
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
                  options={countryOptions}
                  value={formik.values.permanentAddress.countryId}
                  onChange={e => handleCountryChange(e, "permanent")}
                  optionLabel="name"
                  optionValue="id"
                />
                <DropDownField
                  label={"State"}
                  required={true}
                  placeholder={"Select"}
                  options={stateOptions.permanent}
                  value={formik.values.permanentAddress.stateId}
                  onChange={e => handleStateChange(e, "permanent")}
                  optionLabel="name"
                  optionValue="id"
                />
                <DropDownField
                  label={"City"}
                  required={true}
                  placeholder={"Select"}
                  options={cityOptions.permanent}
                  value={formik.values.permanentAddress.cityId}
                  onChange={e => handleCityChange(e, "permanent")}
                  optionLabel="name"
                  optionValue="id"
                />
                <InputField
                  label={`Address Line 1`}
                  required={true}
                  placeholder={"Enter"}
                  name="permanentAddress.line1"
                  value={formik.values.permanentAddress.line1}
                  onChange={formik.handleChange}
                />
                <InputField
                  label={`Address Line 2`}
                  required={false}
                  placeholder={"Enter"}
                  name="permanentAddress.line2"
                  value={formik.values.permanentAddress.line2}
                  onChange={formik.handleChange}
                />
                <InputField
                  label={`PinCode`}
                  required={true}
                  placeholder={"Enter"}
                  name="permanentAddress.pincode"
                  value={formik.values.permanentAddress.pincode}
                  onChange={formik.handleChange}
                  error={formik.errors["permanentAddress.pincode"]}
                />
              </div>
            </div>
            <div
              className="addicon_previusschool_lablecontainer"
              onClick={addSchoolInformation}
            >
              <div className="addicon_previusschool">
                <SvgAddIcon color="#fff" />
              </div>
              <div className="addicon_previusschool_lable">
                Previous School Details
              </div>
            </div>

            {formik.values.previousSchoolDetails?.map((school, index) => (
              <div className="grid mt-1" key={index}>
                <div className="col-12 md:col-6 lg:col-4">
                  <InputField
                    label={`School Name ${index + 1}`}
                    required={true}
                    placeholder="Enter"
                    value={school.name}
                    onChange={formik.handleChange}
                    name={`previousSchoolDetails[${index}].name`}
                  />
                </div>
                <div className="col-12 md:col-6 lg:col-3">
                  <InputField
                    label={`Year`}
                    required={true}
                    value={school.year}
                    name={`previousSchoolDetails[${index}].year`}
                    onChange={formik.handleChange}
                    placeholder="YYYY - YYYY"
                  />
                </div>
                <div className="col-12 md:col-6 lg:col-4">
                  <InputField
                    label={`Location `}
                    required={true}
                    placeholder="Enter"
                    value={school.location}
                    name={`previousSchoolDetails[${index}].location`}
                    onChange={formik.handleChange}
                  />
                </div>
                <div
                  className="col-12 md:col-6 lg:col-1 deleteicon_siblings"
                  onClick={() => deleteSchoolInformation(index)}
                >
                  <SvgDeleteIcon />
                </div>
              </div>
            ))}

            <div className="student__sub__title mt-6 mb-3">Upload Document</div>

            <div className="grid ">
              <div className="col-12 md:col-6 lg:col-6">
                <DropDownField
                  label={"Title"}
                  required={true}
                  placeholder={"Select"}
                  options={documentOptions}
                  name="title"
                  value={documentName}
                  onChange={e => setDocumentName(e.value)}
                />
              </div>
              <div className="col-12 md:col-6 lg:col-6">
                <FileDragUpload label={"Documents"} onChange={uploadFile} />
              </div>
              <div className="overall_container_siblings">
                <div className="col-12 md:col-12 lg:col-12  overall_siblings flex ">
                  {formik.values?.documentDetails?.map((item) => (
                    <div className="chip_sortable" key={item.typeId}>
                      <Chip label={item.name} removable />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AccordionTab>
      </div>
      <div className="mt-3">
        <AccordionTab header="Active/Inactive Student" checktrue={false}>
          <div className="grid">
            <div className="col-4">
              <DropDownField
                label="Reason"
                name="disableReasonId"
                required={true}
                options={[]}
                value={null}
                onChange={formik.handleChange}
                optionLabel="name"
                optionValue="id"
              />
            </div>
            <div className="col-4">
              <DatePicker
                label="Date"
                required={false}
                name="disableDate"
                value={formik.values.disableDate}
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-4">
              <div>
                <div className="mb-2">Remarks</div>
                <InputTextarea
                  className="w-full"
                  autoResize
                  value={null}
                  onChange={formik?.handleChange("note")}
                  rows={5}
                  cols={30}
                />
              </div>
            </div>

          </div>
        </AccordionTab>
      </div>

      <Sider header="Import Student" setVisible={setImportPopup} visible={importPopup}>
        <ImportDetails setVisible={setImportPopup} />
      </Sider>
      <Sider
        header="Add Sibling"
        setVisible={setAddSiblingPopup}
        visible={addSiblingPopup}
      >
        <AddSibilingDetails
          setVisible={setAddSiblingPopup}
          onSubmit={addSiblingData}
        />
      </Sider>
      <div className="mt-4 student__bottom__btn">
        <Button
          label={isAdmissionPage ? "Save" : "Update"}
          onClick={formik.handleSubmit}
          type="submit"
          disabled={!(formik.dirty && formik.isValid)}
        />
      </div>
    </div>
  );
};

export default StudentsAdmission;
