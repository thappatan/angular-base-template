import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@core/core.module';

import { MatIconModule } from '@angular/material/icon';

import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { CardContentComponent } from './components/card-content/card-content.component';

@NgModule({
  imports: [CoreModule, CommonModule, MatIconModule],
  declarations: [BaseLayoutComponent, CardContentComponent],
  exports: [BaseLayoutComponent, CardContentComponent],
})
export class SharedModule {}
