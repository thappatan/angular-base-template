import { MenuInterface } from '@core/models/menu.model';

export const menuList: MenuInterface[] = [
  {
    title: 'Home',
    icon: 'home',
    link: ['/home', 'home-page'],
    active: ['active'],
    isHome: true
  },
];
