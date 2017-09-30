//components
import { HomeComponent }     from './home/home.component';
import { IncomeComponent }   from './income/income.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { StockComponent }    from './stock/stock.component';
import { VatComponent }      from './vat/vat.component';
import { TaxComponent }      from './tax/tax.component';
import { ContactComponent }  from './contact/contact.component';

export const APP_PAGE_COMPONENTS: any[] = [
    HomeComponent,
    IncomeComponent,
    ExpensesComponent,
    StockComponent,
    VatComponent,
    TaxComponent,
    ContactComponent
];

export * from './home/home.component';
export * from './income/income.component';
export * from './expenses/expenses.component';
export * from './stock/stock.component';
export * from './vat/vat.component';
export * from './tax/tax.component';
export * from './contact/contact.component';
