import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineMinsComponent } from './timeline-mins.component';

describe('TimelineMinsComponent', () => {
  let component: TimelineMinsComponent;
  let fixture: ComponentFixture<TimelineMinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineMinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineMinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
