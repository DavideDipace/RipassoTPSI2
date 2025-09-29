// src/app/components/post-list/post-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
}