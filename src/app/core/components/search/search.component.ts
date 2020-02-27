import { Component } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public inputText: string = '';

  constructor(public posts: PostsService) { }

  public search(event: Event): void {
    event.preventDefault();
    this.posts.searchText = this.inputText;
  }

}
