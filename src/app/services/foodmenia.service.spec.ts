import { TestBed } from '@angular/core/testing';

import { FoodmeniaService } from './foodmenia.service';

describe('FoodmeniaService', () => {
  let service: FoodmeniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodmeniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
