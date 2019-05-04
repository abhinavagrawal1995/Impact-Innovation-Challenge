import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushInfoComponent } from './push-info.component';

describe('PushInfoComponent', () => {
  let component: PushInfoComponent;
  let fixture: ComponentFixture<PushInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
