import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.scss']
})
export class FilteringCriteriaComponent {

  @Output() public sort: EventEmitter<String> = new EventEmitter();
  @Output() public filter: EventEmitter<String> = new EventEmitter();

  constructor() { }

  public onSort(text: string): void {
    this.sort.emit(text);
  }

  public onFilter(text: string): void {
    this.filter.emit(text);
  }
}
