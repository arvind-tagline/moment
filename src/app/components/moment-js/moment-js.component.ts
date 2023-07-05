import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-moment-js',
  templateUrl: './moment-js.component.html',
  styleUrls: ['./moment-js.component.scss']
})
export class MomentJsComponent implements OnInit {

  constructor() { }

  public date: any;
  public finalDate: any;
  public formatLL = moment('2001-12-03').format('LL');
  public month = moment().format('MMMM');
  public time:any = moment().format('h:mm:ss a');
  public day = moment().format('YY');

  public newDate = new Date();
  public newMoment = moment().format('LLL');
  public dateWith2Format = moment('12-25-2021', ["MM-DD-YYYY", "DD-MM-YYYY"]);
  public newDateWithFormate: any;
  public numberTime = moment('1305', 'hmm').format('HH:mm')
  public validDate = moment('12-25-2022', 'YYYY-MM-DD').isValid();
  public dateArray = moment([2012]);
  public second = moment("/Date(1198908717056)/").format('LLL');
  public returnMonth = moment([2012, 0, 31]).month(1).format("YYYY-MM-DD");
  public checkDateOld = moment([2007, 0, 29]).toNow();
  public getDay = moment([2022, 3, 30]).format('dddd');
  public getDaySimple = moment('2022-03-30').format('dddd');
  public checkBothDate = moment('2010-10-20').isSame('2010-12-31', 'year');
  public yesValue: string = '';
  public getWeekInYear: any;
  public getYear: any;
  public show: boolean = false;
  public substractHour = moment.duration(5 ,'hour').subtract(1, 'hour');
  public setCustomeMonth = moment.updateLocale('en', {
    months: [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ]
  });

  public showMessage = moment.duration(2, "minutes").humanize();
  //run this code console
  public setDureation = moment.duration({
    seconds: 2,
    minutes: 2,
    hours: 2,
    days: 2,
    weeks: 2,
    months: 2,
    years: 2
  });

 
  public months: any;
//get difference two dates
  public fromDate = moment([2021, 11, 6]);
  public toDate = moment(new Date());
  public diffr: any;
  ngOnInit() {
    // this.months = this.setCustomeMonth._months;
    this.newDateWithFormate = moment(this.newDate).format('LLL');
    this.diffr = this.fromDate.diff(this.toDate, 'months');
    if (this.checkBothDate === true) {
      this.yesValue = 'Yes';
    } else {
      this.yesValue = 'No';
    }
    setInterval(()=>{
      this.time = moment().format('h:mm:ss a');
    },1000)
  }

  getWeek(checkWeek: any) {
    this.show = true;
    this.getYear = checkWeek.value;
    this.getWeekInYear = moment(checkWeek.value).isoWeeksInYear();
  }
}
