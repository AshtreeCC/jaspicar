// angular
import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule }                  from '@angular/forms';

// app

// services
import { AuthService, AuthGuard }       from './auth.service';

// app routes
import { AUTH_ROUTES }                  from './auth.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AUTH_ROUTES
    ],
    declarations: [
        APP_AUTH_COMPONENTS
    ],
    Providers: [
        AuthService,
        AuthGuard
    ],
    EntryComponents: [
        APP_AUTH_COMPONENTS
    ]
})
export class AuthModule { }
