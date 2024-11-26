import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import "./index.scss"
import Options from "../DropDown";
const MobileDropDown = () => {
  const handleDropdownClick = (e: any) => {
    e.stopPropagation();
  };
  const items: MenuItem[] = [
    {
      label: "Select",
      icon: "pi pi-search",
      items: [
        {
        
          label: "Select",
          template: () => (
            <div onClick={handleDropdownClick}>
              <Options />
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div className="mobile__options">
      <Menubar model={items} />
    </div>
  );
};

export default MobileDropDown;
