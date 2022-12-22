import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogAndCatComponent } from '../dog-and-cat/dog-and-cat.component';

import { ApphomeBodyComponent } from './apphome-body.component';

describe('ApphomeBodyComponent', () => {
  let component: ApphomeBodyComponent;
  let fixture: ComponentFixture<ApphomeBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApphomeBodyComponent, DogAndCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApphomeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
