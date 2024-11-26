import { FunctionalComponent } from "preact";
import { Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from "preact/compat";
import "./index.scss";
import SvgList from "../../../../../../assets/svgIcon/SvgList";
import SvgCardView from "../../../../../../assets/svgIcon/SvgCardView";
import DropDownField, { DropdownChangeEvent } from "../../../../../../components/DropDownField";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import InputField from "../../../../../../components/InputField";
import Button from "../../../../../../components/Button";
import { getClassDropdownMiddleWare, getDisableStudentMiddleware, getSectionDropdownMiddleWare } from "../../store/studentMiddleware";
import { fetchIp } from "../../../../../../utility/getIpAddress";
import { removeEmptyParams } from "../../../../../../utility/helpers";

interface Props {
  viewType: string;
  setViewType: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}


const TabHeader: FunctionalComponent<Props> = ({
  viewType,
  setViewType,
  setLoading,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const ipAddress = useRef("");
  const initialLoad = useRef(true);

  const { companyID, branchID, yearID, classDropdownData, sectionDropdownData, totalRecords, page, limit } = useSelector((state: RootState) => {
    return {
      companyID: state.dropdownDataReducers.companyID,
      branchID: state.dropdownDataReducers.branchID,
      yearID: state.dropdownDataReducers.yearID,
      classDropdownData: state.edvanceReducers.studentReducers.classDropdownData,
      sectionDropdownData: state.edvanceReducers.studentReducers.sectionDropdownData,
      totalRecords: state.edvanceReducers.studentReducers.studentData.pagination.total,
      page: state.edvanceReducers.studentReducers.page,
      limit: state.edvanceReducers.studentReducers.limit,
    }
  })

  const [searchValue, setSearchValue] = useState("")

  const [dropdownValues, setDropdownValues] = useState({
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

  const fetchStudentData = async () => {
    const headers = { "company-id": companyID, "branch-id": branchID, "year-id": yearID, ip: ipAddress.current }
    const params = removeEmptyParams({ sessionId: 26, classId: dropdownValues.classId, sectionId: dropdownValues.sectionId, page: page + 1, limit, search: searchValue })
    await dispatch(getDisableStudentMiddleware({ headers, params }))
  };

  const handleSearch = async () => {
    setLoading(true);
    await fetchStudentData();
    setLoading(false);
  }

  const handleClassChange = (e: DropdownChangeEvent) => {
    setDropdownValues(prev => ({ ...prev, classId: e.value }))
    dispatch(getSectionDropdownMiddleWare({ headers: { "company-id": companyID, "branch-id": branchID, "year-id": yearID } }))
  }

  const handleSectionChange = (e: DropdownChangeEvent) => {
    setDropdownValues(prev => ({ ...prev, sectionId: e.value }))
  }

  const initialFetch = async () => {
    setLoading(true);
    try {
      initialLoad.current = false
      ipAddress.current = await fetchIp()
      await dispatch(getClassDropdownMiddleWare({ headers: { "company-id": companyID, "branch-id": branchID, "year-id": yearID } }))
      fetchStudentData()
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (initialLoad.current) {
      initialFetch()
    } else {
      fetchStudentData()
    }
  }, [companyID, branchID, yearID, page, limit, searchValue])

  return (
    <div className="overall__profile__tab__header__student__details">
      <div className="totalcount_headerstudent mb-4">
        <div className="profile__tab__headertxt mb-4">Inactive Students List</div>
        <div className="mt-1">
          {" "}
          Total Students<span>({totalRecords})</span>
        </div>
      </div>
      <div className="grid profile__input__container">
        <div className="col-3 md:col-4 lg:col-3">
          <DropDownField
            label="Class"
            required={true}
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
      </div>

      <div className="horizontal__line w-full"></div>
      <div className="tab__header">
        <div className="dropdown__layout">
          <div className="tab__header__search">
            <div className="p-input-icon-left w-full">
              <i className="pi pi-search" />
              <InputField
                placeholder=" Admission no / Student Name / Roll Number"
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
        </div>
      </div>
    </div>
  );
};

export default TabHeader;
