import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHomepageBodyComponent } from './app-homepage-body.component';

describe('AppHomepageBodyComponent', () => {
  let component: AppHomepageBodyComponent;
  let fixture: ComponentFixture<AppHomepageBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHomepageBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHomepageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
