import { FunctionalComponent } from "preact";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "preact/compat";
import "./index.scss";
import SvgList from "../../../../../../assets/svgIcon/SvgList";
import SvgCardView from "../../../../../../assets/svgIcon/SvgCardView";
import SvgAddIcon from "../../../../../../assets/svgIcon/SvgAddIcon";
import DropDownField, {
  DropdownChangeEvent,
} from "../../../../../../components/DropDownField";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import InputField from "../../../../../../components/InputField";
import Button from "../../../../../../components/Button";
import {
  deleteStudentMiddleware,
  getClassDropdownMiddleWare,
  getDisableStudentMiddleware,
  getSectionDropdownMiddleWare,
  getStudentMiddleware,
} from "../../store/studentMiddleware";
import { fetchIp } from "../../../../../../utility/getIpAddress";
import { removeEmptyParams } from "../../../../../../utility/helpers";
import CheckBox from "../../../../../../components/CheckBox";
import { toggleInactiveStudent } from "../../store/studentReducer";
import DeletePopup from "../../../../../../components/DeleteDialog";
import { useToast } from "../../../../../../components/Toast";

interface Props {
  viewType: string;
  setViewType: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  deleteId: number | null;
  setDeleteId: Dispatch<SetStateAction<number | null>>;
}


const TabHeader: FunctionalComponent<Props> = ({
  viewType,
  setViewType,
  setLoading,
  deleteId,
  setDeleteId
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const ipAddress = useRef("");
  const initialLoad = useRef(true);
  const toast = useToast();

  const { moduleAccess, companyID, branchID, yearID, showIactiveStudents, classDropdownData, sectionDropdownData, totalRecords, page, limit } = useSelector((state: RootState) => {
    return {
      moduleAccess: state.sideBarReducers.moduleAccess,
      companyID: state.dropdownDataReducers.companyID,
      branchID: state.dropdownDataReducers.branchID,
      yearID: state.dropdownDataReducers.yearID,
      showIactiveStudents: state.edvanceReducers.studentReducers.showInactiveStudents,
      classDropdownData: state.edvanceReducers.studentReducers.classDropdownData,
      sectionDropdownData: state.edvanceReducers.studentReducers.sectionDropdownData,
      totalRecords: state.edvanceReducers.studentReducers.studentData.pagination.total,
      page: state.edvanceReducers.studentReducers.page,
      limit: state.edvanceReducers.studentReducers.limit,
    }
  })

  const [searchValue, setSearchValue] = useState("");
  const [dropdownValues, setDropdownValues] = useState({
    classId: "",
    sectionId: ""
  })
  const [filterValues, setFilterValues] = useState({
    classId: "",
    sectionId: ""
  })

  const searchButtonDisable = useMemo(() => dropdownValues.classId === "" && dropdownValues.sectionId === "", [dropdownValues])

  const setListView = () => {
    setViewType("list");
  };

  const setCardView = () => {
    setViewType("card");
  };
  const handleNewAdmission = () => {
    navigate(`/edvance/students/studentAdmission`);
  };

  const fetchStudentData = async () => {
    try {
      const headers = { "company-id": companyID, "branch-id": branchID, "year-id": yearID, ip: ipAddress.current }
      const params = removeEmptyParams({ sessionId: 26, classId: filterValues.classId, sectionId: filterValues.sectionId, page: page + 1, limit, search: searchValue })
      if (showIactiveStudents) {
        await dispatch(getDisableStudentMiddleware({ headers, params }))
      } else {
        await dispatch(getStudentMiddleware({ headers, params }))
      }
    } catch (error) {
      console.log(error)
    }
  };

  const fetchStudentDataWithLoader = async () => {
    setLoading(true);
    await fetchStudentData()
    setLoading(false);
  }

  const handleClassChange = (e: DropdownChangeEvent) => {
    setDropdownValues(prev => ({ ...prev, classId: e.value }))
    dispatch(getSectionDropdownMiddleWare({ headers: { "company-id": companyID, "branch-id": branchID, "year-id": yearID } }))
  }

  const handleSectionChange = (e: DropdownChangeEvent) => {
    setDropdownValues(prev => ({ ...prev, sectionId: e.value }))
  }

  const handleSearch = async () => {
    setFilterValues(dropdownValues)
  }

  const clearSearch = () => {
    setDropdownValues({ classId: "", sectionId: "" })
    setFilterValues({ classId: "", sectionId: "" })
  }

  const cancelDelete = () => {
    setDeleteId(null);
  }

  const deleteStudent = async () => {
    try {
      const { meta, payload } = await dispatch(deleteStudentMiddleware(deleteId))
      if (meta.requestStatus === "fulfilled") {
        toast.success(payload.message);
        fetchStudentDataWithLoader();
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to delete student")
    }
  };

  const initialFetch = async () => {
    try {
      initialLoad.current = false
      ipAddress.current = await fetchIp()
      await dispatch(getClassDropdownMiddleWare({ headers: { "company-id": companyID, "branch-id": branchID, "year-id": yearID } }))
      await fetchStudentDataWithLoader()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (initialLoad.current) {
      initialFetch();
    } else {
      fetchStudentDataWithLoader();
    }
  }, [companyID, branchID, yearID, showIactiveStudents, filterValues])

  useEffect(() => {
    if (!initialLoad.current) {
      fetchStudentData()
    }
  }, [page, limit, searchValue])

  return (
    <div className="overall__profile__tab__header__student__details">
      <div className="totalcount_headerstudent mb-4">
        <div className="profile__tab__headertxt mb-4">Students List</div>
        <div className="mt-1">
          {" "}
          Total Student<span>({totalRecords})</span>
        </div>
      </div>
      <div className="grid profile__input__container">
        <div className="col-3 md:col-4 lg:col-3">
          <DropDownField
            label="Class"
            required={false}
            placeholder="Select"
            options={classDropdownData}
            optionLabel="name"
            optionValue="id"
            value={dropdownValues.classId}
            onChange={handleClassChange}
          />
        </div>

        <div className="col-3 md:col-4 lg:col-3">
          <DropDownField
            label="Section"
            placeholder="Select"
            options={sectionDropdownData}
            optionLabel="name"
            optionValue="id"
            value={dropdownValues.sectionId}
            onChange={handleSectionChange}
          />
        </div>
        <div className="col-3 md:col-4 lg:col-3 pt-40px">
          <div className="search__button">
            <Button
              icon={<i className="pi pi-search" />}
              label="Search"
              onClick={handleSearch}
              iconPos="left"
              disabled={searchButtonDisable}
            />
          </div>
        </div>
        <div className="col-3 md:col-4 lg:col-3 pt-40px">
          <div className="search__button">
            <Button
              label="Clear"
              onClick={clearSearch}
              iconPos="left"
              disabled={searchButtonDisable}
              outlined
            />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <CheckBox value={showIactiveStudents} onChange={() => dispatch(toggleInactiveStudent())} label="Inactive Students" />
      </div>

      <div className="horizontal__line w-full"></div>
      <div className="tab__header">
        <div className="dropdown__layout">
          <div className="tab__header__search">
            <div className="p-input-icon-left w-full">
              <i className="pi pi-search" />
              <InputField
                placeholder=" Admission no / Student Name/ Roll Number"
                value={searchValue}
                onChange={e => setSearchValue(e.currentTarget.value)}
              />
            </div>
          </div>
        </div>
        <div className="tab__header__buttons__layout">
          <span
            onClick={setCardView}
            className={viewType === "card" ? "selected__view" : ""}
          >
            <SvgCardView color={viewType === "card" ? "#000" : "#ccc"} />
          </span>
          <span
            onClick={setListView}
            className={viewType === "list" ? "selected__view" : ""}
          >
            <SvgList color={viewType === "list" ? "#000" : "#ccc"} />
          </span>
          <hr className="tab__header__buttons__layout__hr" />
          <div>
            <Button
              label="Admission"
              icon={<SvgAddIcon color="var(--base-text-inactive-color)" />}
              onClick={handleNewAdmission}
              iconPos="left"
              className="export__butt__overall"
              disabled={!moduleAccess.create}
            />
          </div>
        </div>
      </div>
      <DeletePopup visible={deleteId !== null} onHide={cancelDelete} accept={deleteStudent} reject={cancelDelete} />
    </div>
  );
};

export default TabHeader;
