export interface Action {
  showAction: boolean;
  customActions?: boolean;
  submitButton?: Button;
  cancelButton?: Button;
}

export interface Button {
  title: string;
  classes?: string;
  disable?: boolean;
}
