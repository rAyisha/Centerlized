import './index.scss'
import { useEffect, useState } from 'preact/hooks';
import { DataTableStateEvent } from 'primereact/datatable';
import { useNavigate } from 'react-router-dom';
import DataTable from '../../../components/DataTable';
import DropDownField from '../../../components/DropDownField';
import SvgDeleteIcon from '../../../assets/svgIcon/SvgDeleteIcon';
import SvgEditIcon from '../../../assets/svgIcon/SvgEditIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getDynamicMasterTableDataMiddleWare, getDynamicMasterOptionsMiddleWare, deleteDynamicMasterMiddleWare } from './store/dynamicMasterMiddleware';
import { AppDispatch } from '../../../redux/store';
import TableSearchHeader from '../../../components/TableSearchHeader';
import ApiLoader from '../../../components/ApiLoader';
import { setMasterID } from './store/dynamicMasterReducer';
import ConfirmDeleteComponent from '../../../components/DeleteDialog';
import { useToast } from '../../../components/Toast';

export interface MasterDropdownData {
  id: number;
  name: string;
  description: string;
  companyId: number;
  branchId: number;
  ipAddress: string;
  createdOn: string;
  createdBy: number;
  updatedOn: string | null;
  updatedBy: number | null;
  isDeleted: boolean;
  deletedBy: number | null;
  deletedOn: string | null;
  parentMasterId: number | null;
}
export interface TableData {
  id: number;
  name: string;
  masterId: number;
  parentId: number | null;
  companyId: number;
  branchId: number;
  ipAddress: string;
  createdOn: string;
  createdBy: number;
  updatedOn: string | null;
  updatedBy: number | null;
  isDeleted: boolean;
  deletedBy: number | null;
  deletedOn: string | null;
  parentName: string;
}


const DynamicMaster = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>()
  const toast = useToast();
  const { isLoading, tableLoading, getmasterdropdown, dynamicMasterTableData, companyID, branchID, masterID } = useSelector((state: any) => ({
    isLoading: state.dynamicReducers.isLoading,
    tableLoading: state.dynamicReducers.tableLoading,
    masterID: state.dynamicReducers.masterID,
    getmasterdropdown: state.dynamicReducers.getmasterdropdown,
    dynamicMasterTableData: state.dynamicReducers.dynamicMasterTableData,
    companyID: state.dropdownDataReducers.companyID,
    branchID: state.dropdownDataReducers.branchID,
  }));
  const [masterDataID, setMasterdataID] = useState<any>(masterID);
  const [masterDataCode, setMasterDataCode] = useState<any>();
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [page, setPage] = useState<number>(0);
  const [rows, setRows] = useState<number>(5);
  const onPage = (event: DataTableStateEvent) => {
    setPage(event.page as number);
    setRows(event.rows);
  };

  const handledynamicMaster = (id: number, formAction: string, fieldName?: string, associatevalueId?: number) => {
    if (masterDataID) {
      const masterSelectedData = getmasterdropdown?.filter((item: MasterDropdownData) => item?.id === masterDataID)

      let associationId = null;
      let associationName = null;
      if (masterSelectedData[0]?.parentMasterId) {
        const associationSelectedData = getmasterdropdown?.filter((item: MasterDropdownData) => item?.id === masterSelectedData[0]?.parentMasterId)
        associationId = associationSelectedData[0]?.code;
        associationName = associationSelectedData[0]?.name;
      }
      if (masterSelectedData[0]?.name) {
        navigate(`/dynamicmaster/${formAction}/${id}`, { state: { masterName: masterSelectedData[0]?.name, masterValue: fieldName, associationId: associationId || null, associationName: associationName || null, associationValueId: associatevalueId || null } });
      }
    }
  }
  const actionTemplate = (rowData: TableData) => (
    <div className="flex justify-content-center">
      <span className="table__arrow__icon flex gap-2">
        <div onClick={() => handledynamicMaster(rowData?.id, "edit", rowData?.name, rowData?.parentId)}>
          <SvgEditIcon />
        </div>
        <div onClick={() => setDeleteId(rowData?.id)}>
          <SvgDeleteIcon />
        </div>
      </span>
    </div>
  );
  const columns = [
    {
      header: "S.No.",
      body: (_: any, column: any) => column.rowIndex + 1,
    },
    {
      field: "name",
      header: "Name",
    },
    {
      field: "parentName",
      header: "Association",
    },

    {
      header: "Action",
      body: actionTemplate,
    },
  ];

  const handleGetTableData = () => {
    try {
      if (masterDataID) {
        dispatch(setMasterID(masterDataID))
        const id = masterDataCode?.code;
        const headers = {
          "company-id": companyID,
          "branch-id": branchID
        }
        dispatch(getDynamicMasterTableDataMiddleWare({ id, headers }))
      }
    } catch (error) {
      toast.error("Please try again.");
    }
  }

  const accept = () => {
    try {
      dispatch(deleteDynamicMasterMiddleWare({
        id: deleteId,
        headers: {
          "company-id": companyID,
          "branch-id": branchID
        }
      })).then((res) => {
        if (res?.meta?.requestStatus === "fulfilled") {
          toast.success("Successfully Deleted");
          handleGetTableData();
          setDeleteId(null)
        } else if (res?.meta?.requestStatus === "rejected") {
          if (typeof (res?.payload?.response?.data?.errorDescription) === "string")
            toast.error(res?.payload?.response?.data?.errorDescription);
        }
      })
    } catch (error) {
      toast.error("Please try again.");
    }
  }

  const reject = () => {
    setDeleteId(null)
  }
  const handleDynamicMasterOptions = () => {
    try {
      dispatch(getDynamicMasterOptionsMiddleWare({
        header: {
          "company-id": companyID,
          "branch-id": branchID
        }
      })).then((res) => {
        if (res) {
          console.log(res)
        }
        else {
          toast.error("Please try again.");
        }
      })
    } catch (error) {
      toast.error("Please try again.");
    }
  }

  const handlechange = (e: any) => {
    setMasterdataID(e.target.value);
    const selectedData = getmasterdropdown.find((data: any) => data.id === e.target.value);
    if (selectedData) {
      setMasterDataCode(selectedData)
    } else {
      toast.error("No matching data found.");
    }
  };

  useEffect(() => {
    try {
      if (branchID) {
        handleDynamicMasterOptions();
      }
      else {
        toast.error("Please try again.");
      }
    } catch (error) {
      toast.error("Please try again.");
    }
  }, [branchID])

  useEffect(() => {
    if (masterDataID) {
      setPage(0);
      setRows(5);
      handleGetTableData();
    }
  }, [masterDataID, branchID, masterDataCode])
  if (isLoading) {
    return <ApiLoader />;
  }

  return (
    <div className='overall_dynamic_master'>
      <TableSearchHeader
        title="Dynamic Masters"
        onButtonClick={() => handledynamicMaster(masterDataID, 'add', null)}
        addButton={true}
      />

      <div className="grid layout_button_dynamic_master">
        <div className="col-12 md:col-6 lg:col-3">
          <DropDownField
            label="Master"
            required={true}
            placeholder="Select"
            options={Array.isArray(getmasterdropdown) ? getmasterdropdown : []}
            optionLabel="name"
            optionValue="id"
            value={masterDataID}
            onChange={(e) => { handlechange(e) }}
          />
        </div>
      </div>

      {tableLoading ? <ApiLoader /> : <DataTable
        value={Array.isArray(dynamicMasterTableData) ? dynamicMasterTableData : []}
        columns={columns}
        paginator
        first={page * rows}
        rows={rows}
        totalRecords={dynamicMasterTableData?.length || 0}
        onPage={onPage}
        lazy={false}
      />}

      <ConfirmDeleteComponent
        visible={deleteId ? true : false}
        onHide={() => setDeleteId(null)}
        message="Are you sure you want to delete?"
        accept={accept}
        reject={reject} />
    </div>
  )
}

export default DynamicMaster;