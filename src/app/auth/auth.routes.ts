// angular
import { ModuleWithProviders }          from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

// app
import { LoginComponent }               from './login/login.component';
import { EmailComponent }               from './email/email.component';
import { SignupComponent }              from './signup/signup.component';
import { ProfileComponent }             from './profile/profile.component';

// services
import { AuthGuard }                    from './auth.service';

export const _AUTH_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'login/email', component: EmailComponent }
    { path: 'login/signup', component: SignupComponent },
    { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] }
]

export const AUTH_ROUTES: ModuleWithProviders = RouterModule.forChild(_AUTH_ROUTES);
