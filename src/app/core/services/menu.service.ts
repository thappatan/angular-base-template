import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { MenuInterface, MenuListInterface } from '@core/models/menu.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuState!: MenuInterface;
  menuStateChange: Subject<MenuInterface> = new Subject<MenuInterface>();

  menuList: BehaviorSubject<MenuListInterface>;

  constructor() {
    this.menuStateChange.subscribe((value) => {
      this.menuState = value;
    });

    this.menuList = new BehaviorSubject<MenuListInterface>({} as MenuListInterface);
  }

  getMenuState(): Observable<MenuInterface> {
    return this.menuStateChange.asObservable();
  }

  setMenuState(value: MenuInterface) {
    this.menuStateChange.next(value);
  }

  getMenuList(): Observable<MenuListInterface> {
    return this.menuList.asObservable();
  }

  setMenuList(value: MenuListInterface){
    this.menuList.next(value);
  }

  getActionMenuList(){
    return this.menuList.value.menuList;
  }
}
