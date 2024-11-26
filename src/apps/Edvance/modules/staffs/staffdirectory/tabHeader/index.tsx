import { FunctionalComponent } from "preact";
import { Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from "preact/compat";
import "./index.scss";
import SvgList from "../../../../../../assets/svgIcon/SvgList";
import SvgCardView from "../../../../../../assets/svgIcon/SvgCardView";
import SvgAddIcon from "../../../../../../assets/svgIcon/SvgAddIcon";
import DropDownField, { DropdownChangeEvent } from "../../../../../../components/DropDownField";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import InputField from "../../../../../../components/InputField";
import Button from "../../../../../../components/Button";
import { fetchIp } from "../../../../../../utility/getIpAddress";
import { getDepartmentDropdownMiddleware, getDesignationDropdownMiddleware, getStaffsMiddleware, getStaffTypeDropdownMiddleware } from "../../store/staffMiddleware";
import { removeEmptyParams } from "../../../../../../utility/helpers";

interface Props {
  viewType: string;
  setViewType: Dispatch<SetStateAction<string>>;
}


const TabHeader: FunctionalComponent<Props> = ({
  viewType,
  setViewType,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const ipAddress = useRef("");
  const initialLoad = useRef(true);

  const { companyID, branchID, yearID, departmentData, designationData, staffTypeData, totalRecords, page, limit } = useSelector((state: RootState) => {
    return {
      companyID: state.dropdownDataReducers.companyID,
      branchID: state.dropdownDataReducers.branchID,
      yearID: state.dropdownDataReducers.yearID,
      departmentData: state.edvanceReducers.staffReducers.departmentData,
      designationData: state.edvanceReducers.staffReducers.designationData,
      staffTypeData: state.edvanceReducers.staffReducers.staffTypeData,
      totalRecords: state.edvanceReducers.staffReducers.staffData.pagination.total,
      page: state.edvanceReducers.staffReducers.page,
      limit: state.edvanceReducers.staffReducers.limit,
    }
  })

  const [searchValue, setSearchValue] = useState("")

  const [dropdownValues, setDropdownValues] = useState({
    departmentId: "",
    designationId: "",
    staffTypeId: ""
  })

  const changeDropdownValue = (e: any, field: keyof typeof dropdownValues) => {
    setDropdownValues(prev => ({ ...prev, [field]: e.value }))
  }

  const searchButtonDisable = useMemo(() => dropdownValues.departmentId === "" && dropdownValues.designationId === "" && dropdownValues.staffTypeId === "", [dropdownValues])

  const setListView = () => {
    setViewType("list");
  };

  const setCardView = () => {
    setViewType("card");
  };
  const handleNewAdmission = () => {
    // navigate(`/edvance/students/studentAdmission`);
    navigate(`/edvance/staffs/staffsdirectory/${"add"}/id`);
  };

  const fetchStaffData = async () => {
    const headers = { "company-id": companyID, "branch-id": branchID, "year-id": yearID, ip: ipAddress.current }
    const params = removeEmptyParams({ departmentId: dropdownValues.departmentId, staffTypeId: dropdownValues.staffTypeId, designationId: dropdownValues.designationId, page: page + 1, limit, search: searchValue })
    dispatch(getStaffsMiddleware({ headers, params }))
  };

  const initialFetch = async () => {
    const headers = { "company-id": companyID, "branch-id": branchID, "year-id": yearID }
    try {
      initialLoad.current = false
      ipAddress.current = await fetchIp()
      await dispatch(getDepartmentDropdownMiddleware({ headers }))
      await dispatch(getDesignationDropdownMiddleware({ headers }))
      await dispatch(getStaffTypeDropdownMiddleware({ headers }))
      fetchStaffData()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (initialLoad.current) {
      initialFetch()
    } else {
      fetchStaffData()
    }
  }, [companyID, branchID, yearID, page, limit, searchValue])

  return (
    <div className="overall__profile__tab__header__student__details">
      <div className="totalcount_headerstudent mb-4">
        <div className="profile__tab__headertxt mb-4">Staff Directory</div>
        <div className="mt-1">
          {" "}
          Total Student<span>({totalRecords})</span>
        </div>
      </div>
      <div className="grid profile__input__container">
        <div className="col-3 md:col-4 lg:col-3">
          <DropDownField
            label="Department"
            required={false}
            placeholder="Select"
            options={departmentData}
            optionLabel="name"
            optionValue="id"
            name="departmentId"
            value={dropdownValues.departmentId}
            onChange={e => changeDropdownValue(e, "departmentId")}
          />
        </div>

        <div className="col-3 md:col-4 lg:col-3">
          <DropDownField
            label="Staff Type"
            placeholder="Select"
            options={staffTypeData}
            optionLabel="name"
            optionValue="id"
            name="staffTypeId"
            value={dropdownValues.staffTypeId}
            onChange={e => changeDropdownValue(e, "staffTypeId")}
          />
        </div>
        <div className="col-3 md:col-4 lg:col-3">
          <DropDownField
            label="Designation"
            placeholder="Select"
            options={designationData}
            optionLabel="name"
            optionValue="id"
            name="designationId"
            value={dropdownValues.designationId}
            onChange={e => changeDropdownValue(e, "designationId")}
          />
        </div>
        <div className="col-3 md:col-4 lg:col-3 pt-40px">
          <div className="search__button">
            <Button
              icon={<i className="pi pi-search" />}
              label="Search"
              onClick={fetchStaffData}
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
                placeholder=" Student ID / Student Name"
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
              label="Add Staff"
              icon={<SvgAddIcon color="var(--base-text-inactive-color)" />}
              onClick={handleNewAdmission}
              iconPos="left"
              className="export__butt__overall"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabHeader;
