import React from "react";

// Define a type for the MiscellaneousInfo props if necessary
interface MiscellaneousInfoProps {
  // Define any props if required here (currently none)
}

const MiscellaneousInfo: React.FC<MiscellaneousInfoProps> = () => {
  return (
    <div className="student__details__view__main__card">
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Blood Group</span>
        </div>
        <div className="card__right__side">
          <span>B+iv</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>House</span>
        </div>
        <div className="card__right__side">
          <span>1</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Height</span>
        </div>
        <div className="card__right__side">
          <span>5’6 ft</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Weight</span>
        </div>
        <div className="card__right__side">
          <span>48 kg</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Measurement Date</span>
        </div>
        <div className="card__right__side">
          <span>02/12/2024</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Mother Occupation</span>
        </div>
        <div className="card__right__side">
          <span>Doctor</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Guardian Name</span>
        </div>
        <div className="card__right__side">
          <span>Krishnan</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Previous School Details</span>
        </div>
        <div className="card__right__side">
          <span>-</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>National Identification Number</span>
        </div>
        <div className="card__right__side">
          <span>-</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Local Identification Number</span>
        </div>
        <div className="card__right__side">
          <span>-</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Bank Account Number</span>
        </div>
        <div className="card__right__side">
          <span>-</span>
        </div>
      </div>
      <div className="flex card__content__area">
        <div className="card__left__side">
          <span>Bank Name</span>
        </div>
        <div className="card__right__side">
          <span>-</span>
        </div>
      </div>
      <div className="flex card__content__last">
        <div className="card__left__side">
          <span>IFSC Code</span>
        </div>
        <div className="card__right__side">
          <span>-</span>
        </div>
      </div>
    </div>
  );
};

export default MiscellaneousInfo;
