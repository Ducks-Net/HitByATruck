import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMakeAppointmentComponent } from './app-make-appointment.component';

describe('AppMakeAppointmentComponent', () => {
  let component: AppMakeAppointmentComponent;
  let fixture: ComponentFixture<AppMakeAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMakeAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMakeAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
