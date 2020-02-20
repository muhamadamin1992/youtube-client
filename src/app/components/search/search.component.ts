import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public inputText: string = '';

  @Output() public searchText: EventEmitter<String> = new EventEmitter();

  constructor() { }

  public search(event: Event): void {
    console.log(this.inputText);
    event.preventDefault();
    this.searchText.emit(this.inputText);
  }

}
