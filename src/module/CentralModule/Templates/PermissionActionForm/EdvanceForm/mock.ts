interface Permission {
  ownData?: boolean;
  teamData?: boolean;
  overallData?: boolean;
  add?: boolean;
  edit?: boolean;
  view?: boolean;
  delete?: boolean;
  import?: boolean;
  download?: boolean;
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

export const EdvanceFormData: Module[] = [
  {
    module: "Dashboards",
    enableAll: false,
    permissions: [
      {
        item: "Staff Attendance",
        actions: { ownData: false, teamData: false, overallData: false },
      },
      {
        item: "Student Attendance",
        actions: { ownData: false, teamData: false, overallData: false },
      },
      {
        item: "Examinations",
        actions: { ownData: false, teamData: false, overallData: false },
      },
      {
        item: "Assessments",
        actions: { ownData: false, teamData: false, overallData: false },
      },
    ],
  },
  {
    module: "Attendance Module",
    enableAll: false,
    permissions: [
      {
        item: "Student",
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
        item: "Admission",
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
        item: "Student Category",
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
        item: "Student Religion",
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
    module: "Timesheet Module",
    enableAll: false,
    permissions: [
      {
        item: "Exam",
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
        item: "Exam Group",
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
        item: "Exam Result",
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
        item: "Marksheet",
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
