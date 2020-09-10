import { Component, OnInit } from '@angular/core';

import { Post } from '../post/post.component';

@Component({
  selector: 'app-postForm',
  templateUrl: './postForm.component.html',
  styleUrls: ['./postForm.component.css']
})
export class postFormComponent{

  title = ['Goals', 'Funny', 'Plays'];

  model = new Post(1, this.title[0], false);

  submitted = false;

  onSubmit() {
    this.submitted = true; 
  }

  newPost() {
    this.model = new Post(42, 'Goals', false);
  }
}
