import { Component, Input } from '@angular/core';

import { UserProfileInterface } from '@core/models/user-profile.model';

@Component({
  selector: 'navbar-core',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input('userProfile') userProfile!: UserProfileInterface;
}
