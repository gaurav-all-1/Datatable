import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchList',
  pure:false
})
export class SearchListPipe implements PipeTransform {

  transform(value: any, searchTerm:any): any {
    return value.filter((element:any)=>{
        return element.name.indexOf(searchTerm)>-1;
    });
  }

}
