import { EventEmitter,Injectable } from "@angular/core"
import { Post } from './post.module';

@Injectable({providedIn:'root'})
export class postService{
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();
  listOfPosts: Post[] = [
    new Post(
      'Eiffil tower',
      'The Eiffel Tower in Paris, France, has serious celeb status. Completed in March 1889, its one of the most recognizable monuments in the world.',
      './assets/2c8aa059e6ba4edba2b343709fd1f448.jpg',
      'Amar',
      new Date(),
      5
    ),
    new Post(
      'Taj mahal',
      'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India.',
      './assets/taj-mahal.webp',
      'Amar',
      new Date(),
      4
    ),
    new Post(
      'Charminar',
      'Charminar is one of the great monuments created in Indian History. It is located in Hyderabad. It has four minarets composed together to form a huge monument. It has become the icon of tourism in Hyderabad.',
      './assets/1600x960_1307353-charminar.jpg',
      'Amar',
      new Date(),
      3
    ),
    new Post(
      'Golden temple',
      'The Golden temple is located in the holy city of the Sikhs, Amritsar. The Golden temple is famous for its full golden dome, it is one of the most sacred pilgrim spots for Sikhs. The Mandir is built on a 67-ft square of marble and is a two storied structure.',
      './assets/golden-temple-lead.webp',
      'Amar',
      new Date(),
      2
    ),
  ];

  getPosts() {
    return this.listOfPosts;
  }

  deletePost(index: number) {
    this.listOfPosts.splice(index, 1);
  }

  addPost(post: Post) {
    this.listOfPosts.push(post);
  }

  updatePost(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }

  getPost(index: number) {
    return this.listOfPosts[index];
  }
  likePost(index: number) {
    this.listOfPosts[index].numberOfLikes += 1;
  }
  setPost(listOfPosts: Post[]){
    this.listOfPosts = listOfPosts;
    this.listChangedEvent.emit(listOfPosts)
  }
}
