import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsComponent } from './actions.component';

describe('ActionsComponent', () => {
  let component: ActionsComponent;
  let fixture: ComponentFixture<ActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsComponent);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    component.actions = [];
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
