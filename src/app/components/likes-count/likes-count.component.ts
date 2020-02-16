import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes-count',
  templateUrl: './likes-count.component.html',
  styleUrls: ['./likes-count.component.css']
})
export class LikesCountComponent implements OnInit {

  constructor() { }

  @Input() count: string;

  ngOnInit(): void {
  }

}
