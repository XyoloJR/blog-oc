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
    this.posts.push({
      title: 'prem\'s', 
      content: 'mon premier post', 
      loveIts: 0, created_at: new Date()
    });
    this.posts.push({
      title: 'deuze', 
      content: 'Et là c\'est le drame', 
      loveIts: 1, created_at: new Date()
    });
    this.posts.push({
      title: 'troize', 
      content: 'Encore un peu de texte par ici', 
      loveIts: 2, created_at: new Date()
    });
    this.posts.push({
      title: 'quartz', 
      content: 'Un dernier petit message inintéressant au possible', 
      loveIts: -3, created_at: new Date()
    });
  }
}
