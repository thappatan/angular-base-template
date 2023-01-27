import { Component } from '@angular/core';

import { menuList } from '@core/constants/menu.constant';
import { MenuService } from '@core/services/menu.service';
@Component({
  selector: 'dmi-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  menuList = menuList;

  constructor(protected menuService: MenuService) {
    setTimeout(() => {
      menuService.getMenuList().subscribe((v) => {
        this.menuList = menuList.filter((f) =>
          v.menuList.find((x) => x.menuCode == f.menuCode)
        );
      });
    }, 100);
  }
}
