import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() public searchText: EventEmitter<String> = new EventEmitter();
  @Output() public sort: EventEmitter<String> = new EventEmitter();
  @Output() public filter: EventEmitter<String> = new EventEmitter();

  constructor() { }

  public onSearch(text: string): void {
    this.searchText.emit(text);
  }

  public onSort(text: string): void {
    this.sort.emit(text);
  }

  public onFilter(text: string): void {
    this.filter.emit(text);
  }
}
