import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineMinutesComponent } from './timeline-minutes.component';

describe('TimelineMinutesComponent', () => {
  let component: TimelineMinutesComponent;
  let fixture: ComponentFixture<TimelineMinutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineMinutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
