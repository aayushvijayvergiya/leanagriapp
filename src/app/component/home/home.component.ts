import { Component, OnInit } from '@angular/core';
import { ApiMainService } from '../../services/service.pathconfig';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts;

  constructor(
    private apiMain: ApiMainService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiMain.getAllPosts().then(response => {
      this.posts = response;
      console.log(this.posts);
    }, error => {

    })
  }

  openPost(postId) {
    this.router.navigate(['/postDetail', postId]);
  }

  addPost() {
    this.router.navigate(['/addPost']);
  }

}
