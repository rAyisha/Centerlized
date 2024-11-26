export interface Country {
    id: number;
    companyId: number | null;
    branchId: number | null;
    yearId: number | null;
    ipAddress: string | null;
    phoneCode: number;
    alpha2Code: string;
    alpha3Code: string;
    name: string;
    nationality: string;
    createdOn: string; 
    updatedOn: string | null; 
    createdBy: string | null;
    updatedBy: string | null;
    isDeleted: boolean;
    deletedOn: string | null; 
    deletedBy: string | null;
}

export interface States {
    id: number;                   
    name: string;                 
    ipAddress: string;            
    createdOn: string;            
    updatedOn: string | null;     
    createdBy: number;            
    updatedBy: number | null;     
    isDeleted: boolean;           
    deletedBy: number | null;     
    deletedOn: string | null;     
    countryId: number;            
}


export interface City {
    id: number;                   
    stateId: number;              
    name: string;                 
    ipAddress: string;            
    createdOn: string;            
    updatedOn: string | null;     
    createdBy: number;            
    updatedBy: number | null;     
    isDeleted: boolean;           
    deletedBy: number | null;     
    deletedOn: string | null;     
}

interface Year {
    id: number;
    name: string;
    startDate: number;
    startMonth: number;
    startYear: number;
    endDate: number;
    endMonth: number;
    endYear: number;
    ipAddress: string;
    isDeleted: boolean;
    createdOn: string; 
    createdBy: number;
    updatedOn: string | null; 
    updatedBy: number | null; 
    deletedOn: string | null; 
    deletedBy: number | null; 
}


export interface CommonState {
    isLoading: boolean;
    error: string;
    country: Country | [];
    states : States | [];
    citys : City | [];
    yeartype: Year |[];
}
