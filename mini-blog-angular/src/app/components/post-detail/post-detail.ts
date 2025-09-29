// src/app/components/post-detail/post-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    // Otteniamo l'ID dalla URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.postService.getPostById(id);
  }
}