import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyConverterService {
  //convAmt:number=0;

  constructor(private currConvServ: CurrencyConverterService) {}

  convert(src: string, trg: string, amt: number): number {
    let convAmt: number = 0;

    if (src == 'USD') {
      if (trg == 'INR') {
        convAmt = amt * 72;
      }
    } else if (src == 'INR') {
      if (trg == 'USD') {
        convAmt = amt / 72;
      }
    }
    if (src == 'USD') {
      if (trg == 'EUR') {
        convAmt = amt * 1.17;
      }
    } else if (src == 'EUR') {
      if (trg == 'USD') {
        convAmt = amt / 1.17;
      }
    }
    if (src == 'INR') {
      if (trg == 'EUR') {
        convAmt = amt * 86.69;
      }
    } else if (src == 'EUR') {
      if (trg == 'INR') {
        convAmt = amt / 86.69;
      }
    }
    if (src == 'USD') {
      if (trg == 'USD') {
        convAmt = amt;
      }
    } else if (src == 'INR') {
      if (trg == 'INR') {
        convAmt = amt;
      }
    }
    if (src == 'EUR') {
      if (trg == 'EUR') {
        convAmt = amt;
      }
    }
    return convAmt;
  }
}
