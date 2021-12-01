import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEntryProgramComponent } from './student-entry-program.component';

describe('StudentEntryProgramComponent', () => {
  let component: StudentEntryProgramComponent;
  let fixture: ComponentFixture<StudentEntryProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEntryProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEntryProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
