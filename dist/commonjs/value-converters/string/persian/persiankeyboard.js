var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var p = require('persianjs');
var PersianKeyboardValueConverter = (function () {
    function PersianKeyboardValueConverter() {
    }
    PersianKeyboardValueConverter.prototype.toView = function (text) {
        var len = text.toString().length;
        if (len === 0) {
            return '';
        }
        else {
            return p.persianJs(text).switchKey().toString();
        }
    };
    PersianKeyboardValueConverter = __decorate([
        aurelia_framework_1.valueConverter('persiankeyboard')
    ], PersianKeyboardValueConverter);
    return PersianKeyboardValueConverter;
}());
exports.PersianKeyboardValueConverter = PersianKeyboardValueConverter;