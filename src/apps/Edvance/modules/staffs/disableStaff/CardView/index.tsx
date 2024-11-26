import { FunctionalComponent } from "preact";
import { Image } from "primereact/image";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { Paginator } from "primereact/paginator";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import MoreButton from "../../../../components/moreButton";
import PaginatorTemplate from "../../../../components/PaginatorTemplate";
import { setPage, setLimit } from "../../store/staffReducer"


const CardView: FunctionalComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { staffs, totalRecords, page, rows } = useSelector((state: RootState) => {
    return {
      staffs: state.edvanceReducers.staffReducers.disabledStaffData.staffs,
      totalRecords: state.edvanceReducers.staffReducers.disabledStaffData.pagination.total,
      page: state.edvanceReducers.staffReducers.page,
      rows: state.edvanceReducers.staffReducers.limit,
    }
  })

  const onPageChange = (event: { page: number; rows: number }) => {
    dispatch(setPage(event.page))
    dispatch(setLimit(event.rows))
  };

  const handleEnable = (rowData: any) => {
    // dispatch(patchEnabledisableMiddleware(rowData?.id)).then((res) => {
    //   if (res?.payload?.message === "staff data updated successfully") {
    //     fetchData();
    //   }
    // }).catch((error) => {
    //   console.error("Error updating staff data:", error);
    // });
  };

  const menuOptions = (rowData: any) => [
    {
      name: "View Details",
      onClick: () => {
        navigate(`/humanresource/disablestaff/${rowData?.staffId}`, {
          state: { rowData },
        });
      },
    },
    {
      name: "Enable",
      onClick: () => {
        handleEnable(rowData);
      },
    },
  ];

  return (
    <div className="grid card__layout">
      {staffs.length > 0 ? (
        staffs.map((staff: any) => (
          <div key={staff.SNo} className="lg:col-4 sm:col-6 col-12 p-[10]">
            <div className="card__layout__cardview">
              <div className="staff__image__controller">
                <Image src={staff?.staffPictureUrl} alt={staff?.TeacherName} />
              </div>
              <div className="flex-1 flex flex-column">
                <div className="w-full flex justify-content-between">
                  <div className="staff__name">
                    {staff?.firstName} {staff?.lastName}
                  </div>
                  <MoreButton menuOptions={menuOptions(staff)} />
                </div>
                <span className="mt-2 card__text">
                  Staff ID : {staff?.staffId}
                </span>
                <span className="card__text">
                  Staff Type : {staff?.staffType}
                </span>
                <span className="card__text">
                  Phone Number : {staff?.phoneNo}
                </span>
                <span className="card__text">
                  {staff?.MS_DepartmentTypeMaster?.type}
                </span>
                <div className="role__layout">
                  <div>{staff?.MS_Role?.name}</div>
                  <div>{staff?.MS_DesignationTypeMaster?.type}</div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No staff data available.</div>
      )}
      <div className="col-12">
        <Paginator
          template={PaginatorTemplate}
          first={page * rows}
          onPageChange={onPageChange}
          rows={rows}
          totalRecords={totalRecords}
          currentPageReportTemplate={`Showing {first} to {last} of {totalRecords} entries`}
        />
      </div>
    </div>
  );
};

export default CardView;
