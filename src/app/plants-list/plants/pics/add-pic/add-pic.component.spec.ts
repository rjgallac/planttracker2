import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddPicComponent } from './add-pic.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('AddPicComponent', () => {
  let component: AddPicComponent;
  let fixture: ComponentFixture<AddPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPicComponent ],
      imports: [HttpClientTestingModule,
          RouterTestingModule.withRoutes(
        []
      )],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
