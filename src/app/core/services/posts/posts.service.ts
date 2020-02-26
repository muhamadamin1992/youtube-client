import { Injectable } from '@angular/core';

import { ISearchResponse } from '../../../core/models/search-response.model';
import { response } from './mock-response';

@Injectable()
export class PostsService {
  public searchText: string = '';
  public sortText: string = '';
  public filterText: string = '';

  public response: ISearchResponse = response;
  constructor() { }
}
