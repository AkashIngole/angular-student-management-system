import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import { STUDENTS } from './student-records';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students = STUDENTS;
  selectedStudentAge: number;
  
  onSelect(age: number): void {
    this.selectedStudentAge = age;
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
