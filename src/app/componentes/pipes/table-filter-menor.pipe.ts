import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilterMenor'
})
export class TableFilterMenorPipe implements PipeTransform {

  transform(items: any[], field: string, value: number): any {
    if (!items){
      return [];
    }
    if (!field || !value){
      return items;
    }
    return items.filter(
      singleItem => {
        if(singleItem[field] != null){
          if(singleItem[field] >= value){
            return true;
          }
        }
        return false;
      }
    );
  }

}
