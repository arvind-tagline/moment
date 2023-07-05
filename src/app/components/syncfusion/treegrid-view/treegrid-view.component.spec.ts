import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreegridViewComponent } from './treegrid-view.component';

describe('TreegridViewComponent', () => {
  let component: TreegridViewComponent;
  let fixture: ComponentFixture<TreegridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreegridViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreegridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
