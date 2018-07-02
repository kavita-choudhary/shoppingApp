import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {DataService} from '../services/dataService';
import {Router} from '@angular/router';
@Component({
  selector:'product-list',
  templateUrl:'./productlist.component.html',
  styles:[`.container{
    border:1px solid #dedede;
    margin-top:20px;
  }`]
})

export class ProductListComponent implements OnInit{

  constructor(private ds:DataService, private router:Router){}
  direction:boolean = false;
  isAsc :boolean ;
  prop:any;
  selectArray:Array<any>=[];
  productList:any=[];
//  @Input() productList:Array<any> ;
  //  productList =[
  //   {name:'abc',desc:'something',price:123,quantity:2,color:'red'},
  //     {name:'bcd',desc:'something',price:987,quantity:2,color:'red'},
  //       {name:'zty',desc:'something',price:564,quantity:2,color:'red'},
  //         {name:'qrt',desc:'something',price:456,quantity:2,color:'red'}
  // ]

  ngOnInit(){
    this.productList = this.ds.getProducts();
      this.productList.forEach((item:any)=>{
          item.checked = false;
      })
  }
  sort(prop:any){
      this.direction = !this.direction;
      this.isAsc =this.direction===true;
      this.prop = prop;
  }

  selectItem(product:any){
    var check = this.checkIfExist(this.selectArray,product);
    if(product.checked == true && check==false){
        this.selectArray.push(product);
    }else if(product.checked == false && check==true){
      this.selectArray = this.selectArray.filter(item=>item !==product);

    }
    console.log(this.selectArray);
  }

  checkIfExist(arr:Array<any>, item:any){
    let check = false;
    arr.forEach((i:any)=>{
      if(JSON.stringify(i)==JSON.stringify(item)){
        check= true;
      }
    })
    return check;
  }

  addItem(){
    this.ds.selectProduct(this.selectArray);
    this.router.navigate(['cart']);
  }
}
