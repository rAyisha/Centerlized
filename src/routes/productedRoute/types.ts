export interface SubSubMenu {
  id: number;
  name: string;
  route: string;
}

export interface SubMenu {
  id: number;
  name: string;
  subsubmenus?: SubSubMenu[];
  status: boolean
}

export interface Menu {
  id: number;
  name: string;
  submenus?: SubMenu[];
  status: boolean
}
