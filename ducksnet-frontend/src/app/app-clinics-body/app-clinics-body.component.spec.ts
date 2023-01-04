import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppClinicsBodyComponent } from './app-clinics-body.component';

describe('AppClinicsBodyComponent', () => {
  let component: AppClinicsBodyComponent;
  let fixture: ComponentFixture<AppClinicsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppClinicsBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppClinicsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
