import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHomepageComponent } from './app-homepage.component';

describe('AppHomepageComponent', () => {
  let component: AppHomepageComponent;
  let fixture: ComponentFixture<AppHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
