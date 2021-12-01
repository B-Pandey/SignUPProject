import { Component, OnInit } from '@angular/core';
import { CalculateService } from 'src/app/services/calculate.service';
import { CalculatorComponent } from '../calculator/calculator.component';

@Component({
  selector: 'app-new-calculator',
  templateUrl: './new-calculator.component.html',
  styleUrls: ['./new-calculator.component.css'],
})
export class NewCalculatorComponent implements OnInit {
  isError: boolean = false;

  number1: number = 0;
  number2: number = 0;
  result: number = 0;
  message: string = '';
  returnAdd: number = 0;

  isDigit(): boolean {
    if (!isNaN(+this.number1) && !isNaN(+this.number2)) {
      this.isError = false;
      console.log('this is the number');
      return true;
    } else {
      this.isError = true;
      console.log('this is the not number');
      this.message = 'Error!!! Please enter number only.';
      return false;
    }
  }
  add() {
    if (this.isDigit() == true) {
      console.log('this is add method...');
      this.result = +this.number1 + +this.number2;
    }
  }

  substract() {
    if (this.isDigit() == true) {
      this.result = this.number1 - this.number2;
    }
  }

  multiple() {
    if (this.isDigit() == true) {
      this.result = this.number1 * this.number2;
    }
  }

  divide() {
    if (this.isDigit() == true) {
      if (this.number2 != 0) {
        this.result = this.number1 / this.number2;
      } else {
        this.message = 'Divide by zero is infinite.';
      }
    }
  }
  clear() {
    this.number1 = 0;
    this.number2 = 0;
    this.result = 0;
    this.message = '';
  }

  constructor(private calNumber: CalculateService) {
    calNumber.divide(5, 6);
  }

  ngOnInit(): void {}
}
