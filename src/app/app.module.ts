import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { CardComponent } from './components/card/card.component';
import { LogoComponent } from './components/logo/logo.component';
import { SettingsBtnComponent } from './components/settings-btn/settings-btn.component';
import { LoginInfoComponent } from './components/login-info/login-info.component';
import { FilteringCriteriaComponent } from './components/filtering-criteria/filtering-criteria.component';
import { SortCriterionComponent } from './components/sort-criterion/sort-criterion.component';
import { FilterInputComponent } from './components/filter-input/filter-input.component';
import { VideoThumbnailComponent } from './components/video-thumbnail/video-thumbnail.component';
import { ViewsCountComponent } from './components/views-count/views-count.component';
import { LikesCountComponent } from './components/likes-count/likes-count.component';
import { DislikesCountComponent } from './components/dislikes-count/dislikes-count.component';
import { CommentsCountComponent } from './components/comments-count/comments-count.component';
import { VideoTitleComponent } from './components/video-title/video-title.component';
import { MoreButtonComponent } from './components/more-button/more-button.component';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchResultsComponent,
    CardComponent,
    LogoComponent,
    SettingsBtnComponent,
    LoginInfoComponent,
    FilteringCriteriaComponent,
    SortCriterionComponent,
    FilterInputComponent,
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
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
