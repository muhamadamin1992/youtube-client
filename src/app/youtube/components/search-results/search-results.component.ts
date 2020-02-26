import { Component, Input } from '@angular/core';
import { PostsService } from '../../../core/services/posts/posts.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  constructor(public posts: PostsService) { }

}
