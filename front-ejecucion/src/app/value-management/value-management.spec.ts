import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueManagement } from './value-management';

describe('ValueManagement', () => {
  let component: ValueManagement;
  let fixture: ComponentFixture<ValueManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
