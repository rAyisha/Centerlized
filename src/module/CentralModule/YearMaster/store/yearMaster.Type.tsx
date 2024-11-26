export interface YearMasterData {
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
export interface InitialState {
  isLoading: boolean;
  error: string;
  yearMasterTableData: [];
  getyearTypeData:[],
  postDatat:{}
}
