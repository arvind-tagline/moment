import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templet-form',
  templateUrl: './templet-form.component.html',
  styleUrls: ['./templet-form.component.scss']
})
export class TempletFormComponent implements OnInit {

  public formData:any = [{
    "fname": "Raju",
    "lname": "Angular",
    "dob": "2023-01-24",
    "mobileNo": "9898989988",
    "email": "raju@gmail.com",
    "address": "Testststss"
},
{
  "fname": "Tejas",
  "lname": "Angular",
  "dob": "2023-01-24",
  "mobileNo": "9898989988",
  "email": "tejas@gmail.com",
  "address": "Testststss"
}];
  @ViewChild('myForm') private myForm!: NgForm;
  model: any = {
  };
  public id:any;
  public file: any;
  public isFormInvald : boolean = false;
  public url: any =
    "https://thumbs.dreamstime.com/b/new-product-development-light-bulb-word-cloud-collage-business-concept-background-blackboard-207812773.jpg";


  constructor() { }

  ngOnInit(): void {
    
   }

  ngAfterViewInit(){
    console.log('this.myForm :>> ', this.myForm);
  }


  public onSubmit(){
    if(this.myForm.invalid){
      this.isFormInvald = true;
      return;
    }
    if (this.id > -1) {
      this.formData[this.id] = this.myForm.value;
      this.id = -1;
    } else {
      this.formData.push(this.myForm.value);
    }
    this.myForm.form.reset();
    this.isFormInvald = false;
  }

  handleFileUpload(fileList: any): void {
    // Return if canceled
    if (!fileList.length) {
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png"];
    this.file = fileList[0];
    if (this.file) {
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
    // Return if the file is not allowed
    if (!allowedTypes.includes(this.file.type)) {
      return;
    }
  }

  public getValue(i: any) {
    this.id = i;
    const editdata = this.formData[i];
    this.myForm.form.patchValue({
      ...editdata
    });
  }

  public onDelete(i:any){
    this.formData.splice(i, 1);
  }
}
