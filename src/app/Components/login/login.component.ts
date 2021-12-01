import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username:String="";
password:String="";
resultSuccess:String="";
resultFail:String="";


isLoginSuccess(){
  if(this.username==("admin") && this.password==("admin")){
  this.resultSuccess= "Login Successful!!!"
}else{
  this.resultFail= "Username or Password is incorret!!!"
}
}

clearInput(){
    this.username = '';
    this.password = '';
    this.resultSuccess= '';
    this.resultFail= '';
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
