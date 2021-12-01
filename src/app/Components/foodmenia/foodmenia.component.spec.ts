import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodmeniaComponent } from './foodmenia.component';

describe('FoodmeniaComponent', () => {
  let component: FoodmeniaComponent;
  let fixture: ComponentFixture<FoodmeniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodmeniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodmeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
