import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  name:string="";
  email: string = "";
  mobileNo: string ="";
  userName: string = "";
  password: String= "";
  message:string="";
  result:string="";
  loginSuccess:string="";
  phoneNumberMessage:string="";
  
  signUpSuccess(){
 
    if(this.name=="" || this.email=="" || this.mobileNo=="" || this.userName=="" || this.password==""){
      this.result = "*All fields are required"
      return;
    }
    if( this.name.length >=8 && this.validateEmail(this.email) && this.mobileNo.length == 10 && this.userName.length >=8 && this.password.length >= 8 ){
      this.loginSuccess = "Signup Success!!!"
      return;
      }
    
    if(this.userName.length < 8 || this.userName.length < 8 || this.name.length < 8){
        this.message +="Name, Username and password must be at least 8 character. "
      }
    if(!this.validateEmail(this.email)){
      this.message += "Invalid Email. "
    }
    if(this.mobileNo.length == 10){
    this.phoneNumberMessage = "Invalid mobile number."
    }
    if(isNaN(+this.mobileNo)){
      this.phoneNumberMessage ="";
      this.phoneNumberMessage = "must be digit."
    }
    }
    

    validateEmail(email:string) {
      const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regularExpression.test(String(email).toLowerCase());
     }
   
    clearInput(){
      this.name='';
      this.email= '';
      this.mobileNo='';
      this.userName = '';
      this.password = '';
      this.message = '';
      this.result='';
    }
  constructor() { }

  ngOnInit(): void {
  }

}
