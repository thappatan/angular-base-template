import { Component } from '@angular/core';

import { UserProfileService } from './core/services/user-profile.service';
import { MenuService } from '@core/services/menu.service';

import { environment } from 'environments/environment';

import { MenuListInterface } from '@core/models/menu.model';
import { menuList } from '@core/constants/menu.constant';
import { UserProfileInterface } from '@core/models/user-profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userData!: UserProfileInterface;

  constructor(
    protected userProfileService: UserProfileService,
    protected menuService: MenuService
  ) {
    console.info('Version :', environment.APP_VERSION);

    const menuListDefault: MenuListInterface = { menuList: menuList };
    const userProfileMock: UserProfileInterface = {
      username: 'example',
      firstname: 'Example',
      lastname: 'Example',
      email: 'email@mail.com',
      profileUrl: '/assets/images/man.png',
    };

    menuService.setMenuList(menuListDefault);
    userProfileService.setUserProfile(userProfileMock);
  }
}
