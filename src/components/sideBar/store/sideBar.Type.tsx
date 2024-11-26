export interface sideBarType {
  isLoading: boolean;
  error: string;
  sideBarList: any;
  moduleAccess: {
    create: boolean,
    view: boolean,
    update: boolean,
    delete: boolean,
    import: boolean,
    export: boolean,
  }
}
