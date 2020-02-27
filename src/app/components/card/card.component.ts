import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() public card: ICard;
  public borderClass: string;

  constructor() { }

  public ngOnInit(): void {
    const now: Number = Date.now();
    const offset: Number = +now - +new Date(this.card.snippet.publishedAt);
    if (offset < 1000 * 60 * 60 * 24 * 7) {
      this.borderClass = 'card--bd-blue';
    } else if (offset < 1000 * 60 * 60 * 24 * 31) {
      this.borderClass = 'card--bd-green';
    } else {
      this.borderClass = 'card--bd-red';
    }
  }

}
