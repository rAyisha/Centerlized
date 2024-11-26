import { useState } from "preact/hooks";
import { Checkbox } from "primereact/checkbox";

import "./index.scss";
import { EdvanceFormData } from "./mock";
import Button from "../../../../../components/Button";
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

const EdvanceTemplateForm = () => {
  const [permissionData, setPermissionData] =
    useState<Module[]>(EdvanceFormData);

  // Handle row-wise select all for each item
  const handleSelectAllForItem = (moduleIndex: number, itemIndex: number) => {
    const updatedData = [...permissionData];
    const item = updatedData[moduleIndex].permissions[itemIndex];
    const allSelected = Object.values(item.actions).every((val) => val);
    const newValue = !allSelected;

    // Update all actions for the row
    for (let action in item.actions) {
      item.actions[action as keyof Permission] = newValue;
    }

    setPermissionData(updatedData);
  };

  // Handle column-wise select all (e.g., for all "Add" permissions)
  const handleSelectAllAccessByColumn = (
    moduleIndex: number,
    action: keyof Permission
  ) => {
    const updatedData = [...permissionData];
    const module = updatedData[moduleIndex];

    // Toggle all values for the column
    const allSelected = module.permissions.every(
      (permission) => permission.actions[action]
    );
    const newValue = !allSelected;

    module.permissions.forEach((permission) => {
      permission.actions[action] = newValue;
    });

    setPermissionData(updatedData);
  };

  // Handle individual checkbox change
  const handleCheck = (
    moduleIndex: number,
    itemIndex: number,
    action: keyof Permission
  ) => {
    const updatedData = [...permissionData];
    updatedData[moduleIndex].permissions[itemIndex].actions[action] =
      !updatedData[moduleIndex].permissions[itemIndex].actions[action];
    setPermissionData(updatedData);
  };

  // Handle enabling all for the entire module
  const handleEnableAll = (moduleIndex: number) => {
    const updatedData = [...permissionData];
    const enableAllValue = !updatedData[moduleIndex].enableAll;

    updatedData[moduleIndex].enableAll = enableAllValue;
    updatedData[moduleIndex].permissions.forEach((permission) => {
      for (let action in permission.actions) {
        permission.actions[action as keyof Permission] = enableAllValue;
      }
    });
    setPermissionData(updatedData);
  };

  // Column header with "Select All" for each action
  const renderHeader = (moduleIndex: number) => (
    <tr>
      <th></th>
      {["Add", "Edit", "View", "Delete", "Import", "Download"].map((action) => (
        <th key={action}>
          <div className="flex gap-2">
            {action}
            <Checkbox
              checked={permissionData[moduleIndex].permissions.every(
                (permission) =>
                  permission.actions[action.toLowerCase() as keyof Permission]
              )}
              onChange={() =>
                handleSelectAllAccessByColumn(
                  moduleIndex,
                  action.toLowerCase() as keyof Permission
                )
              }
            />
          </div>
        </th>
      ))}
    </tr>
  );

  // Render rows for permissions
  const renderRows = (module: Module, moduleIndex: number) => {
    return module.permissions.map((permissionItem, itemIndex) => (
      <tr key={permissionItem.item} className="table__row">
        <td>
          <div className="flex gap-2">
            <Checkbox
              checked={Object.values(permissionItem.actions).every(
                (val) => val
              )}
              onChange={() => handleSelectAllForItem(moduleIndex, itemIndex)}
            />
            {permissionItem.item}
          </div>
        </td>
        {Object.keys(permissionItem.actions).map((action) => (
          <td key={action}>
            {/* <Checkbox
              checked={permissionItem.actions[action as keyof Permission]}
              onChange={() =>
                handleCheck(moduleIndex, itemIndex, action as keyof Permission)
              }
            /> */}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="primary__template__form">
      {permissionData.map((module, moduleIndex) => (
        <div className="module-container" key={module.module}>
          <div className="module__header">
            {module.module}
            <div className="flex gap-2">
              <Checkbox
                checked={module.enableAll}
                onChange={() => handleEnableAll(moduleIndex)}
                style={{ marginLeft: "10px" }}
              />
              Enable All
            </div>
          </div>

          <table className="table__main">
            <thead className="table__header">{renderHeader(moduleIndex)}</thead>
            <tbody>{renderRows(module, moduleIndex)}</tbody>
          </table>
        </div>
      ))}
      <div className="button__container flex justify-content-center">
        <Button label="Submit" onClick={() => {}} />
      </div>
    </div>
  );
};

export default EdvanceTemplateForm;
