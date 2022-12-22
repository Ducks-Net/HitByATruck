import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppSignUpBodyComponent } from '../app-sign-up-body/app-sign-up-body.component';
import { AppbarComponent } from '../appbar/appbar.component';
import { DogAndCatComponent } from '../dog-and-cat/dog-and-cat.component';

import { AppSignUpComponent } from './app-sign-up.component';

describe('AppSignUpComponent', () => {
  let component: AppSignUpComponent;
  let fixture: ComponentFixture<AppSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSignUpComponent, AppbarComponent, DogAndCatComponent, AppSignUpBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
