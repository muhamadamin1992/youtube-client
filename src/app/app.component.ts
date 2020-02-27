import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public searchText: string = '';
  public sortText: string = '';
  public filterText: string = '';

  public onSearch(text: string): void {
    this.searchText = text;
  }

  public onSort(text: string): void {
    this.sortText = text;
  }

  public onFilter(text: string): void {
    this.filterText = text;
  }
}
