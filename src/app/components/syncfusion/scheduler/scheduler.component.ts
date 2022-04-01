import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';
import { DragAndDropEventArgs, TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { CellClickEventArgs, EventSettingsModel, ResourceDetails, ScheduleComponent, View } from '@syncfusion/ej2-angular-schedule';
import { addClass, closest, Draggable, DropEventArgs, Droppable, extend } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
 
  public scheduleData: Object[] = [
    {
      Id: 1,
      Subject: 'Explosion of Betelgeuse Star',
      StartTime: new Date(2018, 1, 11, 9, 30),
      EndTime: new Date(2018, 1, 11, 11, 0),
      CategoryColor: '#1aaa55'
    }, {
      Id: 2,
      Subject: 'Thule Air Crash Report',
      StartTime: new Date(2018, 1, 12, 12, 0),
      EndTime: new Date(2018, 1, 12, 14, 0),
      CategoryColor: '#357cd2'
    }, {
      Id: 3,
      Subject: 'Blue Moon Eclipse',
      StartTime: new Date(2018, 1, 13, 9, 30),
      EndTime: new Date(2018, 1, 13, 11, 0),
      CategoryColor: '#7fa900'
    }, {
      Id: 4,
      Subject: 'Meteor Showers in 2018',
      StartTime: new Date(2018, 1, 14, 13, 0),
      EndTime: new Date(2018, 1, 14, 14, 30),
      CategoryColor: '#ea7a57'
    }, {
      Id: 5,
      Subject: 'Milky Way as Melting pot',
      StartTime: new Date(2018, 1, 15, 12, 0),
      EndTime: new Date(2018, 1, 15, 14, 0),
      CategoryColor: '#00bdae'
    }, {
      Id: 6,
      Subject: 'Mysteries of Bermuda Triangle',
      StartTime: new Date(2018, 1, 15, 9, 30),
      EndTime: new Date(2018, 1, 15, 11, 0),
      CategoryColor: '#f57f17'
    }, {
      Id: 7,
      Subject: 'Glaciers and Snowflakes',
      StartTime: new Date(2018, 1, 16, 11, 0),
      EndTime: new Date(2018, 1, 16, 12, 30),
      CategoryColor: '#1aaa55'
    }, {
      Id: 8,
      Subject: 'Life on Mars',
      StartTime: new Date(2018, 1, 17, 9, 0),
      EndTime: new Date(2018, 1, 17, 10, 0),
      CategoryColor: '#357cd2'
    }, {
      Id: 9,
      Subject: 'Alien Civilization',
      StartTime: new Date(2018, 1, 19, 11, 0),
      EndTime: new Date(2018, 1, 19, 13, 0),
      CategoryColor: '#7fa900'
    }, {
      Id: 10,
      Subject: 'Wildlife Galleries',
      StartTime: new Date(2018, 1, 21, 11, 0),
      EndTime: new Date(2018, 1, 21, 13, 0),
      CategoryColor: '#ea7a57'
    }
  ];
  @ViewChild('scheduleObj')
  public scheduleObj!: ScheduleComponent;
  public piedata!: Object[];
  public chartObj!: ChartComponent;
  public selectedDate: Date = new Date(2018, 1, 15);
  public showWeekend: boolean = false;
  public currentView: View = 'Month';
  public showWeekNumber: boolean = true;
  public isReadOnly: boolean = true;
  public views: Array<string> = ['Week', 'Month', 'Year'];
  public enableAdaptiveUI!: true;
  public eventSettings: EventSettingsModel = {
    dataSource: this.scheduleData,
    fields: {
      id: 'Id',
      subject: { name: 'Subject', title: 'Event Name' },
      location: { name: 'Location', title: 'Event Location' },
      description: { name: 'Description', title: 'Event Description' },
      startTime: { name: 'StartTime', title: 'Start Duration' },
      endTime: { name: 'EndTime', title: 'End Duration' }
    }
  };

  public onActionBegin(args: any): void {
    if (args.requestType === 'toolbarItemRendering') {
      const exportItem: any = {
        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icons e-print',
        text: 'Print', cssClass: 'e-excel-export', click: this.onPrintClick.bind(this)
      };
      args.items.push(exportItem);
    }
  }

  

  // public field: Object = { dataSource: this.scheduleData, id: 'Id', text: 'Name' };

  constructor() {
    console.log('this.eventSettings :>> ', this.eventSettings);
  }

  ngOnInit(): void { }

  public onPrintClick(): void {
    this.scheduleObj.print();
  }

  // For event background color
  onEventRendered(args: any) {
    const categoryColor = args.data.CategoryColor;
    if (!categoryColor) {
      return;
    } else {
      args.element.style.backgroundColor = categoryColor;
    }
  }

  //drag and drop events
  public onItemDrag(event: any): void {
  //   if (this.scheduleObj.isAdaptive) {
  //     const classElement: any = this.scheduleObj.element.querySelector('.e-device-hover');
  //     if (classElement) {
  //       classElement.classList.remove('e-device-hover');
  //     }
  //     if (event.target.classList.contains('e-work-cells')) {
  //       addClass([event.target], 'e-device-hover');
  //     }
  //   }
  //   if (document.body.style.cursor === 'not-allowed') {
  //     document.body.style.cursor = '';
  //   }
  //   if (event.name === 'nodeDragging') {
  //     const dragElementIcon: any = document.querySelectorAll('.e-drag-item.treeview-external-drag .e-icon-expandable');
  //     for (const icon of dragElementIcon) {
  //       icon.style.display = 'none';
  //     }
  //   }
  }
}
