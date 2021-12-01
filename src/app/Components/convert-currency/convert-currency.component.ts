import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from 'src/app/services/currency-converter.service';

@Component({
  selector: 'app-convert-currency',
  templateUrl: './convert-currency.component.html',
  styleUrls: ['./convert-currency.component.css'],
})
export class ConvertCurrencyComponent implements OnInit {
  countryOptions: string[] = ["INR","USD","EUR","NEP","SRL","NET","AUS"];

  constructor(private currConvServ: CurrencyConverterService) {}

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

  ngOnInit(): void {}
}
