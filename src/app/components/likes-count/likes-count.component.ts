import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-likes-count',
  templateUrl: './likes-count.component.html',
  styleUrls: ['./likes-count.component.css']
})
export class LikesCountComponent {

  @Input() public count: string;

  constructor() { }

}
