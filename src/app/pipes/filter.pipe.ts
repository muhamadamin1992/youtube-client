import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '../models/card.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(value: ICard[], filter: string): ICard[] {
    if (!filter) {
      return value;
    }
    return value.filter(item => item.snippet.title.includes(filter));
  }

}
