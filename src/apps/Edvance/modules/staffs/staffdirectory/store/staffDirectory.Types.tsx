export interface StaffDirectoryState {
    loading: boolean;
    error: string;
    staffs: any[];
    contracts: any;
    maritalStatus: any;
    roles: any;
    departmentdropdown:any;
    page: number;
    limit: number;
    stafftypedropdown:any;
    designationdropdown:any;
    staffListdata:any
}

export interface StaffFormFields {
    staffID: string,
    staffType: string,
    role: string,
    designation: string,
    department: string,
    firstname: string,
    lastname: string,
    fathername: string,
    mothername: string,
    gender: string,
    email: string,
    dob: Date | undefined,
    doj: Date | undefined,
    phone: string,
    emergencyContactNumber: string,
    maritalStatus: string,
    adharNumber: string,
    panNumber: string,
    currentcountry: string,
    currentstate: string,
    currentcity: string,
    currentAddressline1: string,
    currentAddressline2: string,
    currentPincode: string,
    permanentcountry: string,
    permanentstate: string,
    permanentcity: string,
    permanentAddressline1: string,
    permanentAddressline2: string,
    permanentPincode: string,
    Qualification: string,
    WorkExperience: string,
    note: string,
    epfNo: string,
    basicSalary: string,
    contractType: string,
    workShift: string,
    bankTitle: string,
    bankAccountNo: string,
    bankName: string,
    ifscCode: string,
    bankBranchName: string,
    file: string,
    resumefile: string,
    joiningletterfile: string,
    resignationletterfile: string,
    otherDocuments: string,
    qualifications:
    { collegeName: string, passedOutYear: string, stream: string }[],
    experiences:
    { schoolName: string, years: string, position: string, ctc: string }[],

};