import { containerless, customElement, bindable, bindingMode, inject } from 'aurelia-framework';
import { throws } from 'assert';


@inject(Element)
@containerless()
@customElement('abt-card-image')
export class BootstrapCardImage {

    @bindable({ defaultBindingMode: bindingMode.oneTime }) public alt: string;
    @bindable({ defaultBindingMode: bindingMode.oneTime }) public style: string;
    @bindable({ defaultBindingMode: bindingMode.oneTime }) public class: string;

    @bindable({ defaultBindingMode: bindingMode.oneWay }) public src: string;

    private cssClass: string = 'card-image';

    constructor(private element: Element) { }

    private attached() {

        let beOnBottom = this.element.hasAttribute('bottom');
        let beOnTop = this.element.hasAttribute('top');

        if (beOnBottom && beOnTop) {
            let error = new Error(`The [abt-card-image] should have either 'top' or 'bottom' attributes, and not both of them simultaneously.`);
            throw error;
        }

        this.cssClass = beOnBottom ? '-bottom' : beOnTop ? '-top' : '';

    }

}
