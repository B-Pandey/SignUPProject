import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

divide(num1:number, num2:number){
  return num1/num2;
}

isDigit(num1:string, num2:string){
  if(!isNaN(+num1) && !isNaN(+num2)){
    return true;
  }else{
   return false;
  }
}

add(number1:string, number2:string){
  if(this.isDigit(number1, number2) == true){
    return Number(number1 + number2);
  }else{
    return 0;
  }
}
  constructor() { }
}
