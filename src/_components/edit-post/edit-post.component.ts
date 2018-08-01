import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../_services/posts.service';
import { UsersService } from '../../_services/users.service';
import { Router } from '@angular/router';

import { Post } from '../../_models/posts.interface';
import { User } from '../../_models/users.interface';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit{

  msg: string;
  isSuccess: boolean;
  isButtonClicked: boolean;

  constructor(private usersService: UsersService,
    private postsService: PostsService,
    private router: Router) { }

  ngOnInit() {
    console.log(this.postsService.post);
  }

  onGoBack() {
    this.router.navigate(['/', 'dashboard']);
  }

  onEditPost(title, subtitle, category, body) {

    this.msg = "Your post was updated successfully";
    this.isButtonClicked = true;
    this.isSuccess = true;
    this.postsService.updatePost(this.postsService.post).subscribe((data: Post) => {
      this.postsService.post = data;
    });
  }

  
} 

