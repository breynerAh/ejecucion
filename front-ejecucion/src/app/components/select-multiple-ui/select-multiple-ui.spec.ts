import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMultipleUI } from './select-multiple-ui';

describe('SelectMultipleUI', () => {
  let component: SelectMultipleUI;
  let fixture: ComponentFixture<SelectMultipleUI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectMultipleUI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectMultipleUI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
