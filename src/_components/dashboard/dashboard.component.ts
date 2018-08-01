import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../_services/posts.service';
import { UsersService } from '../../_services/users.service';
import { Post } from '../../_models/posts.interface';
import { User } from '../../_models/users.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts: Post[];

  sortOrder: string = "desc";
  sortBy: string = "?_sort=date&_order=";

  dateClicks: number = 0;
  titleClicks: number = 0;

  selectDate: boolean = false;
  selectAuthor: boolean = false;
  selectCategory: boolean = false;

  constructor(private postsService: PostsService,
              private usersService: UsersService,
              private router: Router) { }

  ngOnInit() {

    this.postsService
      .getPosts(this.sortBy + this.sortOrder)
      .subscribe((data: Post[]) => {
        this.posts = data;
      })

  }

  sortByDate() {
    this.sortBy = "?_sort=date&_order=";

    ++this.dateClicks;  //increment clicks for date for toggling sort order

    if (this.dateClicks % 2 == 0) {
      this.sortOrder = "desc";
    } else {
      this.sortOrder = "asc";
    }

    //if no filter
    if (this.selectAuthor == false && this.selectCategory == false && this.selectDate == false) {

      this.postsService
        .getPosts(this.sortBy + this.sortOrder)
        .subscribe((data: Post[]) => {
          this.posts = data;
        })
    }

  }//end sort by date

  sortByTitle() {
    this.sortBy = "?_sort=title&_order=";

    ++this.titleClicks; //increment clicks for title for toggling sort order

    if (this.titleClicks % 2 == 0) {
      this.sortOrder = "desc";
    } else {
      this.sortOrder = "asc";
    }

    //if no filter
    if (this.selectAuthor == false && this.selectCategory == false && this.selectDate == false) {

      this.postsService
        .getPosts(this.sortBy + this.sortOrder)
        .subscribe((data: Post[]) => {
          this.posts = data;
        })
    } else {

    }

  }//end sort by title

  onFilter(date, author, category) {
    console.log(this.sortBy + this.sortOrder);
    //if nothing will be filtered
    if (this.selectDate == false && this.selectAuthor == false && this.selectCategory == false) {

      this.postsService
        .getPosts(this.sortBy + this.sortOrder)
        .subscribe((data: Post[]) => {
          this.posts = data;
        })
      //if only the date will be filtered
    } else if (this.selectDate == true && this.selectAuthor == false && this.selectCategory == false) {

      this.postsService
        .getPosts(this.sortBy + this.sortOrder + "&date=" + date)
        .subscribe((data: Post[]) => {
          this.posts = data;
        })
      //if only the author will be filtered
    } else if (this.selectDate == false && this.selectAuthor == true && this.selectCategory == false) {

      this.postsService
        .getPosts(this.sortBy + this.sortOrder + "&author=" + author)
        .subscribe((data: Post[]) => {
          this.posts = data;
        })
      //if only the category will be filtered
    } else if (this.selectDate == false && this.selectAuthor == false && this.selectCategory == true) {

      this.postsService
        .getPosts(this.sortBy + this.sortOrder + "&category=" + category)
        .subscribe((data: Post[]) => {
          this.posts = data;
        })
      //if only the date & author will be filtered
    } else if (this.selectDate == true && this.selectAuthor == true && this.selectCategory == false) {

      this.postsService
        .getPosts(this.sortBy + this.sortOrder + "&date=" + date + "&author=" + author)
        .subscribe((data: Post[]) => {
          this.posts = data;
        })
      //if only the date & category will be filtered
    } else if (this.selectDate == true && this.selectAuthor == false && this.selectCategory == true) {

      this.postsService
        .getPosts(this.sortBy + this.sortOrder + "&date=" + date + "&category=" + category)
        .subscribe((data: Post[]) => {
          this.posts = data;
        })
      //if only the author & category will be filtered
    } else if (this.selectDate == false && this.selectAuthor == true && this.selectCategory == true) {

      this.postsService
        .getPosts(this.sortBy + this.sortOrder + "&author=" + author + "&category=" + category)
        .subscribe((data: Post[]) => {
          this.posts = data;
        })
      //if everything will be filtered
    } else if (this.selectDate == true && this.selectAuthor == true && this.selectCategory == true) {

      this.postsService
        .getPosts(this.sortBy + this.sortOrder + "&date=" + date + "&author=" + author + "&category=" + category)
        .subscribe((data: Post[]) => {
          this.posts = data;
        })
    }

  }//end on filter

  onGoToEditPage(post) {
    this.postsService.post = post;
    this.router.navigate(['/', 'edit-post']);
  }//end on GoToEditPage

  onDeletePost(post){
    this.posts = this.posts.filter(h => h !== post);
    this.postsService.deletePost(post).subscribe();
  }
}
