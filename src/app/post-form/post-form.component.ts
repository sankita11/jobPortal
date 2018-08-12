import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { v1 as uuid } from 'uuid';

import { Post } from '../post' ;
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  posts: Post[];
  post = new Post();

  constructor(
    private postService: PostService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }

  onSubmit() {

    this.post.id = uuid().toString();
    const currentTime = new Date();
    this.post.date = currentTime.getTime();
    console.log( JSON.stringify(this.post));

    this.postService.addPost(this.post )
    .subscribe(() => this.router.navigate(['list/RECRUITER']));
  }

}
