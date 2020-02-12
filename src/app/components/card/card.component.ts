import { Component, OnInit } from '@angular/core';
import { ICard } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  card: ICard

  ngOnInit(): void {
  }

}
