import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.css']
})
export class FilterInputComponent {

  public filterText: string = '';
  @Output() public filter: EventEmitter<String> = new EventEmitter();

  constructor() { }

  public onFilter(e: InputEvent): void {
    this.filter.emit(this.filterText);
  }

}
