import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppbarComponent } from '../appbar/appbar.component';
import { DogAndCatComponent } from '../dog-and-cat/dog-and-cat.component';

import { ApiShowComponent } from './api-show.component';

describe('ApiShowComponent', () => {
  let component: ApiShowComponent;
  let fixture: ComponentFixture<ApiShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ HttpClientTestingModule, FormsModule ],
      declarations: [ ApiShowComponent, DogAndCatComponent, AppbarComponent ]
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
