import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuaillistboxComponent } from './duaillistbox.component';

describe('DuaillistboxComponent', () => {
  let component: DuaillistboxComponent;
  let fixture: ComponentFixture<DuaillistboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuaillistboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuaillistboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
