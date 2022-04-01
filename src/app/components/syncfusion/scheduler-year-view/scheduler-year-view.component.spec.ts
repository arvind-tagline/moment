import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerYearViewComponent } from './scheduler-year-view.component';

describe('SchedulerYearViewComponent', () => {
  let component: SchedulerYearViewComponent;
  let fixture: ComponentFixture<SchedulerYearViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerYearViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerYearViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
