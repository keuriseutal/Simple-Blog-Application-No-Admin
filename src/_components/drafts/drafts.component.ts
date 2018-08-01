import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../_services/posts.service';
import { Post } from '../../_models/posts.interface';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.css']
})
export class DraftsComponent implements OnInit {

  posts: Post[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService
      .getDrafts()
      .subscribe((data: Post[]) => {
        this.posts = data;
      })
  }

  onDiscard(post) {
    this.posts = this.posts.filter(h => h !== post);
    this.postsService.deletePost(post).subscribe();
  }//end onDiscard

  onPost(post : Post) {
    this.posts = this.posts.filter(h => h !== post);
    this.postsService.post = post;
    this.postsService.post.isDraft = false;
    this.postsService.submitDraft(this.postsService.post).subscribe();
    console.log(this.postsService.post);
  }//end onPost

}
