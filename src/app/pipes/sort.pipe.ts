import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:'sort'
})

export class SortPipe implements PipeTransform{
  transform(items: Array<any>, args?: any): any {
        return items.sort(function(a, b){
            console.log('piep',args.isAsc);
            if(a[args.prop].toString().toLowerCase() < b[args.prop].toString().toLowerCase()){
              console.log(-1*args.isAsc);
                return -1 * args.isAsc;
            }
            else if( a[args.prop].toString().toLowerCase() > b[args.prop].toString().toLowerCase()){
                console.log(1*args.isAsc);
                return 1 * args.isAsc;
            }
            else{
                return 0;
            }
        });
    };
}
