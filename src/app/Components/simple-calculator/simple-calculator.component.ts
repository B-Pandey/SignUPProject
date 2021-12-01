import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  //template:`<h1>Hello</h1>,<h2>Hello</h2>` we can insert HTML code here.,
  styleUrls: ['./simple-calculator.component.css']
})
export class SimpleCalculatorComponent implements OnInit {
  principal: number=1000;
  period: number = 2;
  rate: number = 3.5;
  si: number=0;




  constructor() { }

  ngOnInit(): void {
  }

}
