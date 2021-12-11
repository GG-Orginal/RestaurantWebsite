import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderReadyTime'
})
export class OrderReadyTimePipe implements PipeTransform {

  transform(value: number): string {
    if(value > 0 && value/60 < 1) {
      return value + ' Minutes';

    } else {
      if (value%60 > 0) {
      return Math.floor(value/60) + ' Hour(s) ' + 'and ' + value%60 + ' Minutes';
      }
      return Math.floor(value/60) + ' Hour'
    }
  }

}
