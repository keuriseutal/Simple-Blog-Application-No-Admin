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

  posts: Post[] = [];

  titleClicks: number = 0;

  selectDate: boolean = false;
  selectAuthor: boolean = false;
  selectCategory: boolean = false;

  titleSortOrder: string = "asc";
  currentURL: string = "&_sort=title,date&_order=" + this.titleSortOrder + ",desc";

  constructor(private postsService: PostsService,
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit() {

    this.postsService
      .getPosts(this.currentURL)
      .subscribe((data: Post[]) => {
        this.posts = data;
      })

  }

   onGetPosts(date, author, category) {
    
    this.titleClicks += 1; //increment clicks for title for toggling sort order
    
    if (this.titleClicks % 2 == 0) {
      this.titleSortOrder = "asc";
    } else if (this.titleClicks % 2 != 0) {
      this.titleSortOrder = "desc";
    }
    
    console.log(this.currentURL);
    
      //if nothing will be filtered
    if (this.selectDate == false && this.selectAuthor == false && this.selectCategory == false) {
      
      this.currentURL = "&_sort=title,date&_order=" + this.titleSortOrder + ",desc";

      this.postsService
      .getPosts(this.currentURL)
      .subscribe((data: Post[]) => {
        this.posts = data;
      })
      
      //if only the date will be filtered
    } else if (this.selectDate == true && this.selectAuthor == false && this.selectCategory == false) {

      this.currentURL = "&_sort=title,date&_order=" + this.titleSortOrder + ",desc" + "&date=" + date;

      this.postsService
      .getPosts(this.currentURL)
      .subscribe((data: Post[]) => {
        this.posts = data;
      })

      //if only the author will be filtered
    } else if (this.selectDate == false && this.selectAuthor == true && this.selectCategory == false) {

      this.currentURL = "&_sort=title,date&_order=" + this.titleSortOrder + ",desc" + "&author=" + author;

      this.postsService
      .getPosts(this.currentURL)
      .subscribe((data: Post[]) => {
        this.posts = data;
      })

      //if only the category will be filtered
    } else if (this.selectDate == false && this.selectAuthor == false && this.selectCategory == true) {

      this.currentURL = "&_sort=title,date&_order=" + this.titleSortOrder + ",desc" + "&category=" + category;

      this.postsService
      .getPosts(this.currentURL)
      .subscribe((data: Post[]) => {
        this.posts = data;
      })

      //if only the date & author will be filtered
    } else if (this.selectDate == true && this.selectAuthor == true && this.selectCategory == false) {

      this.currentURL = "&_sort=title,date&_order=" + this.titleSortOrder + ",desc" + "&date=" + date + "&author=" + author;

      this.postsService
      .getPosts(this.currentURL)
      .subscribe((data: Post[]) => {
        this.posts = data;
      })

      //if only the date & category will be filtered
    } else if (this.selectDate == true && this.selectAuthor == false && this.selectCategory == true) {

      this.currentURL = "&_sort=title,date&_order=" + this.titleSortOrder + ",desc" + "&date=" + date + "&category=" + category;

      this.postsService
      .getPosts(this.currentURL)
      .subscribe((data: Post[]) => {
        this.posts = data;
      })

      //if only the author & category will be filtered
    } else if (this.selectDate == false && this.selectAuthor == true && this.selectCategory == true) {

      this.currentURL = "&_sort=title,date&_order=" + this.titleSortOrder + ",desc" + "&author=" + author + "&category=" + category;

      this.postsService
      .getPosts(this.currentURL)
      .subscribe((data: Post[]) => {
        this.posts = data;
      })

      //if everything will be filtered
    } else if (this.selectDate == true && this.selectAuthor == true && this.selectCategory == true) {

      this.currentURL = "&_sort=title,date&_order=" + this.titleSortOrder + ",desc" + "&author=" + author + "&category=" + category + "&date=" + date;

      this.postsService
      .getPosts(this.currentURL)
      .subscribe((data: Post[]) => {
        this.posts = data;
      })

    }

  }//end onGetPosts

  onGoToEditPage(post) {
    this.postsService.post = post;
    this.router.navigate(['/', 'edit-post']);
  }//end on GoToEditPage

  onDeletePost(post) {
    this.posts = this.posts.filter(h => h !== post);
    this.postsService.deletePost(post).subscribe();
  }

}
