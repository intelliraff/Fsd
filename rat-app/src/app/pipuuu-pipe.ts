import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipuuu',
  standalone: false,
})
export class PipuuuPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
