import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppSignInBodyComponent } from '../app-sign-in-body/app-sign-in-body.component';
import { AppbarComponent } from '../appbar/appbar.component';
import { DogAndCatComponent } from '../dog-and-cat/dog-and-cat.component';

import { AppSignInComponent } from './app-sign-in.component';

describe('AppSignInComponent', () => {
  let component: AppSignInComponent;
  let fixture: ComponentFixture<AppSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSignInComponent, AppSignInBodyComponent, AppbarComponent, DogAndCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
