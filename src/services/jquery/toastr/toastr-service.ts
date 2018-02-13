
import * as toastr from 'toastr';
import { viewResources, noView } from 'aurelia-templating';
import { singleton, inject } from 'aurelia-dependency-injection';
import { PLATFORM } from 'aurelia-pal';
// import 'toastr/build/toastr.css';

@singleton()
@inject(toastr)
@noView([PLATFORM.moduleName('toastr/build/toastr.css')])
@viewResources('toastr/build/toastr.css')
export class ToastrService {
  constructor(private tr: Toastr) {
  }
  public success(message: string, title?: string, overrides?: ToastrOptions) {
    let settings = null;
    if (overrides) {
      settings = Object.assign(overrides);
    }
    this.tr.success(message, title, settings || overrides);
  }
  public error(message: string, title?: string, overrides?: ToastrOptions) {
    let settings = null;
    if (overrides) {
      settings = Object.assign(overrides);
    }
    this.tr.error(message, title, settings || overrides);
  }
  public info(message: string, title?: string, overrides?: ToastrOptions) {
    let settings = null;
    if (overrides) {
      settings = Object.assign(overrides);
    }
    this.tr.info(message, title, settings || overrides);
  }
  public warning(message: string, title?: string, overrides?: ToastrOptions) {
    let settings = null;
    if (overrides) {
      settings = Object.assign(overrides);
    }
    this.tr.warning(message, title, settings || overrides);
  }

  public clear(toast?: JQuery, clearOptions?: { force: boolean }) {
    this.tr.clear(toast, clearOptions);
  }

  public remove() {
    this.tr.remove();
  }

  public subscribe(callback: (response: ToastrResponse) => any): void {
    this.tr.subscribe(callback);
  }
}
