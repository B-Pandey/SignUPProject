import { Component, OnInit } from '@angular/core';
import { Foodmenia } from 'src/app/model/foodmenia';
import { FoodmeniaService } from 'src/app/services/foodmenia.service';

@Component({
  selector: 'app-foodmenia',
  templateUrl: './foodmenia.component.html',
  styleUrls: ['./foodmenia.component.css'],
})
export class FoodmeniaComponent implements OnInit {
  foodsDetails: Foodmenia[] = [];
  constructor(private service: FoodmeniaService) {}

  ngOnInit(): void {
    this.service
      .getFoodDetails()
      .subscribe((data: Foodmenia[]) => (this.foodsDetails = data));
  }
}
