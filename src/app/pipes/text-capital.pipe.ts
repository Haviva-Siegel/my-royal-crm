import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textCapital',
})
// to set text structure
export class TextCapitalPipe implements PipeTransform {
  transform(value: string): string {
    let trimmed = value.trim();
    let text = trimmed[0].toUpperCase() + trimmed.slice(1).toLocaleLowerCase();
    let dot = trimmed[trimmed.length - 1] == '.' ? '' : '.';
    return text + dot;
  }
}
