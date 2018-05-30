import { Component } from '@angular/core';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public posts: Post[];

  constructor() {
    this.posts = new Array();
    this.posts.push(
      new Post('prem\'s', 'mon premier post')
    );
    this.posts.push(
      new Post('deuze', 'Et là c\'est le drame')
    );
    this.posts.push(
      new Post('troize', 'Encore un peu de texte par ici')
    );
    this.posts.push(
      new Post('quartz', 'Un dernier petit message inintéressant au possible')
    );
  }
}
