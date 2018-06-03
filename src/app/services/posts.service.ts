import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.posts = new Array();
    this.posts.push(
      // tslint:disable-next-line:max-line-length
      new Post('prem\'s', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum nisl ut sapien placerat aliquam a nec dui. Donec vehicula nisi diam, eu pharetra nibh mattis at. Sed pharetra ornare molestie. Quisque vel lectus aliquet ligula semper ultrices non vel nunc. Integer vulputate pretium tempus. Quisque at mollis risus. Vivamus vestibulum dapibus pharetra. Vestibulum nec ligula pretium mauris semper fringilla vitae a justo. Praesent sollicitudin eros augue, sed consectetur erat pulvinar vel. Aliquam sed mi dui. Praesent aliquam lorem eget urna vulputate blandit.')
    );
    this.posts.push(new Post('deuze', 'Et là c\'est le drame'));
    this.posts.push(new Post('troize', 'Encore un peu de texte par ici'));
    this.posts.push(new Post('quartz', 'Un dernier petit message inintéressant au possible'));
    this.posts[0].love();
    this.posts[2].dontLove();
  }

  emitPostsSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPostsSubject();
  }

  removePost(post: Post) {
    const index = this.posts.findIndex(
      (element: Post) => {
        return element.title === post.title && element.created_at === post.created_at;
      }
    );
    this.posts.splice(index, 1);
    this.emitPostsSubject();
  }
}
