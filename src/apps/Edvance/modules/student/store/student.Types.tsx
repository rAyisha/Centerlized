export interface SiblingData {
  name: string;
  id: number | null;
}
export interface StudentFormData {
  id?: number | null;
  sessionId?: number | null;
  admissionNumber?: number | null;
  rollNumber?: string;
  studentPhoto?: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  caste: string;
  email: string;
  mobileNumber: string;
  admissionDate: string;
  height: string;
  weight: string;
  medicalHistory: string;
  primary?: string;
  fatherName?: string;
  fatherEmail?: string;
  fatherPhone?: string;
  fatherOccupation?: string;
  fatherProfile?: string;
  motherName?: string;
  motherEmail?: string;
  motherPhone?: string;
  motherOccupation?: string;
  motherProfile?: string;
  guardianName?: string;
  guardianRelation?: string;
  guardianEmail?: string;
  guardianPhone?: string;
  guardianOccupation?: string;
  guardianProfile?: string;
  disableDate?: Date | null;
  siblingIds: number[];
  currentAddress: {
    countryId: number | null;
    stateId: number | null;
    cityId: number | null;
    line1: string;
    line2: string;
    pincode: string;
  };
  permanentAddress: {
    countryId: number | null;
    stateId: number | null;
    cityId: number | null;
    line1: string;
    line2: string;
    pincode: string;
  };
  previousSchoolDetails:
  {
    name: string;
    year: string;
    location: string
  }[]
  ;
  documentDetails:
  {
    typeId: number;
    name: string;
    url: string
  }[]
  ;
  classId: number | null;
  sectionId: number | null;
  schoolDivisionId: number | null;
  genderId: number | null;
  religionId: number | null;
  categoryId: number | null;
  houseId: number | null;
  bloodGroupId: number | null;
}

export interface StudentState {
  loading: boolean;
  error: string;
  showInactiveStudents: boolean;
  classDropdownData: any[];
  sectionDropdownData: any[];
  schoolDivisionDropdownData: any[];
  genderDropdownData: any[];
  religionDropdownData: any[];
  categoryDropdownData: any[];
  houseDropdownData: any[];
  bloodGroupDropdownData: any[];
  disableReasonsData: any[];
  studentData: {
    studentList: any[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number
    }
  };
  page: number;
  limit: number;
}
