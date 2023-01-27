import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { HomeRoutingModule, COMPONENTS } from './home-routing.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    CoreModule,
    HomeRoutingModule,
  ],
  declarations: [...COMPONENTS],
})
export class HomeModule {}
