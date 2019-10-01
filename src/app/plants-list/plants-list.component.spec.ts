import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsListComponent } from './plants-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PlantsListComponent', () => {
  let component: PlantsListComponent;
  let fixture: ComponentFixture<PlantsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantsListComponent ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
