import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-if-else',
  templateUrl: './html-if-else.component.html',
  styleUrls: ['./html-if-else.component.css']
})
export class HtmlIfElseComponent implements OnInit {

  isUserLoggedIn:boolean=true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
