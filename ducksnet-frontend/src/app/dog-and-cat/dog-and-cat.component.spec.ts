import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogAndCatComponent } from './dog-and-cat.component';

describe('DogAndCatComponent', () => {
  let component: DogAndCatComponent;
  let fixture: ComponentFixture<DogAndCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogAndCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogAndCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
