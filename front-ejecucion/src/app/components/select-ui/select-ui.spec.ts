import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUI } from './select-ui';

describe('SelectUI', () => {
  let component: SelectUI;
  let fixture: ComponentFixture<SelectUI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectUI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectUI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
