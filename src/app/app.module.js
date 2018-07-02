"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var productCreate_component_1 = require("./product-create/productCreate.component");
var productlist_component_1 = require("./product-list/productlist.component");
var checkout_component_1 = require("./checkout-page/checkout.component");
var filter_pipe_1 = require("./pipes/filter.pipe");
var sort_pipe_1 = require("./pipes/sort.pipe");
var dataService_1 = require("./services/dataService");
var routing_1 = require("./routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, forms_1.FormsModule, routing_1.AppRoutingModule],
        declarations: [app_component_1.AppComponent, productCreate_component_1.ProductCreateComponent, productlist_component_1.ProductListComponent, checkout_component_1.CheckoutComponent, filter_pipe_1.FilterPipe, sort_pipe_1.SortPipe],
        bootstrap: [app_component_1.AppComponent],
        providers: [dataService_1.DataService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map