import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActionComponent } from './add-action.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {RouterTestingModule} from "@angular/router/testing";

describe('AddItemComponent', () => {
  let component: AddActionComponent;
  let fixture: ComponentFixture<AddActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActionComponent ],
      imports: [FormsModule, HttpClientTestingModule,RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
