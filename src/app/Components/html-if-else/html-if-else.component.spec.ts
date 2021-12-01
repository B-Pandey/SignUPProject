import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlIfElseComponent } from './html-if-else.component';

describe('HtmlIfElseComponent', () => {
  let component: HtmlIfElseComponent;
  let fixture: ComponentFixture<HtmlIfElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlIfElseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlIfElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
