export interface MenuInterface {
  title?: string;
  icon?: string;
  link?: string[];
  active?: string[];
  activeOptions?: { exact: boolean };
  childrens?: MenuInterface[];
  disabled?: boolean;
  isHome?: boolean;
  menuId?: number;
  menuCode?: string;
  menuDisplay?: string;
  actionPermission?: string[];
}

export interface MenuListInterface {
  menuList: MenuInterface[];
}
