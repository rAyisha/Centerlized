interface Permission {
    add: boolean;
    edit: boolean;
    view: boolean;
    delete: boolean;
    import: boolean;
    download: boolean;
  }
  interface PermissionItem {
    item: string;
    actions: Permission;
  }
  
interface Module {
    module: string;
    enableAll: boolean;
    permissions: PermissionItem[];
  }
  
  export const initialPermissionData: Module[] = [
    {
      module: "User Module",
      enableAll: false,
      permissions: [
        {
          item: "User",
          actions: {
            add: false,
            edit: false,
            view: false,
            delete: false,
            import: false,
            download: false,
          },
        },
        {
          item: "Profile Customization",
          actions: {
            add: false,
            edit: false,
            view: false,
            delete: false,
            import: false,
            download: false,
          },
        },
        {
          item: "Permission Template",
          actions: {
            add: false,
            edit: false,
            view: false,
            delete: false,
            import: false,
            download: false,
          },
        },
        {
          item: "Approval Workflow",
          actions: {
            add: false,
            edit: false,
            view: false,
            delete: false,
            import: false,
            download: false,
          },
        },
      ],
    },
    {
      module: "Masters Module",
      enableAll: false,
      permissions: [
        {
          item: "Company Profile",
          actions: {
            add: false,
            edit: false,
            view: false,
            delete: false,
            import: false,
            download: false,
          },
        },
        {
          item: "Branch",
          actions: {
            add: false,
            edit: false,
            view: false,
            delete: false,
            import: false,
            download: false,
          },
        },
        {
          item: "Department",
          actions: {
            add: false,
            edit: false,
            view: false,
            delete: false,
            import: false,
            download: false,
          },
        },
        {
          item: "Division",
          actions: {
            add: false,
            edit: false,
            view: false,
            delete: false,
            import: false,
            download: false,
          },
        },
      ],
    },
  ];