import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { Comment } from '../../model/comments';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments: Comment[]=[];
  constructor(private service:CommentsService) {}

  ngOnInit(): void {
    this.service.getComments().subscribe((data:Comment[])=>{
      this.comments = data;
      console.log(data)
    });
  }
}
