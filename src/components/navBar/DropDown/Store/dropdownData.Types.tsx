
export interface DropdownState {
  loading: boolean;
  error: string;
  companyID: string;
  branchID: string;
  yearID: string;
  sessionID: number;
}
export interface DropdownMainState {
  isLoading: boolean;
  error: string;
  companyOptions: any[];
  branchOptions: any[];
  yearOptions: any[];
}
