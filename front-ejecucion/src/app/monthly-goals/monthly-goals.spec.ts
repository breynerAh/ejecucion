import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyGoals } from './monthly-goals';

describe('MonthlyGoals', () => {
  let component: MonthlyGoals;
  let fixture: ComponentFixture<MonthlyGoals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyGoals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyGoals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
