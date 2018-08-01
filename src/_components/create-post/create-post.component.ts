import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../_services/posts.service';
import { UsersService } from '../../_services/users.service';
import { Post } from '../../_models/posts.interface';
import { User } from '../../_models/users.interface';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  post: Post;
  posts: Post[];
  date: string;
  author: string;
  //body: number;

  msg: string;
  isSuccess: boolean;
  isButtonClicked: boolean;
  constructor(private usersService: UsersService, private postsService: PostsService) {

  }

  ngOnInit() {
    console.log(this.usersService.loggedUser);
    this.author = this.usersService.loggedUser.uname;
  }

  getDate() {
    let date = new Date(Date.now());
    let month = date.getMonth() + 1;

    return month.toString() + "/" + date.getDate().toString() + "/" + date.getFullYear().toString();
  }
  /*
    onInput(){
      this.body += 1;
    }
  */
  onAddPost(title, subtitle, category, body) {
    this.date = this.getDate();
    this.msg = "Your post was added successfully";
    this.isButtonClicked = true;
    this.isSuccess = true;

    this.post = {
      id: 0,
      title: title,
      subtitle: subtitle,
      author: this.author,
      category: category,
      date: this.date,
      body: body,
      isDraft: false
    };

    this.postsService.addPost(this.post).subscribe((data: Post) => {
      this.post = data;
    });
  }

  onSaveAsDraft(title, subtitle, category, body) {
    this.date = this.getDate();
    this.msg = "Your post was successfully saved as draft";
    this.isButtonClicked = true;
    this.isSuccess = true;

    this.post = {
      id: 0,
      title: title,
      subtitle: subtitle,
      author: this.author,
      category: category,
      date: this.date,
      body: body,
      isDraft: true
    };

    this.postsService.addPost(this.post).subscribe((data: Post) => {
      this.post = data;
    });
  }
}


