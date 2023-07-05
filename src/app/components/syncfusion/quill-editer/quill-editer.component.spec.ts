import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillEditerComponent } from './quill-editer.component';

describe('QuillEditerComponent', () => {
  let component: QuillEditerComponent;
  let fixture: ComponentFixture<QuillEditerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuillEditerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuillEditerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
