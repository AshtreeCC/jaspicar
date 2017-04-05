// angular
import { Routes }               from '@angular/router';

// app
import { HomeComponent }        from './pages/home/home.component';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
];
