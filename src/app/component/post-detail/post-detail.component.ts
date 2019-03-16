import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiMainService } from '../../services/service.pathconfig';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postId: number;
  private sub: any;
  postDetail: any;
  postComment: any;
  editPost;

  constructor(
    private route: ActivatedRoute,
    private apiMain: ApiMainService
    ) { }

  ngOnInit() {
    this.editPost = false;
    this.sub = this.route.params.subscribe(params => {
      this.postId = +params['id'];
    });
    this.getPost();
  }

  getPost() {
    this.apiMain.getSinglePost(this.postId).then(response => {
      this.postDetail = response;
      this.getComment();
    }, error => {
      console.log(error);
    })
  }

  getComment() {
    this.apiMain.getPostComment(this.postId).then(response =>{
      this.postComment = response;
    }, error => {
      console.log(error);
    });
  }

  updatePost() {
    this.apiMain.updatePost(this.postId, this.postDetail).then(response => {
      this.editPost = !this.editPost;
    }, error => {
      console.log(error);
    });
  }

}
