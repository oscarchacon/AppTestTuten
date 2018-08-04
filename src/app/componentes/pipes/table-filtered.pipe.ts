import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFiltered'
})
export class TableFilteredPipe implements PipeTransform {

  transform(items: any[], fields: string[], value: string): any[] {
    if (!items)
    {
      return [];
    }
    if (!fields || !value)
    {
      return items;
    }
    return items.filter(singleItem => {
      for (let i = 0; i < fields.length; i++) {
        if(singleItem[fields[i]] != null){
          if (singleItem[fields[i]].toString().toLowerCase().includes(value.toLowerCase())) {
            return true;
          }
        }
      }
      return false;
    });
  }

}
