import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { EventRenderedArgs, EventSettingsModel, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { extend, isNullOrUndefined } from '@syncfusion/ej2-base';
import { ChangeEventArgs } from '@syncfusion/ej2-calendars';


@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {

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
  public showPromoModal!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('scheduleObj')
  @Output() showDrawer = new EventEmitter<any>();

  public scheduleObj!: ScheduleComponent;
  public eventSettings: EventSettingsModel = { dataSource: this.scheduleData };
  public selectedDate: Date = new Date(2021, 1, 15);
  public showQuickInfo = false;
  public startDate!: Date;
  public endDate!: Date;
  public statusData: string[] = ['New', 'Requested', 'Confirmed'];

  editor(): void {
    let cellData: Object = {
      startTime: new Date(2018, 1, 15, 10, 0),
      endTime: new Date(2018, 1, 15, 11, 0),
    };
    this.scheduleObj.openEditor(cellData, 'Add');
  }

  public startDateParser(data: string):any {
    if (isNullOrUndefined(this.startDate) && !isNullOrUndefined(data)) {
      return new Date(data);
    } else if (!isNullOrUndefined(this.startDate)) {
      return new Date(this.startDate);
    }
  }

  public endDateParser(data: string):any {
    if (isNullOrUndefined(this.endDate) && !isNullOrUndefined(data)) {
      return new Date(data);
    } else if (!isNullOrUndefined(this.endDate)) {
      return new Date(this.endDate);
    }
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
  public onPopupClose() {
    this.startDate ;
    this.endDate ;
  }

  public onEventRendered(args: any): void {
    switch (args.data.EventType) {
      case 'Requested':
        (args.element as HTMLElement).style.backgroundColor = '#F57F17';
        break;
      case 'Confirmed':
        (args.element as HTMLElement).style.backgroundColor = '#7fa900';
        break;
      case 'New':
        (args.element as HTMLElement).style.backgroundColor = '#8e24aa';
        break;
    }
  }

  // public onActionBegin(args: any): void {
  //   console.log('args', args)
  //   if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
  //     const data:any = args.data instanceof Array ? args.data[0] : args.data;
  //     if (!this.scheduleObj.isSlotAvailable(data.StartTime as Date, data.EndTime as Date)) {
  //       args.cancel = true;
  //     }
  //   }
  // }



  //modal testing
  onShowDrawer(e:any) {
    this.showPromoModal = false;
    // this.showPromoModal = !e;
    // console.log('first', this.showPromoModal = false)
    // this.deletePromoId = undefined;
    // this.promo = {};
  }
  // onPopupOpen(args: any) {
  //   if (args.type === 'QuickInfo') {
  //     const dialogObj = args.element.ej2_instances[0];
  //     dialogObj.hide();
  //     const currentAction = args.target.classList.contains('e-work-cells') ? 'Add' : 'Save';
  //     this.scheduleObj.openEditor(args.data, currentAction);
  //   }
  // }

  //  public onChange(args: any): void {
  //   this.scheduleObj.eventSettings.editFollowingEvents = args.checked;
  //  }
  
  onSelectCell(args: any): void {
    if(!args){
    this.showPromoModal = true;
    console.log('args', args);
      console.log('F this.showPromoModal', this.showPromoModal)
    }
  }
  
  onSelect(args: any): void {
    console.log('args', args)
    this.showPromoModal = true;
    console.log('S this.showPromoModal', this.showPromoModal)
  }
  
  }
