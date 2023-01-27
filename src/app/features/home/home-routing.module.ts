import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";

export const COMPONENTS = [
  HomeComponent,
  HomePageComponent,
];

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home-page',
        component: HomePageComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home-page',
      },
    ]
  },
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule{
}
