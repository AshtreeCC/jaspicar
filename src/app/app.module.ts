// angular
import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';
import { MaterialModule }               from '@angular/material';
import { FlexLayoutModule }             from '@angular/flex-layout';
import { RouterModule }                 from '@angular/router';

// libraries
import { AngularFireModule }            from 'angularfire2';
import { AngularFireOfflineModule }     from 'angularfire2-offline';

// modules
import { AuthModule }                   from './auth/auth.module';

// services
//import { AuthService, AuthGuard }       from './auth/auth.service';

// app
import { AppComponent }                 from './app.component';
import { APP_LAYOUT_COMPONENTS }        from './layouts/index';
//import { APP_AUTH_COMPONENTS }          from './auth/index';
import { APP_PAGE_COMPONENTS }          from './pages/index';

// pipes
import { PipesModule }                  from "./pipes/pipes.module";

// misc
import { APP_ROUTES }                   from './app.routes';
import { FIREBASE_CONFIG }              from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    APP_LAYOUT_COMPONENTS,
    //APP_AUTH_COMPONENTS,
    APP_PAGE_COMPONENTS,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireOfflineModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AuthModule,
    PipesModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

