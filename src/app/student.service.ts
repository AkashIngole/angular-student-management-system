import { Injectable } from '@angular/core';
import { Student } from '../app/student';
import { STUDENTS } from './student/student-records';

export class StudentService {

  constructor() { }

  getStudents(): Student[] {
    return STUDENTS;
  }
}
