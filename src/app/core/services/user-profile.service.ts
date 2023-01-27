import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { UserProfileInterface } from '@core/models/user-profile.model';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  userProfile!: BehaviorSubject<UserProfileInterface>;

  constructor() {
    this.userProfile = new BehaviorSubject<UserProfileInterface>({
      username: '',
      email: '',
      firstname: '',
      lastname: '',
      profileUrl: ''
    });
  }

  setUserProfile(userProfile: UserProfileInterface) {
    this.userProfile.next(userProfile);
  }

  getUserProfile(): Observable<UserProfileInterface> {
    return this.userProfile.asObservable();
  }
}
