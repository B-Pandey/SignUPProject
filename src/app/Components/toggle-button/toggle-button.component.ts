import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css'],
})
export class ToggleButtonComponent implements OnInit {
  //api calling ....
  //constructor(private currConvServ: CurrencyConverterService) {}

  convertedAmount: number = 0;
  source: string = '';
  target: string = '';
  amount: number = 0;
  /*
  goForConvert() {
    console.log('going for convert....');
    this.convertedAmount = this.currConvServ.convert(this.source,
                                          this.target,this.amount);
  }
  */
  goForConvert() {
    if (this.source == 'USD') {
      if (this.target == 'INR') {
        this.convertedAmount = this.amount * 72;
      }
    } else if (this.source == 'INR') {
      if (this.target == 'USD') {
        this.convertedAmount = this.amount / 72;
      }
    }
    if (this.source == 'INR') {
      if (this.target == 'EUR') {
        this.convertedAmount = this.amount / 86.69;
      }
    } else if (this.source == 'EUR') {
      if (this.target == 'INR') {
        this.convertedAmount = this.amount * 86.69;
      }
    }
    if (this.source == 'USD') {
      if (this.target == 'EUR') {
        this.convertedAmount = this.amount / 1.17;
      }
    } else if (this.source == 'EUR') {
      if (this.target == 'USD') {
        this.convertedAmount = this.amount * 1.17;
      }
    }
    if (this.source == 'INR') {
      if (this.target == 'INR') {
        this.convertedAmount = this.amount;
      }
    } else if (this.source == 'USD') {
      if (this.target == 'USD') {
        this.convertedAmount = this.amount;
      }
    }
    if (this.source == 'EUR') {
      if (this.target == 'EUR') {
        this.convertedAmount = this.amount;
      }
    }
  }
  constructor() {}
  ngOnInit(): void {}
}
