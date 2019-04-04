import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterablePipe implements PipeTransform {

  transform(values: Map<any, any>, args?: any): any {
    let array = []
    values.forEach((value, key) => array.push({key:key,value:value}))
    return array
  }

}
