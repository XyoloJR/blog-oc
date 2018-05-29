import { Component } from '@angular/core';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts : Post[];

  constructor(){
    this.posts = new Array();
    this.posts.push({title: 'prem\'s', content: 'mon premier post', loveIts: 0, created_at: new Date()})
  }
}
