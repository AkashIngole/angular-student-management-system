import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[];
  selectedStudentAge: number;
  
  onSelect(age: number): void {
    this.selectedStudentAge = age;
  }
  constructor() {
  }

  ngOnInit(): void {
   this.geStudents(); 
  }

  geStudents(): void {
    let obj = new StudentService();
    this.students = obj.getStudents();
  }

}
