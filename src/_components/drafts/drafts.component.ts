import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../_services/posts.service';
import { UsersService } from '../../_services/users.service';
import { User } from '../../_models/users.interface';
import { Post } from '../../_models/posts.interface';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.css']
})
export class DraftsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postsService: PostsService, private usersService: UsersService) { }

  ngOnInit() {
    this.postsService
      .getDrafts(this.usersService.loggedUser.uname)
      .subscribe((data: Post[]) => {
        this.posts = data;
      })

    console.log("drafts of " + this.usersService.loggedUser.uname);
    
  }

  onDiscard(post) {
    this.posts = this.posts.filter(h => h !== post);
    this.postsService.deletePost(post).subscribe();
  }//end onDiscard

  onPost(post: Post) {
    this.posts = this.posts.filter(h => h !== post);
    this.postsService.post = post;
    this.postsService.post.isDraft = false;
    this.postsService.submitDraft(this.postsService.post).subscribe();
    console.log(this.postsService.post);
  }//end onPost

}
