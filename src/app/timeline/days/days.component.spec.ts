import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesComponent } from './days.component';

describe('DatesComponent', () => {
  let component: DatesComponent;
  let fixture: ComponentFixture<DatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
