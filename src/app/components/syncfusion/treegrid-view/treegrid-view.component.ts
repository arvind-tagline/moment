import { Component, OnInit, ViewChild } from '@angular/core';
import {
  PageSettingsModel,
  SortSettingsModel,
  TreeGridComponent,
} from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-treegrid-view',
  templateUrl: './treegrid-view.component.html',
  styleUrls: ['./treegrid-view.component.scss'],
})
export class TreegridViewComponent implements OnInit {
  public data!: Object[];
  public sortSettings!: SortSettingsModel;
  public pageSettings!: PageSettingsModel;
  public nextData!: any;
  @ViewChild("treegrid", { read: TreeGridComponent })
  treegrid!: TreeGridComponent;

  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public date: number = new Date().getDate();
  public dateValue: Date = new Date(
    this.fullYear,
    this.month,
    this.date,
    10,
    0,
    0
  );
  public minValue: Date = new Date(
    this.fullYear,
    this.month,
    this.date,
    7,
    0,
    0
  );
  public maxValue: Date = new Date(
    this.fullYear,
    this.month,
    this.date,
    16,
    0,
    0
  );
  public toolbar!: any[];

  constructor() {}
  
  ngOnInit(): void {
    this.sortSettings = {
      columns: [
        { field: 'taskName', direction: 'Ascending' },
        { field: 'taskID', direction: 'Descending' },
      ],
    };
    this.pageSettings = { pageSize: 6 };

    this.nextData = {
      id: 1,
      name: 'monthly',
      from_date: '09/14/2022',
      to_date: '09/14/2022',
      start_time: '12:30 AM',
      end_time: '11:59 PM',
      color_code: '#FDF2E9',
    };

    this.data = [
      {
        id: 1,
        name: 'monthly',
        from_date: '08/10/2022',
        to_date: '08/10/2022',
        start_time: '12:00 AM',
        end_time: '11:59 PM',
        color_code: '#FDF2E9',
      },
      {
        id: 2,
        name: 'simple promo',
        from_date: '04/04/2022',
        to_date: '08/06/2023',
        start_time: '12:00 AM',
        end_time: '11:59 PM',
        color_code: '#D4EFDF',
      },
      {
        id: 3,
        name: 'sasdasd dsad',
        from_date: '08/11/2022',
        to_date: '08/11/2022',
        start_time: '01:00 AM',
        end_time: '11:59 PM',
        color_code: '#ee7d31',
      },
      {
        id: 4,
        name: 'monthly',
        from_date: '09/14/2022',
        to_date: '09/14/2022',
        start_time: '12:00 AM',
        end_time: '11:59 PM',
        color_code: '#FDF2E9',
      },
      {
        id: 5,
        name: 'simple promo',
        from_date: '04/04/2022',
        to_date: '08/06/2023',
        start_time: '12:00 AM',
        end_time: '11:59 PM',
        color_code: '#D4EFDF',
      },
    ];

    this.toolbar = [
      'Update',
      'Cancel',
      'Delete',
      { text: 'Print', align: 'right' },
      { text: 'CSV Export', align: 'right' },
      { text: 'Excel Export', align: 'right' },
      'ColumnChooser',
    ];
  // setTimeout(() => {
  //   this.treegrid.hideColumns(
  //     ["start_time", "end_time"],
  //     "field"
  //   );
  // }, 1000);
  }

  public getNextValue() {
    this.data = [];
     
    this.data.push(this.nextData);
    console.log('this.data :>> ', this.data);
  }

}
