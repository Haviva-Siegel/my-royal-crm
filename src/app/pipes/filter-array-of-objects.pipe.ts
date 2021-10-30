import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArrayOfObjects',
})
export class FilterArrayOfObjectsPipe implements PipeTransform {
  transform(value: object[], propertyName: string, term: string): object[] {
    return value.filter((item) => item[propertyName].includes(term));
  }
}
