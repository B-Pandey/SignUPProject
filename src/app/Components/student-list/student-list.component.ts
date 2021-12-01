import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentName: string ="";
  // address:string = "";
  // contactNumber:string= "";
   i:number = 0;
  // studentList: Student[]  = [];
  studentList: Array<string> =[]; 
  message:string ="" ; 
  buttonLabel: string = "View Student List";
  isViewListClick: Boolean =false;
  addStudentInList(){
    if (this.studentName =="" || this.studentName != " "){
      this.studentList.push(this.studentName);
      this.message = this.studentName  + " is added in Student List."
  }
}
  viewStudentList(){
    for(let i = 0;i<this.studentList.length; i++){
      console.log(this.studentList[i]);
       this.studentList[i];
      }
  }
  buttonAction() {
    if (this.isViewListClick==false){
    console.log('1 current button value : ',this.buttonLabel);
    this.viewStudentList();
    this.buttonLabel="clear";
    this.isViewListClick =true;    
    }
    else {
    console.log('2 current button value : ',this.buttonLabel);
    this.clear();
    this.buttonLabel="View Student List";
    this.isViewListClick =false;    
  }
}
  clear(){
    this.studentName ="";
    this.studentList =[];
    this.message =""; 
    }
  constructor() { }

  ngOnInit(): void {
  }

}
