import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Action } from './card-content.interface';
@Component({
  selector: 'card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss'],
})
export class CardContentComponent {
  @Input('actions') action: Action = {
    showAction: false,
    customActions: false,
    submitButton: {
      title: 'OK',
    },
    cancelButton: {
      title: 'Cancel',
    },
  };
  @Output('onSubmit') submit = new EventEmitter();
  @Output('onCancel') cancel = new EventEmitter();

  onSubmit() {
    this.submit.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
