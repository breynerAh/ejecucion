import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputUI } from './input-ui';

describe('InputUI', () => {
  let component: InputUI;
  let fixture: ComponentFixture<InputUI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputUI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputUI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
