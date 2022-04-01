import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MomentJsComponent } from './components/moment-js/moment-js.component';
import { SyncfusionComponent } from './components/syncfusion/syncfusion.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DropdownComponent } from './components/syncfusion/dropdown/dropdown.component';
import { CalendarModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { CalendarComponent } from './components/syncfusion/calendar/calendar.component';
import { SchedulerComponent } from './components/syncfusion/scheduler/scheduler.component';
import { AgendaService, DayService, View,DragAndDropService, MonthAgendaService, MonthService, PrintService, ScheduleModule, TimelineMonthService, TimelineViewsService, TimelineYearService, WeekService, WorkWeekService, YearService } from '@syncfusion/ej2-angular-schedule';
import { SchedulerYearViewComponent } from './components/syncfusion/scheduler-year-view/scheduler-year-view.component';
import { AccumulationChartModule, AccumulationDataLabelService, PieSeriesService } from '@syncfusion/ej2-angular-charts';
import { ModalFormComponent } from './components/syncfusion/modal-form/modal-form.component';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { ContextMenuModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { DragAndDropComponent } from './components/syncfusion/drag-and-drop/drag-and-drop.component';
import { CustomModalComponent } from './components/syncfusion/custom-modal/custom-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    MomentJsComponent,
    SyncfusionComponent,
    DropdownComponent,
    CalendarComponent,
    SchedulerComponent,
    SchedulerYearViewComponent,
    ModalFormComponent,
    DragAndDropComponent,
    CustomModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropDownListModule,
    CalendarModule,
    ScheduleModule,
    AccumulationChartModule,
    ButtonModule,
    ContextMenuModule,
    TreeViewModule,
    DateTimePickerModule,
    CheckBoxModule
  ],
  providers: [
    PrintService,
    PieSeriesService,
    AccumulationDataLabelService,
    TimelineYearService,
    DayService,
    WeekService,
    YearService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    TimelineViewsService,
    TimelineMonthService,
    DragAndDropService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
