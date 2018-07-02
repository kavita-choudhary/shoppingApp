import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
name:'sort'
})

export class SortPipe implements PipeTransform{

    transform(inputArr:Array<any>,args:any){
    if(!inputArr){return;}
    console.log(args);
    let sortedData =inputArr.sort(function(a,b){
         return (a[args.prop] < b[args.prop] ? -1 : 1) * (args.isAsc ? 1 : -1);
    })
    return sortedData;
    }
}
