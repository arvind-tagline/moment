import { Component, OnInit, ViewChild } from '@angular/core';
import { EventRenderedArgs, EventSettingsModel, ScheduleComponent, View } from '@syncfusion/ej2-angular-schedule';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import * as moment from 'moment';

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
  }, {
    Id: 11,
    Subject: 'Best Photography 2018',
    StartTime: new Date(2018, 1, 22, 9, 30),
    EndTime: new Date(2018, 1, 22, 11, 0),
    CategoryColor: '#00bdae'
  }, {
    Id: 12,
    Subject: 'Smarter Puppies',
    StartTime: new Date(2018, 1, 9, 10, 0),
    EndTime: new Date(2018, 1, 9, 11, 30),
    CategoryColor: '#f57f17'
  }, {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    StartTime: new Date(2018, 1, 7, 10, 30),
    EndTime: new Date(2018, 1, 7, 12, 30),
    CategoryColor: '#1aaa55'
  }, {
    Id: 14,
    Subject: 'Aliens vs Humans',
    StartTime: new Date(2018, 1, 5, 10, 0),
    EndTime: new Date(2018, 1, 5, 11, 30),
    CategoryColor: '#357cd2'
  }, {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    StartTime: new Date(2018, 1, 20, 9, 30),
    EndTime: new Date(2018, 1, 20, 11, 0),
    CategoryColor: '#7fa900'
  }, {
    Id: 16,
    Subject: 'Sky Gazers',
    StartTime: new Date(2018, 1, 23, 11, 0),
    EndTime: new Date(2018, 1, 23, 13, 0),
    CategoryColor: '#ea7a57'
  }, {
    Id: 17,
    Subject: 'The Cycle of Seasons',
    StartTime: new Date(2018, 1, 12, 5, 30),
    EndTime: new Date(2018, 1, 12, 7, 30),
    CategoryColor: '#00bdae'
  }, {
    Id: 18,
    Subject: 'Space Galaxies and Planets',
    StartTime: new Date(2018, 1, 12, 17, 0),
    EndTime: new Date(2018, 1, 12, 18, 30),
    CategoryColor: '#f57f17'
  }, {
    Id: 19,
    Subject: 'Lifecycle of Bumblebee',
    StartTime: new Date(2018, 1, 15, 6, 0),
    EndTime: new Date(2018, 1, 15, 7, 30),
    CategoryColor: '#7fa900'
  }, {
    Id: 20,
    Subject: 'Sky Gazers',
    StartTime: new Date(2018, 1, 15, 16, 0),
    EndTime: new Date(2018, 1, 15, 18, 0),
    CategoryColor: '#ea7a57'
  }
];
  public selectedDate: Date = new Date(2018, 1, 1);
  public eventSettings: EventSettingsModel = {
    dataSource: this.scheduleData
   
  };
  public showPromoModal!: boolean;
  public startDate!: Date;
  public endDate!: Date;
  public statusData: string[] = ['New', 'Requested', 'Confirmed'];

  //This is for print the calendar start
  public onActionBegin(args: any): void {
    if (args.requestType === 'toolbarItemRendering') {
      const exportItem: any = {
        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icons e-print',
        text: 'Print', cssClass: 'e-excel-export', click: this.onPrintClick.bind(this)
      };
      args.items.push(exportItem);
    }
  }

  public onPrintClick(): void {
    this.scheduleObj.print();
  }
  //This is for print the calendar end


  // public defaultPromoForm: any = {
  //   name: "",
  //   from_date: moment().format("MM/DD/YYYY"),
  //   to_date: moment().format("MM/DD/YYYY"),
  //   start_time: "12:00 AM",
  //   end_time: "11:59 PM",
  //   description: null,
  //   promobuzz_chats: null,
  //   promo_files: [],
  //   filters: [],
  //   custom_field_values: [],
  // };
  constructor() { }

  ngOnInit(): void {
  }
  
  onEventRendered(args:any): void {
    const categoryColor: string = args.data.CategoryColor as string;
    if (!args.element || !categoryColor) {
      return;
    } else {
      args.element.style.backgroundColor = categoryColor;
    }
  }
  editor(): void {
    let cellData: Object = {
      startTime: new Date(2018, 1, 15, 10, 0),
      endTime: new Date(2018, 1, 15, 11, 0),
    };
    this.scheduleObj.openEditor(cellData, 'Add');
  }

  onSelectCell(args: any): void {
    this.showPromoModal = true;
    console.log('args', args);
    console.log('F this.showPromoModal', this.showPromoModal)
  }

  public onDateChange(args: any): void {
    if (!isNullOrUndefined(args.event)) {
      if (args.element.id === "StartTime") {
        this.startDate = args.value;
      } else if (args.element.id === "EndTime") {
        this.endDate = args.value;
      }
    }
  }

  public startDateParser(data: string): any {
    if (isNullOrUndefined(this.startDate) && !isNullOrUndefined(data)) {
      return new Date(data);
    } else if (!isNullOrUndefined(this.startDate)) {
      return new Date(this.startDate);
    }
  }
  public endDateParser(data: string): any {
    if (isNullOrUndefined(this.endDate) && !isNullOrUndefined(data)) {
      return new Date(data);
    } else if (!isNullOrUndefined(this.endDate)) {
      return new Date(this.endDate);
    }
  }
  onSelect(args: any): void{
    console.log('args', args)
    this.showPromoModal = true;
    console.log('S this.showPromoModal', this.showPromoModal)
  }
}
