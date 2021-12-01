import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn:boolean=true;

  buttonLabel:string="Login";
  
  buttonAction() 
  {
    if(this.isUserLoggedIn==false){
      
      this.buttonLabel = "Logout";
      this.isUserLoggedIn = true;

    }else{
      this.buttonLabel="Login";
      this.isUserLoggedIn=false;
      }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
