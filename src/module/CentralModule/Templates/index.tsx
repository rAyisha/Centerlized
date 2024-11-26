import { useEffect, useState } from "preact/hooks";
import DataTable from "../../../components/DataTable";
import { DataTableStateEvent } from "primereact/datatable";
import "./index.scss";
import { userAccessData } from "./Approvals/mock";
import SvgEditIcon from "../../../assets/svgIcon/SvgEditIcon";
import SvgDeleteIcon from "../../../assets/svgIcon/SvgDeleteIcon";
import SvgEye from "../../../assets/svgIcon/SvgEye";
import TableSearchHeader from "../../../components/TableSearchHeader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { deleteTemplateListMiddleWare, getListAccessMiddleWare } from "./store/templatesMiddleware";
import { useToast } from "../../../components/Toast";
import ConfirmDeleteComponent from "../../../components/DeleteDialog";
import ApiLoader from "../../../components/ApiLoader";
type StateType = {
  stateCode: string;
  stateName: string;
  stateDescription: string;
  countryId: string;
  stateStatus: string;
  stateId?: number;
  id?: number;
};
const Templates = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch<AppDispatch>();
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [page, setPage] = useState<number>(0);
  const [rows, setRows] = useState<number>(5);
  const { isLoading, getTemplateList } = useSelector((state: RootState) => {
    return {
      getTemplateList: state.TemplatesReducers?.getTemplateList?.data,
      isLoading: state.TemplatesReducers?.isLoading,
    };
  });
  const onPage = (event: DataTableStateEvent) => {
    setPage(event.page as number);
    setRows(event.rows);
  };

  useEffect(() => {
    dispatch(getListAccessMiddleWare())
  }, [])

  const handleDeleteTemplateList = () => {
    dispatch(deleteTemplateListMiddleWare({ id: deleteId })).then((res) => {
      if (res?.meta?.requestStatus === "fulfilled") {
        toast.success("Successfully Deleted");
        dispatch(getListAccessMiddleWare())
        setDeleteId(null);
      }
    })
  }

  const accept = () => {
    handleDeleteTemplateList()
  }

  const reject = () => {
    setDeleteId(null)
  }

  const actionTemplate = (rowData: StateType) => (
    <div className="flex justify-content-center">
      <span className="table__arrow__icon flex gap-2">
        <div
          onClick={() =>
            navigate(`/templates/permissionsetupview/view/${rowData?.id}`, { state: rowData?.id })
          }
        >
          <SvgEye />
        </div>
        <div
          onClick={() =>
            navigate(`/templates/permissionsetup/edit/${rowData?.id}`, { state: rowData?.id })
          }
        >
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
      field: "branchName",
      header: "Branch",
    },
    {
      header: "Action",
      body: actionTemplate,
    },
  ];
  const onButtonClick = () => {
    navigate("/templates/permissionsetup/add/id");
  };
  if (isLoading) {
    return <ApiLoader />
  }
  return (
    <div>
      <TableSearchHeader
        title="Templates List"
        onButtonClick={onButtonClick}
        addButton={true}
      />
      <DataTable
        value={Array.isArray(getTemplateList) ? getTemplateList : []}
        columns={columns}
        paginator
        first={page * rows}
        rows={rows}
        totalRecords={getTemplateList?.length || 0}
        onPage={onPage}
        lazy={false}
      />
      <ConfirmDeleteComponent
        visible={deleteId ? true : false}
        onHide={() => setDeleteId(null)}
        message="Are you sure you want to delete?"
        accept={accept}
        reject={reject} />
    </div>
  );
};

export default Templates;
