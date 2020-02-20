import { Component } from '@angular/core';
import { response } from '../mock-response';
import { ISearchResponse } from '../../models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  public response: ISearchResponse = response;

  constructor() { }

}
