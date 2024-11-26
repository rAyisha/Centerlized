import { useEffect, useRef, useState } from "react";
import "./index.scss";
import TabHeader from "./tabHeader";
// import CardView from "./cardView";
// import ListView from "./listView";
// // import ImportDatasDialog from "../../../components/ImportDatasDialog";
// import AddModal from "./addModal";
import { useDispatch, useSelector } from "react-redux";
// import ExportButton from "../../../components/ExportButton";
// import SvgList from "../../../assets/icons/SvgList";
// import SvgCategory from "../../../assets/icons/SvgCategory";
import { InputText } from "primereact/inputtext";
import { ConfirmDialog } from "primereact/confirmdialog";
// import EmptyTableIcon from "../../../components/EmptyTableIcon";
// import { deleteSingleAlumini, getAdmissionNoData, getmanagealumini } from "../store/alumniMiddleware";
import { Toast } from "primereact/toast";
import { logData } from "../../staffs/PayRoll/mock";
import ListView from "./listView";
import Sider from "../../../components/Sider";
import AddModal from "./addModal";
import ExportButton from "../../../components/ExportButton";
// import { logData } from "../staffs/PayRoll/mock";
// import Sider from "../../components/Sider";

const Managealumini = () => {
  const dispatch = useDispatch()
  const toast = useRef(null);
  const [viewType, setViewType] = useState("list");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [actionName, setActionName] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [formikValue, setformikValue] = useState({});
  const [deleteid, setdeleteid] = useState({});
  const [admissionNo, setAdmissionNo] = useState("");
  console.log(formikValue, "formikValue")



  const handleAddAction = (rowData, action) => {
    if (action == "delete") {
      console.log(rowData, "aluminirowData")
      setPopupVisible(true);
      setdeleteid(rowData?.id)
      return;
    }
    console.log(rowData, "aluminirowData")
    setSelectedData(rowData);
    setModalVisible(true);
    setActionName(action);
  };
  const handleChange = (e) => {
    console.log(e.target.value, "valuuu")
    setSearchValue(e.target.value);
  };
  
  const setCardView = () => {
    setViewType("card");
  };
  const setListView = () => {
    setViewType("list");
  };
  const closePopup = () => {
    setPopupVisible(false);
  };
  console.log(formikValue, "formikValue")
  // useEffect(()=>{
  //   if(searchValue){
  //   dispatch(getmanagealumini(
  //     {payload:{
  //       classId:1,
  //       sectionId:1,
  //       sessionId:15,
  //       search:searchValue
  //       // classId:formik.values?.class?.id,
  //       // sectionId:formik.values?.section?.id,
  //       // sessionId:formik.values?.session?.id
  //     }}
  //   ))
  // }
  // },[searchValue])
  const accept = () => {
    
    setPopupVisible(false);
    toast.current.show({ severity: 'success', detail: 'Information  successfully Update', life: 3000 });
  }

  const reject = () => {
    setPopupVisible(false);
    toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
  }

  return (
    <div className="alumni_manage_ovrall_container">
      <Toast ref={toast} />
      <TabHeader viewType={viewType} setViewType={setViewType} searchValue={searchValue} setformikValue={setformikValue} admissionNo={admissionNo} setAdmissionNo={setAdmissionNo} />

      {logData?.length != 0 ? (
        <>
          <div className="tab__header">
            <div className="dropdown__layout">
              <div className="tab__header__search">
                <span className="p-input-icon-left w-full">
                  <i className="pi pi-search" />
                  <InputText
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleChange}
                  />
                </span>
              </div>
            </div>
            <div className="tab__header__buttons__layout">
              {/* <ExportButton /> */}
              <ExportButton/>
            </div>
          </div>
          <div className="mt-5">
            <ListView
              tableData={logData}
              handleAddAction={handleAddAction}
            />
          </div>
          <Sider
            header={
              actionName == "add"
                ? "Manage Alumni Details"
                : actionName == "view"
                  ? "View Alumni Details"
                  : "Edit Alumni Details"
            }
            visible={modalVisible}
            setVisible={setModalVisible}
            position="top-right"
            // actionName={actionName}
          >
            <AddModal data={selectedData} setVisible={setModalVisible} actionName={actionName} formikValue={formikValue} searchValue={searchValue} admissionNo={admissionNo} setAdmissionNo={setAdmissionNo} />
          </Sider>

          <ConfirmDialog visible={popupVisible} message="Are you sure you want to clear the data?"
            accept={accept} reject={reject} />
        </>
      ) : (
        // <EmptyTableIcon />
        <div>Empty table</div>
      )}
    </div>
  );
};

export default Managealumini;
