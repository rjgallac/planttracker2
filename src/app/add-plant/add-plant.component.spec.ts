import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlantComponent } from './add-plant.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {RouterTestingModule} from "@angular/router/testing";

describe('AddPlantComponent', () => {
  let component: AddPlantComponent;
  let fixture: ComponentFixture<AddPlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlantComponent ],
      imports: [FormsModule,HttpClientTestingModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
