import React, { useContext } from 'react'
import InputField from '../../../../components/InputField'
import { useLocation } from 'react-router-dom';
import LanguageContext from '../../../../config/LanguageContext';

const MasterViewFields = () => {
  const location = useLocation();
  const { masterName, associationName } = location.state || {};
  const { translations } = useContext(LanguageContext);
  return (
    <div className={"grid"}>
      <div className="col-12 md:col-6 lg:col-4">
        <InputField
          label={translations?.DYNAMIC_MASTER_FORM?.FIELDS?.MASTER_NAME?.LABEL || "Master Name"}
          name="branchCode"
          placeholder={translations?.DYNAMIC_MASTER_FORM?.FIELDS?.MASTER_NAME?.PLACEHOLDER || "Enter"}
          disabled
          value={masterName || ""}
        />
      </div>
      <div className="col-12 md:col-6 lg:col-4">
        <InputField
          label={translations?.DYNAMIC_MASTER_FORM?.FIELDS?.ASSOCIATED_MASTER_NAME?.LABEL || "Associated Master Name"}
          name="branchCode"
          placeholder={translations?.DYNAMIC_MASTER_FORM?.FIELDS?.ASSOCIATED_MASTER_NAME?.PLACEHOLDER || "Enter"}
          disabled
          value={associationName || ""}
        />
      </div>
    </div>
  )
}

export default MasterViewFields