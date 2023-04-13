"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PopUpComponent = void 0;
var core_1 = require("@angular/core");
var PopUpComponent = /** @class */ (function () {
    function PopUpComponent(groupNameService, userService) {
        this.groupNameService = groupNameService;
        this.userService = userService;
        this.groupName = '';
        this.numOfMembers = 0;
        this.close = new core_1.EventEmitter;
    }
    PopUpComponent.prototype.ngOnInit = function () {
        this.groupName = this.groupNameService.groupName;
        this.numOfMembers = this.userService.getNumOfUsers();
    };
    PopUpComponent.prototype.onClose = function () {
        this.close.emit();
    };
    __decorate([
        core_1.Output()
    ], PopUpComponent.prototype, "close");
    PopUpComponent = __decorate([
        core_1.Component({
            selector: 'app-pop-up',
            templateUrl: './pop-up.component.html',
            styleUrls: ['./pop-up.component.scss']
        })
    ], PopUpComponent);
    return PopUpComponent;
}());
exports.PopUpComponent = PopUpComponent;
