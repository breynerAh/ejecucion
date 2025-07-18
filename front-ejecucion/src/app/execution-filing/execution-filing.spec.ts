import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionFiling } from './execution-filing';

describe('ExecutionFiling', () => {
  let component: ExecutionFiling;
  let fixture: ComponentFixture<ExecutionFiling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutionFiling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutionFiling);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
