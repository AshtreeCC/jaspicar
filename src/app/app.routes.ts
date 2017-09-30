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

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'income', component: IncomeComponent },
    { path: 'expenses', component: ExpensesComponent },
    { path: 'stock', component: StockComponent },
    { path: 'vat', component: VatComponent },
    { path: 'tax', component: TaxComponent },
    { path: 'contact', component: ContactComponent },
];
