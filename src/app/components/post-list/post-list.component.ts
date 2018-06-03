import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {Post} from '../../models/post';
import { PostsService } from '../../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPostsSubject();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
