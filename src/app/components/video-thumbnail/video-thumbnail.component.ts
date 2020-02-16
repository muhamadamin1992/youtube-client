import { Component, Input, OnInit } from '@angular/core';
import { IThumbnail } from '../../models/thumbnail.model'

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent implements OnInit {

  constructor() { }

  @Input() thumbnail: IThumbnail;

  ngOnInit(): void {
  }

}
