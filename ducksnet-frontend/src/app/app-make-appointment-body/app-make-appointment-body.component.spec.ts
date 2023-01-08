import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMakeAppointmentBodyComponent } from './app-make-appointment-body.component';

describe('AppMakeAppointmentBodyComponent', () => {
  let component: AppMakeAppointmentBodyComponent;
  let fixture: ComponentFixture<AppMakeAppointmentBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMakeAppointmentBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMakeAppointmentBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
