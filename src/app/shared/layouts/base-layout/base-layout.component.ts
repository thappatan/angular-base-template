import { Component } from '@angular/core';

import { UserProfileService } from '@core/services/user-profile.service';

import { UserProfileInterface } from '@core/models/user-profile.model';

@Component({
  selector: 'base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent {
  userProfile!: UserProfileInterface;

  constructor(userProfileService: UserProfileService) {
    userProfileService.getUserProfile().subscribe((profile) => {
      this.userProfile = profile;
    });
  }
}
