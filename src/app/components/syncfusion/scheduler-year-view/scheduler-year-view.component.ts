import { Component, OnInit, ViewChild } from '@angular/core';
import { EventSettingsModel, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { extend } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-scheduler-year-view',
  templateUrl: './scheduler-year-view.component.html',
  styleUrls: ['./scheduler-year-view.component.scss']
})
export class SchedulerYearViewComponent implements OnInit {
  public rowAutoHeight: boolean = true;
  public calendarsValue: number[] = [1];
  public calendarFields: Record<string, any> = { Subject: 'CalendarText', value: 'Id' };
  @ViewChild('scheduleObj') scheduleObj!: ScheduleComponent;

scheduleData: Object[] = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    StartTime: new Date(2022, 1, 11, 9, 30),
    EndTime: new Date(2022, 1, 11, 11, 0),
    CategoryColor: '#1aaa55'
  }, {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    StartTime: new Date(2022, 1, 12, 12, 0),
    EndTime: new Date(2022, 1, 12, 14, 0),
    CategoryColor: '#357cd2'
  }, {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    StartTime: new Date(2022, 1, 13, 9, 30),
    EndTime: new Date(2022, 1, 13, 11, 0),
    CategoryColor: '#7fa900'
  }, {
    Id: 4,
    Subject: 'Meteor Showers in 2022',
    StartTime: new Date(2022, 1, 14, 13, 0),
    EndTime: new Date(2022, 1, 14, 14, 30),
    CategoryColor: '#ea7a57'
  }, {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    StartTime: new Date(2022, 1, 15, 12, 0),
    EndTime: new Date(2022, 1, 15, 14, 0),
    CategoryColor: '#00bdae'
  }, {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    StartTime: new Date(2022, 1, 15, 9, 30),
    EndTime: new Date(2022, 1, 15, 11, 0),
    CategoryColor: '#f57f17'
  }, {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    StartTime: new Date(2022, 1, 16, 11, 0),
    EndTime: new Date(2022, 1, 16, 12, 30),
    CategoryColor: '#1aaa55'
  }, {
    Id: 8,
    Subject: 'Life on Mars',
    StartTime: new Date(2022, 1, 17, 9, 0),
    EndTime: new Date(2022, 1, 17, 10, 0),
    CategoryColor: '#357cd2'
  }, {
    Id: 9,
    Subject: 'Alien Civilization',
    StartTime: new Date(2022, 1, 19, 11, 0),
    EndTime: new Date(2022, 1, 19, 13, 0),
    CategoryColor: '#7fa900'
  }, {
    Id: 10,
    Subject: 'Wildlife Galleries',
    StartTime: new Date(2022, 1, 21, 11, 0),
    EndTime: new Date(2022, 1, 21, 13, 0),
    CategoryColor: '#ea7a57'
  }, {
    Id: 11,
    Subject: 'Best Photography 2022',
    StartTime: new Date(2022, 1, 22, 9, 30),
    EndTime: new Date(2022, 1, 22, 11, 0),
    CategoryColor: '#00bdae'
  }, {
    Id: 12,
    Subject: 'Smarter Puppies',
    StartTime: new Date(2022, 1, 9, 10, 0),
    EndTime: new Date(2022, 1, 9, 11, 30),
    CategoryColor: '#f57f17'
  }, {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    StartTime: new Date(2022, 1, 7, 10, 30),
    EndTime: new Date(2022, 1, 7, 12, 30),
    CategoryColor: '#1aaa55'
  }, {
    Id: 14,
    Subject: 'Aliens vs Humans',
    StartTime: new Date(2022, 1, 5, 10, 0),
    EndTime: new Date(2022, 1, 5, 11, 30),
    CategoryColor: '#357cd2'
  }, {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    StartTime: new Date(2022, 1, 20, 9, 30),
    EndTime: new Date(2022, 1, 20, 11, 0),
    CategoryColor: '#7fa900'
  }, {
    Id: 16,
    Subject: 'Sky Gazers',
    StartTime: new Date(2022, 1, 23, 11, 0),
    EndTime: new Date(2022, 1, 23, 13, 0),
    CategoryColor: '#ea7a57'
  }, {
    Id: 17,
    Subject: 'The Cycle of Seasons',
    StartTime: new Date(2022, 1, 12, 5, 30),
    EndTime: new Date(2022, 1, 12, 7, 30),
    CategoryColor: '#00bdae'
  }, {
    Id: 18,
    Subject: 'Space Galaxies and Planets',
    StartTime: new Date(2022, 1, 12, 17, 0),
    EndTime: new Date(2022, 1, 12, 18, 30),
    CategoryColor: '#f57f17'
  }, {
    Id: 19,
    Subject: 'Lifecycle of Bumblebee',
    StartTime: new Date(2022, 1, 15, 6, 0),
    EndTime: new Date(2022, 1, 15, 7, 30),
    CategoryColor: '#7fa900'
  }, {
    Id: 20,
    Subject: 'Sky Gazers',
    StartTime: new Date(2022, 1, 15, 16, 0),
    EndTime: new Date(2022, 1, 15, 18, 0),
    CategoryColor: '#ea7a57'
  }
];
scheduleData1: Object[] = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    StartTime: new Date(2022, 2, 11, 9, 30),
    EndTime: new Date(2022, 2, 11, 11, 0),
    CategoryColor: '#1aaa55'
  }, {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    StartTime: new Date(2022, 2, 12, 12, 0),
    EndTime: new Date(2022, 2, 12, 14, 0),
    CategoryColor: '#357cd2'
  }, {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    StartTime: new Date(2022, 2, 13, 9, 30),
    EndTime: new Date(2022, 2, 13, 11, 0),
    CategoryColor: '#7fa900'
  }, {
    Id: 4,
    Subject: 'Meteor Showers in 2022',
    StartTime: new Date(2022, 2, 14, 13, 0),
    EndTime: new Date(2022, 2, 14, 14, 30),
    CategoryColor: '#ea7a57'
  }, {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    StartTime: new Date(2022, 2, 15, 12, 0),
    EndTime: new Date(2022, 2, 15, 14, 0),
    CategoryColor: '#00bdae'
  }, {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    StartTime: new Date(2022, 2, 15, 9, 30),
    EndTime: new Date(2022, 2, 15, 11, 0),
    CategoryColor: '#f57f17'
  }, {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    StartTime: new Date(2022, 2, 16, 11, 0),
    EndTime: new Date(2022, 2, 16, 12, 30),
    CategoryColor: '#1aaa55'
  }, {
    Id: 8,
    Subject: 'Life on Mars',
    StartTime: new Date(2022, 2, 17, 9, 0),
    EndTime: new Date(2022, 2, 17, 10, 0),
    CategoryColor: '#357cd2'
  }, {
    Id: 9,
    Subject: 'Alien Civilization',
    StartTime: new Date(2022, 2, 19, 11, 0),
    EndTime: new Date(2022, 2, 19, 13, 0),
    CategoryColor: '#7fa900'
  }, {
    Id: 10,
    Subject: 'Wildlife Galleries',
    StartTime: new Date(2022, 2, 21, 11, 0),
    EndTime: new Date(2022, 2, 21, 13, 0),
    CategoryColor: '#ea7a57'
  }, {
    Id: 11,
    Subject: 'Best Photography 2022',
    StartTime: new Date(2022, 2, 22, 9, 30),
    EndTime: new Date(2022, 2, 22, 11, 0),
    CategoryColor: '#00bdae'
  }, {
    Id: 12,
    Subject: 'Smarter Puppies',
    StartTime: new Date(2022, 2, 9, 10, 0),
    EndTime: new Date(2022, 2, 9, 11, 30),
    CategoryColor: '#f57f17'
  }, {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    StartTime: new Date(2022, 2, 7, 10, 30),
    EndTime: new Date(2022, 2, 7, 12, 30),
    CategoryColor: '#1aaa55'
  }, {
    Id: 14,
    Subject: 'Aliens vs Humans',
    StartTime: new Date(2022, 2, 5, 10, 0),
    EndTime: new Date(2022, 2, 5, 11, 30),
    CategoryColor: '#357cd2'
  }, {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    StartTime: new Date(2022, 2, 20, 9, 30),
    EndTime: new Date(2022, 2, 20, 11, 0),
    CategoryColor: '#7fa900'
  }, {
    Id: 16,
    Subject: 'Sky Gazers',
    StartTime: new Date(2022, 2, 23, 11, 0),
    EndTime: new Date(2022, 2, 23, 13, 0),
    CategoryColor: '#ea7a57'
  }, {
    Id: 17,
    Subject: 'The Cycle of Seasons',
    StartTime: new Date(2022, 2, 12, 5, 30),
    EndTime: new Date(2022, 2, 12, 7, 30),
    CategoryColor: '#00bdae'
  }, {
    Id: 18,
    Subject: 'Space Galaxies and Planets',
    StartTime: new Date(2022, 2, 12, 17, 0),
    EndTime: new Date(2022, 2, 12, 18, 30),
    CategoryColor: '#f57f17'
  }, {
    Id: 19,
    Subject: 'Lifecycle of Bumblebee',
    StartTime: new Date(2022, 2, 15, 6, 0),
    EndTime: new Date(2022, 2, 15, 7, 30),
    CategoryColor: '#7fa900'
  }, {
    Id: 20,
    Subject: 'Sky Gazers',
    StartTime: new Date(2022, 2, 15, 16, 0),
    EndTime: new Date(2022, 2, 15, 18, 0),
    CategoryColor: '#ea7a57'
  }
];
  public selectedDate: Date = new Date(2022, 1, 1);
  public eventSettings: EventSettingsModel = {
    dataSource: this.scheduleData
  };
  public showPromoModal!: boolean;
  public startDate!: Date;
  public endDate!: Date;
  public argsData: any;

  
  constructor() { }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.scheduleObj.addEvent(this.scheduleData1);
    }, 1000);
  }
  
  //This is for print the calendar start
  public onActionBegin(args: any): void {
    if (args.requestType === 'toolbarItemRendering') {
      const printItem: any = {
        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icons e-print',
        text: 'Print', cssClass: 'e-print', click: this.onPrintClick.bind(this)
      };
      args.items.push(printItem);
    }
  }

  public onPrintClick(): void {
    this.scheduleObj.print();
  }
  //This is for print the calendar end

  onEventRendered(args:any): void {
    const categoryColor: string = args.data.CategoryColor as string;
    if (!args.element || !categoryColor) {
      return;
    } else {
      args.element.style.backgroundColor = categoryColor;
    }
  }

  onSelectCell(args: any): void {
    console.log('args :>> ', args);
    this.showPromoModal = true;
  }

  onSelect(args: any): void{
    this.argsData = args;
    console.log('args', args)
    this.showPromoModal = true;
  }

  onShowDrawer(e: any) {
    this.showPromoModal = false;
  }

  public getFormData(e: any): void {
    console.log('e :>> ', e);
    const startDateAndTime = `${e.startDate} ${e.startTime}`;
    const endDateAndTime = `${e.endDate} ${e.endTime}`;
    const formData = {
      Id: this.scheduleData.length + 1,
      Subject: e.eventName,
      descrption: e.descrption,
      CategoryColor: e.colorCode,
      StartTime: new Date(startDateAndTime),
      EndTime: new Date(endDateAndTime),
    }
    this.scheduleData = [...this.scheduleData, formData];
    this.eventSettings = {
      dataSource: this.scheduleData
    };
  }
}
