import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUpcomingAppointmentBodyComponent } from './app-upcoming-appointment-body.component';

describe('AppUpcomingAppointmentBodyComponent', () => {
  let component: AppUpcomingAppointmentBodyComponent;
  let fixture: ComponentFixture<AppUpcomingAppointmentBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUpcomingAppointmentBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUpcomingAppointmentBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
