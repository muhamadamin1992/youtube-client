import { Component, OnInit } from '@angular/core';
import { ISearchResponse } from '../../models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor() { }

  response: ISearchResponse

  ngOnInit(): void {
  }

}
