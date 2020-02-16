import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dislikes-count',
  templateUrl: './dislikes-count.component.html',
  styleUrls: ['./dislikes-count.component.css']
})
export class DislikesCountComponent implements OnInit {

  constructor() { }

  @Input() count: string;

  ngOnInit(): void {
  }

}
