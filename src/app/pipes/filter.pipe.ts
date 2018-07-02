import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:'filter'
})

export class FilterPipe implements PipeTransform{

    transform(items:any[],searchText:any){
        if(!items){return [];}
        if(!searchText){return items;}
        return  items.filter(i=>{
        return  Object.keys(i).some(it=>i[it].toString().toLowerCase().includes(searchText.toLowerCase()))
        })
    }
}
