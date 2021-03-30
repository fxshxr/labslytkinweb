import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformWorkersComponent } from './addform-workers.component';

describe('AddformWorkersComponent', () => {
  let component: AddformWorkersComponent;
  let fixture: ComponentFixture<AddformWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddformWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddformWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



