import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaddataonscrollComponent } from './loaddataonscroll.component';

describe('LoaddataonscrollComponent', () => {
  let component: LoaddataonscrollComponent;
  let fixture: ComponentFixture<LoaddataonscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaddataonscrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaddataonscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
