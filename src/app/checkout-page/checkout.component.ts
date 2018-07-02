import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {DataService} from '../services/dataService';
@Component({
  selector:'checkout',
  templateUrl:'./checkout.component.html'
})

export class CheckoutComponent implements OnInit{
    items:Array<any>=[];
    constructor(private ds:DataService,private location:Location){}
 //  items = [
 //   {name:'abc',desc:'something',price:123,quantity:2,color:'red'},
 //     {name:'bcd',desc:'something',price:987,quantity:2,color:'red'},
 //       {name:'zty',desc:'something',price:564,quantity:2,color:'red'},
 //         {name:'qrt',desc:'something',price:456,quantity:2,color:'red'}
 // ]

  ngOnInit(){
    this.items = this.ds.getSelectedProducts();
  }
  deleteItem(item:any){

     this.ds.deleteSelected(item);
     this.items = this.ds.getSelectedProducts();
  }

  goBack(){
    this.location.back();
  }
}
