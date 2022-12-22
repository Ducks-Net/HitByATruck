import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApphomeBodyComponent } from './apphome-body.component';

describe('ApphomeBodyComponent', () => {
  let component: ApphomeBodyComponent;
  let fixture: ComponentFixture<ApphomeBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApphomeBodyComponent ]
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
