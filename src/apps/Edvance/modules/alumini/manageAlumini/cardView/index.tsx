import React, { useState } from "react";
import { Image } from "primereact/image";
import "./index.scss";
// import SvgSvgdotsfade from "../../../../assets/icons/SvgSvgdotsfade";
import { useNavigate } from "react-router-dom";
import { Paginator } from "primereact/paginator"; // Import Paginator component
import SvgDot from "../../../../../../assets/svgIcon/SvgDot";
import PaginatorTemplate from "../../../../components/PaginatorTemplate";
// import SvgDot from "../../../../../assets/svgIcon/SvgDot";
// import PaginatorTemplate from "../../../components/PaginatorTemplate";
// import PaginatorTemplate from "../../../../components/PaginatorTemplate"; // If you have a custom PaginatorTemplate

const CardView = ({ cardsData }) => {
  const [first, setFirst] = useState(0); // State for the index of the first item to display
  const [rows, setRows] = useState(5); // Default rows per page is set to 5
  const navigate = useNavigate();

  const handleNavigation = (data) => {
    // Example navigation function
    navigate(`/student/details/${data.id}`);
  };

  const onPageChange = (event) => {
    setFirst(event.first); // Update 'first' state when page changes
  };

  const onRowsPerPageChange = (event) => {
    setRows(event.value); // Update 'rows' state when rows per page changes
    setFirst(0); // Reset 'first' to 0 when rows per page changes to go back to the first page
  };

  return (
    <div className="grid card__layout__alumni_manage_container">
      {cardsData &&
        cardsData
          .slice(first, first + rows) // Slice the data array based on pagination state
          .map((data) => (
            <div className="lg:col-4 sm:col-6 col-12 p-[10]" key={data.id}>
              <div className="card__layout__cardview">
                <Image src={data.Image} alt={data.Name} />
                <div className="flex-1 flex flex-column">
                  <div className="w-full flex justify-content-between">
                    <div className="staff__name">{data.Name}</div>
                    <SvgDot/>
                  </div>
                  <span className="card__text">Class: Class {data.class}</span>
                  <span className="card__text">
                    Admission No: {data.admissionNo}
                  </span>

                  <span className="card__text">Gender: {data.gender}</span>

                  <span className="card__text">Email ID: {data.email}</span>
                  <span className="card__text">Phone: {data.number}</span>
                </div>
              </div>
            </div>
          ))}
      <div className="w-full">
        <Paginator
          first={first}
          rows={rows}
          totalRecords={cardsData.length}
          onPageChange={onPageChange}
          template={{
            ...PaginatorTemplate,
            RowsPerPageDropdown: (options) => (
              <div className="p-d-flex p-ai-center">
                {/* <span className="p-mr-2">Rows per Page:</span> */}
                <PaginatorTemplate.RowsPerPageDropdown
                  value={rows}
                  options={[5, 10, 15, 20]} // Options for rows per page dropdown
                  onChange={onRowsPerPageChange}
                />
              </div>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default CardView;
