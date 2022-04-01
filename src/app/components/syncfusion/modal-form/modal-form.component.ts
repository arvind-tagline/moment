import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ClosePopupService } from 'src/app/Service/close-popup.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {

  @Input() showModal!: boolean;
  @Output() showDrawer: any = new EventEmitter<any>();
  @Output() formDate: any = new EventEmitter<any>();
  public isDecidePopup: boolean = false;
  public teamFormData: any;
  public isDisableForm: boolean = false;
  public showPromoModal!: boolean;
  public popUpForm!: FormGroup;
  
  constructor(private colsePopup: ClosePopupService,private fb:FormBuilder) {
    this.popUpForm = this.fb.group({
      eventName: ['',[Validators.required]],
      colorCode:['',[Validators.required]],
      startDate: ['',[Validators.required]],
      startTime: ['',[Validators.required]],
      endDate: ['',[Validators.required]],
      endTime: ['',[Validators.required]],
      descrption: ['',[Validators.required]]
    });
   }
  
  ngOnInit(): void {
    this.colsePopup.disablePromoObservable$.subscribe((value: boolean) => {
      console.log(`value`, value);
      this.isDisableForm = value;
    })
  }

  public save():void {
    this.teamFormData = this.popUpForm.value;
    this.formDate.emit(this.teamFormData)
    this.showModal = false;
    this.showDrawer.emit(this.showModal);
  }

  public onCloseDrawer():void {
    if (!this.isDisableForm) {
      this.showModal = false;
      this.showDrawer.emit(this.showModal);
      this.colsePopup.disablePromo = false;
    }
  }

  get fControl(){
    return this.popUpForm.controls;
  }
}
