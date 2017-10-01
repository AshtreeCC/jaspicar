// angular
import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { FlexLayoutModule }             from '@angular/flex-layout';

// app
import { MaterialModule }               from '../material.module';
import { APP_AUTH_COMPONENTS }          from './index';

// services
import { AuthService, AuthGuard }       from './auth.service';

// pipes
import { PipesModule }                  from '../pipes/pipes.module';

// app routes
import { AUTH_ROUTES }                  from './auth.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
        AUTH_ROUTES,
        PipesModule
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
