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
var dataService_1 = require("../services/dataService");
var router_1 = require("@angular/router");
var ProductListComponent = (function () {
    function ProductListComponent(ds, router) {
        this.ds = ds;
        this.router = router;
        this.isAscending = false;
        this.isAsc = this.isAscending == true ? 1 : -1;
        this.selectArray = [];
        this.productList = [];
    }
    //  @Input() productList:Array<any> ;
    //  productList =[
    //   {name:'abc',desc:'something',price:123,quantity:2,color:'red'},
    //     {name:'bcd',desc:'something',price:987,quantity:2,color:'red'},
    //       {name:'zty',desc:'something',price:564,quantity:2,color:'red'},
    //         {name:'qrt',desc:'something',price:456,quantity:2,color:'red'}
    // ]
    ProductListComponent.prototype.ngOnInit = function () {
        this.productList = this.ds.getProducts();
        this.productList.forEach(function (item) {
            item.checked = false;
        });
    };
    ProductListComponent.prototype.sort = function (prop) {
        this.isAscending = !this.isAscending;
        this.isAsc = this.isAscending == true ? -1 : 1;
        this.prop = prop;
    };
    ProductListComponent.prototype.selectItem = function (product) {
        var check = this.checkIfExist(this.selectArray, product);
        if (product.checked == true && check == false) {
            this.selectArray.push(product);
        }
        else if (product.checked == false && check == true) {
            this.selectArray = this.selectArray.filter(function (item) { return item !== product; });
        }
        console.log(this.selectArray);
    };
    ProductListComponent.prototype.checkIfExist = function (arr, item) {
        var check = false;
        arr.forEach(function (i) {
            if (JSON.stringify(i) == JSON.stringify(item)) {
                check = true;
            }
        });
        return check;
    };
    ProductListComponent.prototype.addItem = function () {
        this.ds.selectProduct(this.selectArray);
        this.router.navigate(['cart']);
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'product-list',
        templateUrl: './productlist.component.html',
        styles: [".container{\n    border:1px solid #dedede;\n    margin-top:20px;\n  }"]
    }),
    __metadata("design:paramtypes", [dataService_1.DataService, router_1.Router])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=productlist.component.js.map