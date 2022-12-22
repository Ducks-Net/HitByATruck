import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSignUpBodyComponent } from './app-sign-up-body.component';
import { DogAndCatComponent } from '../dog-and-cat/dog-and-cat.component';

describe('AppSignUpBodyComponent', () => {
  let component: AppSignUpBodyComponent;
  let fixture: ComponentFixture<AppSignUpBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSignUpBodyComponent, DogAndCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSignUpBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
