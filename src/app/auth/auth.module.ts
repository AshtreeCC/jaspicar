// angular
import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { MaterialModule }               from '@angular/material';
import { FlexLayoutModule }             from '@angular/flex-layout';

// app
import { APP_AUTH_COMPONENTS }          from './index';

// services
import { AuthService, AuthGuard }       from './auth.service';

// app routes
import { AUTH_ROUTES }                  from './auth.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
        AUTH_ROUTES
    ],
    declarations: [
        APP_AUTH_COMPONENTS
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
    entryComponents: [
        APP_AUTH_COMPONENTS
    ]
})
export class AuthModule { }
