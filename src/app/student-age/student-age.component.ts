import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-age',
  templateUrl: './student-age.component.html',
  styleUrls: ['./student-age.component.css']
})
export class StudentAgeComponent implements OnInit {

  @Input() studentAge: number;
  constructor() { }

  ngOnInit(): void {
  }

}
