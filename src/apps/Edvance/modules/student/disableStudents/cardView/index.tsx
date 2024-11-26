import { FunctionalComponent } from "preact";
import { Image } from "primereact/image";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import PaginatorTemplate from "../../../../components/PaginatorTemplate";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import MoreButton from "../../../../components/moreButton";
import { useDispatch, useSelector } from "react-redux";
import EmptyTableIcon from "../../../../components/EmptyTableIcon";
import { setPage, setLimit } from "../../store/studentReducer";
import { AppDispatch, RootState } from "../../../../../../redux/store";

const CardView: FunctionalComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { studentList, page, limit, totalRecords } = useSelector((state: RootState) => {
    return {
      studentList: state.edvanceReducers.studentReducers.studentData.studentList,
      page: state.edvanceReducers.studentReducers.page,
      limit: state.edvanceReducers.studentReducers.limit,
      totalRecords: state.edvanceReducers.studentReducers.studentData.pagination.total
    };
  });

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    dispatch(setPage(event.page));
    dispatch(setLimit(event.rows));
  };

  const handleViewStudent = async (rowData: any) => {
    const id = rowData?.id;
    if (id) {
      navigate(`/edvance/students/disabledstudentdetail/${id}`)
    }
  };
  const menuOptions = [
    {
      name: "View Details",
      onClick: (rowData: any) => {
        handleViewStudent(rowData);
      },
    },
  ];

  return (
    <div className="grid card__layout__student__details">
      {studentList.length > 0 ? (
        <>
          {studentList.map((data) => (
            <div
              className="lg:col-4 sm:col-6 col-12 p-[10]"
              key={data.id}
            >
              <div className="card__layout__cardview">
                <Image src={data?.studentPhoto} alt={data?.firstName} />
                <div className="flex-1 flex flex-column">
                  <div className="w-full flex justify-content-between">
                    <div className="staff__name">{`${data?.firstName}`}</div>
                    <MoreButton menuOptions={menuOptions} rowData={data} />
                  </div>
                  <span className="card__text">
                    Class: Class {`${data?.class}(${data?.section})`}
                  </span>
                  <span className="card__text">
                    Admission No: {data?.admissionNumber}
                  </span>
                  <span className="card__text">
                    Roll Number: {data?.rollNumber}
                  </span>
                  <span className="card__text">
                    Phone Number: {data?.mobileNumber}
                  </span>
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
