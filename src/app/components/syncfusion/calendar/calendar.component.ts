import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public dateValue: Date = new Date(this.fullYear, this.month, 12);
  public minDate: Date = new Date(this.fullYear, this.month, 5);
  public maxDate: Date = new Date(this.fullYear, this.month, 20);

  constructor() { }

  ngOnInit(): void {
  }

}
