import { useEffect, useState } from "react";
import "./index.scss";
import TabHeader from "./tabHeader";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { useDispatch, useSelector } from "react-redux";

import EmptyTableIcon from "../../../components/EmptyTableIcon";
import { ConfirmDialog } from "primereact/confirmdialog";
import SvgSortIcon from "../../../../../assets/svgIcon/SvgSortIcon";
import SvgEye from "../../../../../assets/svgIcon/SvgEye";
import SvgEditIcon from "../../../../../assets/svgIcon/SvgEditIcon";
import SvgDeleteIcon from "../../../../../assets/svgIcon/SvgDeleteIcon";
import PaginatorTemplate from "../../../components/PaginatorTemplate";

import { logData } from "../../staffs/PayRoll/mock";
import Sider from "../../../components/Sider";
import AddModal from "./addModal";
import ViewModal from "./viewModal";

 const tablecheck=[
  {
    "title": "System Maintenance",
    "fromDate": "2024-10-25T10:00:00",
    "toDate": "2024-10-25T12:00:00"
  },
  {
    "title": "User Training Session",
    "fromDate": "2024-11-01T09:00:00",
    "toDate": "2024-11-01T11:00:00"
  },
  {
    "title": "Project Kickoff Meeting",
    "fromDate": "2024-11-05T14:00:00",
    "toDate": "2024-11-05T16:00:00"
  },
  {
    "title": "Quarterly Review",
    "fromDate": "2024-12-01T13:00:00",
    "toDate": "2024-12-01T15:00:00"
  },
  {
    "title": "Product Launch Event",
    "fromDate": "2024-12-10T08:00:00",
    "toDate": "2024-12-10T10:00:00"
  }
]

const ExamType = () => {

  const [addModalVisible, setAddModalVisible] = useState<boolean>(false);
  const [viewModalVisible, setViewModalVisible] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState(null);
  const [typeData, setTypeData] = useState('Add');
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [deleteID, setDeleteID] = useState(null);

 const selectviewdata=  {
  "id": 42,
  "eventFor": "ALL",
  "title": "eee",
  "fromDate": "2024-08-22",
  "toDate": "2024-08-23",
  "photoUrl": "https://google.com",
  "note": "",
  "message": "",
  "createdAt": "2024-08-19T12:40:50.942Z",
  "updatedAt": "2024-08-19T12:40:50.942Z",
  "MSSessionId": null,
  "MS_Session": null,
  "JN_ClassSections": []
}

  const HeaderTemplate = ({ field, sortable = true }) => (
    <div className="column__header">
      {field}
      {sortable && <SvgSortIcon />}
    </div>
  );

  const classTemplate = (rowData) => {
    const sectionsString = rowData?.sections.join(", ");
    return <span>{`${rowData.class} ${sectionsString}`}</span>;
  };

  const openAddModal = (type, data = null) => {
console.log(type,"typetype")
    if (type === 'Edit') {
      setAddModalVisible(true);
      setTypeData("Edit");

     
    } if (type === 'Add') {

      setAddModalVisible(true);
      setSelectedData(null);
      setTypeData('Add');
    
    }

  };

  const openViewModal = (data) => {
    setViewModalVisible(true);
    // setSelectedData(singleeventsDetails);
    setTypeData('View');
   
  };

  const deleteEvent = (id) => {
    setDeleteID(id);
    setPopupVisible(true);
  };

  const renderAction = (rowData) => (
    <div className="action_template">
      <span className="action_icon" onClick={() => openViewModal(rowData)}>
        <SvgEye />
      </span>
      <span className="action_icon" onClick={() => openAddModal('Edit', rowData)}>
        <SvgEditIcon />
      </span>
      <span className="action_icon" onClick={() => deleteEvent(rowData.id)}>
        <SvgDeleteIcon />
      </span>
    </div>
  );

  const closePopup = () => setPopupVisible(false);

  const accept = () => {
    if (deleteID) {
      const id = deleteID
      setPopupVisible(false);
  };
}

  

  return (
    <div className="alumni_events">
      <TabHeader
        title="Events List"
        buttonLabel="Add Event"
        buttonClick={() => openAddModal('Add')}
        // formik={formik}
        setSelectedData={setSelectedData}
        typeData={typeData}
      />


<DataTable
        value={tablecheck}
        paginator
        rows={5}
        paginatorTemplate={PaginatorTemplate}
        emptyMessage={<EmptyTableIcon />}
      >
        <Column field="title" header={<HeaderTemplate field="Event Title" />} />
       
        <Column
          field="fromDate"
          header={<HeaderTemplate field="From" />}
        // body={(rowData) => formatDate(rowData.from)}
        />
        <Column
          field="toDate"
          header={<HeaderTemplate field="To" />}
        // body={(rowData) => formatDate(rowData.to)}
        />
        <Column
          header={<HeaderTemplate field="Action" sortable={false} />}
          body={renderAction}
        />

      </DataTable>


      <Sider
        visible={addModalVisible}
        setVisible={setAddModalVisible}
        position="top-right"
        header={typeData === 'Edit' ? "Edit Event" : "Add Event"}
      >
        
        <AddModal
          setVisible={setAddModalVisible}
          setEditData={setSelectedData}
          selectedData={selectedData}
          typeData={typeData}
          // formikSearch={formik?.values?.search}
        />
      </Sider>


      <Sider
        visible={viewModalVisible}
        setVisible={setViewModalVisible}
        position="top-right"
        header="Event Description"
      >
        <ViewModal data={selectviewdata} />
        
      </Sider>


     
      <ConfirmDialog
        visible={popupVisible}
        message="Are you sure you want to delete this event?"
        closable={false}
        reject={closePopup}
        accept={accept}
      />
    </div>
  );
};

export default ExamType;
