import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CardComponent } from './components/card/card.component';
import { VideoTitleComponent } from './components/video-title/video-title.component';
import { MoreButtonComponent } from './components/more-button/more-button.component';
import { VideoComponent } from './pages/video/video.component';

import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SharedModule } from '../shared/shared.module';
import { InnerTitleComponent } from './components/inner-title/inner-title.component';
import { VideoContentComponent } from './components/video-content/video-content.component';
import { VideoDateComponent } from './components/video-date/video-date.component';

const routes: Routes = [
  { path: '', component: SearchResultsComponent, pathMatch: 'full' },
  { path: 'videos/:id', component: VideoComponent }
];

@NgModule({
  declarations: [
    SearchResultsComponent,
    CardComponent,
    VideoTitleComponent,
    MoreButtonComponent,
    SortPipe,
    FilterPipe,
    VideoComponent,
    InnerTitleComponent,
    VideoContentComponent,
    VideoDateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
})
export class YoutubeModule { }
