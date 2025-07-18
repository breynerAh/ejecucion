import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthToken } from './auth-token';

describe('AuthToken', () => {
  let component: AuthToken;
  let fixture: ComponentFixture<AuthToken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthToken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthToken);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
