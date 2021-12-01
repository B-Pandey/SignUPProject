import { Component, OnInit } from '@angular/core';
import { SavingAccount } from 'src/app/model/SavingAccount';

@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.css'],
})
export class SavingComponent implements OnInit {
  mySavings: SavingAccount = new SavingAccount();

  myAllSavings: SavingAccount[]=[
    {"acno": 101, "acname": "Jack", "acbalance":50000},
    {"acno": 101, "acname": "Jack", "acbalance":50000},
    {"acno": 101, "acname": "Jack", "acbalance":50000},
    {"acno": 101, "acname": "Jack", "acbalance":50000}
  ];

    ngOnInit(): void {
    this.mySavings.acno = 101;
    this.mySavings.acname = 'Bishnu';
    this.mySavings.acbalance = 50000;
  }
}
