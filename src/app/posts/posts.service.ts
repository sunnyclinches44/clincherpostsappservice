import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  constructor() { }

  getPosts() {
    return [...this.posts];
  }

  getPostsUpdatedListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, description: string) {
    const post: Post = {
      title: title,
      description: description
    };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
