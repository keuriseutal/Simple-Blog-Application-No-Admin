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
export class EditPostComponent implements OnInit {

  msg: string;
  isSuccess: boolean = false;
  isButtonClicked: boolean = false;

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
    this.isButtonClicked = true;
    //check if required fields are filled correctly
    if (body.length >= 100 && title.length != 0) {
      this.msg = "Your post was updated successfully";
      this.isSuccess = true;
      this.postsService.updatePost(this.postsService.post).subscribe((data: Post) => {
        this.postsService.post = data;
      });
    } else if (body.length < 100) {
      this.isSuccess = false;
      this.msg = "ERROR! The body must not contain less than 100 characters";

    } else if (title.length == 0) {
      this.isSuccess = false;
      this.msg = "ERROR! The title must not be empty";

    }

  }

  


}

