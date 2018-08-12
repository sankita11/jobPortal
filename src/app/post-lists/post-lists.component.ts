import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../post' ;
import { User } from '../user' ;
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent implements OnInit {

  @Input('user') user: User;
  @Input('userRole') userRole: string;

  posts: Post[];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    const role = this.route.snapshot.paramMap.get('role');
    this.userRole = role;

    this.postService.getPosts()
    .subscribe(posts => this.posts = posts);
  }

}
