import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-more-button',
  templateUrl: './more-button.component.html',
  styleUrls: ['./more-button.component.scss']
})
export class MoreButtonComponent {

  @Input() public id: string;

  constructor() { }

}
