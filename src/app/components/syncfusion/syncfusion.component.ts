import { Component, OnInit, ViewChild } from '@angular/core';
import { ScheduleComponent } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-syncfusion',
  templateUrl: './syncfusion.component.html',
  styleUrls: ['./syncfusion.component.scss']
})
export class SyncfusionComponent implements OnInit {

 public currentSelected = '';
  
  constructor() { }

  ngOnInit(): void {
  }


  

}
