import { Routes } from '@angular/router';
import { MonthlyGoals } from './monthly-goals/monthly-goals';
import { ValueManagement } from './value-management/value-management';
import { PaymentItems } from './payment-items/payment-items';
import { ExecutionFiling } from './execution-filing/execution-filing';
import { AuthToken } from './auth/auth-token/auth-token';

export const routes: Routes = [
  { path: '', component: ValueManagement },
  { path: 'monthlyGoals', component: MonthlyGoals },
  { path: 'paymentItems', component: PaymentItems },
  { path: 'executionFiling', component: ExecutionFiling },
  {
    path: 'token-auth',
    component: AuthToken
  },
];
