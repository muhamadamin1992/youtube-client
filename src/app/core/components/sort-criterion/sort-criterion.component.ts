import { Component } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';

@Component({
  selector: 'app-sort-criterion',
  templateUrl: './sort-criterion.component.html',
  styleUrls: ['./sort-criterion.component.scss']
})
export class SortCriterionComponent {

  public sortTexts: string[] = ['date', 'count of views'];

  constructor(private posts: PostsService) { }

  public onSort(event: Event, text: string): void {
    event.preventDefault();
    this.posts.sortText = text;
  }
}
