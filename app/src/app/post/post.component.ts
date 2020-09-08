import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

export class Post {

  constructor(
    public id: number,
    public title: string,
    public publish: boolean
    //public createdDate: Date
  ) {  }
  
}
