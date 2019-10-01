import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeasurementComponent } from './add-measurement.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {RouterTestingModule} from "@angular/router/testing";

describe('AddMeasurementComponent', () => {
  let component: AddMeasurementComponent;
  let fixture: ComponentFixture<AddMeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMeasurementComponent ],
      imports: [FormsModule,HttpClientTestingModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
