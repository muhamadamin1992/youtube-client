import { Component, Input } from '@angular/core';
import { response } from '../mock-response';
import { ISearchResponse } from '../../models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  @Input() public sortText: string;
  @Input() public filterText: string;
  public response: ISearchResponse = response;

  constructor() { }

}
