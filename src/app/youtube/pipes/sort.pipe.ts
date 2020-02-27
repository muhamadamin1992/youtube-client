import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '../../shared/models/card.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  public transform(value: ICard[], sort: string): ICard[] {
    if (!sort) {
      return value;
    }
    let res: ICard[] = [...value];
    if (sort === 'date') {
      res.sort((a, b) => +new Date(a.snippet.publishedAt) - +new Date(b.snippet.publishedAt));
    } else if (sort === 'count of views') {
      res.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
    }
    return res;
  }

}
