import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ModalOptionInterface } from '@core/models/modal.model';

import {
  baseModalOption,
  successModalOption,
  errorModalOption,
} from '@core/constants/modal.constant';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalState: 'open' | 'close' = 'open';
  isShowModalChange: Subject<{
    option: ModalOptionInterface;
    state: 'open' | 'close';
  }> = new Subject<{ option: ModalOptionInterface; state: 'open' | 'close' }>();
  modalOption: ModalOptionInterface = baseModalOption;

  constructor() {
    this.isShowModalChange.subscribe((value) => {
      this.modalState = value.state;
      this.modalOption = value.option;
    });
  }

  showModal(option?: ModalOptionInterface): Observable<{
    option: ModalOptionInterface;
    state: 'open' | 'close';
  }> {
    this.isShowModalChange.next({
      option: option || baseModalOption,
      state: 'open',
    });

    return this.isShowModalChange;
  }

  showSuccessModal(title: string): Observable<{
    option: ModalOptionInterface;
    state: 'open' | 'close';
  }> {
    let successOptionModal = successModalOption;
    successModalOption.title = title;

    this.isShowModalChange.next({
      option: successOptionModal,
      state: 'open',
    });

    return this.isShowModalChange;
  }

  showErrorModal(title: string, detail?: string): Observable<{
    option: ModalOptionInterface;
    state: 'open' | 'close';
  }> {
    let errorOptionModal = errorModalOption;
    errorOptionModal.title = title;
    errorOptionModal.detail = detail

    this.isShowModalChange.next({
      option: errorOptionModal,
      state: 'open',
    });

    return this.isShowModalChange;
  }

  closeModal(): Observable<{
    option: ModalOptionInterface;
    state: 'open' | 'close';
  }> {
    this.isShowModalChange.next({ option: baseModalOption, state: 'close' });
    return this.isShowModalChange;
  }
}
