import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetInfoBodyComponent } from './pet-info-body.component';

describe('PetInfoBodyComponent', () => {
  let component: PetInfoBodyComponent;
  let fixture: ComponentFixture<PetInfoBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetInfoBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetInfoBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
