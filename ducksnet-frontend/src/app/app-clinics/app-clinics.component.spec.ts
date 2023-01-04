import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppClinicsComponent } from './app-clinics.component';

describe('AppClinicsComponent', () => {
  let component: AppClinicsComponent;
  let fixture: ComponentFixture<AppClinicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppClinicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
