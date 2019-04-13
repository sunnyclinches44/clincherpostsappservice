import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public postsService: PostsService) { }

  ngOnInit() {
  }

  onAddPost(postForm: NgForm) {
    if (postForm.invalid) {
      return;
    }
    this.postsService.addPost(postForm.value.title,
      postForm.value.description);
  }
}
