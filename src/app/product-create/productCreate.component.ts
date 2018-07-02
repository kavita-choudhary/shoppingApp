import {Component , OnInit} from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {DataService} from '../services/dataService';
@Component({
  selector:'product-create',
  templateUrl:'./productCreate.component.html',
  styles:[`.container{
    margin-top:20px
  }`]
})

export class ProductCreateComponent implements OnInit{

  productForm : FormGroup;
 productCreated:Array<any>=[];
  constructor(private fb:FormBuilder, private ds:DataService){}
  ngOnInit(){
    this.createForm();
  }

  createForm(){
    this.productForm =this.fb.group({
      name:['',Validators.required],
      desc:['',Validators.required],
      price:['',Validators.required],
      quantity:['',Validators.required],
      color:['',Validators.required]
    })
  }

  createProduct(){
    console.log(this.productForm.value);
    this.ds.createProduct(this.productForm.value);
   this.productCreated.push(this.productForm.value);
    this.productForm.reset();
  }
}
