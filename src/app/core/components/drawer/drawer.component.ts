import { Component, Input, inject } from '@angular/core';

import { menuList } from '@core/constants/menu.constant';
import { MenuInterface } from '@core/models/menu.model';
import { UserProfileInterface } from '@core/models/user-profile.model';

import { MenuService } from '@core/services/menu.service';

@Component({
  selector: 'drawer-core',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  menuList = menuList;
  drawerElmId: string = 'drawer';

  @Input('userProfile')
  userProfile!: UserProfileInterface;

  constructor(private menuService: MenuService) {
    setTimeout(() => {
      menuService.getMenuList().subscribe((v) => {
        this.menuList = menuList.filter((f) =>
          v.menuList.find((x) => x.menuCode == f.menuCode || f.isHome)
        );
      });
    }, 100);
  }

  closeDrawer() {
    (<HTMLInputElement>document.getElementById(this.drawerElmId)).checked = !(<
      HTMLInputElement
    >document.getElementById(this.drawerElmId)).checked;
  }

  onChangeMenuEvent(menu: MenuInterface) {
    this.menuService.setMenuState(menu);
  }

  onLogout(logoutForm: any) {
    setTimeout(() => {
      sessionStorage.clear();
      logoutForm.submit();
    }, 600);
  }
}
