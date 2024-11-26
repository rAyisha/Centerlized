export interface StaffStateType {
    loading: boolean;
    error: string;
    staffData: {
        staffs: any[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        }
    };
    disabledStaffData: {
        staffs: any[];
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        }
    };
    departmentData: any[];
    designationData: any[];
    staffTypeData: any[];
    page: number;
    limit: number;
}