"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dataService_1 = require("../services/dataService");
var CheckoutComponent = (function () {
    function CheckoutComponent(ds, location) {
        this.ds = ds;
        this.location = location;
        this.items = [];
    }
    //  items = [
    //   {name:'abc',desc:'something',price:123,quantity:2,color:'red'},
    //     {name:'bcd',desc:'something',price:987,quantity:2,color:'red'},
    //       {name:'zty',desc:'something',price:564,quantity:2,color:'red'},
    //         {name:'qrt',desc:'something',price:456,quantity:2,color:'red'}
    // ]
    CheckoutComponent.prototype.ngOnInit = function () {
        this.items = this.ds.getSelectedProducts();
    };
    CheckoutComponent.prototype.deleteItem = function (item) {
        this.ds.deleteSelected(item);
        this.items = this.ds.getSelectedProducts();
    };
    CheckoutComponent.prototype.goBack = function () {
        this.location.back();
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    core_1.Component({
        selector: 'checkout',
        templateUrl: './checkout.component.html'
    }),
    __metadata("design:paramtypes", [dataService_1.DataService, common_1.Location])
], CheckoutComponent);
exports.CheckoutComponent = CheckoutComponent;
//# sourceMappingURL=checkout.component.js.map