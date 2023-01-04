import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVetClinicComponent } from './app-vet-clinic.component';

describe('AppVetClinicComponent', () => {
  let component: AppVetClinicComponent;
  let fixture: ComponentFixture<AppVetClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppVetClinicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppVetClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
