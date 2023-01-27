import { ModalOptionInterface } from "@core/models/modal.model"

export const baseModalOption: ModalOptionInterface = {
  okButton: {
    title: "Ok",
  },
}

export const successModalOption: ModalOptionInterface = {
  icon: 'popup-success-icon',
  iconClass: 'w-28 h-28 text-success',
  title: '',
  titleClass: 'text-center text-2xl',
  okButton: {
    class: 'btn-primary w-32 text-xl normal-case rounded-full shadow-md',
    title: 'Done',
  },
}

export const errorModalOption: ModalOptionInterface = {
  icon: 'popup-error-icon',
  iconClass: 'w-28 h-28 text-error',
  title: '',
  titleClass: 'text-center text-xl',
  detail: '',
  detailClass: 'text-base text-center',
  okButton: {
    class: 'btn-primary w-32 text-xl normal-case rounded-full shadow-md',
    title: 'OK',
  },
}

