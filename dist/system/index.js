System.register(["aurelia-framework"], function (exports_1, context_1) {
    var __moduleName = context_1 && context_1.id;
    function configure(config) {
        config
            .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/binding-behaviours/index'))
            .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/components/index'))
            .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/custom-attributes/index'))
            .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/services/index'))
            .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/value-converters/index'));
    }
    exports_1("configure", configure);
    var aurelia_framework_1;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
        }
    };
});