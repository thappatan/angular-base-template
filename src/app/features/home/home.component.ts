import { Component } from '@angular/core';

@Component({
  selector: 'home-feature',
  template: `
    <base-layout>
      <router-outlet></router-outlet>
    </base-layout>
  `,
})
export class HomeComponent {}
