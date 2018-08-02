import { Component, OnInit, TemplateRef } from '@angular/core';
import { PostsService } from '../../_services/posts.service';
import { UsersService } from '../../_services/users.service';
import { Router } from '@angular/router';

import { Post } from '../../_models/posts.interface';
import { User } from '../../_models/users.interface';
//bootstrap
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  posts: Post[];
  msg: string;
  isSuccess: boolean = false;
  isButtonClicked: boolean = false;
  modalRef: BsModalRef;
  isDelete: boolean = false;

  constructor(private usersService: UsersService,
    private postsService: PostsService,
    private router: Router,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.postsService
      .getPosts("&_sort=title,date&_order=asc,desc")
      .subscribe((data: Post[]) => {
        this.posts = data;
      })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
    } else if (title.length == 0 && body.length == 0) {
      this.isSuccess = false;
      this.msg = "ERROR! title and body cannot be empty";
    } else if (body.length < 100) {
      this.isSuccess = false;
      this.msg = "ERROR! The body must contain atleast 100 characters";

    } else if (title.length == 0) {
      this.isSuccess = false;
      this.msg = "ERROR! The title must not be empty";

    }

  }

  onDeletePost(post) {
    //to disable edit button and only enable the back button
    this.isDelete = true; 
    this.msg = "SUCCESS! The post was deleted successfully";
    
    post = this.postsService.post;
    this.posts = this.posts.filter(h => h !== post);

    this.postsService.deletePost(post).subscribe();
    this.modalRef.hide();

  }

}

