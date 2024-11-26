import { useFormik } from "formik";
import { useState } from "preact/hooks";
import DropDownField from "../../../../../../components/DropDownField";
import Button from "../../../../../../components/Button";
import InputField from "../../../../../../components/InputField";
import ExportButton from "../../../../components/ExportButton";
import SvgSearchIcon from "../../../../../../assets/svgIcon/SvgSearchIcon";
import { months, roles, years } from "../mock";

interface TabHeaderProps {
  viewType: string;
  setViewType: (viewType: string) => void;
}

const TabHeader: React.FC<TabHeaderProps> = ({ viewType, setViewType }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const handleSubmit = () => {
    console.log(formik.values);
  };

  const formik = useFormik({
    initialValues: {
      Role: "",
      Month: "",
      Year: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <div className="overall__profile__tab__header__student__details">
      <div className="profile__tab__headertxt">Payroll</div>
      <div className="grid profile__input__container mt-4">
        <div className="col-12 md:col-3 lg:col-3">
          <DropDownField
            label="Role"
            required={true}
            placeholder="Select"
            options={roles}
            optionLabel="label"
            optionValue="id"
            value={formik.values.Role}
            name="Role"
            onChange={formik.handleChange}
            error={
              formik.touched.Role && formik.errors.Role
                ? (formik.errors.Role as string)
                : ""
            }
          />
        </div>
        <div className="col-4 md:col-3 lg:col-3">
          <DropDownField
            label="Month"
            required={true}
            placeholder="Select"
            options={months}
            optionLabel="label"
            optionValue="id"
            value={formik.values.Month}
            name="Month"
            onChange={formik.handleChange}
            error={
              formik.touched.Month && formik.errors.Month
                ? (formik.errors.Month as string)
                : ""
            }
          />
        </div>
        <div className="col-4 md:col-3 lg:col-3">
          <DropDownField
            label="Year"
            required={true}
            placeholder="Select"
            options={years}
            optionLabel="label"
            optionValue="id"
            value={formik.values.Year}
            name="Year"
            onChange={formik.handleChange}
            error={
              formik.touched.Year && formik.errors.Year
                ? (formik.errors.Year as string)
                : ""
            }
          />
        </div>
        <div className="col-4 md:col-3 lg:col-3 mt-5">
          <Button
            label="Search"
            icon={<SvgSearchIcon color="var(--base-text-inactive-color)" />}
            onClick={handleSubmit}
            iconPos="left"
            className="export__butt__overall"
          />
        </div>
      </div>
      <hr />
      <div className="tab__header mt-4">
        <div className="dropdown__layout">
          <div className="tab__header__search">
            <span className="p-input-icon-left w-full">
              <i className="pi pi-search" />
              <InputField
                placeholder="Search by Staff Id / Name"
                value={searchValue}
                onChange={handleChange}
              />
            </span>
          </div>
        </div>
        <div className="tab__header__buttons__layout">
          <ExportButton />
        </div>
      </div>
    </div>
  );
};

export default TabHeader;
