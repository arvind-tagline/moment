import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { ClosePopupService } from 'src/app/Service/close-popup.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {

  @Input() showModal!: boolean;
  public isDecidePopup: boolean = false;
  @Output() showDrawer:any = new EventEmitter<any>();
  public isDisableForm: boolean = false;
  public showPromoModal!: boolean;
  public startDate!: Date;
  public endDate!: Date;
  public statusData: string[] = ['New', 'Requested', 'Confirmed'];
  public popUpForm!:FormGroup;
  @ViewChild("modalForm", { static: false }) ngForm!: NgForm;

  constructor(private colsePopup:ClosePopupService) { }
  
  ngOnInit(): void {
    this.colsePopup.disablePromoObservable$.subscribe((value: boolean) => {
      console.log(`value`, value);
      this.isDisableForm = value;
    })
  }
  
  


  // showDecidePopup(showDecidePopup:any) {
  //   this.isDecidePopup = true;
  // }

  public save() {
    
  }

  onCloseDrawer() {
    if (!this.isDisableForm) {
      // $("#sidebar").addClass("active required-filter-opacity");
      this.showModal = false;
      this.showDrawer.emit(this.showModal);
      this.colsePopup.disablePromo = false;
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
