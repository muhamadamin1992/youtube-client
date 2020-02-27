import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsCountComponent } from './components/views-count/views-count.component';
import { LikesCountComponent } from './components/likes-count/likes-count.component';
import { DislikesCountComponent } from './components/dislikes-count/dislikes-count.component';
import { CommentsCountComponent } from './components/comments-count/comments-count.component';
import { VideoThumbnailComponent } from './components/video-thumbnail/video-thumbnail.component';

@NgModule({
  declarations: [
    ViewsCountComponent,
    LikesCountComponent,
    DislikesCountComponent,
    CommentsCountComponent,
    VideoThumbnailComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewsCountComponent,
    LikesCountComponent,
    DislikesCountComponent,
    CommentsCountComponent,
    VideoThumbnailComponent,
  ]
})
export class SharedModule { }
