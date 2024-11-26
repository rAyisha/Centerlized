import { ScreenTranslations } from "./LanguageType";

export const LangInitialState: ScreenTranslations = {
  LOGIN_SCREEN: {
    HEADER_TEXT: {
      MAIN: "Welcome to the App",
      SUBTEXT: "Please login to continue",
      LOGINTITLE: "Log into your account",
      SIGNUPTITLE: "Create an account"
    },
    FIELDS: {
      USERNAME: {
        LABEL: "Username",
        PLACEHOLDER: "Enter your username"
      },
      EMAIL: {
        LABEL: "Email",
        PLACEHOLDER: "Enter your email"
      },
      PASSWORD: {
        LABEL: "Password",
        PLACEHOLDER: "Enter your password"
      }
    },
    BUTTONS: {
      LOGIN: "Login",
      FORGOT_PASSWORD: "Forgot your password?",
      SIGNUP: "Sign up here",
      NEW_USER: "Not Registered? Create an account",
      EXIT_USER: "Have an account? Login Here"
    }
  },
  COMPANY_REGISTRATION: {
    HEADER_TEXT: {
      MAIN: "Company Registration",
      SUBTEXT: "Please fill in the details below to register your company."
    },
    FIELDS: {
      COMPANY_CODE: {
        LABEL: "Company Code",
        PLACEHOLDER: "Enter Company Code"
      },
      COMPANY_NAME: {
        LABEL: "Company Name",
        PLACEHOLDER: "Enter Company Name"
      },
      DISPLAY_NAME: {
        LABEL: "Display Name",
        PLACEHOLDER: "Enter Display Name"
      },
      REGISTRATION_NUMBER: {
        LABEL: "Registration Number",
        PLACEHOLDER: "Enter Registration Number"
      },
      TAX_IDENTIFICATION_NUMBER: {
        LABEL: "Tax Identification Number",
        PLACEHOLDER: "Enter Tax ID Number"
      },
      GSTIN: {
        LABEL: "GSTIN",
        PLACEHOLDER: "Enter GSTIN"
      },
      INCORPORATION_DATE: {
        LABEL: "Incorporation Date",
        PLACEHOLDER: "Select Incorporation Date"
      },
      CITY: {
        LABEL: "City",
        PLACEHOLDER: "Select City"
      },
      STATE: {
        LABEL: "State",
        PLACEHOLDER: "Select State"
      },
      COUNTRY: {
        LABEL: "Country",
        PLACEHOLDER: "Select Country"
      },
      CORPORATE_EMAIL: {
        LABEL: "Corporate Email Address",
        PLACEHOLDER: "Enter Corporate Email"
      },
      PHONE_NUMBER: {
        LABEL: "Phone Number",
        PLACEHOLDER: "Enter Phone Number"
      },
      WEBSITE_URL: {
        LABEL: "Website URL",
        PLACEHOLDER: "Enter Website URL"
      },
      LEGAL_ENTITY_TYPE: {
        LABEL: "Legal Entity Type",
        PLACEHOLDER: "Select Legal Entity Type"
      },
      INDUSTRY: {
        LABEL: "Industry",
        PLACEHOLDER: "Select the type of industry your company operates in"
      },
      PARENT_COMPANY: {
        LABEL: "Parent Company",
        PLACEHOLDER: "Enter the name of the parent company, if applicable"
      },
      PAN: {
        LABEL: "PAN",
        PLACEHOLDER: "Enter your Permanent Account Number (PAN)"
      },
      FAX_NUMBER: {
        LABEL: "Fax Number",
        PLACEHOLDER: "Enter your company's fax number, if available"
      },
      CIN: {
        LABEL: "CIN",
        PLACEHOLDER: "Enter your Corporate Identity Number (CIN)"
      },
      REGISTERED_ADDRESS: {
        LABEL: "Registered Address",
        PLACEHOLDER: "Enter the official registered address of your company"
      }
    }
  },
  BRANCH_REGISTRATION: {
    HEADER_TEXT: {
      MAIN: "Branch Registration",
      SUBTEXT: "Please fill in the details below to register your branch."
    },
    FIELDS: {
      PARENT_COMPANY: {
        LABEL: "Parent Company",
        PLACEHOLDER: "Select Parent Company"
      },
      BRANCH_CODE: {
        LABEL: "Branch Code",
        PLACEHOLDER: "Enter Branch Code"
      },
      BRANCH_NAME: {
        LABEL: "Branch Name",
        PLACEHOLDER: "Enter Branch Name"
      },
      BRANCH_HEAD: {
        LABEL: "Branch Head/Manager",
        PLACEHOLDER: "Enter Branch Head"
      },
      CONTACT_EMAIL: {
        LABEL: "Contact Email",
        PLACEHOLDER: "Enter Contact Email"
      },
      CONTACT_PHONE: {
        LABEL: "Contact Phone Number",
        PLACEHOLDER: "Enter Contact Phone Number"
      },
      BRANCH_TYPE: {
        LABEL: "Branch Type",
        PLACEHOLDER: "Select Branch Type"
      },
      DATE_ESTABLISHED: {
        LABEL: "Date Established",
        PLACEHOLDER: "Select Date Established"
      },
      BRANCH_ADDRESS: {
        LABEL: "Branch Address",
        PLACEHOLDER: "Enter Branch Address"
      },
      CITY: {
        LABEL: "City",
        PLACEHOLDER: "Select City"
      },
      STATE: {
        LABEL: "State",
        PLACEHOLDER: "Select State"
      },
      COUNTRY: {
        LABEL: "Country",
        PLACEHOLDER: "Select Country"
      },
      FINANCIAL_YEAR_END: {
        LABEL: "Financial Year End",
        PLACEHOLDER: "Select Financial Year End"
      },
      FAX_NUMBER: {
        LABEL: "Fax Number",
        PLACEHOLDER: "Enter Fax Number"
      },
      YEAR_TYPE: {
        LABEL: "Year Type",
        PLACEHOLDER: "Enter the year and type"
      }
    }
  },
  USER_REGISTRATION_ACCESS: {
    HEADER_TEXT: {
      MAIN: "User Access Registration",
      SUBTEXT: "Please fill in the details below to register the user."
    },
    FIELDS: {
      FIRST_NAME: {
        LABEL: "First Name",
        PLACEHOLDER: "Enter First Name"
      },
      MIDDLE_NAME: {
        LABEL: "Middle Name",
        PLACEHOLDER: "Enter Middle Name"
      },
      LAST_NAME: {
        LABEL: "Last Name",
        PLACEHOLDER: "Enter Last Name"
      },
      COMPANY: {
        LABEL: "Company",
        PLACEHOLDER: "Select Company"
      },
      PERSONAL_EMAIL: {
        LABEL: "Personal Email",
        PLACEHOLDER: "Enter Personal Email"
      },
      PHONE_NUMBER: {
        LABEL: "Phone Number",
        PLACEHOLDER: "Enter Phone Number"
      },
      DATE_OF_BIRTH: {
        LABEL: "Date of Birth",
        PLACEHOLDER: "Select Date of Birth"
      },
      WORK_EMAIL: {
        LABEL: "Work Email",
        PLACEHOLDER: "Enter Work Email"
      },
      GENDER: {
        LABEL: "Gender",
        PLACEHOLDER: "Select Gender"
      },
      BLOOD_GROUP: {
        LABEL: "Blood Group",
        PLACEHOLDER: "Select Blood Group"
      },
      FATHER_NAME: {
        LABEL: "Father's Name",
        PLACEHOLDER: "Enter Father's Name"
      },
      MOTHER_NAME: {
        LABEL: "Mother's Name",
        PLACEHOLDER: "Enter Mother's Name"
      },
      MARITAL_STATUS: {
        LABEL: "Marital Status",
        PLACEHOLDER: "Select Marital Status"
      },
      SPOUSE_NAME: {
        LABEL: "Spouse's Name",
        PLACEHOLDER: "Enter Spouse's Name"
      },
      DEPARTMENT: {
        LABEL: "Department",
        PLACEHOLDER: "Select Department"
      },
      DESIGNATION: {
        LABEL: "Designation",
        PLACEHOLDER: "Select Designation"
      },
      REPORT_TO: {
        LABEL: "Report To",
        PLACEHOLDER: "Select Supervisor/Manager"
      },
      ACCESS_PARAMETERS: {
        HEADER: "Access Parameters"
      },
      GENERATE_LOGIN_CREDENTIALS: {
        LABEL: "Generate Login Credentials"
      },
      BASE_BRANCH: {
        LABEL: "Base Branch",
        PLACEHOLDER: "Select Base Branch"
      }
    }
  },
  YEAR_TYPE: {
    HEADER_TEXT: {
      MAIN: "Year Registration"
    },
    FIELDS: {
      YEAR_TYPE: {
        LABEL: "Year Type",
        PLACEHOLDER: "Select Year Type"
      },
      START_DATE: {
        LABEL: "Start Date",
        PLACEHOLDER: "Select Start Date"
      },
      END_DATE: {
        LABEL: "End Date",
        PLACEHOLDER: "Select End Date"
      }
    }
  },
  DYNAMIC_MASTER_FORM: {
    HEADER_TEXT: {
      MAIN: "Master Registration"
    },
    FIELDS: {
      MASTER_NAME: {
        LABEL: "Master Name",
        PLACEHOLDER: "Enter Master Name"
      },
      ASSOCIATED_MASTER_NAME: {
        LABEL: "Associated Master Name",
        PLACEHOLDER: "Enter Associated Master Name"
      },
      VALUE: {
        LABEL: "Value",
        PLACEHOLDER: "Enter Value"
      },
      ASSOCIATED_MASTER_VALUE: {
        LABEL: "Associated Master Value",
        PLACEHOLDER: "Enter Associated Master Value"
      }
    }
  },
  BUTTONS: {
    LOGIN: "Login",
    FORGOT_PASSWORD: "Forgot your password?",
    SIGNUP: "Sign up here",
    NEW_USER: "Not Registered? Create an account",
    EXIT_USER: "Have an account? Login Here",
    SUBMIT: "Submit",
    UPDATE: "Update",
    BACK: "Back"
  }
}