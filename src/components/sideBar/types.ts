export interface SubSubMenu {
  id:number
  name: string;
  route: string;
}

export interface SubMenu {
  route?: string;
  id?:number
  name?: string;
  subsubmenus?: SubSubMenu[];
  status?:boolean
}

export interface Menu {
  route?: string;
  id?:number
  name?: string;
  submenus?: SubMenu[];
  status?:boolean
}