import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { EventSettingsModel, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {

  @ViewChild('scheduleObj') scheduleObj!: ScheduleComponent;
  @Output() showDrawer = new EventEmitter<any>();

  public showPromoModal!: boolean;
  public selectedDate: Date = new Date(2022, 1, 1);
  public showQuickInfo = false;
  public startDate!: Date;
  public endDate!: Date;
  public statusData: string[] = ['New', 'Requested', 'Confirmed'];
  public scheduleData: Object[] = [
    {
      Id: 1,
      Subject: "Test Event",
      descrption: "This is test Modal.",
      StartTime: new Date(2022, 1, 1),
      EndTime: new Date(2022, 1, 5),
    },
    {
      Id: 2,
      Subject: 'Explosion of Betelgeuse Star',
      StartTime: new Date(2022, 1, 11, 9, 30),
      EndTime: new Date(2022, 1, 11, 11, 0),
      CategoryColor: '#1aaa55'
    }
  ];

  public eventSettings: EventSettingsModel = {
    dataSource: this.scheduleData
  };

  constructor(private toaster: ToastrService) { }

  ngOnInit(): void {
    this.toaster.success('Custom Modal Open');
   }

  public onPopupClose() {
    this.startDate;
    this.endDate;
  }

  // For set background color start
  public onEventRendered(args: any): void {
    const categoryColor: string = args.data.CategoryColor as string;
    if (!args?.element || !categoryColor) {
      return;
    } else {
      args.element.style.backgroundColor = categoryColor;
    }
  }
  // For set background color end

  public onShowDrawer(e: boolean):boolean {
    return this.showPromoModal = false;
  }

  public onSelectCell(args: any): void {
    if (!args) {
      this.showPromoModal = true;
    }
  }

  public getFormData(e: any): void {
    console.log('e :>> ', e);
    const startDateAndTime = `${e.startDate} ${e.startTime}`;
    const endDateAndTime = `${e.endDate} ${e.endTime}`;
    const formData = {
      Id: this.scheduleData.length + 1,
      Subject: e.eventName,
      descrption: e.descrption,
      CategoryColor:e.colorCode,
      StartTime: new Date(startDateAndTime),
      EndTime: new Date(endDateAndTime),
    }
    this.scheduleData = [...this.scheduleData, formData];
    this.eventSettings = {
      dataSource: this.scheduleData
    };
  }

  public onSelect(args: any): void {
    this.showPromoModal = true;
  }

  public onPrintIconClick(): void {
    this.scheduleObj.print();
  }
  public onActionBegin(args: any): void {
    if (args.requestType === "toolbarItemRendering") {
      const exportItem: any = {
        align: "Right",
        showTextOn: "Both",
        prefixIcon: "e-icons e-print",
        text: "Print",
        cssClass: "e-print",
        click: this.onPrintIconClick.bind(this)
      };
      args.items.push(exportItem);
    }
  }
}
