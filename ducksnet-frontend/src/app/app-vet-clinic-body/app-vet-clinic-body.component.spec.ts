import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVetClinicBodyComponent } from './app-vet-clinic-body.component';

describe('AppVetClinicBodyComponent', () => {
  let component: AppVetClinicBodyComponent;
  let fixture: ComponentFixture<AppVetClinicBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppVetClinicBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppVetClinicBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
