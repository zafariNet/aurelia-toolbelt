import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';


@autoinject
export class Page1 {

    public title: string;

    public rate:numder = 3;

    constructor(public router: Router) {
        // todo
    }

    public canActivate(a, b, c) {
        this.title = b.title;
    }

}
