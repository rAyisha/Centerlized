export interface Company {
    id: number;
    code: string;
    name: string;
    tin: string;
    gstin: string;
    incorporationDate: string;
    registeredAddress: string;
    email: string;
    phoneNumber: string;
    websiteURL: string;
    websiteLogo: string;
    parentCompany: string | null; 
    pan: string;
    faxNo: string | null; 
    cin: string;
    ipAddress: string | null; 
    createdOn: string; 
    updatedOn: string; 
    createdBy: number | null; 
    updatedBy: number;
    isDeleted: boolean;
    deletedBy: number | null; 
    deletedOn: string | null; 
    legalEntityTypeId: number;
    industryTypeId: number;
    countryId: number;
    stateId: number;
    cityId: number;
    registrationNumber: string;
    displayName: string;
}

export interface Companypost {
    code: string;                          
    name: string;                          
    registrationNumber: string;            
    tin: string;                           
    gstin: string;                         
    incorporationDate: string;             
    registeredAddress: string;             
    email: string;                         
    phoneNumber: string;                   
    websiteURL: string;                    
    websiteLogo: string;                   
    parentCompany: string | null;          
    pan: string;                           
    faxNo: string | null;                  
    cin: string;                           
    legalEntityTypeId: number | null;      
    industryTypeId: number | null;         
    countryId: number;                     
    stateId: number;                       
    cityId: number;                        
    createdBy: number;                     
}


export interface CompanyState {
    isLoading: boolean;
    error: string;
    company: Company[]; 
    legalentity: any[];
    industry: any[];
    postCompany: Companypost | null; 
    getcompanybyid: Company | null; 
    patchcompany: Companypost | null; 
    deletecompany:[]
}
