import { useDispatch, useSelector } from "react-redux";
import TemplateCards from "../../../../components/TemplateCard";
import { useFormik } from "formik";
import Button from "../../../../components/Button";
import { Dispatch, StateUpdater, useEffect, useState } from "preact/hooks";
import { AppDispatch } from "../../../../redux/store";
import {
  addDetailTemplateMiddleware,
  detailViewTemplateMiddleware,
  getListOfUsersAccessMiddleWare,
  patchTemplateCardMiddleWare,
  postAssignUsersTemplateMiddleWare,
  postTemplateCardMiddleWare,
} from "../store/templatesMiddleware";
import PrimaryTemplateForm from "./PrimaryForm";
import { useToast } from "../../../../components/Toast";
import ChartCard from "../../../../components/ChartCard";
import InputField from "../../../../components/InputField";
import { useNavigate, useParams } from "react-router-dom";
import BackNavigation from "../../../../components/BackArrowNavigation";
import "./index.scss"
import { fetchIp } from "../../../../utility/getIpAddress";
import ApiLoader from "../../../../components/ApiLoader";
import ConfirmDeleteComponent from "../../../../components/DeleteDialog";
import Sider from "../../../../apps/Edvance/components/Sider";
import DropDownField from "../../../../components/DropDownField";
import { getAllUserAccessMiddleware, getDepartmentsMiddleWare } from "../../UserAccessControl/store/userAccessMiddleware";
import CheckBox from "../../../../components/CheckBox";
import { SetStateAction } from "preact/compat";
interface FormikErrors {
  templatename?: string;
}
interface FormikAssignErrors {
  department?: string;
}

interface FormikValues {
  templatename?: string;
}
interface FormikAssignValues {
  department?: string;
}
interface CompanyDetails {
  id: number;
  name: string;
}

interface BranchDetails {
  id: number;
  name: string;
}
interface Permission {
  create: boolean;
  view: boolean;
  update: boolean;
  delete: boolean;
  import: boolean;
  export: boolean;
}
interface viewPermission {
  name: string;
  list: any;
}
interface PropsState {
  templateId?: string | number;
  setTemplateId?: (value: string | number | null) => void;
}
interface seletedProps {
  id: number | string,
}
const assignInitialValues = {
  department: ""
}
interface UserAccessData {
  id: number;
  Name: string;
  workEmail: string;
  departmentName: string;
}

const PermissionActionForm = ({ templateId }: PropsState) => {
  const dispatch = useDispatch<AppDispatch>();
  const { action, id } = useParams();
  const templateMainId = templateId ? templateId : id
  const navigate = useNavigate();
  const toast = useToast();
  const [viewDetails, setviewDetails] = useState<viewPermission | null>(null);
  const [addviewDetails, setaddviewDetails] = useState<any>([]);
  const [ip, setIp] = useState<string | null>(null);
  const [finalList, setFinalList] = useState<any[]>([]);
  const [localKeys, setLocalKeys] = useState<any[]>([]);
  const [permissionPopup, setPermissionPopup] = useState<boolean>(false);
  const [assignPopup, setAssignPopup] = useState<boolean>(false);
  const [checkedList, setCheckedList] = useState<number[]>([]);
  const [tempalteID, setTemplateID] = useState<number | string | null>(templateMainId);
  const { companyID, branchID, yearID, isLoading, departments, userAccessData, listOfUsersAccess } = useSelector((state: any) => ({
    isLoading: state.sideBarReducers?.isLoading,
    companyID: state.dropdownDataReducers.companyID,
    branchID: state.dropdownDataReducers.branchID,
    yearID: state.dropdownDataReducers.yearID,
    departments: state.userAccessReducers?.departments,
    userAccessData: state.userAccessReducers.userAccess,
    listOfUsersAccess: state?.TemplatesReducers?.listOfUsersAccess
  }));

  const validate = (values: FormikValues) => {
    const errors: FormikErrors = {};
    if (!values.templatename) {
      errors.templatename = "Template name is required";
    }
    return errors;
  };
  const assignValues = (values: FormikAssignValues) => {
    const errors: FormikAssignErrors = {};
    if (!values.department) {
      errors.department = "Department is required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: { templatename: "" },
    validate,
    onSubmit: async () => {
      // setPermissionPopup(true);
      if (action === "add") {
        setPermissionPopup(true);
        dispatch(
          postTemplateCardMiddleWare({
            header: {
              ip: ip,
              "company-id": companyID,
              "branch-id": branchID,
            },
            payload: {
              name: formik.values.templatename,
              list: finalList,
            },
          })
        ).then((res) => {
          if (res?.meta?.requestStatus === "fulfilled") {
            setTemplateID(res?.payload?.data?.id)
            toast.success("Successfully Added");
            // navigate("/templates");
            setPermissionPopup(true);
          }
        });
      } else if (action === "edit") {
        dispatch(
          patchTemplateCardMiddleWare({
            id: templateMainId,
            header: {
              ip: ip,
              "company-id": companyID,
              "branch-id": branchID,
            },
            payload: {
              name: formik.values.templatename,
              list: finalList,
            },
          })
        ).then((res) => {
          if (res?.meta?.requestStatus === "fulfilled") {
            toast.success("Successfully Updated");
            // navigate("/templates");
            setPermissionPopup(true);
          }
        });

      }
    },
  });

  const formikAssign = useFormik({
    initialValues: assignInitialValues,
    validate: assignValues,
    onSubmit: async () => {
      // setPermissionPopup(false);
    },
  });
  useEffect(() => {
    if (viewDetails) {
      setFormikValues();
    }
  }, [viewDetails]);

  const setFormikValues = () => {
    const updatedValues = {
      templatename: viewDetails?.name,
    };
    formik.setValues({ ...formik.values, ...updatedValues });
  };
  useEffect(() => {
    const firstErrorField = Object.keys(formik.errors)[0];
    if (formik.isSubmitting && firstErrorField) {
      const errorElement = document.getElementById(firstErrorField);
      if (errorElement) {
        const inputElement = errorElement.querySelector("input");
        if (inputElement) {
          inputElement.focus();
        } else {
          errorElement.focus();
        }
      }
    }
  }, [formik.isSubmitting, formik.errors]);

  const labels: Array<keyof Permission> = [
    "create",
    "view",
    "update",
    "delete",
    "import",
    "export",
  ];

  useEffect(() => {
    if (action != "add") {
      // if (typeof setTemplateId === 'function') {
      //   setTemplateId(templateMainId);
      // }
      dispatch(detailViewTemplateMiddleware({ id: templateMainId })).then((res) => {
        setviewDetails(res?.payload?.data);
      });
      dispatch(getListOfUsersAccessMiddleWare({ id: templateMainId }))
    }
  }, []);
  const fetchIpAddress = () => {
    fetchIp()
      .then(ip => {
        setIp(ip)
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  useEffect(() => {
    dispatch(addDetailTemplateMiddleware()).then((res) => {
      if (res?.payload?.data) {
        setaddviewDetails(res?.payload?.data);
      }
    });
    fetchIpAddress();
    const headers = {
      "company-id": companyID,
      "branch-id": branchID,
    }
    dispatch(getDepartmentsMiddleWare({ headers }));
    return () => {
      localKeys?.forEach((item: any[]) => sessionStorage.removeItem(`${item}`))
    }
  }, [])
  useEffect(() => {
    const headers = {
      "company-id": companyID,
      "branch-id": branchID,
    }
    if (templateMainId)
      dispatch(getAllUserAccessMiddleware({ headers }))
  }, [branchID]);
  const reject = () => {
    setPermissionPopup(false)
    navigate("/templates");
  }
  const accept = () => {
    setAssignPopup(true);
    const selectedID = listOfUsersAccess.map((val: seletedProps) =>
      val?.id
    )
    setCheckedList(selectedID)
  }
  const handleviewdata = viewDetails?.list || [];

  const permissionsMap = Object.assign(
    {},
    ...handleviewdata.map((item: any) => {
      const [id, access] = Object.entries(item)[0];
      return { [id]: access };
    })
  );


  const updatePermissions = (data: any[]) => {
    data.forEach((item) => {
      if (permissionsMap[item.id]) {
        item.access = permissionsMap[item.id];
      }
      else if (item.children) {
        updatePermissions(item.children);
      }
    });
  };

  const finalData = JSON.parse(JSON.stringify(addviewDetails));
  updatePermissions(finalData);
  const myTabs = (action === "add" ? addviewDetails : finalData).map(
    (item: any) => ({
      title: item?.name,
      content: (
        <PrimaryTemplateForm
          childrenData={item?.children}
          labels={labels}
          onGetFinalList={setFinalList}
          uniqueKey={item?.id}
          finalList={finalList}
          localKeys={localKeys}

        />
      ),
    })
  );

  const handleCheckboxChange = (id: number) => {
    setCheckedList(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleUsersAssign = async () => {
    try {
      if (!tempalteID) {
        return;
      }
      const payload = {
        userIds: checkedList,
        templateId: tempalteID,
      }
      const res = await dispatch(postAssignUsersTemplateMiddleWare({ payload }));
      if (res.meta.requestStatus === "fulfilled") {
        toast.success("Successfully Updated!");
        navigate("/templates");
      } else {
        if (typeof res?.payload?.response?.data?.error === "string") {
          toast.error(res?.payload?.response?.data?.error);
        } else {
          toast.error("An unexpected error occurred");
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  const handleCancelAssign = () => {
    setAssignPopup(false);
    navigate("/templates");
  }

  return (
    <div className="template__module__form__container">
      <div className="form__header__area flex gap-2 mb-5 align-items-center">
        <BackNavigation />
        <div className="form__title">
          Templates
        </div>
      </div>
      <div className="mb-4">
        <ChartCard>
          <div className="grid p-5">
            <div className="col-12 md:col-6" id="templatename">
              <InputField
                disabled={action === "view" || action === "edit"}
                type="text"
                label="Template Name"
                name="templatename"
                value={formik.values.templatename}
                onChange={formik.handleChange}
                placeholder="Enter Template Name"
                required={true}
                error={
                  formik.touched.templatename && formik.errors.templatename
                    ? formik.errors.templatename
                    : ""
                }
              />
            </div>
          </div>
        </ChartCard>
      </div>
      {isLoading ? <ApiLoader /> : <TemplateCards tabs={myTabs} />}

      {action !== "view" && (
        <div className="button__container flex justify-content-center mt-4">
          <Button
            label={action === "add" ? "Save & Next" : "Update"}
            onClick={() => formik.handleSubmit()}
          />
        </div>
      )}
      <ConfirmDeleteComponent
        visible={permissionPopup}
        onHide={() => setPermissionPopup(false)}
        message="Assign users to the newly created permission set?"
        accept={accept}
        reject={reject}
        rejectLabel="Skip"
        acceptLabel="Continue"
        closable={false}
      />
      <Sider
        header="Assign users to the permission set"
        setVisible={setAssignPopup}
        visible={assignPopup}
        position="center"
        closable={false}
        dismissableMask={false}
      >
        <div className="template__assign__users__container">
          <div className="template__assign__data__area">
            <div>
              <DropDownField
                disabled={action === "view"}
                label="Department"
                name="department"
                value={formikAssign?.values?.department}
                onChange={formikAssign.handleChange}
                options={Array.isArray(departments) ? departments : []}
                optionLabel="name"
                optionValue="name"
                placeholder="Select Department"
                required
                error={
                  formikAssign.touched.department && formikAssign.errors.department
                    ? formikAssign.errors.department
                    : ""
                }
              />
              <div className="pt-5 users__title">Available Users</div>
            </div>
            <div className="assign__user__checkbox__ontroller mt-5">
              {Array.isArray(userAccessData) && userAccessData?.length != 0 && (
                <div className="flex gap-2 flex-column">
                  {userAccessData?.map((item: UserAccessData, index) => {
                    if (item?.departmentName === formikAssign.values.department)
                      return (
                        <CheckBox
                          label={item?.Name ?? `User ${index}`}
                          value={checkedList.includes(item?.id)}
                          onChange={() => handleCheckboxChange(item.id)} 
                          inputId={item?.id}
                        />
                      )
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-content-end gap-2">
            <Button
              label="Cancel"
              outlined={true}
              onClick={() => handleCancelAssign()}
            />
            <Button
              disabled={checkedList?.length === 0 || formikAssign.values.department == ""}
              label="Assign"
              onClick={() => handleUsersAssign()}
            />
          </div>
        </div>
      </Sider>
    </div>
  );
};

export default PermissionActionForm;
