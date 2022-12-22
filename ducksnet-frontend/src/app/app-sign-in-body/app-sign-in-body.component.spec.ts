import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogAndCatComponent } from '../dog-and-cat/dog-and-cat.component';

import { AppSignInBodyComponent } from './app-sign-in-body.component';

describe('AppSignInBodyComponent', () => {
  let component: AppSignInBodyComponent;
  let fixture: ComponentFixture<AppSignInBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSignInBodyComponent, DogAndCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSignInBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
