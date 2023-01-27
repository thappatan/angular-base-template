import { Component, Input } from '@angular/core';
import { iconsPack, IconPackModel } from './icon.pack';

@Component({
  selector: 'icon-core',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent {
  @Input('name') name: string = '';
  @Input('class') class: string = '';

  iconsPack: IconPackModel[] = iconsPack;
}
