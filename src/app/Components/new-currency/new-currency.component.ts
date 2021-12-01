import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-currency',
  templateUrl: './new-currency.component.html',
  styleUrls: ['./new-currency.component.css'],
})
export class NewCurrencyComponent implements OnInit {
  convertedAmount: number = 0;
  source: string = '';
  target: string = '';
  amount: number = 0;
  countryOptions: string[] = ['INR', 'USD', 'EUR', 'NEP', 'SRL', 'NET', 'AUS'];

  /*
  constructor(private currConvServ: CurrencyConverterService) {}
  countryOptions: string[] = ['INR', 'USD', 'EUR', 'NEP', 'SRL', 'NET', 'AUS'];

  convertedAmount: number = 0;
  source: string = '';
  target: string = '';
  amount: number = 0;

  goForConvert() {
    this.convertedAmount = this.currConvServ.convert(
      this.source,
      this.target,
      this.amount
    );
  }
*/

  goForConvert() {
    console.log(this.source);
    console.log(this.target);

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
