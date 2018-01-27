import { customElement, inject, bindable, bindingMode, BindingEngine, containerless } from 'aurelia-framework';

@customElement('abt-inputgroup-prepend')
export class BootstrapInputGroupPrependCustomElement {
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public class: string = '';
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public style: string = '';
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public id: string;

}
