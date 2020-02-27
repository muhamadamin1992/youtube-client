import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-date',
  templateUrl: './video-date.component.html',
  styleUrls: ['./video-date.component.scss']
})
export class VideoDateComponent implements OnInit {

  @Input() public date: string;

  constructor() { }

  public ngOnInit(): void {
  }

}
