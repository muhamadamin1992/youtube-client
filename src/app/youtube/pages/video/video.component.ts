import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/core/services/posts/posts.service';
import { ICard } from '../../../shared/models/card.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  public post: ICard;

  constructor(private route: ActivatedRoute, public posts: PostsService) { }

  public ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.post = this.posts.response.items.find((post) => {
        if (post.id === params.id) {
          return true;
        }
      });
    });
    console.log(this.post);
  }

}
