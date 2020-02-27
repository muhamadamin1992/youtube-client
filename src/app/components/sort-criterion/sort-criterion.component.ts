import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-criterion',
  templateUrl: './sort-criterion.component.html',
  styleUrls: ['./sort-criterion.component.scss']
})
export class SortCriterionComponent {

  public sortTexts: string[] = ['date', 'count of views'];

  @Output() public sort: EventEmitter<String> = new EventEmitter();

  constructor() { }

  public onSort(event: Event, text: string): void {
    event.preventDefault();
    this.sort.emit(text);
  }
}
