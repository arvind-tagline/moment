import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { extend, closest, remove, addClass } from '@syncfusion/ej2-base';
import {
  EventSettingsModel,
  View,
  GroupModel,
  TimelineViewsService,
  TimelineMonthService,
  ResizeService,
  WorkHoursModel,
  DragAndDropService,
  ResourceDetails,
  ScheduleComponent,
  ActionEventArgs,
  CellClickEventArgs
} from '@syncfusion/ej2-angular-schedule';
import { DragAndDropEventArgs } from '@syncfusion/ej2-navigations';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  public hospitalData: Object[] = [
  {
    Id: 10,
    Name: 'David',
    StartTime: new Date(2018, 7, 1, 9, 0),
    EndTime: new Date(2018, 7, 1, 10, 0),
    Description: 'Health Checkup',
    DepartmentID: 1,
    ConsultantID: 1,
    DepartmentName: 'GENERAL'
  }, {
    Id: 11,
    Name: 'John',
    StartTime: new Date(2018, 7, 1, 10, 30),
    EndTime: new Date(2018, 7, 1, 11, 30),
    Description: 'Tooth Erosion',
    DepartmentID: 2,
    ConsultantID: 2,
    DepartmentName: 'DENTAL'
  }, {
    Id: 12,
    Name: 'Peter',
    StartTime: new Date(2018, 7, 1, 12, 0),
    EndTime: new Date(2018, 7, 1, 13, 0),
    Description: 'Eye and Spectacles Checkup',
    DepartmentID: 1,
    ConsultantID: 3,
    DepartmentName: 'GENERAL'
  }, {
    Id: 13,
    Name: 'Starc',
    StartTime: new Date(2018, 7, 1, 14, 0),
    EndTime: new Date(2018, 7, 1, 15, 0),
    Description: 'Toothaches',
    DepartmentID: 2,
    ConsultantID: 4,
    DepartmentName: 'DENTAL'
  }, {
    Id: 14,
    Name: 'James',
    StartTime: new Date(2018, 7, 1, 10, 0),
    EndTime: new Date(2018, 7, 1, 11, 0),
    Description: 'Surgery Appointment',
    DepartmentID: 1,
    ConsultantID: 5,
    DepartmentName: 'GENERAL'
  }, {
    Id: 15,
    Name: 'Jercy',
    StartTime: new Date(2018, 7, 1, 9, 30),
    EndTime: new Date(2018, 7, 1, 10, 30),
    Description: 'Tooth Sensitivity',
    DepartmentID: 2,
    ConsultantID: 6,
    DepartmentName: 'DENTAL'
  }, {
    Id: 16,
    Name: 'Albert',
    StartTime: new Date(2018, 7, 2, 10, 0),
    EndTime: new Date(2018, 7, 2, 11, 30),
    Description: 'Skin care treatment',
    DepartmentID: 1,
    ConsultantID: 7,
    DepartmentName: 'GENERAL'
  }, {
    Id: 17,
    Name: 'Louis',
    StartTime: new Date(2018, 7, 2, 12, 30),
    EndTime: new Date(2018, 7, 2, 13, 45),
    Description: 'General Checkup',
    DepartmentID: 1,
    ConsultantID: 9,
    DepartmentName: 'GENERAL'
  }, {
    Id: 18,
    Name: 'Williams',
    StartTime: new Date(2018, 7, 2, 12, 0),
    EndTime: new Date(2018, 7, 2, 14, 0),
    Description: 'Mouth Sores',
    DepartmentID: 2,
    ConsultantID: 10,
    DepartmentName: 'DENTAL'
  },
  {
    Id: 19,
    Name: 'David',
    StartTime: new Date(2018, 7, 2, 16, 30),
    EndTime: new Date(2018, 7, 2, 18, 15),
    Description: 'Eye checkup and Treatment',
    DepartmentID: 1,
    ConsultantID: 1,
    DepartmentName: 'GENERAL'
  }, {
    Id: 20,
    Name: 'John',
    StartTime: new Date(2018, 7, 2, 19, 30),
    EndTime: new Date(2018, 7, 2, 21, 45),
    Description: 'Toothaches',
    DepartmentID: 2,
    ConsultantID: 2,
    DepartmentName: 'DENTAL'
  }, {
    Id: 21,
    Name: 'Peter',
    StartTime: new Date(2018, 7, 3, 17, 30),
    EndTime: new Date(2018, 7, 3, 19, 30),
    Description: 'Surgery Treatment',
    DepartmentID: 1,
    ConsultantID: 3,
    DepartmentName: 'GENERAL'
  }, {
    Id: 22,
    Name: 'Starc',
    StartTime: new Date(2018, 7, 4, 18, 30),
    EndTime: new Date(2018, 7, 4, 21, 30),
    Description: 'Tooth Decay',
    DepartmentID: 2,
    ConsultantID: 4,
    DepartmentName: 'DENTAL'
  }, {
    Id: 23,
    Name: 'James',
    StartTime: new Date(2018, 7, 3, 19, 0),
    EndTime: new Date(2018, 7, 3, 21, 0),
    Description: 'General Checkup',
    DepartmentID: 1,
    ConsultantID: 5,
    DepartmentName: 'GENERAL'
  }, {
    Id: 24,
    Name: 'Jercy',
    StartTime: new Date(2018, 7, 4, 20, 0),
    EndTime: new Date(2018, 7, 4, 22, 0),
    Description: 'Tooth Erosion',
    DepartmentID: 2,
    ConsultantID: 6,
    DepartmentName: 'DENTAL'
  }];

  ngOnInit(): void {
  }

  @ViewChild('scheduleObj')
  public scheduleObj!: ScheduleComponent;
  @ViewChild('treeObj')
  public treeObj!: TreeViewComponent;

  // public data: Record<string, any>[] = extend([], this.hospitalData, true) as Record<string, any>[];
  public selectedDate: Date = new Date(2021, 7, 2);
  public currentView: View = 'TimelineDay';
  public workHours: WorkHoursModel = { start: '08:00', end: '18:00' };
  public departmentDataSource: Record<string, any>[] = [
    { Text: 'GENERAL', Id: 1, Color: '#bbdc00' },
    { Text: 'DENTAL', Id: 2, Color: '#9e5fff' }
  ];
  public consultantDataSource: Record<string, any>[] = [
    { Text: 'Alice', Id: 1, GroupId: 1, Color: '#bbdc00', Designation: 'Cardiologist' },
    { Text: 'Nancy', Id: 2, GroupId: 2, Color: '#9e5fff', Designation: 'Orthodontist' },
    { Text: 'Robert', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Optometrist' },
    { Text: 'Robson', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Periodontist' },
    { Text: 'Laura', Id: 5, GroupId: 1, Color: '#bbdc00', Designation: 'Orthopedic' },
    { Text: 'Margaret', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Endodontist' }
  ];
  public group: GroupModel = { enableCompactView: false, resources: ['Departments', 'Consultants'] };
  public allowMultiple = false;
  public eventSettings: EventSettingsModel = {
    dataSource: this.hospitalData
  };

  constructor() { }

  public onItemDrag(event: any): void {
    if (this.scheduleObj.isAdaptive) {
      const classElement:any= this.scheduleObj.element.querySelector('.e-device-hover');
      if (classElement) {
        classElement.classList.remove('e-device-hover');
      }
      if (event.target.classList.contains('e-work-cells')) {
        addClass([event.target], 'e-device-hover');
      }
    }
    if (document.body.style.cursor === 'not-allowed') {
      document.body.style.cursor = '';
    }
    if (event.name === 'nodeDragging') {
      const dragElementIcon: any = document.querySelectorAll('.e-drag-item.treeview-external-drag .e-icon-expandable');
      for (const icon of dragElementIcon) {
        icon.style.display = 'none';
      }
    }
  }


}
