import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  isError:boolean=true;

  number1:number=0;
  number2:number=0;
  result:number=0;
  message:string="";

add(){
  if(!isNaN(+this.number1) && !isNaN(+this.number2)){
    //+ convert to number
    this.result= (+this.number1 + +this.number2);
    this.isError=true;
  }else{
    this.message = "Error!!! Please enter number only."
    this.isError=false;
  }
}

substract(){
  if(!isNaN(+this.number1) && !isNaN(+this.number2)){
    this.result= (this.number1 - this.number2);
    this.isError=true;
  }else{
    this.message = "Error!!! Please enter number only."
    this.isError=false;
  }
}

multiple(){
  if(!isNaN(+this.number1) && !isNaN(+this.number2)){
    this.result= (this.number1 * this.number2);
    this.isError=true;
  }else{
    this.message = "Error!!! Please enter number only."
    this.isError=false;
  }
}

divide(){
  if(!isNaN(+this.number1) && !isNaN(+this.number2)){
    if(this.number2 !=0){
    this.result= (this.number1 / this.number2);
    this.isError=true;
    }else{
      this.message = "Divide by zero is infinite."
      this.isError=false;
    }
  }else{
    this.message = "Error!!! Please enter number only."
    this.isError=false;
  }
}
clear(){
  this.number1=0;
  this.number2=0;
  this.result=0;
  this.message="";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
