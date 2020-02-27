import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inner-title',
  templateUrl: './inner-title.component.html',
  styleUrls: ['./inner-title.component.scss']
})
export class InnerTitleComponent implements OnInit {

  @Input() public title: string;

  constructor() { }

  public ngOnInit(): void {
  }

}
