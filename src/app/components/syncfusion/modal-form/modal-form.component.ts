import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {

  @Input() showModal!: boolean;
  public isDecidePopup: boolean = false;
  public isDisableForm: boolean = false;
  public showPromoModal!: boolean;
  public startDate!: Date;
  public endDate!: Date;
  public statusData: string[] = ['New', 'Requested', 'Confirmed'];

  @ViewChild("modalForm", { static: false }) ngForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }


  showDecidePopup(showDecidePopup:any) {
    this.isDecidePopup = true;
  }

  onCloseDrawer() {
    if (this.isDisableForm) {
      // $("#sidebar").addClass("active required-filter-opacity");
      this.showModal = false;
      // this.showDrawer.emit(this.showModal);
      // this.promoService.disablePromo = false;
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
  public onDateChange(args: any): void {
    if (!isNullOrUndefined(args.event)) {
      if (args.element.id === "StartTime") {
        this.startDate = args.value;
      } else if (args.element.id === "EndTime") {
        this.endDate = args.value;
      }
    }
  }


}
