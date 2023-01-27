import { TemplateRef } from "@angular/core";

export interface ModalOptionInterface {
  icon?: string,
  iconClass?: string,
  title?: string,
  titleClass?: string;
  contentClass?: string,
  detail?: string,
  detailClass?: string,
  okButton?: {
    class?: string,
    title: string,
  },
  useCustomContent?: boolean,
  customContent?: TemplateRef<any>
}
