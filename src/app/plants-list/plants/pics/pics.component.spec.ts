import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsComponent } from './pics.component';

describe('PicsComponent', () => {
  let component: PicsComponent;
  let fixture: ComponentFixture<PicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicsComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    component.pic = {pic:"asdf"};
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
