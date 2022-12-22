import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiShowComponent } from './api-show.component';

describe('ApiShowComponent', () => {
  let component: ApiShowComponent;
  let fixture: ComponentFixture<ApiShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
