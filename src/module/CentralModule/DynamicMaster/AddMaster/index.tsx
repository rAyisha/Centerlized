import Button from "../../../../components/Button";
import MasterViewFields from "./MasterViewFields";
import ValuesAddedFields from "./ValuesAddedFields";
import { AppDispatch } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  getDynamicMasterAssociationMiddleWare,
  patchDynamicMasterMiddleWare,
  postMasterValueMiddleWare,
} from "../store/dynamicMasterMiddleware";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useToast } from "../../../../components/Toast";
import { fetchIp } from "../../../../utility/getIpAddress";
import { useContext, useEffect, useState } from "preact/hooks";
import { convertToTamil } from "../../../../utility/baaminiConverter";
import { convertToKannada } from "../../../../utility/nudiConverter";
import LanguageContext from "../../../../config/LanguageContext";
import BackNavigation from "../../../../components/BackArrowNavigation";

interface ValusProp {}

const AddMaster: React.FC<ValusProp> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, action } = useParams();
  const { language } = useContext(LanguageContext);
  const toast = useToast();
  const dispatch = useDispatch<AppDispatch>();
  const [checkValue, setCheckValues] = useState<any[]>([]);
  const [ip, setIp] = useState("");
  const { associationId, associationValueId } = location.state || {};
  const [associationOptionsData, setAssociationOptionsData] = useState([]);
  const [associationOptionsId, setAssociationOptionsId] = useState(null);
  const { companyID, branchID } = useSelector((state: any) => ({
    isLoading: state.dynamicReducers.isLoading,
    companyID: state.dropdownDataReducers.companyID,
    branchID: state.dropdownDataReducers.branchID,
  }));
  function languageChecker(text: string) {
    switch (language) {
      case "ta":
        return convertToTamil(text);
      case "kn":
        return convertToKannada(text);
      default:
        return text;
    }
  }
  const handleFormSubmit = () => {
    if (action === "add")
      if (checkValue.length === 0) {
        toast.error("No data provided. Please fill in the required fields.");
        return;
      }
    const hasEmptyValue = checkValue.some((item) => !item.value);

    if (hasEmptyValue) {
      toast.error("Some fields are empty. Please fill in all required fields.");
      return;
    }

    const modifiedPayload = checkValue
      .filter((item) => item.value)
      .map((item) => {
        const payloadItem: any = {
          name: languageChecker(item.value),
          masterId: parseInt(id),
        };

        if (item.associatevalue) {
          payloadItem.parentId = item.associatevalue;
        }

        return payloadItem;
      });

    dispatch(
      postMasterValueMiddleWare({
        header: {
          "company-id": companyID,
          "branch-id": branchID,
          ip: ip,
        },
        payload: modifiedPayload,
      })
    ).then((res) => {
      if (res?.meta?.requestStatus === "fulfilled") {
        toast.success("Successfully Added");
        navigate("/dynamicmaster");
      } else if (res?.meta?.requestStatus === "rejected") {
        if (typeof res?.payload === "string") toast.error(res?.payload);
      }
    });
  };
  const handleFormUpdate = () => {
    if (action === "add")
      if (checkValue.length === 0) {
        toast.error("No data provided. Please fill in the required fields.");
        return;
      }

    const hasEmptyValue = checkValue.some((item) => !item.value);
    if (hasEmptyValue) {
      toast.error("Some fields are empty. Please fill in all required fields.");
      return;
    }

    const modifiedPayload = checkValue
      .filter((item) => item.value)
      .map((item) => {
        const payloadItem: any = {
          name: languageChecker(item?.value),
        };
        if (item.associatevalue) {
          payloadItem.parentId = item.associatevalue;
        }
        return payloadItem;
      });

    dispatch(
      patchDynamicMasterMiddleWare({
        id,
        header: {
          "company-id": companyID,
          "branch-id": branchID,
        },
        payload: modifiedPayload[0],
      })
    ).then((res) => {
      if (res?.meta?.requestStatus === "fulfilled") {
        toast.success("Successfully Updated");
        navigate("/dynamicmaster");
      } else if (res?.meta?.requestStatus === "rejected") {
        if (typeof res?.payload === "string") toast.error(res?.payload);
      }
    });
  };

  useEffect(() => {
    if (associationId) {
      const headers = {
        "company-id": companyID,
        "branch-id": branchID,
      };
      dispatch(
        getDynamicMasterAssociationMiddleWare({ id: associationId, headers })
      ).then((res) => {
        if (res?.meta?.requestStatus === "fulfilled") {
          setAssociationOptionsData(
            Array.isArray(res?.payload?.data) ? res?.payload?.data : []
          );
          setAssociationOptionsId(associationValueId);
        }
      });
    }

    if (!ip)
      fetchIp()
        .then((ip) => {
          setIp(ip);
        })
        .catch((error) => {
          console.error(error.message);
        });
  }, []);
  return (
    <div className="overall_dynamic_master">
      <div className="form__header__area flex gap-2 mb-5">
        <BackNavigation />
        <div className="form__title">Dynamic Masters</div>
      </div>

      {/* Save Button */}
      {action != "view" && (
        <div className="suboverall_custom_Addbutton_save">
          <Button
            className="custom_Addbutton_save"
            label={action === "add" ? "Save" : "Update"}
            onClick={() =>
              action === "add" ? handleFormSubmit() : handleFormUpdate()
            } // Adjust to match expected structure
          />
        </div>
      )}

      {/* Fields */}
      <MasterViewFields />

      {/* ADD Values Fields */}
      <div className="Subheader_valueChanges">Values</div>
      <ValuesAddedFields
        setCheckValues={setCheckValues}
        associationOptionsData={associationOptionsData}
        associationOptionsId={associationOptionsId}
      />
    </div>
  );
};

export default AddMaster;
