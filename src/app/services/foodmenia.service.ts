import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foodmenia } from '../model/foodmenia';

@Injectable({
  providedIn: 'root',
})
export class FoodmeniaService {
  constructor(private http: HttpClient) {}
  getFoodDetails(): Observable<Foodmenia[]> {
    return this.http.get<Foodmenia[]>(
      'https://raw.githubusercontent.com/B-Pandey/FoodMenia/main/foodmenia.json'
    );
  }
}
