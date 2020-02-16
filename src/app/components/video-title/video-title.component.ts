import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-title',
  templateUrl: './video-title.component.html',
  styleUrls: ['./video-title.component.css']
})
export class VideoTitleComponent implements OnInit {

  constructor() { }

  @Input() title: string;

  ngOnInit(): void {
  }

}
