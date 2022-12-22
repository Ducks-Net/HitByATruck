import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppbarComponent } from '../appbar/appbar.component';
import { ApphomeBodyComponent } from '../apphome-body/apphome-body.component';
import { DogAndCatComponent } from '../dog-and-cat/dog-and-cat.component';

import { ApphomeComponent } from './apphome.component';

describe('ApphomeComponent', () => {
  let component: ApphomeComponent;
  let fixture: ComponentFixture<ApphomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApphomeComponent, AppbarComponent, ApphomeBodyComponent, DogAndCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
