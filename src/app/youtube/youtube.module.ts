import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CardComponent } from './components/card/card.component';
import { VideoThumbnailComponent } from './components/video-thumbnail/video-thumbnail.component';
import { ViewsCountComponent } from './components/views-count/views-count.component';
import { LikesCountComponent } from './components/likes-count/likes-count.component';
import { DislikesCountComponent } from './components/dislikes-count/dislikes-count.component';
import { CommentsCountComponent } from './components/comments-count/comments-count.component';
import { VideoTitleComponent } from './components/video-title/video-title.component';
import { MoreButtonComponent } from './components/more-button/more-button.component';

import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';

const routes: Routes = [
  { path: '', component: SearchResultsComponent }
];

@NgModule({
  declarations: [
    SearchResultsComponent,
    CardComponent,
    VideoThumbnailComponent,
    ViewsCountComponent,
    LikesCountComponent,
    DislikesCountComponent,
    CommentsCountComponent,
    VideoTitleComponent,
    MoreButtonComponent,
    SortPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class YoutubeModule { }
