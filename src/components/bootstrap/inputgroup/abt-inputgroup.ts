import { customElement, inject, bindable, bindingMode, BindingEngine, containerless } from 'aurelia-framework';

@containerless()
@inject(Element)
@customElement('abt-inputgroup')
export class BootstrapInputGroupCustomElement {
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public class: string = '';
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public style: string = '';
}
