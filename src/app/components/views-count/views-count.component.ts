import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-count',
  templateUrl: './views-count.component.html',
  styleUrls: ['./views-count.component.css']
})
export class ViewsCountComponent implements OnInit {

  constructor() { }

  @Input() count: string;

  ngOnInit(): void {
  }

}
