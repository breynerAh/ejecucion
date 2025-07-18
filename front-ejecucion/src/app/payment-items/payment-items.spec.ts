import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentItems } from './payment-items';

describe('PaymentItems', () => {
  let component: PaymentItems;
  let fixture: ComponentFixture<PaymentItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
