import { Component, OnInit } from '@angular/core';
import { ApiMainService } from '../../services/service.pathconfig';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postDetailTitle;
  postDetailBody;

  constructor(private apiMain: ApiMainService, private router: Router) { }

  ngOnInit() {
  }

  addPost() {

    if (this.postDetailBody && this.postDetailTitle) {
      const postObj = {
        'title': this.postDetailTitle,
        'body': this.postDetailBody
      }

      this.apiMain.addPost(postObj).then(response => {
        if (response) {
          alert('Post added successfully!')
          this.router.navigate(['/']);
        }
      }, error => {

      })
    } else {
      alert ('Title or Body cannot be null');
    }
  }

}
