import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUpcomingAppointmentComponent } from './app-upcoming-appointment.component';

describe('AppUpcomingAppointmentComponent', () => {
  let component: AppUpcomingAppointmentComponent;
  let fixture: ComponentFixture<AppUpcomingAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUpcomingAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUpcomingAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
