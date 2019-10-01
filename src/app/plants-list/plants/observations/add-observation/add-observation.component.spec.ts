import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';

import { AddObservationComponent } from './add-observation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {RouterTestingModule} from "@angular/router/testing";

describe('AddObservationComponent', () => {
  let component: AddObservationComponent;
  let fixture: ComponentFixture<AddObservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddObservationComponent ],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
