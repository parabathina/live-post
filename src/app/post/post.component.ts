import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.module';

import { postService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  @Input() post?: Post;
  @Input() index: number = 0;
  
  constructor(private postService: postService, private router: Router) { }
  
  ngOnInit(): void {
    console.log(this.post)
    console.log(this.index)
  }

  ondelete() {
    console.log("Delete function");
    this.postService.deletePost(this.index);

  }
  
  onEdit() {
    console.log('onEdit() called!');
    this.router.navigate(['/post-edit', this.index]);
  }
  likePost() {
    this.postService.likePost(this.index);
  }
  
}
