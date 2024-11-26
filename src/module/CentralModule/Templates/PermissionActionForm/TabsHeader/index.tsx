// import { useDispatch } from "react-redux";
import ChartCard from "../../../../../components/ChartCard";
import DropDownField from "../../../../../components/DropDownField";
import { useToast } from "../../../../../components/Toast";
import { useFormik } from "formik";
import InputField from "../../../../../components/InputField";
import { Dispatch, StateUpdater, useEffect } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../redux/store";
import { getAllBranchMiddleWare, getAllBranchTypeMiddleWare } from "../../../BranchMaster/store/branchMiddleware";

interface FormikValues {
  templateName?: string;
  branch?: string;
}

interface FormikErrors {
  templateName?: string;
  branch?: string;
}
interface props {
  setTemplateData:Dispatch<StateUpdater<string>>
  templatedata:string
}
const initialValues = {
  templateName: "",
  branch: "",
};

const TabsHeader = ({setTemplateData,templatedata}:props) => {
  // const dispatch = useDispatch();
  const toast = useToast();
  const dispatch = useDispatch<AppDispatch>();
  const { getBranchType } = useSelector((state: any) => {
    return {
      getBranchType: state.BranchReducers?.getBranchType?.data,
    };
  });
  console.log(getBranchType,"Branchcheck")
  const handleBranchSubmit = async (values: FormikValues) => {
    console.log(values, "find values");
    // const payload = {
    //   templateName: values?.templateName,
    //   branch: values?.branch,
    // };
    try {
      // const res = await dispatch({});
      //   if (res.meta.requestStatus === "fulfilled") {
      if (true) {
        // console.log(res, "branch API success");
        toast.success("branch successfully registered");
        // setForm("nextForm");
      } else {
        // console.error("branch API failed:", res?.payload?.response);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const validate = (values: FormikValues) => {
    const errors: FormikErrors = {};
    if (!values.templateName) {
      errors.templateName = "Template Name is Required";
    }
    if (!values?.branch) {
      errors.branch = "Branch is Required";
    }

    return errors;
  };
  useEffect(()=>{
    dispatch(getAllBranchTypeMiddleWare())
  },[])
  const formik = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: async (values) => {
      handleBranchSubmit(values);
    },
  });
  return (
    <div className="mb-4">
      <ChartCard>
        <div className="grid p-5">
          <div className="col-12 md:col-6">
            <InputField
              type="master"
              label="Template Name"
              name="firstName"
              value={templatedata}
               onChange={(e) => setTemplateData(e.currentTarget.value)} 
               placeholder="Select Parent Company"
              required={true}
             
            />
          </div>
        
        </div>
      </ChartCard>
    </div>
  );
};

export default TabsHeader;
