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
var forms_1 = require("@angular/forms");
var dataService_1 = require("../services/dataService");
var ProductCreateComponent = (function () {
    function ProductCreateComponent(fb, ds) {
        this.fb = fb;
        this.ds = ds;
        this.productCreated = [];
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    ProductCreateComponent.prototype.createForm = function () {
        this.productForm = this.fb.group({
            name: ['', forms_1.Validators.required],
            desc: ['', forms_1.Validators.required],
            price: ['', forms_1.Validators.required],
            quantity: ['', forms_1.Validators.required],
            color: ['', forms_1.Validators.required]
        });
    };
    ProductCreateComponent.prototype.createProduct = function () {
        console.log(this.productForm.value);
        this.ds.createProduct(this.productForm.value);
        this.productCreated.push(this.productForm.value);
        this.productForm.reset();
    };
    return ProductCreateComponent;
}());
ProductCreateComponent = __decorate([
    core_1.Component({
        selector: 'product-create',
        templateUrl: './productCreate.component.html',
        styles: [".container{\n    margin-top:20px\n  }"]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, dataService_1.DataService])
], ProductCreateComponent);
exports.ProductCreateComponent = ProductCreateComponent;
//# sourceMappingURL=productCreate.component.js.map