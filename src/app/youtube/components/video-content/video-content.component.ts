import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.scss']
})
export class VideoContentComponent implements OnInit {

  @Input() public content: string;

  constructor() { }

  public ngOnInit(): void {
  }

}
