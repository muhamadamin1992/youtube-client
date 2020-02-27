import { Component, Input } from '@angular/core';
import { IThumbnail } from '../../../core/models/thumbnail.model';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent {

  @Input() public thumbnail: IThumbnail;

  constructor() { }

}
