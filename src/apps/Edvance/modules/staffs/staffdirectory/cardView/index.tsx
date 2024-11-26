import { Image } from "primereact/image";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import PaginatorTemplate from "../../../../components/PaginatorTemplate";
import { useState } from "react";
import MoreButton from "../../../../components/moreButton";
import { getEditDataStaffDirectoryMiddleware, patchEnabledisableMiddleware } from "../store/staffDirectoryMiddleware";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import { setLimit, setPage } from "../store/staffDirectoryReducers";
import EmptyTableIcon from "../../../../components/EmptyTableIcon";

const CardView = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { page, limit, totalRecords, staffsdata } = useSelector((state: RootState) => ({

    staffsdata: state.edvanceReducers.staffReducers.staffData.staffs,
    totalRecords: state.edvanceReducers.staffReducers.staffData?.pagination?.total,
    page: state.edvanceReducers.staffReducers.page,
    limit: state.edvanceReducers.staffReducers.limit,
  }));
  const handleEdit = (rowData: any) => {
    dispatch(getEditDataStaffDirectoryMiddleware(rowData));
    navigate(`/humanresource/staffdirectory/edit/${rowData.id}`, {
      state: { rowData },
    });
  };

  const handleEnable = (rowData: any) => {

    // dispatch(patchEnabledisableMiddleware(rowData?.id)).then((res) => {
    //   if (res?.payload?.message === "staff data updated successfully") {
    //     fetchData()
    //   }
    // }).catch((error: any) => {
    //   console.error("Error updating staff data:", error);
    // });
  };

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    dispatch(setPage(event.page));
    dispatch(setLimit(event.rows));
  };



  const menuOptions = (rowData: any) => [
    {
      name: "View Details",
      onClick: () => {
        navigate(`/humanresource/${"staffdirectory"}/${rowData?.id}`, {
          state: { rowData },
        });
      },
    },
    {
      name: "Edit",
      onClick: () => handleEdit(rowData),
    },
    {
      name: "InActive Staff",
      onClick: () => handleEnable(rowData),
    },
  ];

  return (
    <div className="grid card__layout">
      {staffsdata.length > 0 ?
        (<>
          {staffsdata.map((data: any) => (
            <div className="lg:col-4 sm:col-6 col-12 p-[10]" key={data.SNo}>
              <div className="card__layout__cardview">
                <div className="staff__image__controller">
                  <Image src={data?.staffPictureUrl} alt={data.TeacherName} />
                </div>
                <div className="flex-1 flex flex-column">
                  <div className="w-full flex justify-content-between">
                    <div className="staff__name">{data?.firstName} {data?.lastName}</div>
                    <MoreButton menuOptions={menuOptions(data)} />
                  </div>
                  <span className="mt-2 card__text">
                    Staff ID : {data?.id}
                  </span>
                  <span className="card__text">
                    Staff Type : {data?.staffTypeName}
                  </span>
                  <span className="card__text">
                    Phone Number : {data?.phoneNo}
                  </span>
                  <span className="card__text">{data?.MS_DepartmentTypeMaster?.type}</span>
                </div>
              </div>
            </div>
          ))}

        </>
        ) : (
          <>
            <EmptyTableIcon />
          </>
        )}

      <Paginator
        template={PaginatorTemplate}
        first={page * limit}
        rows={limit}
        onPageChange={onPageChange}
        totalRecords={totalRecords}
      />

    </div>
  );
};

export default CardView;
