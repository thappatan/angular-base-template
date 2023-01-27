import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  mapQueryParams(value: any) {
    let queryParams: any = {};

    Object.keys(value).forEach((v) => {
      queryParams[v] = value[v];
    });

    return queryParams;
  }

  setQueryParams(params: any) {
    const url = new URL(window.location.href);
    Object.keys(params).forEach(k => {
      url.searchParams.set(k, params[k]);
    })
    window.history.pushState({ path: url.href }, '', url.href);
  }

  getAllQueryParams() : Observable<Params>{
    return this.route.queryParams;
  }

  getRouterEvents(){
    return this.router.events;
  }

  get routerModule(){
    return this.router
  }
}
