import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LogoComponent } from './components/logo/logo.component';
import { SettingsBtnComponent } from './components/settings-btn/settings-btn.component';
import { LoginInfoComponent } from './components/login-info/login-info.component';
import { FilteringCriteriaComponent } from './components/filtering-criteria/filtering-criteria.component';
import { SortCriterionComponent } from './components/sort-criterion/sort-criterion.component';
import { FilterInputComponent } from './components/filter-input/filter-input.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { PostsService } from './services/posts/posts.service';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    LogoComponent,
    SettingsBtnComponent,
    LoginInfoComponent,
    FilteringCriteriaComponent,
    SortCriterionComponent,
    FilterInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    PostsService,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
