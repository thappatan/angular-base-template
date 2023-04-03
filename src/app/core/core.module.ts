import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { IconsComponent } from './components/icons/icons.component';
import { ModalComponent } from './components/modal/modal.component';

import { SafeHtmlPipe } from './pipes/safe-html.pipe';

import { RouterService } from './services/router.service';
import { ModalService } from './services/modal.service';

@NgModule({
  imports: [MatIconModule, MatButtonModule, CommonModule, RouterModule],
  declarations: [
    NavbarComponent,
    FooterComponent,
    DrawerComponent,
    IconsComponent,
    ModalComponent,
    SafeHtmlPipe,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    DrawerComponent,
    IconsComponent,
    ModalComponent,
    SafeHtmlPipe,
  ],
  providers: [RouterService, ModalService],
})
export class CoreModule {}
