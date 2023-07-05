import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MomentJsComponent } from './components/moment-js/moment-js.component';
import { SyncfusionComponent } from './components/syncfusion/syncfusion.component';
import { DropDownListModule, ListBoxComponent, ListBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { DropdownComponent } from './components/syncfusion/dropdown/dropdown.component';
import { CalendarModule, DatePickerModule, DateTimePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { CalendarComponent } from './components/syncfusion/calendar/calendar.component';
import { SchedulerComponent } from './components/syncfusion/scheduler/scheduler.component';
import { AgendaService, DayService,DragAndDropService, MonthAgendaService, MonthService, PrintService, ScheduleModule, TimelineMonthService, TimelineViewsService, TimelineYearService, WeekService, WorkWeekService, YearService } from '@syncfusion/ej2-angular-schedule';
import { SchedulerYearViewComponent } from './components/syncfusion/scheduler-year-view/scheduler-year-view.component';
import { AccumulationChartModule, AccumulationDataLabelService, PieSeriesService } from '@syncfusion/ej2-angular-charts';
import { ModalFormComponent } from './components/syncfusion/modal-form/modal-form.component';
import { ButtonComponent, ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { ContextMenuModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { DragAndDropComponent } from './components/syncfusion/drag-and-drop/drag-and-drop.component';
import { CustomModalComponent } from './components/syncfusion/custom-modal/custom-modal.component';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreegridViewComponent } from './components/syncfusion/treegrid-view/treegrid-view.component';
import { ColumnChooserService, ExcelExportService, FilterService, PageService, PdfExportService, ResizeService, SortService, ToolbarService, TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { LoaddataonscrollComponent } from './components/loaddataonscroll/loaddataonscroll.component';
import { ScrollItemDirective } from './directive/scroll-item.directive';
import { QuillEditerComponent } from './components/syncfusion/quill-editer/quill-editer.component';
import { DuaillistboxComponent } from './components/syncfusion/duaillistbox/duaillistbox.component';
import { TempletFormComponent } from './components/templet-form/templet-form.component';



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
    TreegridViewComponent,
    LoaddataonscrollComponent,
    ScrollItemDirective,
    QuillEditerComponent,
    DuaillistboxComponent,
    TempletFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropDownListModule,
    TreeGridModule,
    CalendarModule,
    ScheduleModule,
    AccumulationChartModule,
    ButtonModule,
    ContextMenuModule,
    TreeViewModule,
    DateTimePickerModule,
    CheckBoxModule,
    DropDownButtonModule,
    ToastrModule.forRoot(),
    TimePickerModule,
    DatePickerModule,
    BrowserAnimationsModule,
    ListBoxModule
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
    PageService,
    SortService,
    FilterService,
    ToolbarService,
    ResizeService,
    PdfExportService,
    ExcelExportService,
    ColumnChooserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
