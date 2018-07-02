import {Injectable} from '@angular/core';

@Injectable()
export class DataService{
productCreated:Array<any>=[];
productSelected:Array<any>=[];
createProduct(product:any){
  this.productCreated.push(product);
}

getProducts(){
  return this.productCreated;
}

selectProduct(products:any){
  if(products.length>0){
      products.forEach((prod:any)=>{
        this.productSelected.push(prod);
      })
  }
  console.log('ds',this.productSelected);
}

getSelectedProducts(){
  return this.productSelected;
}

deleteSelected(product:any){
  var idx =this.productSelected.indexOf(product);
  this.productSelected.splice(idx,1);
}
}
