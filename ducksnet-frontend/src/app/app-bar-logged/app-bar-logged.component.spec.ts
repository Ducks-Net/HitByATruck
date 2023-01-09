import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarLoggedComponent } from './app-bar-logged.component';

describe('AppBarLoggedComponent', () => {
  let component: AppBarLoggedComponent;
  let fixture: ComponentFixture<AppBarLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBarLoggedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBarLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
