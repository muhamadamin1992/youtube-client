import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-views-count',
  templateUrl: './views-count.component.html',
  styleUrls: ['./views-count.component.css']
})
export class ViewsCountComponent {

  @Input() public count: string;

  constructor() { }

}
