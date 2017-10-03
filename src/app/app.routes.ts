// angular
import { Routes }            from '@angular/router';

// app
import { HomeComponent }     from './pages/home/home.component';
import { IncomeComponent }   from './pages/income/income.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { StockComponent }    from './pages/stock/stock.component';
import { VatComponent }      from './pages/vat/vat.component';
import { TaxComponent }      from './pages/tax/tax.component';
import { ContactComponent }  from './pages/contact/contact.component';

// services
import { AuthGuard }          from "./auth/auth.service";

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'income', component: IncomeComponent, canActivate: [AuthGuard] },
    { path: 'expenses', component: ExpensesComponent, canActivate: [AuthGuard] },
    { path: 'stock', component: StockComponent, canActivate: [AuthGuard] },
    { path: 'vat', component: VatComponent, canActivate: [AuthGuard] },
    { path: 'tax', component: TaxComponent, canActivate: [AuthGuard] },
    { path: 'contact', component: ContactComponent },
];
