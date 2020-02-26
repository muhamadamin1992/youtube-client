import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public criteriaOpened: boolean = false;

  constructor() { }

  public onCriteriaToggle(): void {
    this.criteriaOpened = !this.criteriaOpened;
  }
}
