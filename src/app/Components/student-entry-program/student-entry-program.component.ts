import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student-entry-program',
  templateUrl: './student-entry-program.component.html',
  styleUrls: ['./student-entry-program.component.css'],
})
export class StudentEntryProgramComponent implements OnInit {
  students: Student[] = [];

  constructor() {}

  ngOnInit() {
    let student = new Student();

    student.address = 'Annandale';
    student.name = 'Bishsnu';
    student.contactNumber = '1231231232';

    this.students.push(student);
  }
}
