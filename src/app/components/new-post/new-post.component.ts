import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.form = this.builder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit() {
    this.postsService.addPost(
      new Post(
        this.form.value['title'],
        this.form.value['content']
      )
    );
  }
}
