import { Component } from '@angular/core';
import { ModalOptionInterface } from '@core/models/modal.model';

import { ModalService } from '../../services/modal.service';


@Component({
  selector: 'core-modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  modalState: boolean = false;

  defaultOptionModal: ModalOptionInterface = {
    okButton: {
      title: "Ok",
    },
  }

  constructor(private modalService: ModalService) {
    this.modalState = false;
    modalService.isShowModalChange.subscribe((value) => {
      if(value.state === 'open') this.modalState = true;
      else this.modalState = false;
      this.defaultOptionModal = value.option;
    });
  }

  onOkClick() {
    this.modalService.closeModal();
  }
}
