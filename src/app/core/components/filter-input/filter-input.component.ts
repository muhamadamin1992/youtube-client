import { Component } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss']
})
export class FilterInputComponent {

  public filterText: string = '';

  constructor(private posts: PostsService) { }

  public onFilter(e: InputEvent): void {
    this.posts.filterText = this.filterText;
  }

}
