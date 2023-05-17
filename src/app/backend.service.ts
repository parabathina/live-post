import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.module';
import { postService } from './post.service';
import { tap } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: postService, private http: HttpClient) {}

  
  saveData() {
    
    const listOfPosts: Post[] = this.postService.getPosts();
    
    this.http
      .put(
        'https://live-post-3f8ab-default-rtdb.firebaseio.com/posts.json',
        listOfPosts
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  
  fetchData() {
    
    this.http
      .get<Post[]>(
        'https://live-posts-63eff-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);

          
          this.postService.setPost(listOfPosts);
        })
      )
      .subscribe();
  }
}
