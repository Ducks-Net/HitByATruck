import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPetsBodyComponent } from './my-pets-body.component';

describe('MyPetsBodyComponent', () => {
  let component: MyPetsBodyComponent;
  let fixture: ComponentFixture<MyPetsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPetsBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPetsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
