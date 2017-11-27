
import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';


export * from './elements/pretty-checkbox';
export * from './elements/pretty-radio';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./elements/pretty-checkbox'),
    PLATFORM.moduleName('./elements/pretty-radio')
  ]);
}