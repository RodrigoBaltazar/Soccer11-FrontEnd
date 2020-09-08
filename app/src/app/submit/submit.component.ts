import { Component, OnInit } from '@angular/core';

import { Post } from '../post/post.component';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent{

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
