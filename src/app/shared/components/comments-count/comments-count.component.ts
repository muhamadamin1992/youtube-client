import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comments-count',
  templateUrl: './comments-count.component.html',
  styleUrls: ['./comments-count.component.css']
})
export class CommentsCountComponent {

  @Input() public count: string;

  constructor() { }

}
